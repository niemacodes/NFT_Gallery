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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTCard\": function() { return /* binding */ NFTCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar NFTCard = function(param) {\n    var nft = param.nft;\n    var ref;\n    var copyText = document.querySelector(\"#copyMe\");\n    var showText = document.querySelector(\"p\");\n    var copyMeOnClipboard = function() {\n        copyText.select();\n        copyText.setSelectionRange(0, 99999); //for mobile phone\n        document.execCommand(\"copy\");\n        showText.innerHTML = \"\".concat(copyText.value, \" is copied\");\n        setTimeout(function() {\n            showText.innerHTML = \"\";\n        }, 1000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"object-cover h-128 w-full rounded-t-md\",\n                    src: nft.media[0].gateway\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-gray-800\",\n                                children: nft.title\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: nft.id.tokenId.substr(nft.id.tokenId.length - 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                id: \"copyMe\",\n                                className: \"text-gray-600\",\n                                onClick: copyMeOnClipboard(),\n                                children: \"\".concat(nft.contract.address.substr(0, 5), \"...\").concat(nft.contract.address.substr(nft.contract.address.length - 4))\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-700\",\n                            children: (ref = nft.description) === null || ref === void 0 ? void 0 : ref.substr(0, 150)\n                        }, void 0, false, {\n                            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            href: \"https://etherscan.io/token/\".concat(nft.contract.address),\n                            className: \"py-2 px-4 bg-blue-500 w-2/4 text-center rounded-m text-white cursor-pointer mt-2\",\n                            children: \"View on etherscan\"\n                        }, void 0, false, {\n                            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_c = NFTCard;\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25mdENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFPLElBQU1BLE9BQU8sR0FBRyxnQkFBVztRQUFUQyxHQUFHLFNBQUhBLEdBQUc7UUE4QnVCQSxHQUFlO0lBNUI5RCxJQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFNBQVMsQ0FBQztJQUNsRCxJQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztJQUU1QyxJQUFNRSxpQkFBaUIsR0FBRyxXQUFNO1FBQzVCSixRQUFRLENBQUNLLE1BQU0sRUFBRSxDQUFDO1FBQ2xCTCxRQUFRLENBQUNNLGlCQUFpQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLGtCQUFrQjtRQUN4REwsUUFBUSxDQUFDTSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0JKLFFBQVEsQ0FBQ0ssU0FBUyxHQUFHLEVBQUMsQ0FBaUIsTUFBVSxDQUF6QlIsUUFBUSxDQUFDUyxLQUFLLEVBQUMsWUFBVSxDQUFDO1FBQ2xEQyxVQUFVLENBQUMsV0FBTTtZQUNqQlAsUUFBUSxDQUFDSyxTQUFTLEdBQUcsRUFBRTtTQUN0QixFQUFFLElBQUksQ0FBQztLQUNUO0lBRUgscUJBQ0ksOERBQUNHLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHFCQUFxQjs7MEJBQ2hDLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsWUFBWTswQkFDdkIsNEVBQUNDLEtBQUc7b0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7b0JBQ3ZERSxHQUFHLEVBQUVmLEdBQUcsQ0FBQ2dCLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsT0FBTzs7Ozs7eUJBQVE7Ozs7O3FCQUMvQjswQkFDTiw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlFQUFpRTs7a0NBQzVFLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsRUFBRTs7MENBQ2IsOERBQUNLLElBQUU7Z0NBQUNMLFNBQVMsRUFBQyx1QkFBdUI7MENBQUdiLEdBQUcsQ0FBQ21CLEtBQUs7Ozs7O3FDQUFNOzBDQUN2RCw4REFBQ0MsR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLGVBQWU7MENBQUdiLEdBQUcsQ0FBQ3FCLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDQyxNQUFNLENBQUN2QixHQUFHLENBQUNxQixFQUFFLENBQUNDLE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Ozs7cUNBQUs7MENBQ3BGLDhEQUFDSixHQUFDO2dDQUFDQyxFQUFFLEVBQUMsUUFBUTtnQ0FBQ1IsU0FBUyxFQUFDLGVBQWU7Z0NBQUNZLE9BQU8sRUFBRXBCLGlCQUFpQixFQUFFOzBDQUNoRSxFQUFDLENBQXdDTCxNQUEyRCxDQUFqR0EsR0FBRyxDQUFDMEIsUUFBUSxDQUFDQyxPQUFPLENBQUNKLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBRyxDQUE4RCxRQUE1RHZCLEdBQUcsQ0FBQzBCLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDSixNQUFNLENBQUN2QixHQUFHLENBQUMwQixRQUFRLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxHQUFFLENBQUMsQ0FBQyxDQUFFOzs7OztxQ0FDdkc7Ozs7Ozs2QkFDRjtrQ0FDTiw4REFBQ1osS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtrQ0FDM0IsNEVBQUNPLEdBQUM7NEJBQUNQLFNBQVMsRUFBQyxlQUFlO3NDQUFHYixDQUFBQSxHQUFlLEdBQWZBLEdBQUcsQ0FBQzRCLFdBQVcsY0FBZjVCLEdBQWUsV0FBUSxHQUF2QkEsS0FBQUEsQ0FBdUIsR0FBdkJBLEdBQWUsQ0FBRXVCLE1BQU0sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDOzs7OztpQ0FBSzs7Ozs7NkJBQ2pFO2tDQUNOLDhEQUFDWCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsMEJBQTBCO2tDQUNyQyw0RUFBQ2dCLEdBQUM7NEJBQ0ZDLE1BQU0sRUFBQyxRQUFROzRCQUNmQyxJQUFJLEVBQUUsNkJBQTRCLENBQXVCLE9BQXJCL0IsR0FBRyxDQUFDMEIsUUFBUSxDQUFDQyxPQUFPLENBQUU7NEJBQzFEZCxTQUFTLEVBQUMsa0ZBQWtGO3NDQUFDLG1CQUFpQjs7Ozs7aUNBQUk7Ozs7OzZCQUNoSDs7Ozs7O3FCQUNKOzs7Ozs7YUFDSixDQUNUO0NBQ0o7QUF6Q1lkLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9uZnRDYXJkLmpzeD82MTdlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBORlRDYXJkID0gKHtuZnR9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgY29weVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvcHlNZVwiKTtcbiAgICBjb25zdCBzaG93VGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJwXCIpO1xuXG4gICAgY29uc3QgY29weU1lT25DbGlwYm9hcmQgPSAoKSA9PiB7XG4gICAgICAgIGNvcHlUZXh0LnNlbGVjdCgpO1xuICAgICAgICBjb3B5VGV4dC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5OSk7IC8vZm9yIG1vYmlsZSBwaG9uZVxuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgIHNob3dUZXh0LmlubmVySFRNTCA9IGAke2NvcHlUZXh0LnZhbHVlfSBpcyBjb3BpZWRgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hvd1RleHQuaW5uZXJIVE1MID0gJycgICAgXG4gICAgICAgIH0sIDEwMDApXG4gICAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzQgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kXCIgPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIGgtMTI4IHctZnVsbCByb3VuZGVkLXQtbWRcIlxuICAgICAgICAgICAgICAgIHNyYz17bmZ0Lm1lZGlhWzBdLmdhdGV3YXl9PjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgeS1nYXAtMiBweC0yIHB5LTMgYmctc2xhdGUtMTAwIHJvdW5kZWQtYi1tZCBoLTExMFwiID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiID5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC1ncmF5LTgwMFwiID57bmZ0LnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIiA+e25mdC5pZC50b2tlbklkLnN1YnN0cihuZnQuaWQudG9rZW5JZC5sZW5ndGggLSA0KX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGlkPVwiY29weU1lXCIgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiIG9uQ2xpY2s9e2NvcHlNZU9uQ2xpcGJvYXJkKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2Ake25mdC5jb250cmFjdC5hZGRyZXNzLnN1YnN0cigwLDUpfS4uLiR7bmZ0LmNvbnRyYWN0LmFkZHJlc3Muc3Vic3RyKG5mdC5jb250cmFjdC5hZGRyZXNzLmxlbmd0aCAtNCl9YH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93IG10LTJcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIiA+e25mdC5kZXNjcmlwdGlvbj8uc3Vic3RyKDAsIDE1MCl9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtYi0xXCIgPlxuICAgICAgICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCIgXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2BodHRwczovL2V0aGVyc2Nhbi5pby90b2tlbi8ke25mdC5jb250cmFjdC5hZGRyZXNzfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LTIgcHgtNCBiZy1ibHVlLTUwMCB3LTIvNCB0ZXh0LWNlbnRlciByb3VuZGVkLW0gdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlciBtdC0yXCI+VmlldyBvbiBldGhlcnNjYW48L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+IFxuICAgICkgXG59Il0sIm5hbWVzIjpbIk5GVENhcmQiLCJuZnQiLCJjb3B5VGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNob3dUZXh0IiwiY29weU1lT25DbGlwYm9hcmQiLCJzZWxlY3QiLCJzZXRTZWxlY3Rpb25SYW5nZSIsImV4ZWNDb21tYW5kIiwiaW5uZXJIVE1MIiwidmFsdWUiLCJzZXRUaW1lb3V0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwibWVkaWEiLCJnYXRld2F5IiwiaDIiLCJ0aXRsZSIsInAiLCJpZCIsInRva2VuSWQiLCJzdWJzdHIiLCJsZW5ndGgiLCJvbkNsaWNrIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJhIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nftCard.jsx\n");

/***/ })

});