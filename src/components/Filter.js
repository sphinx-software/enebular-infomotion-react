import React from 'react';
import PropTypes from 'prop-types';
import {infomotionUI} from 'enebular-infomotion'
import Modal from 'react-modal';

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalFilter: false
        }
    }

    onFilterClick() {
        this.setState({modalFilter: true}, () => {
            let filterUI = infomotionUI.filter(this.formFilterElement)
                .setOptions(this.props.filterUI.options)
                .setFilters(this.props.filterUI.filter)
                .make();

            filterUI.open();

            filterUI.onChange((filter) => {
                this.props.onChange(filter.toJson());
                this.closeFilterModal();
            });

            filterUI.onClose(() => {
                this.props.onCancel();
                this.closeFilterModal();
            });
        })

    }

    closeFilterModal() {
        this.setState({modalFilter: false})
    }

    render() {
        return <div style={{display: 'inline-block'}} className="info-react-control-wrapper">
            <button className={`btn-filter ${this.props.className}`}
                    onClick={this.onFilterClick.bind(this)}>
                {this.props.children}
            </button>
            <Modal isOpen={this.state.modalFilter}
                   className="modalFilter"
                   overlayClassName='dash-overlay'
                   onRequestClose={this.closeFilterModal.bind(this)} contentLabel='Modal'>
                <div className='modal-content'>
                    <h3>Filter Graph</h3>
                    <div ref={(element) => {
                        this.formFilterElement = element
                    }}/>
                </div>
            </Modal>
        </div>
    }

}

Filter.propTypes = {
    datasources: PropTypes.array.isRequired,
    pluginManager: PropTypes.any.isRequired,
    filterUI: PropTypes.object.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    onCancel: PropTypes.func
};

Filter.defaultProps = {
    className: '',
    onChange: () => {
    },
    onCancel: () => {
    }
};

export default Filter