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

/***/ "./pages/components/nftCard.jsx":
/*!**************************************!*\
  !*** ./pages/components/nftCard.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTCard\": function() { return /* binding */ NFTCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar NFTCard = function(param) {\n    var nft = param.nft;\n    var ref;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"object-cover h-128 w-full rounded-t-md\",\n                    src: nft.media[0].gateway\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                    lineNumber: 6,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                lineNumber: 5,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-gray-800\",\n                                children: nft.title\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 11,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: nft.id.tokenId.substr(nft.id.tokenId.length - 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 12,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\",\n                                children: \"\".concat(nft.contract.address.substr(0, 5), \"...\").concat(nft.contract.address.substr(nft.contract.address.length - 4))\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 13,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"\",\n                            children: (ref = nft.description) === null || ref === void 0 ? void 0 : ref.substr(0, 150)\n                        }, void 0, false, {\n                            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"\",\n                            target: \"_blank\",\n                            href: \"https://etherscan.io/token/\".concat(nft.contract.address),\n                            children: \"View on etherscan\"\n                        }, void 0, false, {\n                            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n        lineNumber: 4,\n        columnNumber: 9\n    }, _this);\n};\n_c = NFTCard;\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25mdENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFPLElBQU1BLE9BQU8sR0FBRyxnQkFBVztRQUFUQyxHQUFHLFNBQUhBLEdBQUc7UUFlVUEsR0FBZTtJQWJqRCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMscUJBQXFCOzswQkFDaEMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOzBCQUN2Qiw0RUFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLHdDQUF3QztvQkFDdkRFLEdBQUcsRUFBRUosR0FBRyxDQUFDSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU87Ozs7O3lCQUFROzs7OztxQkFDL0I7MEJBQ04sOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpRUFBaUU7O2tDQUM1RSw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLEVBQUU7OzBDQUNiLDhEQUFDSyxJQUFFO2dDQUFDTCxTQUFTLEVBQUMsdUJBQXVCOzBDQUFHRixHQUFHLENBQUNRLEtBQUs7Ozs7O3FDQUFNOzBDQUN2RCw4REFBQ0MsR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLEVBQUU7MENBQUdGLEdBQUcsQ0FBQ1UsRUFBRSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ1osR0FBRyxDQUFDVSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Ozs7cUNBQUs7MENBQ3ZFLDhEQUFDSixHQUFDO2dDQUFDUCxTQUFTLEVBQUMsRUFBRTswQ0FBRyxFQUFDLENBQXdDRixNQUEyRCxDQUFqR0EsR0FBRyxDQUFDYyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsRUFBQyxLQUFHLENBQThELFFBQTVEWixHQUFHLENBQUNjLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSCxNQUFNLENBQUNaLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDQyxPQUFPLENBQUNGLE1BQU0sR0FBRSxDQUFDLENBQUMsQ0FBRTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDM0g7a0NBQ04sOERBQUNaLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxFQUFFO2tDQUNiLDRFQUFDTyxHQUFDOzRCQUFDUCxTQUFTLEVBQUMsRUFBRTtzQ0FBR0YsQ0FBQUEsR0FBZSxHQUFmQSxHQUFHLENBQUNnQixXQUFXLGNBQWZoQixHQUFlLFdBQVEsR0FBdkJBLEtBQUFBLENBQXVCLEdBQXZCQSxHQUFlLENBQUVZLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDOzs7OztpQ0FBSzs7Ozs7NkJBQ3BEO2tDQUNOLDhEQUFDWCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsRUFBRTtrQ0FDYiw0RUFBQ2UsR0FBQzs0QkFBQ2YsU0FBUyxFQUFDLEVBQUU7NEJBQ2ZnQixNQUFNLEVBQUMsUUFBUTs0QkFBQ0MsSUFBSSxFQUFFLDZCQUE0QixDQUF1QixPQUFyQm5CLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDQyxPQUFPLENBQUU7c0NBQUUsbUJBQWlCOzs7OztpQ0FBSTs7Ozs7NkJBQy9GOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1Q7Q0FDSjtBQXhCWWhCLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZnRDYXJkLmpzeD82MTdlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBORlRDYXJkID0gKHtuZnR9KSA9PiB7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIiA+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgaC0xMjggdy1mdWxsIHJvdW5kZWQtdC1tZFwiXG4gICAgICAgICAgICAgICAgc3JjPXtuZnQubWVkaWFbMF0uZ2F0ZXdheX0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB5LWdhcC0yIHB4LTIgcHktMyBiZy1zbGF0ZS0xMDAgcm91bmRlZC1iLW1kIGgtMTEwXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktODAwXCIgPntuZnQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCIgPntuZnQuaWQudG9rZW5JZC5zdWJzdHIobmZ0LmlkLnRva2VuSWQubGVuZ3RoIC0gNCl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIiA+e2Ake25mdC5jb250cmFjdC5hZGRyZXNzLnN1YnN0cigwLDUpfS4uLiR7bmZ0LmNvbnRyYWN0LmFkZHJlc3Muc3Vic3RyKG5mdC5jb250cmFjdC5hZGRyZXNzLmxlbmd0aCAtNCl9YH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiID57bmZ0LmRlc2NyaXB0aW9uPy5zdWJzdHIoMCwgMTUwKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9ldGhlcnNjYW4uaW8vdG9rZW4vJHtuZnQuY29udHJhY3QuYWRkcmVzc31gfT5WaWV3IG9uIGV0aGVyc2NhbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gXG4gICAgKVxufSJdLCJuYW1lcyI6WyJORlRDYXJkIiwibmZ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWVkaWEiLCJnYXRld2F5IiwiaDIiLCJ0aXRsZSIsInAiLCJpZCIsInRva2VuSWQiLCJzdWJzdHIiLCJsZW5ndGgiLCJjb250cmFjdCIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImEiLCJ0YXJnZXQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/nftCard.jsx\n");

/***/ })

});