'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var firebase = require('firebase/app');
require('firebase/auth');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var firebase__default = /*#__PURE__*/_interopDefaultLegacy(firebase);

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

var authContext = /*#__PURE__*/React.createContext();
var STORAGE_KEY = "TINLOOF--EMAIL-FOR-SIGN-IN";
function ProvideAuth(_ref) {
  var config = _ref.config,
      children = _ref.children;
  React__default['default'].useEffect(function () {
    initializeFirebase(config);
  }, []);
  var auth = useProvideAuth();
  return /*#__PURE__*/React__default['default'].createElement(authContext.Provider, {
    value: auth
  }, children);
}
function useFirebaseAuth() {
  return React.useContext(authContext);
}

function useProvideAuth() {
  var _useState = React.useState("loading"),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  function register(email, password) {
    return firebase__default['default'].auth().createUserWithEmailAndPassword(email, password).then(function (response) {
      return setUser(response.user);
    })["catch"](function (error) {
      console.log(error);
    });
  }

  function login(email, password) {
    firebase__default['default'].auth().signInWithEmailAndPassword(email, password).then(function (response) {
      return setUser(response.user);
    })["catch"](function (error) {
      console.error("Error signing in: ", error);
    });
  }

  React.useEffect(function () {
    var unsubscribe = firebase__default['default'].auth().onAuthStateChanged(setUser);
    return function () {
      return unsubscribe();
    };
  }, []);
  return {
    user: user,
    register: register,
    login: login
  };
}

function initializeFirebase(config) {
  if (!firebase__default['default'].apps.length) {
    firebase__default['default'].initializeApp(config);
  } else {
    firebase__default['default'].app();
  }
}

exports.ProvideAuth = ProvideAuth;
exports.STORAGE_KEY = STORAGE_KEY;
exports.default = useFirebaseAuth;
//# sourceMappingURL=useFirebaseAuth.js.map
