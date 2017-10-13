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

var Editor = function (_React$Component) {
    _inherits(Editor, _React$Component);

    function Editor(props) {
        _classCallCheck(this, Editor);

        var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

        _this.state = {
            modalEditor: false
        };
        return _this;
    }

    _createClass(Editor, [{
        key: 'onEditorClick',
        value: function onEditorClick() {
            var _this2 = this;

            this.setState({ modalEditor: true }, function () {
                var graphEditor = _enebularInfomotion.infomotionUI.graphEditor(_this2.formEditorElement).withDatasources(_this2.props.datasources).withPluginManager(_this2.props.pluginManager).withSettings(_this2.props.graphEditor).hasCancelButton(_this2.props.hasCancelBtn).make();

                graphEditor.open();

                graphEditor.onChange(function (config) {
                    _this2.props.onChange(config);
                    _this2.closeEditorModal();
                });

                graphEditor.onCancel(function () {
                    _this2.props.onCancel();
                    _this2.closeEditorModal();
                });
            });
        }
    }, {
        key: 'closeEditorModal',
        value: function closeEditorModal() {
            this.setState({ modalEditor: false });
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
                    { className: 'btn-editor ' + this.props.className, onClick: this.onEditorClick.bind(this) },
                    this.props.children
                ),
                _react2.default.createElement(
                    _reactModal2.default,
                    { isOpen: this.state.modalEditor,
                        className: 'enebular-component-react-modal',
                        overlayClassName: 'enebular-component-react-overlay',
                        onRequestClose: this.closeEditorModal.bind(this), contentLabel: 'Modal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-content' },
                        _react2.default.createElement(
                            'h3',
                            { style: { margin: '3px 0' } },
                            'Editor Graph'
                        ),
                        _react2.default.createElement('div', { ref: function ref(element) {
                                _this3.formEditorElement = element;
                            } })
                    )
                )
            );
        }
    }]);

    return Editor;
}(_react2.default.Component);

Editor.propTypes = {
    datasources: _propTypes2.default.array.isRequired,
    pluginManager: _propTypes2.default.any.isRequired,
    graphEditor: _propTypes2.default.object.isRequired,
    className: _propTypes2.default.string,
    onChange: _propTypes2.default.func,
    onCancel: _propTypes2.default.func
};

Editor.defaultProps = {
    className: '',
    hasCancelBtn: false,
    datasources: [],
    graphEditor: {},
    onChange: function onChange() {},
    onCancel: function onCancel() {}
};

exports.default = Editor;