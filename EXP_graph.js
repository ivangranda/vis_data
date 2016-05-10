d3.csv('datos/exportaciones_HHTT_mundial_adapt.csv', function(d) {
        data_exp_HT=d;

        x.domain(d3.extent(data_exp_HT,function(d){return +d['']}));
        y.domain(d3.extent(data_exp_HT,function(d){return +d['ESP']}));

        var exportaciones_graph = d3.select("#EXP_graph")
            .append("svg")
            .attr("id","exportaciones_graph")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .attr("x",0)
            .attr("y",0)

            .append("g")
            .attr("transform",
                "translate("+ margin.left + "," + margin.top + ")");

        exportaciones_graph.append("path")
            .attr("class","line")
            .attr("id","line_2")
            .attr("d",valueline_2(d))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)})
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)});
            
        exportaciones_graph.append("path")
            .attr("class","line")
            .attr("id","line_1")
            .attr("d",valueline_1(d))
            .on('mouseover',function(d){
                d3.select(this)
                    .style("stroke-width",5)})
            .on('mouseout',function(d){
                d3.select(this)
                    .style("stroke-width",2)});



        // Add the X Axis
        exportaciones_graph.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")  
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-65)" );

        // Add the Y Axis
        exportaciones_graph.append("g")
            .attr("class", "y axis")
            .call(yAxis);

        /*inversiones_graph.append("text")
         .attr("text-anchor","end")
         .attr("y", -40)
         .attr("x", 0)
         .attr("dy",".75em")
         .attr("transform","rotate(-90)")
         .text("Inversión en I+D+i (%PIB)")*/

        /*exportaciones_graph.append("text")
            .attr("y", -margin.top/2)
            .attr("x", -80)
            .attr("dy",".75em")
            //.attr("transform","translate(width/2)")
            .text("Exportaciones de productos de alta tecnología (%PIB) ")    */
            });