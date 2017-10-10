import React, {Component} from 'react';
import logo from './logo.svg';
import {Timeline, Datepicker} from 'enebular-infomotion-react';
import './App.css';

class App extends Component {
    constructor (props) {
        super(props)

        this.state = {
            dateRange: [new Date('2016-12-30'), new Date()]
        }
    }

    onTimelineReady() {

    }

    onDatepickerReady() {

    }

    render() {
        return (
            <div className="App">
                <Timeline onReady={this.onTimelineReady.bind(this)} dateRange={this.state.dateRange}/>
                <Datepicker onReady={this.onDatepickerReady.bind(this)} dateRange={this.state.dateRange}/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
