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
var IconIlBubbles = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'circle', {
      fill: '#3ACED6',
      cx: '29.4',
      cy: '29.6',
      r: '28.6'
    }), _react2.default.createElement('circle', {
    fill: '#4DDBDB',
    cx: '66.1',
    cy: '73.6',
    r: '19.1'
  }), _react2.default.createElement('circle', {
    fill: '#3ACED6',
    cx: '37.1',
    cy: '108.9',
    r: '14.1'
  })),
  height: 115,
  width: 98
});
IconIlBubbles.displayName = 'IconIlBubbles';
exports.default = IconIlBubbles;
