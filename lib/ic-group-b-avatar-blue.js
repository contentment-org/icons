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
var IconIcGroupBAvatarBlue = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'circle', {
      fill: '#0190BE',
      cx: '15.9',
      cy: '15.9',
      r: '15.9'
    }), _react2.default.createElement('path', {
    fill: 'none',
    d: 'M0 7.2h31.7v18.7H0z'
  }), _react2.default.createElement('text', {
    transform: 'translate(9.372 22.384)',
    fill: '#FFF',
    'fontFamily': '\'OpenSans\'',
    'fontSize': '20'
  }, 'B')),
  height: 24,
  width: 24
});
IconIcGroupBAvatarBlue.displayName = 'IconIcGroupBAvatarBlue';
exports.default = IconIcGroupBAvatarBlue;
