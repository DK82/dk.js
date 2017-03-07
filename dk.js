var dk =
{
    version: 'v1.0',
    outputContent: false,


    getUrl: function (controller, action) {
        try {
            return pageUrl.replace('A', action).replace('C', controller);
        } catch (e) {
            console.log('Add this line to your layout file... [var pageUrl = \'@Url.Action("A","C")\';] ');
            return null;
        }
    },
    doGet: function (route, params, callback, callbackParams, async) {
        async = (typeof async === 'undefined') ? true : async;
        $.ajax({
            type: 'GET',
            url: route,
            data: params,
            //dataType: 'jsonp',
            async: async,
            contentType: 'application/json; charset=utf-8',
            success: function (response) {
                if (dk.outputContent) console.log(response);
                if (callback != null)
                    myCallback(response);
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });

        function myCallback(response) {
            callback(response, callbackParams);
        }


    },
    doGetS: function (route, params, callback, callbackParams, async) {
        async = (typeof async === 'undefined') ? true : async;
        $.ajax({
            type: 'GET',
            url: route,
            data: params,
            dataType: 'jsonp',
            async: async,
            contentType: 'application/json; charset=utf-8',
            success: function (response) {

                if (dk.outputContent) console.log(response);
                myCallback(response)
            },
            error: function (error) {
                console.log(error.responseText);
            }
        });

        function myCallback(response) {
            callback(response, callbackParams);
        }


    },
    highcharts: {
        version: 'v1.1',
        setLegend: function (vertical, chartId) {

            var legendItems = d3.selectAll('#' + chartId + ' .highcharts-legend-item')._groups[0];
            var count = legendItems.length;

            var x, y, y1, y2;
            var yDiff = 24;

            if (count > 1) {
                if (vertical) {
                    x = parseFloat(d3.select(legendItems[count - 1]).attr('transform').split(',')[0].split('(')[1]);
                    yDiff = 24;

                    yDiff = (parseFloat(d3.select(legendItems[count - 1]).attr('transform').split(',')[1].split(')')[0]) -
                        parseFloat(d3.select(legendItems[count - 2]).attr('transform').split(',')[1].split(')')[0])) + 5;

                    y1 = parseFloat(d3.select(legendItems[count - 1]).attr('transform').split(',')[1].split(')')[0]) + yDiff;
                    y2 = y1 + yDiff;

                    d3.select('#' + chartId + ' .highcharts-legend g g')
                    .append('g').attr('class', '.highcharts-legend-item')
                    .attr('transform', 'translate(8,' + y1 + ')')
                    .append('text').text('NONE').attr('class', 'dk-legendNone').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');

                    d3.select('#' + chartId + ' .highcharts-legend g g')
                    .append('g').attr('class', '.highcharts-legend-item')
                    .attr('transform', 'translate(8,' + y2 + ')')
                    .append('text').text('ALL').attr('class', 'dk-legendAll').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');


                }
                else {
                    x = parseFloat(d3.select(legendItems[count - 1]).attr('transform').split(',')[0].split('(')[1]);
                    yDiff = 24;

                    y1 = parseFloat(d3.select(legendItems[count - 1]).attr('transform').split(',')[1].split(')')[0]) + yDiff;

                    d3.select('#' + chartId + ' .highcharts-legend g g')
                    .append('g').attr('class', '.highcharts-legend-item')
                    .attr('transform', 'translate(8,' + y1 + ')')
                    .append('text').text('NONE').attr('class', 'dk-legendNone').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');

                    d3.select('#' + chartId + ' .highcharts-legend g g')
                    .append('g').attr('class', '.highcharts-legend-item')
                    .attr('transform', 'translate(60,' + y1 + ')')
                    .append('text').text('ALL').attr('class', 'dk-legendAll').attr('x', 21).attr('y', 15).attr('color', '333333').attr('font-size', '12px').attr('font-weight', 'bold').attr('cursor', 'pointer').attr('fill', '#333333');

                }

                $('.dk-legendNone').click(function () {
                    var chart = $('#' + chartId).highcharts();
                    var series = chart.series;

                    $.each(series, function (index, value) {
                        if (index < (series.length))
                        { series[index].hide(); }
                    });
                });
                $('.dk-legendAll').click(function () {
                    var chart = $('#' + chartId).highcharts();
                    var series = chart.series;

                    $.each(series, function (index, value) {
                        if (index < (series.length))
                        { series[index].show(); }
                    });
                });
            }
        }
    }
}
