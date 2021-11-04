import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'SCATTER CHARTS/Basic',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    data: {
        series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: '100% Stacked Bar'
        },
        xaxis: {
            categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        },
        fill: {
            opacity: 1

        },
        legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetX: 40
        }
    }
};

export const Chartist = chartDiv.bind({});
Chartist.args = {
    library: 'chartist',
    type: 'bar',
    data: {
        labels: ['Marine Sprite', 'Striking Calf', 'Tank Picture', 'Bucket Slope', 'Reborn Kid\''],
        series: [
            [44, 55, 41, 37, 22, 43, 21],
            [53, 32, 33, 52, 13, 43, 32],
            [12, 17, 11, 9, 15, 11, 20],
            [9, 7, 5, 8, 6, 9, 4,],
            [25, 12, 19, 32, 25, 24, 10]
        ]
    },
    options: {
        height: 400,
        stackBars: true,
        reverseData: true,
        horizontalBars: true,

        axisY: {
            labelInterpolationFnc: function (value) {
                return (value ) + 'k';
            }
        }
    },
};