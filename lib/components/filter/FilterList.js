'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterList = function (_React$Component) {
  _inherits(FilterList, _React$Component);

  function FilterList(props) {
    _classCallCheck(this, FilterList);

    return _possibleConstructorReturn(this, (FilterList.__proto__ || Object.getPrototypeOf(FilterList)).call(this, props));
  }

  _createClass(FilterList, [{
    key: 'onFilterEdit',
    value: function onFilterEdit(index) {
      this.props.onFilterEdit(index);
    }
  }, {
    key: 'onFilterRemove',
    value: function onFilterRemove(index) {
      this.props.onFilterRemove(index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'list-filter' },
        this.props.list.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'list-filter-item' },
            _react2.default.createElement(
              'div',
              { className: 'filter-content' },
              _react2.default.createElement(
                'div',
                { style: { fontWeight: 300 } },
                item.key
              ),
              _react2.default.createElement(
                'div',
                { className: 'pt3' },
                item.values.map(function (value) {
                  return _react2.default.createElement(
                    'span',
                    { key: value.id, className: 'label-filter label-blue-filter', style: { marginTop: '5px' } },
                    value.text
                  );
                })
              )
            ),
            _react2.default.createElement('i', { className: 'fa fa-pencil pointer', onClick: _this2.onFilterEdit.bind(_this2, index), style: { marginRight: '10px' } }),
            _react2.default.createElement('i', { className: 'fa fa-close red pointer', onClick: _this2.onFilterRemove.bind(_this2, index) })
          );
        })
      );
    }
  }]);

  return FilterList;
}(_react2.default.Component);

FilterList.propTypes = {
  list: _propTypes2.default.array.isRequired,
  onFilterRemove: _propTypes2.default.func.isRequired,
  onFilterEdit: _propTypes2.default.func.isRequired
};

FilterList.defaultProps = {
  list: []
};

exports.default = FilterList;