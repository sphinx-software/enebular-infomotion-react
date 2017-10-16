'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enebularInfomotionV = require('@uhuru/enebular-infomotion-v2');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    timeline: {
        flex: '1 0 auto',
        marginTop: '60px',
        padding: '0 25px'
    },
    timelineWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 5px'
    }
};

var Timeline = function (_React$Component) {
    _inherits(Timeline, _React$Component);

    function Timeline(props) {
        _classCallCheck(this, Timeline);

        return _possibleConstructorReturn(this, (Timeline.__proto__ || Object.getPrototypeOf(Timeline)).call(this, props));
    }

    _createClass(Timeline, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var timeline = _enebularInfomotionV.infomotionUI.timeline(this.timelineElement, this.minDateElement, this.maxDateElement, this.btnControl).withRange(this.props.dateRange).make();

            this.props.onReady(timeline);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: styles.timelineWrapper },
                _react2.default.createElement(
                    'button',
                    { ref: function ref(element) {
                            _this2.btnControl = element;
                        }, className: 'enebular-btn enebular-btn-control' },
                    _react2.default.createElement('i', { className: 'fa fa-play' })
                ),
                _react2.default.createElement(
                    'div',
                    { style: styles.timeline },
                    _react2.default.createElement('div', { ref: function ref(element) {
                            _this2.timelineElement = element;
                        } }),
                    _react2.default.createElement('span', { ref: function ref(element) {
                            _this2.minDateElement = element;
                        }, className: 'enebular-min-date' }),
                    _react2.default.createElement('span', { ref: function ref(element) {
                            _this2.maxDateElement = element;
                        }, className: 'enebular-max-date' })
                )
            );
        }
    }]);

    return Timeline;
}(_react2.default.Component);

Timeline.propTypes = {
    onReady: _propTypes2.default.func.isRequired,
    dateRange: _propTypes2.default.array.isRequired
};

Timeline.defaultProps = {
    onReady: function onReady() {},
    dateRange: [new Date('2016-12-30'), new Date()]
};

exports.default = Timeline;