import {chartDiv} from '../../controls/chartDiv';
import {defaultControls} from "../../controls/default_controls";

export default {
    title: 'BOX CHARTS/ Basic',
    argTypes: defaultControls(),
};

export const Apex = chartDiv.bind({});
Apex.args = {
    library: 'apex',
    data:{
        series: [
            {
                type: 'boxPlot',
                data: [
                    {
                        x: 'Jan 2015',
                        y: [54, 66, 69, 75, 88]
                    },
                    {
                        x: 'Jan 2016',
                        y: [43, 65, 69, 76, 81]
                    },
                    {
                        x: 'Jan 2017',
                        y: [31, 39, 45, 51, 59]
                    },
                    {
                        x: 'Jan 2018',
                        y: [39, 46, 55, 65, 71]
                    },
                    {
                        x: 'Jan 2019',
                        y: [29, 31, 35, 39, 44]
                    },
                    {
                        x: 'Jan 2020',
                        y: [41, 49, 58, 61, 67]
                    },
                    {
                        x: 'Jan 2021',
                        y: [54, 59, 66, 71, 88]
                    }
                ]
            }
        ],
        chart: {
            type: 'boxPlot',
            height: 350
        },
        title: {
            text: 'Basic BoxPlot Chart',
            align: 'left'
        },
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: '#5C4742',
                    lower: '#A5978B'
                }
            }
        }
    },
};

export const Toast = chartDiv.bind({});
Toast.args = {
    library: 'toast',
    type: 'boxPlot',
    data : {
        categories: ['Budget', 'Income', 'Expenses', 'Debt'],
        series: [
            {
                name: '2020',
                data: [
                    [1000, 2500, 3714, 5500, 7000],
                    [1000, 2750, 4571, 5250, 8000],
                    [3000, 4000, 4714, 6000, 7000],
                    [1000, 2250, 3142, 4750, 6000],
                ],
                outliers: [
                    [0, 14000],
                    [2, 10000],
                    [3, 9600],
                ],
            },
            {
                name: '2021',
                data: [
                    [2000, 4500, 6714, 11500, 13000],
                    [3000, 5750, 7571, 8250, 9000],
                    [5000, 8000, 8714, 9000, 10000],
                    [7000, 9250, 10142, 11750, 12000],
                ],
                outliers: [[1, 14000]],
            },
        ],
    },
    options: {
        chart: { title: 'Monthly Revenue', width: 900, height: 500 },
    }
};
