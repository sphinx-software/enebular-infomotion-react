'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FilterList = require('./FilterList');

var _FilterList2 = _interopRequireDefault(_FilterList);

var _FilterAdd = require('./FilterAdd');

var _FilterAdd2 = _interopRequireDefault(_FilterAdd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterForm = function (_React$Component) {
    _inherits(FilterForm, _React$Component);

    function FilterForm(props) {
        _classCallCheck(this, FilterForm);

        var _this = _possibleConstructorReturn(this, (FilterForm.__proto__ || Object.getPrototypeOf(FilterForm)).call(this, props));

        _this.state = {
            filters: [],
            isOpen: false,
            isModeAdd: true,
            editFilter: {}
        };
        return _this;
    }

    _createClass(FilterForm, [{
        key: 'closeModal',
        value: function closeModal() {
            this.setState({ isOpen: false, isModeAdd: true });
        }
    }, {
        key: 'openModal',
        value: function openModal() {
            this.setState({ isOpen: true });
        }
    }, {
        key: 'onAddNewFilter',
        value: function onAddNewFilter(newFilter) {
            var filters = this.state.filters;

            filters.push(newFilter);

            this.setState({ filters: filters });

            this.props.onChange(filters);
        }
    }, {
        key: 'onFilterEdit',
        value: function onFilterEdit(index) {
            var filters = this.state.filters;
            var editFilter = Object.assign({}, { index: index }, filters[index]);

            this.setState({ editFilter: editFilter, isModeAdd: false });
        }
    }, {
        key: 'onFilterRemove',
        value: function onFilterRemove(index) {
            var filters = this.state.filters;

            filters.splice(index, 1);

            this.setState({ filters: filters });

            this.props.onChange(filters);
        }
    }, {
        key: 'onCancelEdit',
        value: function onCancelEdit() {
            this.setState({ isModeAdd: true });
        }
    }, {
        key: 'onSaveEditFilter',
        value: function onSaveEditFilter(newFilter) {
            var filters = this.state.filters;

            filters[newFilter.index] = newFilter;

            this.setState({ filters: filters, isModeAdd: true });
            this.props.onChange(filters);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { onClick: this.openModal.bind(this) },
                _react2.default.createElement('i', { className: 'pe-7s-filter f3' }),
                _react2.default.createElement(
                    'span',
                    { className: 'f6 fw2' },
                    'Filters'
                ),
                _react2.default.createElement(
                    _reactModal2.default,
                    { isOpen: this.state.isOpen,
                        className: 'dash-modal-filter',
                        overlayClassName: 'dash-overlay',
                        onRequestClose: this.closeModal.bind(this), contentLabel: 'Modal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'dash-modal-content' },
                        _react2.default.createElement(
                            'h3',
                            { className: 'f3 fw3 mb3' },
                            'Filters'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'dash-filter-wrapper' },
                            _react2.default.createElement(_FilterList2.default, { list: this.state.filters,
                                onFilterEdit: this.onFilterEdit.bind(this),
                                onFilterRemove: this.onFilterRemove.bind(this)
                            }),
                            _react2.default.createElement(_FilterAdd2.default, { isModeAdd: this.state.isModeAdd,
                                editFilter: this.state.editFilter,
                                onEdit: this.onSaveEditFilter.bind(this),
                                onAddNew: this.onAddNewFilter.bind(this),
                                onCancelEdit: this.onCancelEdit.bind(this)
                            })
                        )
                    )
                )
            );
        }
    }]);

    return FilterForm;
}(_react2.default.Component);

FilterForm.propTypes = {
    filters: _propTypes2.default.array.isRequired,
    onChange: _propTypes2.default.func.isRequired
};

FilterForm.defaultProps = {
    filters: []
};

exports.default = FilterForm;