import React from "react";
import classes from './styles/Chart.module.css'
import './styles/Chart.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ChartCircle from './charts/ChartCircle'
import ChartBar from './charts/ChartBar'

function Chart(props) {
    console.log('props.chartData', props.chartData)

    return (
        <div>
            <div >

                <div className='chart'>
                    {/*Здесь будут переключаться компоненты диаграмм*/}
                    <Routes>
                        <Route path='/Circle' element={<ChartCircle chartData={props.chartData} />}/>
                        <Route path='/Bar' element={<ChartBar chartData={props.chartData}/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Chart