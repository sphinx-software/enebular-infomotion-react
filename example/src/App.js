import React, {Component} from 'react';
import logo from './logo.svg';
import {Timeline, Datepicker} from 'enebular-infomotion-react';
import 'enebular-infomotion/dist/css/app.css'
import './App.css';

class App extends Component {
    constructor (props) {
        super(props);

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
            </div>
        );
    }
}

export default App;
