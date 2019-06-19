Object.defineProperty(exports, "__esModule", {
  value: true
});
const _createIconComponent = require("./utils/createIconComponent");

const _createIconComponent2 = _interopRequireDefault(_createIconComponent);
const _react = require("react");

const _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj
      };
}
const pathStyle = {
  stroke: "#363636",
  strokeWidth: 5,
  strokeLinecap: "round",
  transition: "all 250ms ease-in-out",
  WebkitTransform: "rotate(0deg)",
  transform: "rotate(0deg)",
  WebkitTransformOrigin: "50% 50%",
  transformOrigin: "50% 50%",
  willChange: "transform, opacity"
};
const IconMenu = (0, _createIconComponent2.default)({
  content: _react2.default.createElement(
    "g",
    {
      fill: "none",
      stroke: "#363636",
      fillRule: "evenodd"
    },
    _react2.default.createElement("path", {
      d: "M13,26.5 L88,26.5",
      style: pathStyle
    }),
    _react2.default.createElement("path", {
      d: "M13,50.5 L88,50.5",
      style: pathStyle
    }),
    _react2.default.createElement("path", {
      d: "M13,50.5 L88,50.5",
      style: pathStyle
    }),
    _react2.default.createElement("path", {
      d: "M13,74.5 L88,74.5",
      style: pathStyle
    })
  ),
  height: 100,
  width: 100
});
IconMenu.displayName = "IconMenu";
exports.default = IconMenu;
