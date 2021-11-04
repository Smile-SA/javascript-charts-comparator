import chart from "../../index";

export var chartDiv = ({...options }) => {
    const container = document.createElement('div');
    container.id = 'container';

    const div = document.createElement('div');
    div.id = 'chart';
    container.appendChild(div);

    chart(container, JSON.parse(JSON.stringify({...options })));
    return container;
};