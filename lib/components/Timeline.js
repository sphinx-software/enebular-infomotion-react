import React from 'react';
import { infomotionUI } from 'enebular-infomotion';

const styles = {
    timeline: {
        flex: '1 0 auto'
    },
    timelineWrapper: {
        display: 'flex'
    }
};

class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let timeline = infomotionUI.timeline(this.timelineElement, this.minDateElement, this.maxDateElement, this.btnControl).withRange(this.props.dateRange).make();

        this.props.onReady(timeline);
    }

    render() {
        return React.createElement(
            'div',
            { style: styles.timelineWrapper },
            React.createElement(
                'button',
                { ref: element => {
                        this.btnControl = element;
                    }, className: 'enebular-btn enebular-btn-control' },
                React.createElement('i', { className: 'fa fa-play' })
            ),
            React.createElement(
                'div',
                { style: styles.timeline },
                React.createElement('div', { ref: element => {
                        this.timelineElement = element;
                    } }),
                React.createElement('span', { ref: element => {
                        this.minDateElement = element;
                    }, className: 'enebular-min-date' }),
                React.createElement('span', { ref: element => {
                        this.maxDateElement = element;
                    }, className: 'enebular-max-date' })
            )
        );
    }
}

Timeline.propTypes = {
    onDatePicker: PropTypes.func.isRequired,
    dateRange: PropTypes.array.isRequired
};

Timeline.defaultProps = {
    onReady: () => {},
    dateRange: [new Date('2016-12-30'), new Date()]
};

export default Timeline;