import './App.css';
import React, { useState, useEffect  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './../src/Components/Header'
import Chart from './../src/Components/Chart'
import Navbar from "./Components/Navbar";
import {BrowserRouter} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import  am5themes_Animated  from "@amcharts/amcharts5/themes/Animated";
import Table from "react-bootstrap/Table";


let chartData = [{
    category: "Линия 1",
    value: 501
}, {
    category: "Линия 2",
    value: 301
}, {
    category: "Линия 3",
    value: 201
}, {
    category: "Линия 4",
    value: 165
}, {
    category: "Линия 5",
    value: 139
}]

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {chartData: chartData};
    }
    updateData = (value) => {
        this.setState({ chartData: value })
    }
    render() {
        return (
            <BrowserRouter className="App">
                <div  className="mainContainer">
                <div className="row">
                    <div className="navbarContainer col-md-12 col-xl-5">
                        <Navbar chartData={this.state.chartData} updateData={this.updateData}/>
                    </div>
                    <div className="col-md-12 col-xl-7">
                        <div className="chartContainerBlock">
                            <Chart className="chartComponent" chartData={this.state.chartData}/>
                        </div>
                    </div>
                </div>
                </div>
            </BrowserRouter>
            
        );
    }
}


export default App;
