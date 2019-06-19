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
var IconIcGroupCAvatarGreen = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'circle', {
      fill: '#4FC096',
      cx: '15.9',
      cy: '15.9',
      r: '15.9'
    }), _react2.default.createElement('path', {
    fill: 'none',
    d: 'M0 8.2h31.7v18.7H0z'
  }), _react2.default.createElement('text', {
    transform: 'translate(9.572 23.405)',
    fill: '#FFF',
    'fontFamily': '\'OpenSans\'',
    'fontSize': '20'
  }, 'C')),
  height: 24,
  width: 24
});
IconIcGroupCAvatarGreen.displayName = 'IconIcGroupCAvatarGreen';
exports.default = IconIcGroupCAvatarGreen;
