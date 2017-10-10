import React from 'react'
import PropTypes from 'prop-types'
import {infomotionUI} from 'enebular-infomotion'

class Livebutton extends React.Component {
    constructor (props) {
        super(props);
        this.state = {}
    }

    componentDidMount () {
        let liveButton = infomotionUI.liveButton(this.liveBtn).make();

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
    onReady: PropTypes.func.isRequired
}

Livebutton.defaultProps = {
    onReady: () => {}
}

export default Livebutton
