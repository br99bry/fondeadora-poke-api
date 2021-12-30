"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./redux/types.js
var types = __webpack_require__(614);
;// CONCATENATED MODULE: ./redux/reducers/main.js

const main = (state = {
    name: "Pikachu"
}, action)=>{
    switch(action.type){
        case types/* SET_NAME */.I:
            return {
                ...state,
                name: action.payload
            };
        default:
            return {
                ...state
            };
    }
};
/* harmony default export */ const reducers_main = (main);

;// CONCATENATED MODULE: ./redux/reducers/rootReducer.js


const rootReducer = (0,external_redux_namespaceObject.combineReducers)({
    main: reducers_main
});
/* harmony default export */ const reducers_rootReducer = (rootReducer);

;// CONCATENATED MODULE: ./redux/store.js



const makeStore = ()=>(0,external_redux_namespaceObject.createStore)(reducers_rootReducer)
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

;// CONCATENATED MODULE: ./pages/_app.js




const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    })
;
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 614:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ SET_NAME)
/* harmony export */ });
const SET_NAME = "SET_NAME";


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
var __webpack_exports__ = (__webpack_exec__(741));
module.exports = __webpack_exports__;

})();