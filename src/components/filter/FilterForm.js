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

        return <div onClick={this.openModal.bind(this)}>
            <i className='pe-7s-filter f3'/>
            <span className='f6 fw2'>Filters</span>

            <Modal isOpen={this.state.isOpen}
                   className='dash-modal-filter'
                   overlayClassName='dash-overlay'
                   onRequestClose={this.closeModal.bind(this)} contentLabel='Modal'>
                <div className='dash-modal-content'>
                    <h3 className='f3 fw3 mb3'>Filters</h3>
                    <div className='dash-filter-wrapper'>
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
                </div>
            </Modal>
        </div>
    }
}

FilterForm.propTypes = {
    filters: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

FilterForm.defaultProps = {
    filters: []
};

export default FilterForm