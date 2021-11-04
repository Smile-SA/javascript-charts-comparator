import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'LINE CHARTS/ Basic',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    data: {
        series: [{
            name: "Area chart",
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        }],
        chart: {
            type: "area",
            height: 400,
        },
        title: {
            text: "Apex Area chart example",
            align: 'left'
        },
        xaxis: {
            categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany']
        }
    }
};

export const ChartJs = chartDiv.bind({});
ChartJs.args = {
    library: 'chartJs',
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: "Area chart",
                data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
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
        responsive: true,
    }
};

export const Chartist = chartDiv.bind({});
Chartist.args = {
    library: 'chartist',
    type: 'line',
    data: {

        label: "Area chart",
        series: [[400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]],
    },
    options: {
        height: 400,
        fullWidth: true,
        chartPadding: {
            right: 40
        },
    }
};

export const Toast = chartDiv.bind({});
Toast.args = {
    library: 'toast',
    type: 'line',
    data: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        series: [
            {
                name: 'Seoul',
                data: [20, 40, 25, 50, 15, 45, 33, 34, 20, 30, 22, 13],
            },
        ],
    },
    options: {
        height: 800,
        chart: {title: 'Average Temperature', width: 900, height: 400},
        xAxis: {pointOnColumn: false, title: {text: 'Month'}},
        yAxis: {title: 'Temperature (Celsius)'},
    },
};


