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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTCard\": function() { return /* binding */ NFTCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _this = undefined;\n\nvar NFTCard = function(param) {\n    var nft = param.nft;\n    var ref;\n    // const copyMeOnClipboard = (id) => {\n    //     var text = document.getElementById(id).innerText;\n    //     var elem = document.createElement(\"textarea\");\n    //     document.body.appendChild(elem);\n    //     elem.value = text;\n    //     elem.select();\n    //     document.execCommand(\"copy\");\n    //     document.body.removeChild(elem); \n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/4 flex flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"object-cover h-128 w-full rounded-t-md\",\n                    src: nft.media[0].gateway\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col y-gap-2 px-2 py-3 bg-slate-100 rounded-b-md h-110\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl text-gray-800\",\n                                children: nft.title\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: nft.id.tokenId.substr(nft.id.tokenId.length - 4)\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: \"\".concat(nft.contract.address.substr(0, 5), \"...\").concat(nft.contract.address.substr(nft.contract.address.length - 4))\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-grow mt-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-700\",\n                            children: (ref = nft.description) === null || ref === void 0 ? void 0 : ref.substr(0, 150)\n                        }, void 0, false, {\n                            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mb-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            target: \"_blank\",\n                            href: \"https://etherscan.io/token/\".concat(nft.contract.address),\n                            className: \"py-2 px-4 bg-blue-500 w-2/4 text-center rounded-m text-white cursor-pointer mt-2\",\n                            children: \"View on etherscan\"\n                        }, void 0, false, {\n                            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/components/nftCard.jsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, _this);\n};\n_c = NFTCard;\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL25mdENhcmQuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFPLElBQU1BLE9BQU8sR0FBRyxnQkFBVztRQUFUQyxHQUFHLFNBQUhBLEdBQUc7UUE4QnVCQSxHQUFlO0lBMUI5RCxzQ0FBc0M7SUFFdEMsd0RBQXdEO0lBQ3hELHFEQUFxRDtJQUNyRCx1Q0FBdUM7SUFDdkMseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsd0NBQXdDO0lBQ3hDLE1BQU07SUFFTixxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMscUJBQXFCOzswQkFDaEMsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxZQUFZOzBCQUN2Qiw0RUFBQ0MsS0FBRztvQkFBQ0QsU0FBUyxFQUFDLHdDQUF3QztvQkFDdkRFLEdBQUcsRUFBRUosR0FBRyxDQUFDSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNDLE9BQU87Ozs7O3lCQUFROzs7OztxQkFDL0I7MEJBQ04sOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxpRUFBaUU7O2tDQUM1RSw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLEVBQUU7OzBDQUNiLDhEQUFDSyxJQUFFO2dDQUFDTCxTQUFTLEVBQUMsdUJBQXVCOzBDQUFHRixHQUFHLENBQUNRLEtBQUs7Ozs7O3FDQUFNOzBDQUN2RCw4REFBQ0MsR0FBQztnQ0FBQ1AsU0FBUyxFQUFDLGVBQWU7MENBQUdGLEdBQUcsQ0FBQ1UsRUFBRSxDQUFDQyxPQUFPLENBQUNDLE1BQU0sQ0FBQ1osR0FBRyxDQUFDVSxFQUFFLENBQUNDLE9BQU8sQ0FBQ0UsTUFBTSxHQUFHLENBQUMsQ0FBQzs7Ozs7cUNBQUs7MENBQ3BGLDhEQUFDSixHQUFDO2dDQUFDUCxTQUFTLEVBQUMsZUFBZTswQ0FDdkIsRUFBQyxDQUF3Q0YsTUFBNEQsQ0FBbEdBLEdBQUcsQ0FBQ2MsUUFBUSxDQUFDQyxPQUFPLENBQUNILE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsS0FBRyxDQUErRCxRQUE3RFosR0FBRyxDQUFDYyxRQUFRLENBQUNDLE9BQU8sQ0FBQ0gsTUFBTSxDQUFDWixHQUFHLENBQUNjLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDRixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUU7Ozs7O3FDQUN4Rzs7Ozs7OzZCQUNGO2tDQUNOLDhEQUFDWixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCO2tDQUMzQiw0RUFBQ08sR0FBQzs0QkFBQ1AsU0FBUyxFQUFDLGVBQWU7c0NBQUdGLENBQUFBLEdBQWUsR0FBZkEsR0FBRyxDQUFDZ0IsV0FBVyxjQUFmaEIsR0FBZSxXQUFRLEdBQXZCQSxLQUFBQSxDQUF1QixHQUF2QkEsR0FBZSxDQUFFWSxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQzs7Ozs7aUNBQUs7Ozs7OzZCQUNqRTtrQ0FDTiw4REFBQ1gsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjtrQ0FDckMsNEVBQUNlLEdBQUM7NEJBQ0ZDLE1BQU0sRUFBQyxRQUFROzRCQUNmQyxJQUFJLEVBQUUsNkJBQTRCLENBQXVCLE9BQXJCbkIsR0FBRyxDQUFDYyxRQUFRLENBQUNDLE9BQU8sQ0FBRTs0QkFDMURiLFNBQVMsRUFBQyxrRkFBa0Y7c0NBQUMsbUJBQWlCOzs7OztpQ0FBSTs7Ozs7NkJBQ2hIOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1Q7Q0FDSjtBQXpDWUgsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL25mdENhcmQuanN4PzYxN2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IE5GVENhcmQgPSAoe25mdH0pID0+IHtcbiAgICBcblxuXG4gICAgLy8gY29uc3QgY29weU1lT25DbGlwYm9hcmQgPSAoaWQpID0+IHtcblxuICAgIC8vICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lclRleHQ7XG4gICAgLy8gICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW0pO1xuICAgIC8vICAgICBlbGVtLnZhbHVlID0gdGV4dDtcbiAgICAvLyAgICAgZWxlbS5zZWxlY3QoKTtcbiAgICAvLyAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIC8vICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsZW0pOyBcbiAgICAvLyAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNCBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtbWRcIiA+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgaC0xMjggdy1mdWxsIHJvdW5kZWQtdC1tZFwiXG4gICAgICAgICAgICAgICAgc3JjPXtuZnQubWVkaWFbMF0uZ2F0ZXdheX0+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB5LWdhcC0yIHB4LTIgcHktMyBiZy1zbGF0ZS0xMDAgcm91bmRlZC1iLW1kIGgtMTEwXCIgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCB0ZXh0LWdyYXktODAwXCIgPntuZnQudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiID57bmZ0LmlkLnRva2VuSWQuc3Vic3RyKG5mdC5pZC50b2tlbklkLmxlbmd0aCAtIDQpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtuZnQuY29udHJhY3QuYWRkcmVzcy5zdWJzdHIoMCw1KX0uLi4ke25mdC5jb250cmFjdC5hZGRyZXNzLnN1YnN0cihuZnQuY29udHJhY3QuYWRkcmVzcy5sZW5ndGggLSA0KX1gfVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgbXQtMlwiID5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiID57bmZ0LmRlc2NyaXB0aW9uPy5zdWJzdHIoMCwgMTUwKX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG1iLTFcIiA+XG4gICAgICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vZXRoZXJzY2FuLmlvL3Rva2VuLyR7bmZ0LmNvbnRyYWN0LmFkZHJlc3N9YH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktMiBweC00IGJnLWJsdWUtNTAwIHctMi80IHRleHQtY2VudGVyIHJvdW5kZWQtbSB0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyIG10LTJcIj5WaWV3IG9uIGV0aGVyc2NhbjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gXG4gICAgKSBcbn0iXSwibmFtZXMiOlsiTkZUQ2FyZCIsIm5mdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsIm1lZGlhIiwiZ2F0ZXdheSIsImgyIiwidGl0bGUiLCJwIiwiaWQiLCJ0b2tlbklkIiwic3Vic3RyIiwibGVuZ3RoIiwiY29udHJhY3QiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJhIiwidGFyZ2V0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/nftCard.jsx\n");

/***/ })

});