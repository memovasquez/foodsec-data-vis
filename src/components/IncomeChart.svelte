<script>
    import * as d3 from 'd3';
    import {onMount} from 'svelte';
  import { bind } from 'svelte/internal';
    export let data = [];
    export let person1 = {};
    export let userIncome = 0;

    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = 1000 - margin.left - margin.right;
    const height = 600 - margin.top - margin.bottom;

    let svg;
    let xScale, yScale, xAxis, yAxis;

    let fillColor = "#742a24";
    let lauraColor = "#cf2513";
    let userColor = "#69b3a2";
    let bothColor = "#868A79";

// #742a24 brown
// #eed4bc background
// #6c370f also brown
// #e7873b orange
// #cf2513 red

    onMount( () => {
        // svg = d3.select('#chart')
        // .append('svg')
        // .attr('width', width + margin.left + margin.right)
        // .attr('height', height + margin.top + margin.bottom)
        // .append('g')
        // .attr('transform', `translate(${margin.left},${margin.top})`);
        
        

    });


    function display () {

        //bar chart
        // xScale = d3.scaleBand()
        //   .domain(data.map(d => d[''])) //identifier of respondent
        //   .range([0, width])
        //   .padding(0.1);
          
        // yScale = d3.scaleLinear()
        //   .domain([0, d3.max(data, d => Number(d.avg_income_amount))])
        //   .range([height, 0]);
        
        // xAxis = d3.axisBottom(xScale);
        // yAxis = d3.axisLeft(yScale);
        //end barchart

        //histogram 

        data = data.filter( d => ((Number(d.avg_income_amount) > 0 ) && (Number(d.avg_income_currency) == 1))); //only include non-null values and amounts in dollars


        xScale = d3.scaleLinear()
        .domain([0,d3.max(data.map((d) => Number(d.avg_income_amount)))])
        .range([0,width]);

        const histogram = d3.histogram()
        .value(function(d) { return Number(d.avg_income_amount); })   // I need to give the vector of value
        .domain(xScale.domain())  // then the domain of the graphic
        .thresholds(xScale.ticks(80)); // then the numbers of bins; 

        // And apply this function to data to get the bins
        const bins = histogram(data);


        yScale = d3.scaleLinear()
        .range([height,0]);
        yScale.domain([0,d3.max(bins, function(d) {return d.length})]);

        //end histogram relevant code

        svg = d3.select('#chart')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

        // console.log("Does svg exist, ", svg);
        svg.append('g')
        .attr('class', 'axis x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale));

        svg.append("text")
                .attr("class", "axis-label")
                .attr("text-anchor", "middle") // set the alignment of the text
                .attr("font-size", "12px") // set the font size
                .attr("fill", "black") // set the font color
                .attr("transform", "translate(" + (width/2) + "," + (height + margin.bottom - 5) + ")") // position the label at the bottom center of the axis
                .text("Average Monthly Income (converted to USD)"); // set the label text

        svg.append('g')
        .attr('class', 'axis y-axis')

        svg.append("text")
                .attr("class", "axis-label")
                .attr("text-anchor", "middle")
                .attr("font-size", "12px")
                .attr("fill", "black")
                .attr("transform", "rotate(-90) translate(" + (-height/2) + "," + (0) + ")") // position the label at the left center of the axis and rotate it by -90 degrees
                .text("People");
        // .call(d3.axisLeft(yScale));
    
        //bar chart code
        // svg.selectAll('rect')
        //   .data(data)
        //   .enter()
        //   .append('rect')
        //   .attr('class', 'bar')
        //   .attr('x', d => xScale(d['']))
        //   .attr('y', d => (yScale(Number(d.avg_income_amount))))
        //   .attr('width', xScale.bandwidth())
        //   .attr('height', d => height - yScale(Number(d.avg_income_amount)))
        //   .on('click', function(event,d) {
        //     // Handle click event on bar
        //     console.log(`Clicked on ${d[""]} with income ${d.avg_income_amount}`);
        //   })
        //   .on('mouseover', function(d) {
        //     // Highlight the bar on mouseover
        //     d3.select(this).attr('fill', 'orange');
        //   })
        //   .on('mouseout', function(d) {
        //     // Unhighlight the bar on mouseout
        //     d3.select(this).attr('fill', 'steelblue');
        //   });

        //histogram code

        const tooltip = d3.select("#chart")
                .append("div")
                .style("opacity", 0)
                .attr("class", "tooltip-visible")
                .style("background-color", fillColor)
                .style("color", "white")
                .style("border-radius", "5px")
                .style("padding", "10px");

        const showTooltip = function(event,d) {
            let minOfBucket = d.x0;
            let maxOfBucket = d.x1;
            tooltip
            .transition()
            .duration(100)
            .style("opacity", 1)
            tooltip
            .html(String(d.length) + " respondents in El Salvador report $"+ minOfBucket + " to $" + maxOfBucket + " in monthly income")
            .style("left", (event.x)/2-100 + "px")
            .style("top", (event.y)/2 + "px")
        }


        const moveTooltip = function(event,d) {
            tooltip
            .style("left", (event.x)/2-100 + "px")
            .style("top", (event.y)/2 + "px")
        }

        // A function that changes this tooltip when the leaves a point: just need to set opacity to 0 again
        const hideTooltip = function(event,d) {
            tooltip
            .transition()
            .duration(100)
            .style("opacity", 0)

        }
        // console.log("Who is person1 ," ,person1);
        // console.log("Show bins, ", bins);
        let person1Bin = bins[2]
        //defaultvalue if no user input
        if (!userIncome) {
            userIncome = 1000;
        }

        let userBin;

        for (let i = 0; i < bins.length; i++){
            
            let binMin = bins[i].x0;
            let binMax = bins[i].x1;
            console.log("User income: ", userIncome);
            // console.log(binMin, binMax);
            if (Number(userIncome) >= Number(binMin) && Number(userIncome) <= Number(binMax)){
                userBin = i;
                console.log("Bin user fits into: ",i);
            }
        }
        
        svg.selectAll("rect")
        .data(bins)
        .join("rect")
            .attr("x", 1)   //"translate(" + x(d.x0) + "," + y(d.length) + ")"
        .attr("transform", function(d) { return `translate(${xScale(d.x0)} , ${yScale(d.length)})`})
            .attr("width", function(d) { return 2*(xScale(d.x1) - xScale(d.x0))/2 -1})
            .attr("height", function(d) { return height - yScale(d.length); })
            // .style("fill", function (d) { d.some( (person) => { "2211" === person[""] }) ? "#69b3a2" : "red"}  )
            .style("fill", function(d) { return bins.indexOf(d) === 2 && bins.indexOf(d) === userBin ? bothColor : bins.indexOf(d) === 2 ? lauraColor : bins.indexOf(d) === userBin ? userColor : fillColor })

             // Show tooltip on hover
             .on("mouseover", showTooltip )
            .on("mousemove", moveTooltip )
            .on("mouseleave", hideTooltip )
        
        // svg.append("rect")
        // .attr('x', 1)
        // .attr("transform", function(d) { return `translate(${xScale(Number(userIncome))} , ${yScale(10)})`})
        // .style("fill", userColor)

        
    }


    $: {
        if (data.length > 0 && person1){
            display();
        }
    }





</script>

<main>
<div id="chart"></div>
   
</main>


<style>

</style>