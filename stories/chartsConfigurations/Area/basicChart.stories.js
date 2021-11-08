import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'AREA CHARTS/ Default',
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
        }],
        chart: {
            type: 'area',
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
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            backgroundColor:
                'rgb(255, 99, 132)',
            borderColor:
                'rgb(255, 99, 132)',
        }],
    },
    options: {
        responsive: true,
        plugins: {
            filler: {
                propagate: true
            }
        }
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
        }],
    },
    options: {
        height: 400,
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
