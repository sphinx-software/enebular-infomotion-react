'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTagInput = require('react-tag-input');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterAdd = function (_React$Component) {
  _inherits(FilterAdd, _React$Component);

  function FilterAdd(props) {
    _classCallCheck(this, FilterAdd);

    var _this = _possibleConstructorReturn(this, (FilterAdd.__proto__ || Object.getPrototypeOf(FilterAdd)).call(this, props));

    _this.inputId = (0, _uuid2.default)();
    _this.state = {
      newFilter: {
        key: '',
        values: []
      },
      valueInput: ''
    };
    return _this;
  }

  _createClass(FilterAdd, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.isModeAdd) {
        this.setState({ newFilter: JSON.parse(JSON.stringify(nextProps.editFilter)) });
      } else {
        this.setState({ newFilter: {
            key: '',
            values: []
          } });
      }
    }
  }, {
    key: 'onChangeKey',
    value: function onChangeKey(event) {
      var newFilter = this.state.newFilter;
      newFilter.key = event.target.value;

      this.setState({ newFilter: newFilter });
    }
  }, {
    key: 'onValueDelete',
    value: function onValueDelete(i) {
      var newFilter = this.state.newFilter;
      newFilter.values.splice(i, 1);
      this.setState({ newFilter: newFilter });
    }
  }, {
    key: 'onValueAdd',
    value: function onValueAdd() {
      var inputValueElement = document.getElementById(this.inputId);
      var tag = this.state.valueInput;
      var newFilter = this.state.newFilter;
      var id = (0, _uuid2.default)();
      newFilter.values.push({
        id: id,
        text: tag
      });

      inputValueElement.value = '';
      this.setState({ newFilter: newFilter, valueInput: '' });
    }
  }, {
    key: 'onValueDrag',
    value: function onValueDrag(tag, currPos, newPos) {
      var newFilter = this.state.newFilter;

      // mutate array
      newFilter.values.splice(currPos, 1);
      newFilter.values.splice(newPos, 0, tag);

      // re-render
      this.setState({ newFilter: newFilter });
    }
  }, {
    key: 'addNewFilter',
    value: function addNewFilter() {
      var newFilter = this.state.newFilter;

      var cloneFilter = Object.assign({}, newFilter);
      this.props.onAddNew(cloneFilter);

      newFilter.key = '';
      newFilter.values = [];
      this.setState({ newFilter: newFilter });
    }
  }, {
    key: 'editNewFilter',
    value: function editNewFilter() {
      var newFilter = this.state.newFilter;
      var cloneFilter = Object.assign({}, newFilter);
      this.props.onEdit(cloneFilter);

      newFilter.key = '';
      newFilter.values = [];
      this.setState({ newFilter: newFilter });
    }
  }, {
    key: 'onCancel',
    value: function onCancel() {
      this.props.onCancelEdit();
    }
  }, {
    key: 'onInputValueChange',
    value: function onInputValueChange(tag) {
      this.setState({ valueInput: tag });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'form-add-new-filter' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { className: 'enebular-label-input' },
            'Key'
          ),
          _react2.default.createElement('input', { type: 'text', value: this.state.newFilter.key,
            onChange: this.onChangeKey.bind(this),
            style: { width: 'calc(100% - 15px)', margin: '5px 0px 0px 0' },
            className: 'enebular-input' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pt3' },
          _react2.default.createElement(
            'label',
            { className: 'enebular-label-input' },
            'Values'
          ),
          _react2.default.createElement(_reactTagInput.WithContext, {
            id: this.inputId,
            tags: this.state.newFilter.values,
            autofocus: false,
            placeholder: 'add value',
            classNames: {
              tag: 'label-filter label-blue-filter filter-tag',
              tagInput: 'filter-input',
              remove: 'filter-remove',
              tagInputField: 'enebular-input'
            },
            suggestions: [],
            handleInputChange: this.onInputValueChange.bind(this),
            handleDelete: this.onValueDelete.bind(this),
            handleAddition: this.onValueAdd.bind(this),
            handleDrag: this.onValueDrag.bind(this) }),
          _react2.default.createElement('i', { className: 'fa fa-plus-circle',
            style: {
              position: 'absolute',
              marginTop: '-27px',
              cursor: 'pointer',
              left: '216px'
            },
            onClick: this.onValueAdd.bind(this) })
        ),
        _react2.default.createElement(
          'div',
          { className: 'pt3' },
          this.props.isModeAdd ? _react2.default.createElement(
            'button',
            { className: 'enebular-btn enebular-btn-teal', onClick: this.addNewFilter.bind(this) },
            _react2.default.createElement('i', { className: 'fa fa-plus' }),
            ' Add New Filter'
          ) : _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              { className: 'enebular-btn enebular-btn-teal', onClick: this.editNewFilter.bind(this) },
              _react2.default.createElement('i', { className: 'fa fa fa-pencil pointer' }),
              ' Update Filter'
            ),
            _react2.default.createElement(
              'button',
              { className: 'enebular-btn', onClick: this.onCancel.bind(this) },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return FilterAdd;
}(_react2.default.Component);

FilterAdd.propTypes = {
  onAddNew: _propTypes2.default.func.isRequired,
  isModeAdd: _propTypes2.default.bool,
  editFilter: _propTypes2.default.object,
  onCancelEdit: _propTypes2.default.func
};

FilterAdd.defaultProps = {
  onAddNew: function onAddNew() {},
  isModeAdd: true,
  editFilter: {}
};

exports.default = FilterAdd;