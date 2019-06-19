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
var IconIcCalendarWhite = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: 'none',
      stroke: '#FFFFFF',
      'strokeWidth': '1.86',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round'
    }, _react2.default.createElement('path', {
      d: 'M5.5 4.5h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-14c-1.1 0-2-.9-2-2v-14c0-1.1.9-2 2-2zM16.5 2.5v4M8.5 2.5v4M3.5 10.5h18'
    }))),
  height: 24,
  width: 24
});
IconIcCalendarWhite.displayName = 'IconIcCalendarWhite';
exports.default = IconIcCalendarWhite;
