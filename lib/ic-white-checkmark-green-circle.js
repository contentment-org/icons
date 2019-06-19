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
var IconIcWhiteCheckmarkGreenCircle = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'circle', {
      fill: '#56BF97',
      cx: '12.5',
      cy: '12.5',
      r: '10'
    }), _react2.default.createElement('path', {
    fill: 'none',
    stroke: '#FFF',
    'strokeWidth': '1.8',
    'strokeLinecap': 'round',
    'strokeLinejoin': 'round',
    d: 'M18 8.9l-7.5 7.5L7 12.9'
  })),
  height: 24,
  width: 24
});
IconIcWhiteCheckmarkGreenCircle.displayName = 'IconIcWhiteCheckmarkGreenCircle';
exports.default = IconIcWhiteCheckmarkGreenCircle;
