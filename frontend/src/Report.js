import React, {Component} from 'react';
import {CanvasJSChart} from './canvasjs.react.js';
import data from "bootstrap/js/src/dom/data";

class Report extends Component {

    constructor(props) {
        super(props);
        this.state = {
            carStatistics: []
        }
    }

    async componentDidMount() {
        console.log("aaa")
        await fetch('/api/driving-school/reports')
            .then(response => response.json())
            .then(data => this.setState({carStatistics: data.carStatistics, total: data.total}));
    }

    render() {
        const options = {
            animationEnabled: true,
            exportEnabled: true,
            theme: "dark2", // "light1", "dark1", "dark2"
            title: {
                text: "Car type choices by our clients"
            },
            data: [{
                type: "pie",
                indexLabel: "{label}: {y}%",
                startAngle: -90,

                // dataPoints: [
                //     { y: 20, label: "Mini Cooper Manual" },
                //     { y: 24, label: "Mini Cooper Automatic" },
                //     { y: 30, label: "Renault Clio IV Manual" },
                //     { y: 14, label: "Renault Clio IV Automatic" },
                //     { y: 12, label: "BMW Series 1 Manual" }
                // ]
            }]

        }
        console.log(this.state.carStatistics);
        let dataPoints = [];
        for (let i = 0; i < this.state.carStatistics.length; i++){
            dataPoints[i] = {
                y: (this.state.carStatistics[i].count / this.state.total) * 100,
                label: this.state.carStatistics[i].car
            }
            console.log(dataPoints[i]);
        }
        options.data[0].dataPoints = dataPoints;

            return (
                <div>
                    <CanvasJSChart options={options}
                        /* onRef={ref => this.chart = ref} */
                    />
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                </div>
            );
    }

}

export default Report;