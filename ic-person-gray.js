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
var IconIcPersonGray = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: '#818D96'
    }, _react2.default.createElement('path', {
      d: 'M18.7 19v-1.5c0-1.7-1.4-3.1-3.1-3.1H9.4c-1.7 0-3.1 1.4-3.1 3.1V19'
    }), _react2.default.createElement('circle', {
      cx: '12.5',
      cy: '9.1',
      r: '3.1'
    }))),
  height: 20,
  width: 20
});
IconIcPersonGray.displayName = 'IconIcPersonGray';
exports.default = IconIcPersonGray;
