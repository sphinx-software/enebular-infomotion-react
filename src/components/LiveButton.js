import React from 'react'
import PropTypes from 'prop-types'
import {infomotionUI, infomotion} from 'enebular-infomotion'

class Livebutton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        let liveButton = infomotionUI.liveButton(this.liveBtn).make();
        liveButton.setDateRange(new infomotion.DateRange(this.props.dateRange[0], this.props.dateRange[1]));
        this.props.onReady(liveButton)
    }

    render () {
        return <button ref={(input) => {
            this.liveBtn = input
        }} className='enebular-btn'>
            <i className='fa fa-bolt fa-lg' />
        </button>
    }
}

Livebutton.propTypes = {
    onReady: PropTypes.func.isRequired,
    dateRange: PropTypes.array.isRequired
};

Livebutton.defaultProps = {
    onReady: () => {},
    dateRange: [new Date('2016-12-30'), new Date()]
};

export default Livebutton;
