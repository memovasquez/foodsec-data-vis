<script>
    import * as d3 from 'd3';
	import {onMount} from 'svelte';
    //input data 
	let path = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTYmcthdA2QHcxz-7LyWtPwFCw6EcrxqdbKk7ABJNdcDGEb4u5AyoU1Gg3716krw3_HmqaH7tzGBd17/pub?output=csv";
	let person1 = {};
	let data;
	export let hideText = true;
	export let progress = 0;
	export let index = 0;
	export let targetIndex = 12;
	export let offset;
	export let windowHeight;
	let hoverOffset = 0;
	//export let foo;

	//TODO use real data
    // let nutritionServings = {'Grains': 11, 'Vegetables': 5, 'Fruit': 3, 'Dairy': 3, 'Protein': 7, 'Fats and Sweets': 1};
	// let individualServings = {'Grains': 5, 'Vegetables': 3, 'Fruit': 1, 'Dairy': 2, 'Protein': 2, 'Fats and Sweets': 1}
	
	// number of servings recommended by US gov food pyramid
	let nutritionServings = {'Grains': 11, 'Vegetables': 5, 'Fruit': 3, 'Dairy': 3, 'Protein': 7, 'Fats and Sweets': 1};

	//
	let individualServings;


	onMount( () => {
        d3.csv(path).then((d) => {
        data = d;
        person1 = data[2211];
        data = data.filter(obj => obj.country == 'SLV') 

		console.log(person1['fcs_fruit']);
		individualServings = {
			'Grains': Math.round(Number(person1['fcs_staples']) / 7 * nutritionServings['Grains'] * 100) / 100, 
			'Vegetables': Math.round(Number(person1['fcs_veg']) / 7 * nutritionServings['Vegetables'] * 100) / 100,
			'Fruit': Math.round(Number(person1['fcs_fruits']) / 7 * nutritionServings['Fruit'] * 100) / 100, 
			'Dairy': Math.round(Number(person1['fcs_dairy']) / 7 * nutritionServings['Dairy'] * 100) / 100,
			'Protein': Math.round(Number(person1['fcs_proteins']) / 7 * nutritionServings['Protein'] * 100) / 100,
			'Fats and Sweets': Math.round((Number(person1['fcs_fats']) + Number(person1['fcs_sugars'])) / 7 * nutritionServings['Fats and Sweets'] * 100) / 100,
		};

        })

    })

	let fullRadius = 200
    
    
    let fullArcGenerator = d3.arc()
        .innerRadius(2)
		.outerRadius(fullRadius)
		.padAngle(.02)
		.cornerRadius(2);

	function getArcGenerator(fraction) {
		let radius = Math.sqrt((fullRadius ** 2) * fraction);
		return d3.arc()
        .innerRadius(2)
		.outerRadius(radius)
		.padAngle(.02)
		.cornerRadius(2);
	}

	function getLabelCoords(fraction, data) {
		let arc = getArcGenerator(fraction);
		let x = arc.centroid(data)[0];
		let y = arc.centroid(data)[1];
		let radius = Math.sqrt(x ** 2 + y ** 2);
		let radiusFrac = fullRadius / radius * 1.35;
		x *= radiusFrac;
		y *= radiusFrac;
		return [x, y]
	}

	function getLabelX(fraction, data) {
		return getLabelCoords(fraction, data)[0]
	}
	function getLabelY(fraction, data) {
		return getLabelCoords(fraction, data)[1]
	}

	function getEffectiveRadius(offset, section) {
		let ratio = 0
		if (offset < 0.2){
			if (section == 0) {
				ratio = Math.min((offset) / 0.025, 1)
			} else {
				ratio = 1
			}
		}
		else if ((offset > 0.2) & (offset < 0.4)) {
			if (section >= 1) {
				ratio = Math.min(1, (offset - 0.2) / 0.025)
			} else {
				ratio = 1
			}
		} else if ((offset > 0.4) & (offset < 0.8)) {
			if (section >= 2) {
				ratio = Math.min(1, (offset - 0.4) / 0.025)
			} else {
				ratio = 1
			}
		}
		else if (offset > 0.8) {
			ratio = Math.max(0, (0.85 - offset) / 0.05)
		}
		return ratio
	}

	let fullArcData = [];
	let individualArcData = [];

    // // color mapping function
	// const arcColorDefault = d3.scaleLinear()
	// 	.range(["#bd6202", "#158504", "#e02504", "#02c8de", "#f5830a", "#f5c60a"])
	// 	// .domain([0,3,6,9,12,15,18,21,24]);

	let colors = ["#bd6202", "#158504", "#e02504", "#02c8de", "#f5830a", "#f5c60a"]
	let lightColors = ["#fed3a7", "#a7fc9a", "#febdb1", "#b0f6fe", "#fcdcba", "#fcefba"]
	
    function colorFunction (idx) {	
		return colors[idx];
	}
	//arcColorDefault;
	
    

	// state trackers
	let hovered = -1; // index of the hovered arc, -1 when nothing is hovered
	let recorded_mouse_position = { x: 0, y: 0 };

    $: {


		if (Object.keys(person1).length > 0) {
        	const arcColor = d3.scaleOrdinal(d3.schemeAccent).domain(Object.keys(nutritionServings));
		
        	let pie = d3.pie().value( (d) => d[1] );
        	fullArcData = pie(Object.entries(nutritionServings)); 
			individualArcData = pie(Object.entries(individualServings));
		}

    }

  
function shadeColor(color, percent) {
	// taken from https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors

	var R = parseInt(color.substring(1,3),16);
	var G = parseInt(color.substring(3,5),16);
	var B = parseInt(color.substring(5,7),16);

	R = parseInt(R * (100 + percent) / 100);
	G = parseInt(G * (100 + percent) / 100);
	B = parseInt(B * (100 + percent) / 100);

	R = (R<255)?R:255;  
	G = (G<255)?G:255;  
	B = (B<255)?B:255;  

	R = Math.round(R)
	G = Math.round(G)
	B = Math.round(B)

	var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
	var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
	var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

	return "#"+RR+GG+BB;
}



//console.log('color', colorFunction(0));
</script>
{#if index == targetIndex}
{#if (! hideText)}

<div style="width:75%; margin:auto">
	<p>The chart below visualizes how Laura's household diet 
		compares to daily nutrition recommendations made by the US government. 
		The light color shows the full recommended quantity and the darker color 
		shows what proportion of the recommendation Laura's household was able to eat.
		Hover over the chart to see information about each food group</p>
</div>
{/if}
<div class="visualization">
	{#if (! hideText)}
	<div>
		<span style="display:block; height: 25px;"></span>
		Nutrition and Diet Breakdown
		<span style="display:block; height: 25px;"></span>
	</div>
	{/if}
	<!-- {#if (offset < 0.2)} -->
	
	<svg width="1500" height="1000" y="{offset * windowHeight - 350}" transform="translate(0, {offset * windowHeight - 350})">
		{#if offset < 0.2}
		<text x="100" y="300">This blue circle represents what a healthy </text>
		<text x="100" y="325">adult eats in a day.</text>
		{/if}
		{#if ((offset > 0.2) & (offset < 0.4))}
		<text x="100" y="300">These light colored slices show how the US  </text>
		<text x="100" y="325">government recommends adults apportion</text>
		<text x="100" y="350">their daily diet into food groups. </text>
		{/if}
		{#if ((offset > 0.4) & (offset < 0.85))}
		<text x="100" y="300">These dark colored slices show how much  </text>
		<text x="100" y="325">of each food group Laura ate</text>
		<text x="100" y="350">per day on average this week. </text>
		<text x="100" y="400">Hover over the chart to see details.</text>

		<text x="1100" y="40" font-size="smaller">According to the Global Nutrition report,</text> 
		<text x="1100" y="60" font-size="smaller">an average of 12.5% of adult women in the </text>
		<text x="1100" y="80" font-size="smaller">Central American subregion live with</text>
		<text x="1100" y="100" font-size="smaller">diabetes, as well as 11.4% of men. In </text>
        <text x="1100" y="120" font-size="smaller">addition, 34.5% of women and 25.1% of </text>
        <text x="1100" y="140" font-size="smaller">men live with obesity. No country in the </text>
		<text x="1100" y="160" font-size="smaller">subregion is on course to meet the targets</text>
		<text x="1100" y="180" font-size="smaller">for low birth weight, diabetes or obesity </text>
		<text x="1100" y="200" font-size="smaller">among men or women.</text>
		{/if}
        <g id="fullPlate" transform="translate(1000,400)">


			<!-- <path 
				d={fullArcGenerator({
					startAngle: 0,
					endAngle: 360
				})}
				fill={"#39ccc7"}
                
                on:mouseover={(event) => {
                     hovered = index;
                     recorded_mouse_position = {
							x: event.pageX,
							y: event.pageY
						};
                }}
				on:mouseout={(event) => { hovered = -1; }}
			/> -->
			<circle r="{fullRadius * getEffectiveRadius(offset, 0)}" fill="#39ccc7">
				<!-- <animate attributeName="r" begin="0s" dur="0.5s" repeatCount="1" from="0" to="{fullRadius}"/> -->
			</circle>
		<!-- </g>
	</svg> -->
	<!-- {/if} -->
	{#if ((offset > 0.2) & (offset < 0.4))}
    <!-- <svg width="1000" height="1000"> -->
        <!-- <g transform="translate(500,400)"> -->
            {#each fullArcData as data, index}
			<path 
				d={getArcGenerator(getEffectiveRadius(offset, 1))({
					startAngle: data.startAngle,
					endAngle: data.endAngle
				})}
				fill={index === hovered ? shadeColor("#037ffc", 40): lightColors[index]}
			/>			
			{/each}
		<!-- </g>
	</svg> -->
	{/if}
    <!-- <svg width="1000" height="1000">
        <g transform="translate(500,400)"> -->
            {#each fullArcData as data, index}
			{#if ((offset > 0.4) & (offset < 0.85))}

			<path 
				d={getArcGenerator(getEffectiveRadius(offset, 1))({
					startAngle: data.startAngle,
					endAngle: data.endAngle
				})}
				fill={index === hovered ? shadeColor("#037ffc", 40): lightColors[index]}
				on:mouseover={(event) => {
					hovered = index;
					hoverOffset = offset;
					recorded_mouse_position = {
						   x: event.pageX,
						   y: event.pageY
					   };
			   }}
			   on:mouseout={(event) => { hovered = -1; }}
			   on:focus={(event) => {null}}
			   on:blur={(event) => {null}}
 

			/>

			

			<path 
				d={getArcGenerator(individualArcData[index].value / data.value * getEffectiveRadius(offset, 2))({
					startAngle: data.startAngle,
					endAngle: data.endAngle
				})}
				fill={index === hovered ? "#037ffc": colors[index]}
                
                on:mouseover={(event) => {
                     hovered = index;
					 hoverOffset = offset;
                     recorded_mouse_position = {
							x: event.pageX,
							y: event.pageY
						};
                }}
				on:mouseout={(event) => { hovered = -1; }}
				on:focus={(event) => {null}}
				on:blur={(event) => {null}}

			/>
			{/if}
			{#if (offset > 0.2) & (offset < 0.85)}
			<text 
			x="{getLabelX(individualArcData[index].value / data.value * getEffectiveRadius(offset), data)}px"
			y="{getLabelY(individualArcData[index].value / data.value * getEffectiveRadius(offset), data)}px"
			text-anchor="middle"
			>
				{individualArcData[index].data[0]}
			</text>
			{/if}
			{/each}
		
        </g>
    </svg>
	<!-- {/if} -->
    <div
		class={hovered === -1 ? "tooltip-hidden": "tooltip-visible"}	
        style="left: {recorded_mouse_position.x + 40}px; top: {recorded_mouse_position.y + 40 + (offset - hoverOffset) * windowHeight}px"
	>
		{#if hovered !== -1}
		    Laura averaged {individualArcData[hovered].data[1]} servings per day of {individualArcData[hovered].data[0].toLowerCase()} this week. The US government recommends {fullArcData[hovered].data[1]} servings.
		{/if}
	</div>

</div>
{/if}

<style>
	text {
		font-weight: 100;
	}
	.visualization {
		font: 25px sans-serif;
		margin: auto;
		margin-top: 1px;
		text-align: middle;
	}

	/* dynamic classes for the tooltip */
	.tooltip-hidden {
		visibility: hidden;
		font-family: "Nunito", sans-serif;
		width: 200px;
		position: absolute;
	}

	.tooltip-visible {
		font: 25px sans-serif;
		font-family: "Nunito", sans-serif;
		visibility: visible;
		background-color: #69b3a2;
		border-radius: 10px;
		width: 200px;
		color: white;
		position: absolute;
		padding: 10px;
	}

	#fullPlate path {
		transition: r .5s ease;
	}
</style>
