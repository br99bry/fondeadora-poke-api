"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/actions/main */ \"./redux/actions/main.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_CardGeneration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CardGeneration */ \"./components/CardGeneration.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: rgba(36, 56, 91, 1);\\n  opacity: 0.8;\\n  background-image: linear-gradient(\\n      30deg,\\n      #121f3d 12%,\\n      transparent 12.5%,\\n      transparent 87%,\\n      #121f3d 87.5%,\\n      #121f3d\\n    ),\\n    linear-gradient(\\n      150deg,\\n      #121f3d 12%,\\n      transparent 12.5%,\\n      transparent 87%,\\n      #121f3d 87.5%,\\n      #121f3d\\n    ),\\n    linear-gradient(\\n      30deg,\\n      #121f3d 12%,\\n      transparent 12.5%,\\n      transparent 87%,\\n      #121f3d 87.5%,\\n      #121f3d\\n    ),\\n    linear-gradient(\\n      150deg,\\n      #121f3d 12%,\\n      transparent 12.5%,\\n      transparent 87%,\\n      #121f3d 87.5%,\\n      #121f3d\\n    ),\\n    linear-gradient(\\n      60deg,\\n      #121f3d77 25%,\\n      transparent 25.5%,\\n      transparent 75%,\\n      #121f3d77 75%,\\n      #121f3d77\\n    ),\\n    linear-gradient(\\n      60deg,\\n      #121f3d77 25%,\\n      transparent 25.5%,\\n      transparent 75%,\\n      #121f3d77 75%,\\n      #121f3d77\\n    );\\n  background-size: 20px 35px;\\n  background-position: 0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px;\\n  width: 100%;\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  /* overflow: hidden; */\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  background-color: rgba(36, 56, 91, 1);\\n  width: 80%;\\n  padding: 30px;\\n  border-radius: 5px;\\n  position: relative;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 140px;\\n  position: absolute;\\n  left: -50px;\\n  top: -50px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-family: 'Roboto Mono', monospace;\\n  font-size: 2.5rem;\\n  color: white;\\n  margin-bottom: 2.5rem;\\n  text-align: center;\\n  @media (max-width: 1200px){\\n    font-size: 2rem;\\n  }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-family: 'Roboto Mono', monospace;\\n  font-size: 1.5rem;\\n  color: white;\\n  margin-bottom: 2.5rem;\\n  @media (max-width: 1200px){\\n    font-size: 1rem;\\n  }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  justify-content: flex-start;\\n  align-items: flex-start;\\n  flex-wrap: wrap;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar App = function(props) {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), img = ref[0], setImg = ref[1];\n    var generaciones = props.generaciones, setGeneraciones = props.setGeneraciones, setGeneracionSeleccionada = props.setGeneracionSeleccionada;\n    var handleClick = function(url) {\n        setGeneracionSeleccionada(url);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        fetch(\"https://pokeapi.co/api/v2/pokemon/pikachu\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setImg(data.sprites.front_default);\n        });\n        fetch(\"https://pokeapi.co/api/v2/generation/\").then(function(response) {\n            return response.json();\n        }).then(function(data) {\n            return setGeneraciones(data.results);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                __source: {\n                    fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                    lineNumber: 30,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"title\", {\n                        __source: {\n                            fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                            lineNumber: 31,\n                            columnNumber: 7\n                        },\n                        __self: _this,\n                        children: \"Mundo Pokemon\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\",\n                        __source: {\n                            fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                            lineNumber: 32,\n                            columnNumber: 7\n                        },\n                        __self: _this\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Wrapper, {\n                __source: {\n                    fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                    lineNumber: 34,\n                    columnNumber: 5\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(WelcomeCard, {\n                    __source: {\n                        fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                        lineNumber: 35,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PictureMain, {\n                            src: img,\n                            __source: {\n                                fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            },\n                            __self: _this\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Title, {\n                            __source: {\n                                fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                lineNumber: 37,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: [\n                                \"Bienvenido a mundo Pok\\xe9mon \",\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_icons_md__WEBPACK_IMPORTED_MODULE_7__.MdOutlineCatchingPokemon, {\n                                    __source: {\n                                        fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 38\n                                    },\n                                    __self: _this\n                                })\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SubTitle, {\n                            __source: {\n                                fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: \"Elije una generaci\\xf3n de pok\\xe9mon\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(GenerationsWrap, {\n                            __source: {\n                                fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            },\n                            __self: _this,\n                            children: generaciones.length > 0 && generaciones.map(function(item) {\n                                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"generation\",\n                                    __source: {\n                                        fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this1,\n                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"a\", {\n                                        onClick: function() {\n                                            return handleClick(item.url);\n                                        },\n                                        __source: {\n                                            fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_CardGeneration__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            text: item.name,\n                                            __source: {\n                                                fileName: \"/home/avenger/desarrolloDeSoftware/pruebaTecnicaFondeadora/fondeadora-poke-api/pages/index.js\",\n                                                lineNumber: 47,\n                                                columnNumber: 17\n                                            },\n                                            __self: _this1\n                                        })\n                                    })\n                                }, item.name);\n                            })\n                        })\n                    ]\n                })\n            })\n        ]\n    }));\n};\n_s(App, \"X84oG7rPwBW3Op/2mv/xhVbwveQ=\");\n_c = App;\nvar Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].main(_templateObject());\n_c1 = Wrapper;\nvar WelcomeCard = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].section(_templateObject1());\n_c2 = WelcomeCard;\nvar PictureMain = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].img(_templateObject2());\n_c3 = PictureMain;\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h1(_templateObject3());\n_c4 = Title;\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].h2(_templateObject4());\n_c5 = SubTitle;\nvar GenerationsWrap = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div(_templateObject5());\n_c6 = GenerationsWrap;\nvar mapStateToProps = function(state) {\n    return {\n        generaciones: state.main.generaciones\n    };\n};\nvar mapDispatchToProps = {\n    setGeneraciones: _redux_actions_main__WEBPACK_IMPORTED_MODULE_2__.setGeneraciones,\n    setGeneracionSeleccionada: _redux_actions_main__WEBPACK_IMPORTED_MODULE_2__.setGeneracionSeleccionada\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, mapDispatchToProps)(App));\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"Wrapper\");\n$RefreshReg$(_c2, \"WelcomeCard\");\n$RefreshReg$(_c3, \"PictureMain\");\n$RefreshReg$(_c4, \"Title\");\n$RefreshReg$(_c5, \"SubTitle\");\n$RefreshReg$(_c6, \"GenerationsWrap\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNDLFdBQVcsR0FBR3ZCLDZEQUFVO01BQXhCdUIsV0FBVztBQU9qQixHQUFLLENBQUNFLEtBQUssR0FBR3pCLDREQUFTO01BQWpCeUIsS0FBSztBQVdYLEdBQUssQ0FBQ0MsUUFBUSxHQUFHMUIsNERBQVM7TUFBcEIwQixRQUFRO0FBVWQsR0FBSyxDQUFDQyxlQUFlLEdBQUczQiw2REFBVTtNQUE1QjJCLGVBQWU7QUFPckIsR0FBSyxDQUFDYyxlQUFlLEdBQUcsUUFBUSxDQUFQQyxLQUFLO0lBQUssTUFDaEMsQ0FEaUMsQ0FBQztRQUNuQ3BDLFlBQVksRUFBRW9DLEtBQUssQ0FBQ04sSUFBSSxDQUFDOUIsWUFBWTtJQUN2QyxDQUFDOztBQUVELEdBQUssQ0FBQ3FDLGtCQUFrQixHQUFHLENBQUM7SUFDMUJsRCxlQUFlLEVBQUVBLGdFQUFlO0lBQ2hDQyx5QkFBeUIsRUFBRUEsMEVBQXlCO0FBQ3RELENBQUM7QUFFRCwrREFBZUYsb0RBQU8sQ0FBQ2lELGVBQWUsRUFBRUUsa0JBQWtCLEVBQUV6QyxHQUFHLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHNldEdlbmVyYWNpb25lcyxzZXRHZW5lcmFjaW9uU2VsZWNjaW9uYWRhIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvbWFpblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTWRPdXRsaW5lQ2F0Y2hpbmdQb2tlbW9uIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDYXJkR2VuZXJhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkR2VuZXJhdGlvblwiO1xuXG5jb25zdCBBcHAgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2ltZywgc2V0SW1nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7Z2VuZXJhY2lvbmVzLCBzZXRHZW5lcmFjaW9uZXMsIHNldEdlbmVyYWNpb25TZWxlY2Npb25hZGF9ID0gcHJvcHM7XG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKHVybCkgPT4ge1xuICAgIHNldEdlbmVyYWNpb25TZWxlY2Npb25hZGEodXJsKTtcbiAgfVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi9waWthY2h1XCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRJbWcoZGF0YS5zcHJpdGVzLmZyb250X2RlZmF1bHQpKTtcblxuICAgIGZldGNoKFwiaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9nZW5lcmF0aW9uL1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0R2VuZXJhY2lvbmVzKGRhdGEucmVzdWx0cykpO1xuICB9LCBbXSk7XG5cbiAgXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5NdW5kbyBQb2tlbW9uPC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPFdyYXBwZXI+XG4gICAgICA8V2VsY29tZUNhcmQ+XG4gICAgICAgIDxQaWN0dXJlTWFpbiBzcmM9e2ltZ30gLz5cbiAgICAgICAgPFRpdGxlPlxuICAgICAgICAgIEJpZW52ZW5pZG8gYSBtdW5kbyBQb2vDqW1vbiA8TWRPdXRsaW5lQ2F0Y2hpbmdQb2tlbW9uLz4gXG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxTdWJUaXRsZT5FbGlqZSB1bmEgZ2VuZXJhY2nDs24gZGUgcG9rw6ltb248L1N1YlRpdGxlPlxuICAgICAgICA8R2VuZXJhdGlvbnNXcmFwPlxuICAgICAgICAgIHtcbiAgICAgICAgICBnZW5lcmFjaW9uZXMubGVuZ3RoPjAgJiZcbiAgICAgICAgICBnZW5lcmFjaW9uZXMubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2l0ZW0ubmFtZX0gaHJlZj1cImdlbmVyYXRpb25cIiA+XG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eyAoKSA9PiBoYW5kbGVDbGljayhpdGVtLnVybCkgfT5cbiAgICAgICAgICAgICAgICA8Q2FyZEdlbmVyYXRpb24gdGV4dD17aXRlbS5uYW1lfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvR2VuZXJhdGlvbnNXcmFwPlxuICAgICAgPC9XZWxjb21lQ2FyZD5cbiAgICA8L1dyYXBwZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBXcmFwcGVyID0gc3R5bGVkLm1haW5gXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzYsIDU2LCA5MSwgMSk7XG4gIG9wYWNpdHk6IDAuODtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgMzBkZWcsXG4gICAgICAjMTIxZjNkIDEyJSxcbiAgICAgIHRyYW5zcGFyZW50IDEyLjUlLFxuICAgICAgdHJhbnNwYXJlbnQgODclLFxuICAgICAgIzEyMWYzZCA4Ny41JSxcbiAgICAgICMxMjFmM2RcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE1MGRlZyxcbiAgICAgICMxMjFmM2QgMTIlLFxuICAgICAgdHJhbnNwYXJlbnQgMTIuNSUsXG4gICAgICB0cmFuc3BhcmVudCA4NyUsXG4gICAgICAjMTIxZjNkIDg3LjUlLFxuICAgICAgIzEyMWYzZFxuICAgICksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgMzBkZWcsXG4gICAgICAjMTIxZjNkIDEyJSxcbiAgICAgIHRyYW5zcGFyZW50IDEyLjUlLFxuICAgICAgdHJhbnNwYXJlbnQgODclLFxuICAgICAgIzEyMWYzZCA4Ny41JSxcbiAgICAgICMxMjFmM2RcbiAgICApLFxuICAgIGxpbmVhci1ncmFkaWVudChcbiAgICAgIDE1MGRlZyxcbiAgICAgICMxMjFmM2QgMTIlLFxuICAgICAgdHJhbnNwYXJlbnQgMTIuNSUsXG4gICAgICB0cmFuc3BhcmVudCA4NyUsXG4gICAgICAjMTIxZjNkIDg3LjUlLFxuICAgICAgIzEyMWYzZFxuICAgICksXG4gICAgbGluZWFyLWdyYWRpZW50KFxuICAgICAgNjBkZWcsXG4gICAgICAjMTIxZjNkNzcgMjUlLFxuICAgICAgdHJhbnNwYXJlbnQgMjUuNSUsXG4gICAgICB0cmFuc3BhcmVudCA3NSUsXG4gICAgICAjMTIxZjNkNzcgNzUlLFxuICAgICAgIzEyMWYzZDc3XG4gICAgKSxcbiAgICBsaW5lYXItZ3JhZGllbnQoXG4gICAgICA2MGRlZyxcbiAgICAgICMxMjFmM2Q3NyAyNSUsXG4gICAgICB0cmFuc3BhcmVudCAyNS41JSxcbiAgICAgIHRyYW5zcGFyZW50IDc1JSxcbiAgICAgICMxMjFmM2Q3NyA3NSUsXG4gICAgICAjMTIxZjNkNzdcbiAgICApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwcHggMzVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwLCAwIDAsIDEwcHggMThweCwgMTBweCAxOHB4LCAwIDAsIDEwcHggMThweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBvdmVyZmxvdzogaGlkZGVuOyAqL1xuYDtcblxuY29uc3QgV2VsY29tZUNhcmQgPSBzdHlsZWQuc2VjdGlvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNiwgNTYsIDkxLCAxKTtcbiAgd2lkdGg6IDgwJTtcbiAgcGFkZGluZzogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jb25zdCBQaWN0dXJlTWFpbiA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNTBweDtcbiAgdG9wOiAtNTBweDtcbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLmgxYFxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJywgbW9ub3NwYWNlO1xuICBmb250LXNpemU6IDIuNXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCl7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG5gO1xuXG5jb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICBAbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KXtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbmA7XG5cbmNvbnN0IEdlbmVyYXRpb25zV3JhcCA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbmA7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgZ2VuZXJhY2lvbmVzOiBzdGF0ZS5tYWluLmdlbmVyYWNpb25lcyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIHNldEdlbmVyYWNpb25lczogc2V0R2VuZXJhY2lvbmVzLFxuICBzZXRHZW5lcmFjaW9uU2VsZWNjaW9uYWRhOiBzZXRHZW5lcmFjaW9uU2VsZWNjaW9uYWRhXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShBcHApO1xuIl0sIm5hbWVzIjpbImNvbm5lY3QiLCJzZXRHZW5lcmFjaW9uZXMiLCJzZXRHZW5lcmFjaW9uU2VsZWNjaW9uYWRhIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZE91dGxpbmVDYXRjaGluZ1Bva2Vtb24iLCJIZWFkIiwiTGluayIsInN0eWxlZCIsIkNhcmRHZW5lcmF0aW9uIiwiQXBwIiwicHJvcHMiLCJpbWciLCJzZXRJbWciLCJnZW5lcmFjaW9uZXMiLCJoYW5kbGVDbGljayIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsInJlc3VsdHMiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsIldyYXBwZXIiLCJXZWxjb21lQ2FyZCIsIlBpY3R1cmVNYWluIiwic3JjIiwiVGl0bGUiLCJTdWJUaXRsZSIsIkdlbmVyYXRpb25zV3JhcCIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJrZXkiLCJocmVmIiwiYSIsIm9uQ2xpY2siLCJ0ZXh0IiwibWFpbiIsInNlY3Rpb24iLCJoMSIsImgyIiwiZGl2IiwibWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});