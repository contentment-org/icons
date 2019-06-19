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
var IconIcMoreGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: '#818D96'
    }, _react2.default.createElement('circle', {
      cx: '3.5',
      cy: '12.5',
      r: '2.5'
    }), _react2.default.createElement('circle', {
      cx: '12.5',
      cy: '12.5',
      r: '2.5'
    }), _react2.default.createElement('circle', {
      cx: '21.5',
      cy: '12.5',
      r: '2.5'
    }))),
  height: 24,
  width: 24
});
IconIcMoreGray.displayName = 'IconIcMoreGray';
exports.default = IconIcMoreGray;
