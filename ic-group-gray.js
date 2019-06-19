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
var IconIcGroupGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: 'none',
      stroke: '#818D96',
      'strokeWidth': '1.6',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round'
    }, _react2.default.createElement('path', {
      d: 'M14 17.2v-1.6c0-1.8-1.4-3.2-3.2-3.2H4.4c-1.8 0-3.2 1.4-3.2 3.2v1.6'
    }), _react2.default.createElement('circle', {
      cx: '7.6',
      cy: '6',
      r: '3.2'
    }), _react2.default.createElement('path', {
      d: 'M18.8 17.2v-1.6c0-1.5-1-2.7-2.4-3.1M13.2 2.9c1.7.4 2.7 2.2 2.3 3.9-.3 1.1-1.2 2-2.3 2.3'
    }))),
  height: 20,
  width: 20
});
IconIcGroupGray.displayName = 'IconIcGroupGray';
exports.default = IconIcGroupGray;
