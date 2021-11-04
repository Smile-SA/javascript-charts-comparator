import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'OTHER CHARTS/ Polar',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    data:{
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
            type: 'polarArea',
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
    type: 'polarArea',
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
