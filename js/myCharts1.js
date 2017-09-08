/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myCharts = function (xaxis_values, yaxis_values, chatType_) {
    Highcharts.chart('container', {
        chart: {
            type: chatType_
        },
        title: {
            text: 'Hospitals and ratings'
        },
        xAxis: {
            categories: xaxis_values,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Credit Rating',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: 'points'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
                name: 'Credit Rating',
                data: yaxis_values
            }]
    });
};
