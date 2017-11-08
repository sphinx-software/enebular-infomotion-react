import React from 'react';
import {infomotionUI} from '@uhuru/enebular-infomotion-v2';
import PropTypes from 'prop-types'

const styles = {
    timeline: {
        flex: '1 0 auto',
        marginTop: '60px',
        padding: '0 25px'
    },
    timelineWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 5px'
    }
};

class Timeline extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        let timeline = infomotionUI.timeline(
            this.timelineElement,
            this.btnControl
        )
            .make();

        this.props.onReady(timeline)
    }

    render() {
        return <div style={styles.timelineWrapper}>
            <button ref={(element) => { this.btnControl = element }} className='enebular-btn enebular-btn-control'>
                <i className='fa fa-play' />
            </button>
            <div style={styles.timeline} ref={(element) => { this.timelineElement = element }}/>
        </div>
    }
}

Timeline.propTypes = {
    onReady: PropTypes.func.isRequired,
    dateRange: PropTypes.array.isRequired
};

Timeline.defaultProps = {
    onReady: () => {},
    dateRange: [new Date('2016-12-30'), new Date()]
};

export default Timeline
