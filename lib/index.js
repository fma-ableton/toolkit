'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var PropTypes = require('prop-types');
var react = require('@emotion/react');
var jsxRuntime = require('@emotion/react/jsx-runtime');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function applyResponsiveCss(atomicFunction) {
  return function responsiveCss(arg) {
    if (Array.isArray(arg)) {
      var _arg = _slicedToArray(arg, 2),
          defaultValue = _arg[0],
          responsiveValues = _arg[1];

      var defaultStyle = atomicFunction(defaultValue);
      var responsiveStyles = Object.entries(responsiveValues).sort(function (a, b) {
        return b[0] - a[0];
      }).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return /*#__PURE__*/react.css("@media screen and (max-width: ", key, "px){", atomicFunction(value), ";}" + (process.env.NODE_ENV === "production" ? "" : ";label:responsiveStyles;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVllIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVJlc3BvbnNpdmVDc3MoYXRvbWljRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlc3BvbnNpdmVDc3MoYXJnKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgY29uc3QgW2RlZmF1bHRWYWx1ZSwgcmVzcG9uc2l2ZVZhbHVlc10gPSBhcmc7XG4gICAgICBjb25zdCBkZWZhdWx0U3R5bGUgPSBhdG9taWNGdW5jdGlvbihkZWZhdWx0VmFsdWUpO1xuICAgICAgY29uc3QgcmVzcG9uc2l2ZVN0eWxlcyA9IE9iamVjdC5lbnRyaWVzKHJlc3BvbnNpdmVWYWx1ZXMpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzBdIC0gYVswXSlcbiAgICAgICAgLm1hcChcbiAgICAgICAgICAoW2tleSwgdmFsdWVdKSA9PlxuICAgICAgICAgICAgY3NzYFxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAke2tleX1weCkge1xuICAgICAgICAgICAgICAgICR7YXRvbWljRnVuY3Rpb24odmFsdWUpfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYFxuICAgICAgICApO1xuICAgICAgcmV0dXJuIFtkZWZhdWx0U3R5bGUsIHJlc3BvbnNpdmVTdHlsZXNdO1xuICAgIH1cbiAgICByZXR1cm4gYXRvbWljRnVuY3Rpb24oYXJnKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlc3BvbnNpdmVQcm9wVHlwZShwcm9wVHlwZSkge1xuICByZXR1cm4gUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgcHJvcFR5cGUsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoXG4gICAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZSwgUHJvcFR5cGVzLm9iamVjdE9mKHByb3BUeXBlKV0pXG4gICAgKSxcbiAgXSk7XG59XG4iXX0= */");
      });
      return [defaultStyle, responsiveStyles];
    }

    return atomicFunction(arg);
  };
}
function responsivePropType(propType) {
  return PropTypes__default['default'].oneOfType([propType, PropTypes__default['default'].arrayOf(PropTypes__default['default'].oneOfType([propType, PropTypes__default['default'].objectOf(propType)]))]);
}

function _EMOTION_STRINGIFIED_CSS_ERROR__$1() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var row = process.env.NODE_ENV === "production" ? {
  name: "zjik7",
  styles: "display:flex"
} : {
  name: "121vz0s-row",
  styles: "display:flex;label:row;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJc0IiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
var rowWrap = function rowWrap(wrap) {
  return /*#__PURE__*/react.css("flex-wrap:", wrap ? "wrap" : "nowrap", ";" + (process.env.NODE_ENV === "production" ? "" : ";label:rowWrap;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRb0MiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */");
};
var rowAlign = applyResponsiveCss(function (align) {
  return /*#__PURE__*/react.css("align-items:", align, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:rowAlign;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */");
});

var _ref = process.env.NODE_ENV === "production" ? {
  name: "2o6p8u",
  styles: "justify-content:space-between"
} : {
  name: "ql9g7q-rowGap",
  styles: "justify-content:space-between;label:rowGap;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQlMiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};

var rowGap = applyResponsiveCss(function (gap) {
  return gap === "spaceBetween" ? _ref : /*#__PURE__*/react.css("margin-left:", -gap, "px;" + (process.env.NODE_ENV === "production" ? "" : ";label:rowGap;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlMiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */");
});
var rowVGap = function rowVGap(vGap) {
  return !vGap ? "" : /*#__PURE__*/react.css("margin-top:", -vGap, "px;" + (process.env.NODE_ENV === "production" ? "" : ";label:rowVGap;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQlMiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */");
};
var wrapBefore = function wrapBefore(screenSize) {
  return /*#__PURE__*/react.css("@media screen and (max-width: ", screenSize, "px){flex-direction:column;}" + (process.env.NODE_ENV === "production" ? "" : ";label:wrapBefore;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQzZDIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBhcHBseVJlc3BvbnNpdmVDc3MgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IHJvdyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBjb25zdCByb3dXcmFwID0gKHdyYXApID0+IGNzc2BcbiAgZmxleC13cmFwOiAke3dyYXAgPyBcIndyYXBcIiA6IFwibm93cmFwXCJ9O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd0FsaWduID0gYXBwbHlSZXNwb25zaXZlQ3NzKFxuICAoYWxpZ24pID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHthbGlnbn07XG4gIGBcbik7XG5cbmV4cG9ydCBjb25zdCByb3dHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoKGdhcCkgPT5cbiAgZ2FwID09PSBcInNwYWNlQmV0d2VlblwiXG4gICAgPyBjc3NgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGBcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7LWdhcH1weDtcbiAgICAgIGBcbik7XG5cbmV4cG9ydCBjb25zdCByb3dWR2FwID0gKHZHYXApID0+XG4gICF2R2FwXG4gICAgPyBcIlwiXG4gICAgOiBjc3NgXG4gICAgICAgIG1hcmdpbi10b3A6ICR7LXZHYXB9cHg7XG4gICAgICBgO1xuXG5leHBvcnQgY29uc3Qgd3JhcEJlZm9yZSA9IChzY3JlZW5TaXplKSA9PiBjc3NgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2NyZWVuU2l6ZX1weCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBib3ggPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJiA+ICoge1xuICAgIGZsZXg6IDE7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBib3hHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoKGdhcCkgPT5cbiAgZ2FwID09PSBcInNwYWNlQmV0d2VlblwiXG4gICAgPyBcIlwiXG4gICAgOiBjc3NgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke2dhcH1weDtcbiAgICAgIGBcbik7XG5cbmV4cG9ydCBjb25zdCBib3hWR2FwID0gKHZHYXApID0+IGNzc2BcbiAgbWFyZ2luLXRvcDogJHt2R2FwfXB4O1xuYDtcbiJdfQ== */");
};
var box = process.env.NODE_ENV === "production" ? {
  name: "1ddla2z",
  styles: "display:flex;&>*{flex:1;}"
} : {
  name: "jxgpk4-box",
  styles: "display:flex;&>*{flex:1;};label:box;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Q3NCIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBhcHBseVJlc3BvbnNpdmVDc3MgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IHJvdyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBjb25zdCByb3dXcmFwID0gKHdyYXApID0+IGNzc2BcbiAgZmxleC13cmFwOiAke3dyYXAgPyBcIndyYXBcIiA6IFwibm93cmFwXCJ9O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd0FsaWduID0gYXBwbHlSZXNwb25zaXZlQ3NzKFxuICAoYWxpZ24pID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHthbGlnbn07XG4gIGBcbik7XG5cbmV4cG9ydCBjb25zdCByb3dHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoKGdhcCkgPT5cbiAgZ2FwID09PSBcInNwYWNlQmV0d2VlblwiXG4gICAgPyBjc3NgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGBcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7LWdhcH1weDtcbiAgICAgIGBcbik7XG5cbmV4cG9ydCBjb25zdCByb3dWR2FwID0gKHZHYXApID0+XG4gICF2R2FwXG4gICAgPyBcIlwiXG4gICAgOiBjc3NgXG4gICAgICAgIG1hcmdpbi10b3A6ICR7LXZHYXB9cHg7XG4gICAgICBgO1xuXG5leHBvcnQgY29uc3Qgd3JhcEJlZm9yZSA9IChzY3JlZW5TaXplKSA9PiBjc3NgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2NyZWVuU2l6ZX1weCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBib3ggPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJiA+ICoge1xuICAgIGZsZXg6IDE7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBib3hHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoKGdhcCkgPT5cbiAgZ2FwID09PSBcInNwYWNlQmV0d2VlblwiXG4gICAgPyBcIlwiXG4gICAgOiBjc3NgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke2dhcH1weDtcbiAgICAgIGBcbik7XG5cbmV4cG9ydCBjb25zdCBib3hWR2FwID0gKHZHYXApID0+IGNzc2BcbiAgbWFyZ2luLXRvcDogJHt2R2FwfXB4O1xuYDtcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__$1
};
var boxGap = applyResponsiveCss(function (gap) {
  return gap === "spaceBetween" ? "" : /*#__PURE__*/react.css("margin-left:", gap, "px;" + (process.env.NODE_ENV === "production" ? "" : ";label:boxGap;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRFMiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgcm93ID0gY3NzYFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd1dyYXAgPSAod3JhcCkgPT4gY3NzYFxuICBmbGV4LXdyYXA6ICR7d3JhcCA/IFwid3JhcFwiIDogXCJub3dyYXBcIn07XG5gO1xuXG5leHBvcnQgY29uc3Qgcm93QWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnbikgPT4gY3NzYFxuICAgIGFsaWduLWl0ZW1zOiAke2FsaWdufTtcbiAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd0dhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IGNzc2BcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYFxuICAgIDogY3NzYFxuICAgICAgICBtYXJnaW4tbGVmdDogJHstZ2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHJvd1ZHYXAgPSAodkdhcCkgPT5cbiAgIXZHYXBcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLXRvcDogJHstdkdhcH1weDtcbiAgICAgIGA7XG5cbmV4cG9ydCBjb25zdCB3cmFwQmVmb3JlID0gKHNjcmVlblNpemUpID0+IGNzc2BcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHtzY3JlZW5TaXplfXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveCA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcblxuICAmID4gKiB7XG4gICAgZmxleDogMTtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGJveEdhcCA9IGFwcGx5UmVzcG9uc2l2ZUNzcygoZ2FwKSA9PlxuICBnYXAgPT09IFwic3BhY2VCZXR3ZWVuXCJcbiAgICA/IFwiXCJcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7Z2FwfXB4O1xuICAgICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IGJveFZHYXAgPSAodkdhcCkgPT4gY3NzYFxuICBtYXJnaW4tdG9wOiAke3ZHYXB9cHg7XG5gO1xuIl19 */");
});
var boxVGap = function boxVGap(vGap) {
  return /*#__PURE__*/react.css("margin-top:", vGap, "px;" + (process.env.NODE_ENV === "production" ? "" : ";label:boxVGap;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9DIiwiZmlsZSI6InN0eWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gXCJAZW1vdGlvbi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBhcHBseVJlc3BvbnNpdmVDc3MgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IHJvdyA9IGNzc2BcbiAgZGlzcGxheTogZmxleDtcbmA7XG5cbmV4cG9ydCBjb25zdCByb3dXcmFwID0gKHdyYXApID0+IGNzc2BcbiAgZmxleC13cmFwOiAke3dyYXAgPyBcIndyYXBcIiA6IFwibm93cmFwXCJ9O1xuYDtcblxuZXhwb3J0IGNvbnN0IHJvd0FsaWduID0gYXBwbHlSZXNwb25zaXZlQ3NzKFxuICAoYWxpZ24pID0+IGNzc2BcbiAgICBhbGlnbi1pdGVtczogJHthbGlnbn07XG4gIGBcbik7XG5cbmV4cG9ydCBjb25zdCByb3dHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoKGdhcCkgPT5cbiAgZ2FwID09PSBcInNwYWNlQmV0d2VlblwiXG4gICAgPyBjc3NgXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGBcbiAgICA6IGNzc2BcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICR7LWdhcH1weDtcbiAgICAgIGBcbik7XG5cbmV4cG9ydCBjb25zdCByb3dWR2FwID0gKHZHYXApID0+XG4gICF2R2FwXG4gICAgPyBcIlwiXG4gICAgOiBjc3NgXG4gICAgICAgIG1hcmdpbi10b3A6ICR7LXZHYXB9cHg7XG4gICAgICBgO1xuXG5leHBvcnQgY29uc3Qgd3JhcEJlZm9yZSA9IChzY3JlZW5TaXplKSA9PiBjc3NgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR7c2NyZWVuU2l6ZX1weCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBib3ggPSBjc3NgXG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgJiA+ICoge1xuICAgIGZsZXg6IDE7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBib3hHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoKGdhcCkgPT5cbiAgZ2FwID09PSBcInNwYWNlQmV0d2VlblwiXG4gICAgPyBcIlwiXG4gICAgOiBjc3NgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAke2dhcH1weDtcbiAgICAgIGBcbik7XG5cbmV4cG9ydCBjb25zdCBib3hWR2FwID0gKHZHYXApID0+IGNzc2BcbiAgbWFyZ2luLXRvcDogJHt2R2FwfXB4O1xuYDtcbiJdfQ== */");
};

function Row(_ref) {
  var gap = _ref.gap,
      vGap = _ref.vGap,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? "stretch" : _ref$align,
      _ref$wrap = _ref.wrap,
      wrap = _ref$wrap === void 0 ? true : _ref$wrap,
      wrapBefore$1 = _ref.wrapBefore,
      children = _ref.children;
  return jsxRuntime.jsx("div", {
    css: [row, rowWrap(wrap), rowAlign(align), rowGap(gap), rowVGap(vGap), !wrapBefore$1 ? null : wrapBefore(wrapBefore$1), process.env.NODE_ENV === "production" ? "" : ";label:Row;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgcmVzcG9uc2l2ZVByb3BUeXBlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdyh7XG4gIGdhcCxcbiAgdkdhcCxcbiAgYWxpZ24gPSBcInN0cmV0Y2hcIixcbiAgd3JhcCA9IHRydWUsXG4gIHdyYXBCZWZvcmUsXG4gIGNoaWxkcmVuLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICBzdHlsZXMucm93LFxuICAgICAgICBzdHlsZXMucm93V3JhcCh3cmFwKSxcbiAgICAgICAgc3R5bGVzLnJvd0FsaWduKGFsaWduKSxcbiAgICAgICAgc3R5bGVzLnJvd0dhcChnYXApLFxuICAgICAgICBzdHlsZXMucm93VkdhcCh2R2FwKSxcbiAgICAgICAgIXdyYXBCZWZvcmUgPyBudWxsIDogc3R5bGVzLndyYXBCZWZvcmUod3JhcEJlZm9yZSksXG4gICAgICBdfVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XG4gICAgICAgICFjaGlsZCA/IG51bGwgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNzcz17W3N0eWxlcy5ib3gsIHN0eWxlcy5ib3hHYXAoZ2FwKSwgc3R5bGVzLmJveFZHYXAodkdhcCldfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgZ2FwOiByZXNwb25zaXZlUHJvcFR5cGUoXG4gICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFtcInNwYWNlQmV0d2VlblwiXSksIFByb3BUeXBlcy5udW1iZXJdKVxuICApLmlzUmVxdWlyZWQsXG4gIHZHYXA6IHJlc3BvbnNpdmVQcm9wVHlwZShcbiAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoW1wic3BhY2VCZXR3ZWVuXCJdKSwgUHJvcFR5cGVzLm51bWJlcl0pXG4gICksXG4gIGFsaWduOiByZXNwb25zaXZlUHJvcFR5cGUoXG4gICAgUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwic3RhcnRcIixcbiAgICAgIFwiY2VudGVyXCIsXG4gICAgICBcImVuZFwiLFxuICAgICAgXCJzdHJldGNoXCIsXG4gICAgICBcImZsZXgtc3RhcnRcIixcbiAgICAgIFwiZmxleC1lbmRcIixcbiAgICBdKVxuICApLFxuICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgd3JhcEJlZm9yZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuIl19 */"],
    children: React__default['default'].Children.map(children, function (child, index) {
      return !child ? null : jsxRuntime.jsx("div", {
        css: [box, boxGap(gap), boxVGap(vGap), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCWSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuaW1wb3J0IHsgcmVzcG9uc2l2ZVByb3BUeXBlIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5pbXBvcnQgKiBhcyBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdyh7XG4gIGdhcCxcbiAgdkdhcCxcbiAgYWxpZ24gPSBcInN0cmV0Y2hcIixcbiAgd3JhcCA9IHRydWUsXG4gIHdyYXBCZWZvcmUsXG4gIGNoaWxkcmVuLFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICBzdHlsZXMucm93LFxuICAgICAgICBzdHlsZXMucm93V3JhcCh3cmFwKSxcbiAgICAgICAgc3R5bGVzLnJvd0FsaWduKGFsaWduKSxcbiAgICAgICAgc3R5bGVzLnJvd0dhcChnYXApLFxuICAgICAgICBzdHlsZXMucm93VkdhcCh2R2FwKSxcbiAgICAgICAgIXdyYXBCZWZvcmUgPyBudWxsIDogc3R5bGVzLndyYXBCZWZvcmUod3JhcEJlZm9yZSksXG4gICAgICBdfVxuICAgID5cbiAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+XG4gICAgICAgICFjaGlsZCA/IG51bGwgOiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGNzcz17W3N0eWxlcy5ib3gsIHN0eWxlcy5ib3hHYXAoZ2FwKSwgc3R5bGVzLmJveFZHYXAodkdhcCldfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUm93LnByb3BUeXBlcyA9IHtcbiAgZ2FwOiByZXNwb25zaXZlUHJvcFR5cGUoXG4gICAgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9uZU9mKFtcInNwYWNlQmV0d2VlblwiXSksIFByb3BUeXBlcy5udW1iZXJdKVxuICApLmlzUmVxdWlyZWQsXG4gIHZHYXA6IHJlc3BvbnNpdmVQcm9wVHlwZShcbiAgICBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoW1wic3BhY2VCZXR3ZWVuXCJdKSwgUHJvcFR5cGVzLm51bWJlcl0pXG4gICksXG4gIGFsaWduOiByZXNwb25zaXZlUHJvcFR5cGUoXG4gICAgUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAgIFwic3RhcnRcIixcbiAgICAgIFwiY2VudGVyXCIsXG4gICAgICBcImVuZFwiLFxuICAgICAgXCJzdHJldGNoXCIsXG4gICAgICBcImZsZXgtc3RhcnRcIixcbiAgICAgIFwiZmxleC1lbmRcIixcbiAgICBdKVxuICApLFxuICB3cmFwOiBQcm9wVHlwZXMuYm9vbCxcbiAgd3JhcEJlZm9yZTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuIl19 */"],
        children: child
      }, index);
    })
  });
}
Row.propTypes = {
  gap: responsivePropType(PropTypes__default['default'].oneOfType([PropTypes__default['default'].oneOf(["spaceBetween"]), PropTypes__default['default'].number])).isRequired,
  vGap: responsivePropType(PropTypes__default['default'].oneOfType([PropTypes__default['default'].oneOf(["spaceBetween"]), PropTypes__default['default'].number])),
  align: responsivePropType(PropTypes__default['default'].oneOf(["start", "center", "end", "stretch", "flex-start", "flex-end"])),
  wrap: PropTypes__default['default'].bool,
  wrapBefore: PropTypes__default['default'].number,
  children: PropTypes__default['default'].node.isRequired
};

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }
var stack = process.env.NODE_ENV === "production" ? {
  name: "1lttcuo",
  styles: "display:grid;grid-template-rows:auto;&>*{min-width:0;}"
} : {
  name: "3va3nf-stack",
  styles: "display:grid;grid-template-rows:auto;&>*{min-width:0;};label:stack;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJd0IiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RhY2sgPSBjc3NgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcblxuICAmID4gKiB7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgYWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnblZhbHVlKSA9PlxuICAgIGNzc2BcbiAgICAgIGp1c3RpZnktaXRlbXM6ICR7YWxpZ25WYWx1ZX07XG4gICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHN0YWNrR2FwID0gYXBwbHlSZXNwb25zaXZlQ3NzKFxuICAoZ2FwKSA9PiBjc3NgXG4gICAgcm93LWdhcDogJHtnYXB9cHg7XG4gIGBcbik7XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};
var align = applyResponsiveCss(function (alignValue) {
  return /*#__PURE__*/react.css("justify-items:", alignValue, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:align;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlTyIsImZpbGUiOiJzdHlsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcblxuaW1wb3J0IHsgYXBwbHlSZXNwb25zaXZlQ3NzIH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBzdGFjayA9IGNzc2BcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuXG4gICYgPiAqIHtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBhbGlnbiA9IGFwcGx5UmVzcG9uc2l2ZUNzcyhcbiAgKGFsaWduVmFsdWUpID0+XG4gICAgY3NzYFxuICAgICAganVzdGlmeS1pdGVtczogJHthbGlnblZhbHVlfTtcbiAgICBgXG4pO1xuXG5leHBvcnQgY29uc3Qgc3RhY2tHYXAgPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChnYXApID0+IGNzc2BcbiAgICByb3ctZ2FwOiAke2dhcH1weDtcbiAgYFxuKTtcbiJdfQ== */");
});
var stackGap = applyResponsiveCss(function (gap) {
  return /*#__PURE__*/react.css("row-gap:", gap, "px;" + (process.env.NODE_ENV === "production" ? "" : ";label:stackGap;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQmMiLCJmaWxlIjoic3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5cbmltcG9ydCB7IGFwcGx5UmVzcG9uc2l2ZUNzcyB9IGZyb20gXCIuLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3Qgc3RhY2sgPSBjc3NgXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcblxuICAmID4gKiB7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgYWxpZ24gPSBhcHBseVJlc3BvbnNpdmVDc3MoXG4gIChhbGlnblZhbHVlKSA9PlxuICAgIGNzc2BcbiAgICAgIGp1c3RpZnktaXRlbXM6ICR7YWxpZ25WYWx1ZX07XG4gICAgYFxuKTtcblxuZXhwb3J0IGNvbnN0IHN0YWNrR2FwID0gYXBwbHlSZXNwb25zaXZlQ3NzKFxuICAoZ2FwKSA9PiBjc3NgXG4gICAgcm93LWdhcDogJHtnYXB9cHg7XG4gIGBcbik7XG4iXX0= */");
});

function Stack(_ref) {
  var gap = _ref.gap,
      _ref$align = _ref.align,
      align$1 = _ref$align === void 0 ? "center" : _ref$align,
      children = _ref.children;
  return jsxRuntime.jsx("div", {
    css: [stack, align(align$1), stackGap(gap), process.env.NODE_ENV === "production" ? "" : ";label:Stack;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFTIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgeyByZXNwb25zaXZlUHJvcFR5cGUgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCAqIGFzIHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhY2soeyBnYXAsIGFsaWduID0gXCJjZW50ZXJcIiwgY2hpbGRyZW4gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtbc3R5bGVzLnN0YWNrLCBzdHlsZXMuYWxpZ24oYWxpZ24pLCBzdHlsZXMuc3RhY2tHYXAoZ2FwKV19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TdGFjay5wcm9wVHlwZXMgPSB7XG4gIGdhcDogcmVzcG9uc2l2ZVByb3BUeXBlKFByb3BUeXBlcy5udW1iZXIpLmlzUmVxdWlyZWQsXG4gIGFsaWduOiByZXNwb25zaXZlUHJvcFR5cGUoXG4gICAgUHJvcFR5cGVzLm9uZU9mKFtcInN0YXJ0XCIsIFwiY2VudGVyXCIsIFwiZW5kXCIsIFwic3RyZXRjaFwiLCBcImZsZXgtc3RhcnRcIiwgXCJmbGV4LWVuZFwiXSlcbiAgKSxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG59O1xuIl19 */"],
    children: children
  });
}
Stack.propTypes = {
  gap: responsivePropType(PropTypes__default['default'].number).isRequired,
  align: responsivePropType(PropTypes__default['default'].oneOf(["start", "center", "end", "stretch", "flex-start", "flex-end"])),
  children: PropTypes__default['default'].node.isRequired
};

exports.Row = Row;
exports.Stack = Stack;
//# sourceMappingURL=index.js.map
