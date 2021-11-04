import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'AREA CHARTS/ Spline',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    type: 'area',
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
            type: 'area',
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
            curve: 'smooth',

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
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            backgroundColor: "yellow",

        }, {
            label: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            backgroundColor: "green",
        }, {
            label: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
            backgroundColor: "red",
        }],

    },
    options: {
        height: 800,
        responsive: true,
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },

    }
};

export const Chartist = chartDiv.bind({});
Chartist.args = {
    library: 'chartist',
    type: 'area',
    data: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
        height: 800,
        low: 0,
        showArea: true,
        showPoint: false,
        fullWidth: true,
        axisX: {
            type: Chartist.FixedScaleAxis,
            divisor: 5,
        }
    }
};

export const Toast = chartDiv.bind({});
Toast.args = {
    library: 'toast',
    type: 'area',
    data: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
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
        chart: {title: 'Profit / Revenue / Cash Flow', width: 900, height: 400},
        xAxis: {pointOnColumn: false, title: {text: 'Month'}},
        yAxis: {title: 'Temperature (Celsius)'},
        series: {
            spline: true
        },
    },
};
