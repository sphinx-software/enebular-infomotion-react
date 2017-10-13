'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LiveButton = require('./LiveButton');

var _LiveButton2 = _interopRequireDefault(_LiveButton);

var _Timeline = require('./Timeline');

var _Timeline2 = _interopRequireDefault(_Timeline);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ControlWrapper = function (_React$Component) {
    _inherits(ControlWrapper, _React$Component);

    function ControlWrapper(props) {
        _classCallCheck(this, ControlWrapper);

        var _this = _possibleConstructorReturn(this, (ControlWrapper.__proto__ || Object.getPrototypeOf(ControlWrapper)).call(this, props));

        _this.control = {};
        return _this;
    }

    _createClass(ControlWrapper, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.onReady(this.control);
        }
    }, {
        key: 'onTimeline',
        value: function onTimeline(timeline) {
            this.control.timeline = timeline;
        }
    }, {
        key: 'onLiveButton',
        value: function onLiveButton(liveButton) {
            this.control.liveButton = liveButton;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'info-react-control-wrapper' },
                _react2.default.createElement(
                    'div',
                    { className: 'control-live' },
                    _react2.default.createElement(_LiveButton2.default, { dateRange: this.props.dateRange, onReady: this.onLiveButton.bind(this) })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'control-timeline' },
                    _react2.default.createElement(_Timeline2.default, { dateRange: this.props.dateRange, onReady: this.onTimeline.bind(this) })
                )
            );
        }
    }]);

    return ControlWrapper;
}(_react2.default.Component);

ControlWrapper.propTypes = {
    onReady: _propTypes2.default.func.isRequired,
    graphSetting: _propTypes2.default.array.isRequired
};

ControlWrapper.defaultProps = {
    onReady: function onReady() {},
    dateRange: [new Date('2016-12-30'), new Date()]
};

exports.default = ControlWrapper;