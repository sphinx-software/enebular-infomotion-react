'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enebularInfomotion = require('enebular-infomotion');

var _reactModal = require('react-modal');

var _reactModal2 = _interopRequireDefault(_reactModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_React$Component) {
    _inherits(Filter, _React$Component);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this.state = {
            modalFilter: false
        };
        return _this;
    }

    _createClass(Filter, [{
        key: 'onFilterClick',
        value: function onFilterClick() {
            var _this2 = this;

            this.setState({ modalFilter: true }, function () {
                var filterUI = _enebularInfomotion.infomotionUI.filter(_this2.formFilterElement).setOptions(_this2.props.filterUI.options).setFilters(_this2.props.filterUI.filter).make();

                filterUI.open();

                filterUI.onChange(function (filter) {
                    _this2.props.onChange(filter.toJson());
                    _this2.closeFilterModal();
                });

                filterUI.onClose(function () {
                    _this2.props.onCancel();
                    _this2.closeFilterModal();
                });
            });
        }
    }, {
        key: 'closeFilterModal',
        value: function closeFilterModal() {
            this.setState({ modalFilter: false });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { style: { display: 'inline-block' }, className: 'info-react-control-wrapper' },
                _react2.default.createElement(
                    'button',
                    { className: 'btn-filter ' + this.props.className,
                        onClick: this.onFilterClick.bind(this) },
                    this.props.children
                ),
                _react2.default.createElement(
                    _reactModal2.default,
                    { isOpen: this.state.modalFilter,
                        className: 'modalFilter',
                        overlayClassName: 'dash-overlay',
                        onRequestClose: this.closeFilterModal.bind(this), contentLabel: 'Modal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'h3',
                            null,
                            'Filter Graph'
                        ),
                        _react2.default.createElement('div', { ref: function ref(element) {
                                _this3.formFilterElement = element;
                            } })
                    )
                )
            );
        }
    }]);

    return Filter;
}(_react2.default.Component);

Filter.propTypes = {
    datasources: _propTypes2.default.array.isRequired,
    pluginManager: _propTypes2.default.any.isRequired,
    filterUI: _propTypes2.default.object.isRequired,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onCancel: _propTypes2.default.func
};

Filter.defaultProps = {
    className: '',
    onChange: function onChange() {},
    onCancel: function onCancel() {}
};

exports.default = Filter;