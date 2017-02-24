var dk = {}
var dk.charts = {}

var dk.charts.setLegend = function (mobile, chartId) {

    var count = d3.selectAll('#' + chartId + ' .highcharts-legend-item')[0].length


    if (count > 1) {
        if (!mobile) {
            var x = parseFloat(d3.select(d3.selectAll('#' + chartName + ' .highcharts-legend-item')[0][count - 1]).attr('transform').split(',')[0].split('(')[1]);
            var yDiff = 24;

            yDiff = (parseFloat(d3.select(d3.selectAll('#' + chartName + ' .highcharts-legend-item')[0][count - 1]).attr('transform').split(',')[1].split(')')[0]) -
                parseFloat(d3.select(d3.selectAll('#' + chartName + ' .highcharts-legend-item')[0][count - 2]).attr('transform').split(',')[1].split(')')[0]))
                + 5;

            var y1 = parseFloat(d3.select(d3.selectAll('#' + chartName + ' .highcharts-legend-item')[0][count - 1]).attr('transform').split(',')[1].split(')')[0]) + yDiff;
            var y2 = y1 + yDiff;

            d3.select('#' + chartName + ' .highcharts-legend g g')
            .append('g').attr('class', '.highcharts-legend-item')
            .attr('transform', 'translate(8,' + y1 + ')')
            .append('text').text('NONE').attr('class', 'd2-LegendNone').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');

            d3.select('#' + chartName + ' .highcharts-legend g g')
            .append('g').attr('class', '.highcharts-legend-item')
            .attr('transform', 'translate(8,' + y2 + ')')
            .append('text').text('ALL').attr('class', 'd2-LegendAll').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');


        }
        else {
            var x = parseFloat(d3.select(d3.selectAll('#' + chartName + ' .highcharts-legend-item')[0][count - 1]).attr('transform').split(',')[0].split('(')[1]);
            var yDiff = 24;

            var y1 = parseFloat(d3.select(d3.selectAll('#' + chartName + ' .highcharts-legend-item')[0][count - 1]).attr('transform').split(',')[1].split(')')[0]) + yDiff;

            d3.select('#' + chartName + ' .highcharts-legend g g')
            .append('g').attr('class', '.highcharts-legend-item')
            .attr('transform', 'translate(8,' + y1 + ')')
            .append('text').text('NONE').attr('class', 'd2-LegendNone').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');

            d3.select('#' + chartName + ' .highcharts-legend g g')
            .append('g').attr('class', '.highcharts-legend-item')
            .attr('transform', 'translate(60,' + y1 + ')')
            .append('text').text('ALL').attr('class', 'd2-LegendAll').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');

        }

        $('.dk-LegendNone').click(function () {
            var chart = $('#' + chartId).highcharts();
            var series = chart.series;

            $.each(series, function (index, value) {
                if (index < (series.length))
                { series[index].hide(); }
            });
        });
        $('.dk-LegendAll').click(function () {
            var chart = $('#' + chartId).highcharts();
            var series = chart.series;

            $.each(series, function (index, value) {
                if (index < (series.length))
                { series[index].show(); }
            });
        });
    }
}

