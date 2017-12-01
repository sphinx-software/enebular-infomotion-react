'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _enebularInfomotionV = require('@uhuru/enebular-infomotion-v2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Livebutton = function (_React$Component) {
    _inherits(Livebutton, _React$Component);

    function Livebutton(props) {
        _classCallCheck(this, Livebutton);

        var _this = _possibleConstructorReturn(this, (Livebutton.__proto__ || Object.getPrototypeOf(Livebutton)).call(this, props));

        _this.state = {};
        return _this;
    }

    _createClass(Livebutton, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var liveButton = _enebularInfomotionV.infomotionUI.liveButton(this.liveBtn).make();
            this.props.onReady(liveButton);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'button',
                { ref: function ref(input) {
                        _this2.liveBtn = input;
                    }, className: 'enebular-btn' },
                _react2.default.createElement('i', { className: 'fa fa-bolt fa-lg' })
            );
        }
    }]);

    return Livebutton;
}(_react2.default.Component);

Livebutton.propTypes = {
    onReady: _propTypes2.default.func.isRequired
};

Livebutton.defaultProps = {
    onReady: function onReady() {}
};

exports.default = Livebutton;