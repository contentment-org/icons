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
var IconIcTrendUpBlue = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: 'none',
      stroke: '#0190BE',
      'strokeWidth': '1.6',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round'
    }, _react2.default.createElement('path', {
      d: 'M18.8 5.2l-7.6 7.6-4-4-6 6'
    }), _react2.default.createElement('path', {
      d: 'M14 5.2h4.8V10'
    }))),
  height: 20,
  width: 20
});
IconIcTrendUpBlue.displayName = 'IconIcTrendUpBlue';
exports.default = IconIcTrendUpBlue;
