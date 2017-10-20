import React from 'react'
import PropTypes from 'prop-types'
import { WithContext as ReactTags } from 'react-tag-input'
import uuid from 'uuid'

class FilterAdd extends React.Component {
  constructor (props) {
    super(props)
    this.inputId = uuid()
    this.state = {
      newFilter: {
        key: '',
        values: []
      },
      valueInput: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.isModeAdd) {
      this.setState({newFilter: JSON.parse(JSON.stringify(nextProps.editFilter))})
    }else {
      this.setState({newFilter: {
        key: '',
        values: []
      }})
    }
  }

  onChangeKey (event) {
    let newFilter = this.state.newFilter
    newFilter.key = event.target.value

    this.setState({newFilter: newFilter})
  }

  onValueDelete (i) {
    let newFilter = this.state.newFilter
    newFilter.values.splice(i, 1)
    this.setState({newFilter: newFilter})
  }

  onValueAdd () {
    let inputValueElement = document.getElementById(this.inputId)
    let tag = this.state.valueInput
    let newFilter = this.state.newFilter
    let id = uuid()
    newFilter.values.push({
      id: id,
      text: tag
    })

    inputValueElement.value = ''
    this.setState({newFilter: newFilter, valueInput: ''})
  }

  onValueDrag (tag, currPos, newPos) {
    let newFilter = this.state.newFilter

    // mutate array
    newFilter.values.splice(currPos, 1)
    newFilter.values.splice(newPos, 0, tag)

    // re-render
    this.setState({newFilter: newFilter})
  }

  addNewFilter () {
    let newFilter = this.state.newFilter

    let cloneFilter = Object.assign({}, newFilter)
    this.props.onAddNew(cloneFilter)

    newFilter.key = ''
    newFilter.values = []
    this.setState({newFilter: newFilter})
  }

  editNewFilter () {
    let newFilter = this.state.newFilter
    let cloneFilter = Object.assign({}, newFilter)
    this.props.onEdit(cloneFilter)

    newFilter.key = ''
    newFilter.values = []
    this.setState({newFilter: newFilter})
  }

  onCancel () {
    this.props.onCancelEdit()
  }

  onInputValueChange (tag) {
    this.setState({valueInput: tag})
  }

  render () {
    return <div className='form-add-new-filter'>
      <div>
        <label className='enebular-label-input'>Key</label>
        <input type='text' value={this.state.newFilter.key}
               onChange={this.onChangeKey.bind(this)}
               style={{width: 'calc(100% - 15px)', margin: '5px 0px 0px 0'}}
               className='enebular-input'/>
      </div>
      <div className='pt3'>
        <label className='enebular-label-input'>Values</label>
        <ReactTags
          id={this.inputId}
          tags={this.state.newFilter.values}
          autofocus={false}
          placeholder='add value'
          classNames={{
            tag: 'label-filter label-blue-filter filter-tag',
            tagInput: 'filter-input',
            remove: 'filter-remove',
            tagInputField: 'enebular-input',
          }}
          suggestions={[]}
          handleInputChange={this.onInputValueChange.bind(this)}
          handleDelete={this.onValueDelete.bind(this)}
          handleAddition={this.onValueAdd.bind(this)}
          handleDrag={this.onValueDrag.bind(this)}/>
        <i className='fa fa-plus-circle'
           style={{
             position: 'absolute',
             marginTop: '-27px',
             cursor: 'pointer',
             left: '216px'
           }}
           onClick={this.onValueAdd.bind(this)}/>
      </div>
      <div className='pt3'>
        {this.props.isModeAdd ? (
          <button className='enebular-btn enebular-btn-teal' onClick={this.addNewFilter.bind(this)}>
            <i className='fa fa-plus'/> Add New Filter
          </button>
        ) : (
          <div>
            <button className='enebular-btn enebular-btn-teal' onClick={this.editNewFilter.bind(this)}>
              <i className='fa fa fa-pencil pointer'/> Update Filter
            </button>
            <button className='enebular-btn' onClick={this.onCancel.bind(this)}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  }
}

FilterAdd.propTypes = {
  onAddNew: PropTypes.func.isRequired,
  isModeAdd: PropTypes.bool,
  editFilter: PropTypes.object,
  onCancelEdit: PropTypes.func
}

FilterAdd.defaultProps = {
  onAddNew: () => {},
  isModeAdd: true,
  editFilter: {}
}

export default FilterAdd