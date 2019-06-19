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
var IconIcClockLightBlue = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: 'none',
      stroke: '#A1C1DD',
      'strokeWidth': '2',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round'
    }, _react2.default.createElement('circle', {
      cx: '18.5',
      cy: '18.5',
      r: '17.5'
    }), _react2.default.createElement('path', {
      d: 'M18.5 8v10.5l7 3.5'
    }))),
  height: 38,
  width: 38
});
IconIcClockLightBlue.displayName = 'IconIcClockLightBlue';
exports.default = IconIcClockLightBlue;
