require('apexcharts/dist/apexcharts.css')
require('chartist/dist/chartist.min.css');
require('@toast-ui/chart/dist/toastui-chart.css');
import * as Chartist from 'chartist';
import * as ApexCharts from 'apexcharts';
import Chart from 'chart.js/auto';
import ToastUi from '@toast-ui/chart';


/**
 * @param {HTMLElement} container perent element of apex render
 * @param {*} options model configuration options
 */
export default (function (container, options) {
    const chartDiv = container.childNodes.item(0);
    run(options, chartDiv);

    /**
     * Main function
     * @param {*} chartOptions configuration json data
     */
    async function run(options, el) {
        let optionsData = options.data, optionsOptions = options.options, optionsType = options.type;
        if (options.library === "apex") {
            const chart = new ApexCharts(el, optionsData);
            await chart.render();
        } else if (options.library === "chartJs") {
            const canvas = document.createElement('canvas');
            el.appendChild(canvas);
            const chart = new  Chart(canvas, {
                type: optionsType,
                data: optionsData,
                options: optionsOptions
            });
        }else if (options.library === "chartist") {
            // Create new link Element
            if(optionsType==="area"){
                const chart = new Chartist.Line(el,optionsData,optionsOptions);
                chart.on('draw', function(data) {
                    if(data.type === 'line' || data.type === 'area') {
                        data.element.animate({
                            d: {
                                begin: 2000 * data.index,
                                dur: 2000,
                                from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                                to: data.path.clone().stringify(),
                                easing: Chartist.Svg.Easing.easeOutQuint
                            }
                        });
                    }
                });
            }else if(optionsType==="bar"){
                const chart = new Chartist.Bar(el,optionsData,optionsOptions);
            }else if(optionsType==="line"){
                const chart = new Chartist.Line(el,optionsData,optionsOptions);
            }else if(optionsType==="pie"){
                var sum = function(a, b) { return a + b };
                const chart = new Chartist.Pie(el,optionsData,{
                    labelInterpolationFnc: function(value) {
                        return Math.round(value / optionsData.series.reduce(sum) * 100) + '%';
                    }
                });
            }else if(optionsType==="donut"){
                var sum = function(a, b) { return a + b };
                const chart = new Chartist.Pie(el,optionsData,optionsOptions);
            }
        } else if (options.library === "toast") {
            if(optionsType==="area"){
                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.areaChart({ el, data, options});
            }else if(optionsType==="bar"){
                // new Chart.areaChart({canvas,optionsData,optionsOptions});

                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.columnChart({ el, data, options});
            }else if(optionsType==="multiBar"){

                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.columnChart({ el, data, options});
            }
            else if(optionsType==="line"){
                // new Chart.areaChart({canvas,optionsData,optionsOptions});
                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.lineChart({ el, data, options});
            }
            else if(optionsType==="donut"){
                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.pieChart({ el, data, options});
            }else if(optionsType==="pie"){
                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.pieChart({ el, data, options});
            }else if(optionsType==="boxPlot"){
                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.boxPlotChart({ el, data, options});
            }else if(optionsType==="radarChart"){
                const data =optionsData;
                const options =optionsOptions;
                const chart = ToastUi.radarChart({ el, data, options});
            }
        }
    }
});