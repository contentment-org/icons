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
var IconIcUpArrowGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'path', {
      fill: 'none',
      stroke: '#E2E5E8',
      'strokeWidth': '2',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round',
      d: 'M4.6 16.4l7.9-7.8 7.9 7.8'
    })),
  height: 24,
  width: 24
});
IconIcUpArrowGray.displayName = 'IconIcUpArrowGray';
exports.default = IconIcUpArrowGray;
