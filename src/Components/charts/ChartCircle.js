import React, {useEffect} from "react";
import * as am5 from "@amcharts/amcharts5";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";


function ChartCircle(props) {

    let root
    useEffect(() => {
     //   root = null
        renderChart()
        return () => {root.dispose(); };
    });
    function renderChart() {
        root = am5.Root.new("chartdiv");
        root.setThemes([
            am5themes_Animated.new(root)
        ]);

        let chart = root.container.children.push(
            am5percent.PieChart.new(root, {
                endAngle: 270
            })
        );

        let series = chart.series.push(
            am5percent.PieSeries.new(root, {
                valueField: "value",
                categoryField: "category",
                endAngle: 270
            })
        );

        series.states.create("hidden", {
            endAngle: -90
        });

        series.data.setAll(props.chartData);
        series.appear(1000);
        chart.appear(1000, 100);
    }

    return (
       <div id='chartdiv'></div>
    );
}
export default ChartCircle