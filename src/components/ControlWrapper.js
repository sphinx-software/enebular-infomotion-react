import React from 'react';
import LiveButton from './LiveButton';
import Timeline from './Timeline';
import PropTypes from 'prop-types';

class ControlWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.control = {}
    }

    componentDidMount() {
        this.props.onReady(this.control)
    }

    onTimeline(timeline) {
        this.control.timeline = timeline
    }

    onLiveButton(liveButton) {
        this.control.liveButton = liveButton
    }

    render() {
        return <div className='info-react-control-wrapper'>
            <div className='control-live'>
                <LiveButton onReady={this.onLiveButton.bind(this)}/>
            </div>
            <div className='control-timeline'>
                <Timeline onReady={this.onTimeline.bind(this)}/>
            </div>
        </div>
    }
}

ControlWrapper.propTypes = {
    onReady: PropTypes.func.isRequired,
};

ControlWrapper.defaultProps = {
    onReady: () => {},
};

export default ControlWrapper