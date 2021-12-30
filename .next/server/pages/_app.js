/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n        ...pageProps,\n        __source: {\n            fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/_app.js\",\n            lineNumber: 5,\n            columnNumber: 45\n        },\n        __self: undefined\n    })\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_3__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUE4QjtBQUNMO0FBQ2U7QUFFeEMsS0FBSyxDQUFDRSxLQUFLLElBQUksQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBQyxDQUFDLHdFQUFNRCxTQUFTO1dBQUtDLFNBQVM7Ozs7Ozs7OztBQUVwRSxpRUFBZUgsMkRBQWlCLENBQUNDLEtBQUssQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9uZGVhZG9yYS1wb2tlLWFwaS8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ3cmFwcGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/reducers/main.js":
/*!********************************!*\
  !*** ./redux/reducers/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ \"./redux/types.js\");\n\nconst main = (state = {\n    generaciones: [],\n    pokemones: [],\n    pokemonSeleccionado: null,\n    generacionSelecionada: ''\n}, action)=>{\n    switch(action.type){\n        case _types__WEBPACK_IMPORTED_MODULE_0__.SET_GENERACIONES:\n            return {\n                ...state,\n                generaciones: action.payload\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.SET_POKEMONES:\n            return {\n                ...state,\n                pokemones: action.payload\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.SET_POKEMON_SELECCIONADO:\n            return {\n                ...state,\n                pokemonSeleccionado: action.payload\n            };\n        case _types__WEBPACK_IMPORTED_MODULE_0__.SET_GENERACION_SELECCIONADA:\n            return {\n                ...state,\n                generacionSelecionada: action.payload\n            };\n        default:\n            return {\n                ...state\n            };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9tYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBRTdCLEtBQUssQ0FBQ0MsSUFBSSxJQUNSQyxLQUFLLEdBQUcsQ0FBQztJQUNQQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2JDLG1CQUFtQixFQUFFLElBQUk7SUFDekJDLHFCQUFxQixFQUFFLENBQUU7QUFDM0IsQ0FBQyxFQUNEQyxNQUFNLEdBQ0gsQ0FBQztJQUNKLE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1FBQ2pCLElBQUksQ0FBQ1Isb0RBQWtCO1lBQ3JCLE1BQU0sQ0FBQyxDQUFDO21CQUFJRSxLQUFLO2dCQUFFQyxZQUFZLEVBQUVJLE1BQU0sQ0FBQ0csT0FBTztZQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDVixpREFBZTtZQUNsQixNQUFNLENBQUMsQ0FBQzttQkFBSUUsS0FBSztnQkFBRUUsU0FBUyxFQUFFRyxNQUFNLENBQUNHLE9BQU87WUFBQyxDQUFDO1FBQ2hELElBQUksQ0FBQ1YsNERBQTBCO1lBQzdCLE1BQU0sQ0FBQyxDQUFDO21CQUFJRSxLQUFLO2dCQUFFRyxtQkFBbUIsRUFBRUUsTUFBTSxDQUFDRyxPQUFPO1lBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUNWLCtEQUE2QjtZQUNoQyxNQUFNLENBQUMsQ0FBQzttQkFBSUUsS0FBSztnQkFBRUkscUJBQXFCLEVBQUVDLE1BQU0sQ0FBQ0csT0FBTztZQUFDLENBQUM7O1lBRTFELE1BQU0sQ0FBQyxDQUFDO21CQUFJUixLQUFLO1lBQUMsQ0FBQzs7QUFFekIsQ0FBQztBQUVELGlFQUFlRCxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb25kZWFkb3JhLXBva2UtYXBpLy4vcmVkdXgvcmVkdWNlcnMvbWFpbi5qcz9lZDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHQgZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmNvbnN0IG1haW4gPSAoXG4gIHN0YXRlID0ge1xuICAgIGdlbmVyYWNpb25lczogW10sXG4gICAgcG9rZW1vbmVzOiBbXSxcbiAgICBwb2tlbW9uU2VsZWNjaW9uYWRvOiBudWxsLFxuICAgIGdlbmVyYWNpb25TZWxlY2lvbmFkYTogJycsXG4gIH0sXG4gIGFjdGlvblxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIHQuU0VUX0dFTkVSQUNJT05FUzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBnZW5lcmFjaW9uZXM6IGFjdGlvbi5wYXlsb2FkIH07XG4gICAgY2FzZSB0LlNFVF9QT0tFTU9ORVM6XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9rZW1vbmVzOiBhY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgdC5TRVRfUE9LRU1PTl9TRUxFQ0NJT05BRE86XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgcG9rZW1vblNlbGVjY2lvbmFkbzogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBjYXNlIHQuU0VUX0dFTkVSQUNJT05fU0VMRUNDSU9OQURBOlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGdlbmVyYWNpb25TZWxlY2lvbmFkYTogYWN0aW9uLnBheWxvYWQgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgbWFpbjtcbiJdLCJuYW1lcyI6WyJ0IiwibWFpbiIsInN0YXRlIiwiZ2VuZXJhY2lvbmVzIiwicG9rZW1vbmVzIiwicG9rZW1vblNlbGVjY2lvbmFkbyIsImdlbmVyYWNpb25TZWxlY2lvbmFkYSIsImFjdGlvbiIsInR5cGUiLCJTRVRfR0VORVJBQ0lPTkVTIiwicGF5bG9hZCIsIlNFVF9QT0tFTU9ORVMiLCJTRVRfUE9LRU1PTl9TRUxFQ0NJT05BRE8iLCJTRVRfR0VORVJBQ0lPTl9TRUxFQ0NJT05BREEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/main.js\n");

/***/ }),

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./redux/reducers/main.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({\n    main: _main__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9yZWR1Y2Vycy9yb290UmVkdWNlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXlCO0FBQ2M7QUFFdkMsS0FBSyxDQUFDRSxXQUFXLEdBQUdELHNEQUFlLENBQUMsQ0FBQztJQUNuQ0QsSUFBSSxFQUFFQSw2Q0FBSTtBQUNaLENBQUM7QUFFRCxpRUFBZUUsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9uZGVhZG9yYS1wb2tlLWFwaS8uL3JlZHV4L3JlZHVjZXJzL3Jvb3RSZWR1Y2VyLmpzPzZiMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1haW4gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbWFpbjogbWFpbixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJtYWluIiwiY29tYmluZVJlZHVjZXJzIiwicm9vdFJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/rootReducer.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/rootReducer */ \"./redux/reducers/rootReducer.js\");\n\n\n\nconst makeStore = ()=>(0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDaUI7QUFDRjtBQUVoRCxLQUFLLENBQUNHLFNBQVMsT0FBU0gsa0RBQVcsQ0FBQ0UsNkRBQVc7O0FBQ3hDLEtBQUssQ0FBQ0UsT0FBTyxHQUFHSCxpRUFBYSxDQUFDRSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9uZGVhZG9yYS1wb2tlLWFwaS8uL3JlZHV4L3N0b3JlLmpzPzM1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9yb290UmVkdWNlcic7XG5cbmNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IGNyZWF0ZVN0b3JlKHJvb3RSZWR1Y2VyKTtcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpOyJdLCJuYW1lcyI6WyJjcmVhdGVTdG9yZSIsImNyZWF0ZVdyYXBwZXIiLCJyb290UmVkdWNlciIsIm1ha2VTdG9yZSIsIndyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./redux/types.js":
/*!************************!*\
  !*** ./redux/types.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_GENERACIONES\": () => (/* binding */ SET_GENERACIONES),\n/* harmony export */   \"SET_POKEMONES\": () => (/* binding */ SET_POKEMONES),\n/* harmony export */   \"SET_POKEMON_SELECCIONADO\": () => (/* binding */ SET_POKEMON_SELECCIONADO),\n/* harmony export */   \"SET_GENERACION_SELECCIONADA\": () => (/* binding */ SET_GENERACION_SELECCIONADA)\n/* harmony export */ });\nconst SET_GENERACIONES = \"SET_GENERACIONES\";\nconst SET_POKEMONES = \"SET_POKEMONES\";\nconst SET_POKEMON_SELECCIONADO = \"SET_POKEMON_SELECCIONADO\";\nconst SET_GENERACION_SELECCIONADA = \"SET_GENERACION_SELECCIONADA\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC90eXBlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sS0FBSyxDQUFDQSxnQkFBZ0IsR0FBRyxDQUFrQjtBQUMzQyxLQUFLLENBQUNDLGFBQWEsR0FBRyxDQUFlO0FBQ3JDLEtBQUssQ0FBQ0Msd0JBQXdCLEdBQUcsQ0FBMEI7QUFDM0QsS0FBSyxDQUFDQywyQkFBMkIsR0FBRyxDQUE2QiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvbmRlYWRvcmEtcG9rZS1hcGkvLi9yZWR1eC90eXBlcy5qcz82MGQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfR0VORVJBQ0lPTkVTID0gXCJTRVRfR0VORVJBQ0lPTkVTXCI7XG5leHBvcnQgY29uc3QgU0VUX1BPS0VNT05FUyA9IFwiU0VUX1BPS0VNT05FU1wiO1xuZXhwb3J0IGNvbnN0IFNFVF9QT0tFTU9OX1NFTEVDQ0lPTkFETyA9IFwiU0VUX1BPS0VNT05fU0VMRUNDSU9OQURPXCI7XG5leHBvcnQgY29uc3QgU0VUX0dFTkVSQUNJT05fU0VMRUNDSU9OQURBID0gXCJTRVRfR0VORVJBQ0lPTl9TRUxFQ0NJT05BREFcIjsiXSwibmFtZXMiOlsiU0VUX0dFTkVSQUNJT05FUyIsIlNFVF9QT0tFTU9ORVMiLCJTRVRfUE9LRU1PTl9TRUxFQ0NJT05BRE8iLCJTRVRfR0VORVJBQ0lPTl9TRUxFQ0NJT05BREEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/types.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();