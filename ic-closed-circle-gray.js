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
var IconIcClosedCircleGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'circle', {
      fill: 'none',
      stroke: '#818D97',
      'strokeWidth': '1.2',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round',
      cx: '12.5',
      cy: '12.5',
      r: '6'
    })),
  height: 24,
  width: 24
});
IconIcClosedCircleGray.displayName = 'IconIcClosedCircleGray';
exports.default = IconIcClosedCircleGray;
