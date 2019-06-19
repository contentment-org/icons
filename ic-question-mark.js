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
var IconIcQuestionMark = (0, _createIconComponent2.default)({
  content: _react2.default.createElement('g', null, _react2.default.createElement(
    'g', {
      fill: 'none',
      stroke: '#56BF97',
      'strokeWidth': '1.2',
      'strokeLinecap': 'round',
      'strokeLinejoin': 'round'
    }, _react2.default.createElement('circle', {
      cx: '12.5',
      cy: '12.5',
      r: '8'
    }), _react2.default.createElement('path', {
      d: 'M10.8 10.7c.3-.9 1.4-1.4 2.3-1.1.7.3 1.2.9 1.2 1.7 0 1.2-1.8 1.8-1.8 1.8M12.5 15.5'
    }))),
  height: 24,
  width: 24
});
IconIcQuestionMark.displayName = 'IconIcQuestionMark';
exports.default = IconIcQuestionMark;
