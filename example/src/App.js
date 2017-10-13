import React, {Component} from 'react';
import {Datepicker, } from 'enebular-infomotion-react';
import 'enebular-infomotion/dist/css/app.css';
import 'enebular-infomotion-react/css/main.css';

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

    onLiveReady() {

    }

    onDatepickerChange(date) {

    }

    render() {
        return (
            <div className="App">
                <Datepicker onReady={this.onDatepickerReady.bind(this)} onChange={this.onDatepickerChange.bind(this)} dateRange={this.state.dateRange}/>
            </div>
        );
    }
}

export default App;
