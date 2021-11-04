import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'BAR CHARTS/ Multi',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});

Apex.args = {
    library: 'apex',
    data: {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chart: {
            type: 'bar',
            height: 800
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: '$ (thousands)'
            }
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    },
};
export const ChartJs = chartDiv.bind({});
ChartJs.args = {
    library: 'chartJs',
    type: 'bar',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        },
            {
                label: 'Free Cash Flow',
                data: [41, 24, 39, 16, 35, 28, 41, 29, 10],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Free Cash Flow',
                data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
                backgroundColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderColor: [
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
    },
    options: {
        height: 800,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};
export const Chartist = chartDiv.bind({});

Chartist.args = {
    library: 'chartist',
    type: 'bar',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        series: [
            [44, 55, 57, 56, 61, 58, 63, 60, 66],
            [76, 85, 101, 98, 87, 105, 91, 114, 94],
            [35, 41, 36, 26, 45, 48, 52, 53, 41],
        ]
    },
    options: {
        height: 800,
        seriesBarDistance: 15
    },
};
export const Toast = chartDiv.bind({});
Toast.args = {
    library: 'toast',
    type: 'bar',
    data: {
        categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
    },
    options: {
        chart: {title: 'Average Temperature', width: 900, height: 400},
        xAxis: {pointOnColumn: false, title: {text: 'Month'}},
        yAxis: {title: 'Temperature (Celsius)'},
        series: {
            eventDetectType: 'grouped',
        },
    },
};