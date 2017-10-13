import React, {Component} from 'react';
import {Datepicker, ControlWrapper, Filter, Editor, Graph} from 'enebular-infomotion-react';
import PropTypes from 'prop-types';
import {infomotion} from 'enebular-infomotion';
import 'enebular-infomotion/dist/css/app.css';
import 'enebular-infomotion-react/css/main.css';

import './App.css';

class Tool extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dateRange: [new Date('2016-12-30'), new Date()],
            graphSetting: this.props.graphSetting,
        }
    }

    componentWillMount() {
        this.graphContext = infomotion.graphContext(this.props.settings);
    }

    onControlReady(control) {
        this.graphContext.useTimeline(control.timeline);
        this.graphContext.useLiveButton(control.liveButton);
    }

    onDatepickerReady(datepicker) {
        this.graphContext.useDatePicker(datepicker);
    }

    onDatepickerChange(dateRange) {
        this.setDate({dateRange: [dateRange.getStartDate(), dateRange.getEndDate()]})
    }

    onGraphReady(graph) {
        let graphSetting = this.state.graphSetting;

        graphSetting.instance = graph;

        this.setState({graphSetting: graphSetting});

        this.graphContext.useGraphs(graph);
    }

    onFilterChange(dataFilter) {

    }

    onFilterCancel() {

    }

    onEditorChange(dataEditor) {

    }

    onEditorCancel() {

    }

    render() {
        return (
            <div className="App">
                <Datepicker onReady={this.onDatepickerReady.bind(this)}
                            onChange={this.onDatepickerChange.bind(this)}
                            dateRange={this.state.dateRange}/>
                <Filter datasources={this.props.datasources}
                        pluginManager={this.props.pluginManager}
                        filterUI={this.state.graphSetting.filterUI}
                        onChange={this.onFilterChange.bind(this)}
                        onCancel={this.onFilterCancel.bind(this)}>
                    Filter Graph
                </Filter>
                <Editor datasources={this.props.datasources}
                        pluginManager={this.props.pluginManager}
                        graphEditor={this.state.graphSetting.graphEditor}
                        onChange={this.onEditorChange.bind(this)}
                        onCancel={this.onEditorCancel.bind(this)}>
                    Graph Editor
                </Editor>
                <div style={{height: '400px'}}>
                    <Graph onReady={this.onGraphReady.bind(this)} graphSetting={this.state.graphSetting}/>
                </div>
                <ControlWrapper dateRange={this.state.dateRange}
                                onReady={this.onControlReady.bind(this)}
                />
            </div>
        );
    }
}

Tool.propTypes = {
    pluginManager: PropTypes.any.isRequired,
    settings: PropTypes.object.isRequired,
    datasources: PropTypes.array.isRequired,
    graphSetting: PropTypes.object.isRequired,
};

Tool.defaultProps = {};

export default Tool;
