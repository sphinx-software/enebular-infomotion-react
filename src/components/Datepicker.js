import React from 'react'
import PropTypes from 'prop-types'
import {infomotionUI} from 'enebular-infomotion'

class DatePicker extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        let datePicker = infomotionUI.datePicker(this.datePicker)
            .withRange(this.props.dateRange)
            .make();

        datePicker.onChange(dateRange => {
            this.props.onChange(dateRange)
        });

        this.props.onReady(datePicker)
    }

    render () {
        return <input className='enebular-input' style={{width: '100%'}} ref={(input) => {
            this.datePicker = input
        }} type='date' />
    }
}

DatePicker.propTypes = {
    onReady: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    dateRange: PropTypes.array.isRequired
};

DatePicker.defaultProps = {
    onReady: () => {},
    onChange: () => {},
    dateRange: [new Date('2016-12-30'), new Date()]
};

export default DatePicker
