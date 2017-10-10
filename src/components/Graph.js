import React from 'react'
import PropTypes from 'prop-types'
import {infomotionUI} from 'enebular-infomotion'

class Graph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let graph = infomotionUI.graph(this.graphElement, this.props.graphSetting);
        graph.render();

        this.props.onReady(graph)
    }

    render() {
        return <div style={{height: '100%'}} ref={(element) => {
            this.graphElement = element
        }}/>
    }
}

Graph.propTypes = {
    graphSetting: PropTypes.object.isRequired,
    onReady: PropTypes.func.isRequired,
};

Graph.defaultProps = {
    onReady: () => {},
    graphSetting: {},
};

export default Graph
