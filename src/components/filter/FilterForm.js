import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import FilterList from './FilterList';
import FilterAdd from './FilterAdd';

class FilterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filters: [],
            isOpen: false,
            isModeAdd: true,
            editFilter: {}
        }
    }

    closeModal() {
        this.setState({isOpen: false, isModeAdd: true})
    }

    openModal() {
        this.setState({isOpen: true})
    }

    onAddNewFilter(newFilter) {
        let filters = this.state.filters;

        filters.push(newFilter);

        this.setState({filters: filters});

        this.props.onChange(filters);
    }

    onFilterEdit(index) {
        let filters = this.state.filters;
        let editFilter = Object.assign({}, {index: index}, filters[index]);

        this.setState({editFilter: editFilter, isModeAdd: false});
    }

    onFilterRemove(index) {
        let filters = this.state.filters;

        filters.splice(index, 1);

        this.setState({filters: filters});

        this.props.onChange(filters);
    }

    onCancelEdit() {
        this.setState({isModeAdd: true})
    }

    onSaveEditFilter(newFilter) {
        let filters = this.state.filters;

        filters[newFilter.index] = newFilter;

        this.setState({filters: filters, isModeAdd: true});
        this.props.onChange(filters)
    }

    render() {

        return <div style={{display: 'inline-block'}}>
            <button className={`btn-filter ${this.props.className}`}
                    onClick={this.openModal.bind(this)}>
                {this.props.children}
            </button>

            <Modal isOpen={this.state.isOpen}
                   className="enebular-component-react-modal-filter"
                   overlayClassName="enebular-component-react-overlay"
                   onRequestClose={this.closeModal.bind(this)} contentLabel='Modal'>
                <div className='modal-content'>
                    <h3 className='f3 fw3 mb3'>Filters</h3>
                    <FilterList list={this.state.filters}
                                onFilterEdit={this.onFilterEdit.bind(this)}
                                onFilterRemove={this.onFilterRemove.bind(this)}
                    />
                    <FilterAdd isModeAdd={this.state.isModeAdd}
                               editFilter={this.state.editFilter}
                               onEdit={this.onSaveEditFilter.bind(this)}
                               onAddNew={this.onAddNewFilter.bind(this)}
                               onCancelEdit={this.onCancelEdit.bind(this)}
                    />
                </div>
            </Modal>
        </div>
    }
}

FilterForm.propTypes = {
    className: PropTypes.string,
    filters: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    onCancel: PropTypes.func
};

FilterForm.defaultProps = {
    className: '',
    filters: [],

};

export default FilterForm