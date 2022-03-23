import React from "react";
import {BrowserRouter, NavLink} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './styles/Navbar.css'
import Table from "react-bootstrap/Table";



class Navbar extends React.Component{
     
    chartData;
    constructor(props) {
        super(props);
        this.chartData = props.chartData
        this.state = {chartData: this.chartData};

        this.pushLines = this.pushLines.bind(this);

    }
    pushLines() {
        console.log('chartData', this.chartData)
        this.chartData.push({
            category: "Линия",
            value: 0
        })
        this.setState({
            chartData: this.chartData
        });
    }

    handleSubmit = (ev) =>{
        ev.preventDefault();
        console.dir(ev)
        // ev.target.forEach(el => console.log(el.value))
        //let tmp = []
        this.chartData = []
        console.log('elements',  ev.target.elements)
        for(let i=0; i< ev.target.elements.length - 2; i += 3){
            this.chartData.push({category: ev.target.elements[i].value, value: Number(ev.target.elements[i+1].value)})
            this.setState({
                chartData: this.chartData
            });
            
        }         
        this.props.updateData(this.chartData)
    }

    deleteLine = (index) =>{
       this.chartData.splice(index, 1)
        this.setState({
            chartData: this.chartData
        });
       
    }

    render() {
        return (
            <div className="Navbar">
                <div className="borderContainer">
                    <div className="buttonsContainer">
                        <div className="captionContainer">
                            Вид диаграммы
                        </div>
                        <div>
                            <NavLink to='Circle'><Button variant="flat" size="xxl" >Круговая диаграмма</Button></NavLink>
                        </div>
                        <div>
                            <NavLink to='Bar'><Button variant="flat" size="xxl">Столбчатая диаграмма</Button></NavLink>
                        </div>
                    </div>
                </div>
                <div className="borderContainer">
                    <div className="dataTableDiv">
                        <div className="captionContainer pb-3">
                            Таблица данных
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <Table
                                bordered
                                
                            >
                                <thead>
                                    <tr>
                                        <th>X</th>
                                        <th>Y</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.chartData.map((item, index) => (
                                    <tr key={index}>
                                        <td><input type="text" defaultValue={item.category}/></td>
                                        <td><input type="text" defaultValue={item.value}/></td>
                                        <td><Button variant="light" onClick={() => this.deleteLine(index)}>X</Button></td>
                                    </tr>
                                ))}
                                </tbody>

                            </Table>
                            <div className="buttons-table">
                                <Button id="button-add" type="button" size="sm" variant="secondary" onClick={this.pushLines}>+ Строка</Button>
                                <Button type="submit" variant="pink" size="xxl">Обновить диаграмму</Button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}
export default Navbar