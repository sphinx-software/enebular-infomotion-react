import React from 'react'
import PropTypes from 'prop-types'

class FilterList extends React.Component {
  constructor (props) {
    super(props)
  }

  onFilterEdit (index) {
    this.props.onFilterEdit(index)
  }

  onFilterRemove (index) {
    this.props.onFilterRemove(index)
  }

  render() {
    return <div className='list-filter'>
      {this.props.list.map((item, index) => {
        return <div key={index} className='list-filter-item'>
          <div className='filter-content'>
            <div style={{fontWeight: 300}}>{item.key}</div>
            <div style={{paddingTop: '10px'}}>
              {item.values.map((value) => {
                return <span key={value.id} className='label-filter label-blue-filter' style={{marginTop: '5px'}}>{value.text}</span>
              })}
            </div>
          </div>
          <i className='fa fa-pencil' onClick={this.onFilterEdit.bind(this, index)} style={{marginRight: '10px', cursor: 'pointer'}}/>
          <i className='fa fa-close red' onClick={this.onFilterRemove.bind(this, index)} style={{cursor: 'pointer'}}/>
        </div>
      })}
    </div>
  }
}

FilterList.propTypes = {
  list: PropTypes.array.isRequired,
  onFilterRemove: PropTypes.func.isRequired,
  onFilterEdit: PropTypes.func.isRequired,
};

FilterList.defaultProps = {
  list: []
};

export default FilterList