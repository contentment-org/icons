Object.defineProperty(exports, "__esModule", {
  value: true
});
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var _createElement = require('react-native-web/dist/cjs/exports/createElement');
var _createElement2 = _interopRequireDefault(_createElement);
var _StyleSheet = require('react-native-web/dist/cjs/exports/StyleSheet');
var _StyleSheet2 = _interopRequireDefault(_StyleSheet);
var _react = require('react');
var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
var createIconComponent = function createIconComponent(_ref) {
  var content = _ref.content,
    height = _ref.height,
    width = _ref.width;
  return function(props) {
    return (0, _createElement2.default)('svg', _extends({}, props, {
      style: _StyleSheet2.default.compose(styles.root, props.style),
      viewBox: '0 0 ' + width + ' ' + height
    }), content);
  };
};
var styles = _StyleSheet2.default.create({
  root: {
    display: 'inline-block',
    fill: 'currentcolor',
    height: '1.25em',
    maxWidth: '100%',
    position: 'relative',
    userSelect: 'none',
    textAlignVertical: 'text-bottom'
  }
});

exports.default = createIconComponent;
