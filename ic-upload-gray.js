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
var IconIcUploadGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'path', {
      fill: 'none',
      stroke: 'rgba(129, 141, 150, .5)',
      'strokeWidth': '2',
      'strokeMiterlimit': '10',
      d: 'M31.6 10.6C30.5 5.2 25.7 1.1 20 1.1c-4.6 0-8.5 2.6-10.5 6.4C4.7 8 1 12 1 16.9c0 5.2 4.3 9.5 9.5 9.5h20.6c4.4 0 7.9-3.5 7.9-7.9 0-4.2-3.3-7.6-7.4-7.9z'
    }), _react2.default.createElement('path', {
    fill: 'rgba(129, 141, 150, .5)',
    d: 'M23.1 15.3v6.3h-6.3v-6.3h-4.7L20 7.4l7.9 7.9z'
  })),
  height: 40,
  width: 40
});
IconIcUploadGray.displayName = 'IconIcUploadGray';
exports.default = IconIcUploadGray;
