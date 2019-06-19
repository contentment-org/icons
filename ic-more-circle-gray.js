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
var IconIcMoreCircleGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'circle', {
      fill: 'none',
      stroke: '#818D96',
      'strokeWidth': '1.2',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round',
      cx: '12.5',
      cy: '12.5',
      r: '6'
    }), _react2.default.createElement('g', {
    fill: '#818D96'
  }, _react2.default.createElement('circle', {
    cx: '9.1',
    cy: '12.5',
    r: '.9'
  }), _react2.default.createElement('circle', {
    cx: '12.5',
    cy: '12.5',
    r: '.9'
  }), _react2.default.createElement('circle', {
    cx: '15.9',
    cy: '12.5',
    r: '.9'
  }))),
  height: 24,
  width: 24
});
IconIcMoreCircleGray.displayName = 'IconIcMoreCircleGray';
exports.default = IconIcMoreCircleGray;
