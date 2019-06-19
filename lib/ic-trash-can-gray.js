Object.defineProperty(exports, "__esModule", {
  value: true
});
var _createIconComponent = require('./utils/createIconComponent');
var _createIconComponent2 = _interopRequireDefault(_createIconComponent);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var IconIcTrashCanGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: 'none',
      stroke: 'rgba(129, 141, 150, .7)',
      'strokeWidth': '1.6',
      'strokeMiterlimit': '10'
    }, _react2.default.createElement('path', {
      'strokeLinecap': 'square',
      d: 'M17.8 8.1v10.1c0 .7-.6 1.3-1.3 1.3h-8c-.7 0-1.3-.6-1.3-1.3V8.1M9.8 7v-.2c0-.7.6-1.3 1.3-1.3h2.8c.7 0 1.3.6 1.3 1.3V7'
    }), _react2.default.createElement('path', {
      'strokeLinecap': 'round',
      d: 'M5 7.8h15'
    }), _react2.default.createElement('g', {
      'strokeLinecap': 'round'
    }, _react2.default.createElement('path', {
      d: 'M9.8 11.7v3.6M12.5 11.1v4.7M15.2 11.7v3.6'
    })))),
  height: 24,
  width: 24
});
IconIcTrashCanGray.displayName = 'IconIcTrashCanGray';
exports.default = IconIcTrashCanGray;
