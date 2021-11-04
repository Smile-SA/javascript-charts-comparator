import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'DONUT & PIE CHARTS/Pie',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    data:{
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
            type: 'pie',
        },
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
};

export const ChartJs = chartDiv.bind({});
ChartJs.args = {
    library: 'chartJs',
    type: 'pie',
    data : {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(201, 203, 207)',
                'rgb(54, 162, 235)'
            ]
        }]
    },
    options: {
        responsive: true,
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }
};
export const Chartist = chartDiv.bind({});
Chartist.args = {
    library: 'chartist',
    type: 'donut',
    data : {
        series: [20, 10, 30, 40]
    },
    options : {
        donutWidth: 100,
        height:800,
        donutSolid: true,
        startAngle: 270,
        showLabel: true
    }
};
export const Toast = chartDiv.bind({});
Toast.args = {
    library: 'toast',
    type: 'pie',
    data: {
        categories: ['Browser'],
        series: [
            {
                name: 'Chrome',
                data: 46.02,
                visible: false
            },
            {
                name: 'IE',
                data: 20.47,
            },
            {
                name: 'Firefox',
                data: 17.71,
            },
            {
                name: 'Safari',
                data: 5.45,
            },
            {
                name: 'Opera',
                data: 3.1,
            },
            {
                name: 'Etc',
                data: 7.25,
            }
        ]
    },
    options:{
        chart: { title: 'Average Temperature', width: 900, height: 800 },
        xAxis: { pointOnColumn: false, title: { text: 'Month' } },
        yAxis: { title: 'Temperature (Celsius)' },
        series: {
            dataLabels: {
                visible: true,
                pieSeriesName: {
                    visible: true,
                    anchor: 'outer'
                }
            },

        },
    }
};

