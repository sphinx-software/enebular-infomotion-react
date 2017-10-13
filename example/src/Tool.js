import React, {Component} from 'react';
import {Datepicker, ControlWrapper, Filter, Editor, Graph} from 'enebular-infomotion-react';
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
                        graphEditor={this.state.graphSetting.graphEditor}
                        onChange={this.props.onFilterChange.bind(this)}
                        onCancel={this.props.onFilterCancel.bind(this)}>
                    Filter Graph
                </Filter>
                <Editor datasources={this.props.datasources}
                        pluginManager={this.props.pluginManager}
                        filterUI={this.state.graphSetting.filterUI}
                        onChange={this.props.onEditorChange.bind(this)}
                        onCancel={this.props.onEditorCancel.bind(this)}>
                    Graph Editor
                </Editor>
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
