import React, {Component} from 'react';
import {Timeline, Datepicker, LiveButton} from 'enebular-infomotion-react';
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

    onLiveReady() {

    }

    render() {
        return (
            <div className="App">
                <Timeline onReady={this.onTimelineReady.bind(this)} dateRange={this.state.dateRange}/>
                <LiveButton onReady={this.onLiveReady.bind(this)}/>
                <Datepicker onReady={this.onDatepickerReady.bind(this)} dateRange={this.state.dateRange}/>
            </div>
        );
    }
}

export default App;
