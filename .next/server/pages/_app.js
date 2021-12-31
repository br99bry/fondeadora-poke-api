"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(244);
;// CONCATENATED MODULE: ./redux/reducers/main.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const main = (state = {
  generaciones: [],
  pokemones: [],
  pokemonSeleccionado: null,
  generacionSelecionada: ''
}, action) => {
  switch (action.type) {
    case types/* SET_GENERACIONES */.f5:
      return _objectSpread(_objectSpread({}, state), {}, {
        generaciones: action.payload
      });

    case types/* SET_POKEMONES */.yg:
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemones: action.payload
      });

    case types/* SET_POKEMON_SELECCIONADO */.r$:
      return _objectSpread(_objectSpread({}, state), {}, {
        pokemonSeleccionado: action.payload
      });

    case types/* SET_GENERACION_SELECCIONADA */.VA:
      return _objectSpread(_objectSpread({}, state), {}, {
        generacionSelecionada: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ const reducers_main = (main);
;// CONCATENATED MODULE: ./redux/reducers/rootReducer.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
  main: reducers_main
});
/* harmony default export */ const reducers_rootReducer = (rootReducer);
;// CONCATENATED MODULE: ./redux/store.js




const makeStore = () => (0,external_redux_namespaceObject.createStore)(reducers_rootReducer);

const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/_app.js
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps));

/* harmony default export */ const _app = (wrapper.withRedux(MyApp));

/***/ }),

/***/ 244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f5": () => (/* binding */ SET_GENERACIONES),
/* harmony export */   "yg": () => (/* binding */ SET_POKEMONES),
/* harmony export */   "r$": () => (/* binding */ SET_POKEMON_SELECCIONADO),
/* harmony export */   "VA": () => (/* binding */ SET_GENERACION_SELECCIONADA)
/* harmony export */ });
const SET_GENERACIONES = "SET_GENERACIONES";
const SET_POKEMONES = "SET_POKEMONES";
const SET_POKEMON_SELECCIONADO = "SET_POKEMON_SELECCIONADO";
const SET_GENERACION_SELECCIONADA = "SET_GENERACION_SELECCIONADA";

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(94));
module.exports = __webpack_exports__;

})();