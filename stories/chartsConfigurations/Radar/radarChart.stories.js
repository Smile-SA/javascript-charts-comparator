import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'RADAR CHARTS/Default',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    data: {
        series: [{
            name: 'Series 1',
            data: [20, 100, 40, 30, 50, 80, 33],
        }],
        chart: {
            height: 350,
            type: 'radar',
        },
        dataLabels: {
            enabled: true
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        title: {
            text: 'Radar with Polygon Fill'
        },
        colors: ['#FF4560'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#FF4560',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return val
                }
            }
        },
        xaxis: {
            categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function(val, i) {
                    if (i % 2 === 0) {
                        return val
                    } else {
                        return ''
                    }
                }
            }
        }
    }
};

export const ChartJs = chartDiv.bind({});
ChartJs.args = {
    library: 'chartJs',
    type: 'radar',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Free Cash Flow',
            data: [25, 21, 16, 26, 25, 28, 32, 33, 21],
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
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

export const Toast = chartDiv.bind({});
Toast.args = {
    library: 'toast',
    type: 'radarChart',
    data: {
        categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        series: [
            {
                name: 'Budget',
                data: [5000, 3000, 5000, 7000, 6000, 4000],
            },
            {
                name: 'Income',
                data: [8000, 4000, 7000, 2000, 6000, 3000],
            },
            {
                name: 'Expenses',
                data: [4000, 4000, 6000, 3000, 4000, 5000],
            },
            {
                name: 'Debt',
                data: [3000, 4000, 3000, 1000, 2000, 4000],
            },
        ],
    },
    options: {
        chart: { title: 'Annual Incomes', width: 600, height: 600 },
    },
};