import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'BAR CHARTS/ Basic',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});

Apex.args = {
    library: 'apex',
    data: {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }],
        chart: {
            type: 'bar',
            height: 400
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
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
        labels: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'],
        series: [20, 60, 120, 200, 180, 20, 10]
    },
    options: {
        height: 400,
        distributeSeries: true
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