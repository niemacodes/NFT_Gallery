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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! os */ \"./node_modules/next/dist/compiled/os-browserify/browser.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), wallet = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), collection = ref1[0], setCollectionAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), NFTs = ref2[0], setNFTs = ref2[1];\n    var fetchNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var nfts, requestOptions, api_key, baseURL, fetchURL;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        console.log(\"fetching NFT's\");\n                        if (collection.length) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\",\n                            redirect: \"follow\"\n                        };\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTs/\");\n                        fetchURL = \"\".concat(baseURL, \"?owner=\").concat(wallet);\n                        fetch(fetchURL, requestOptions).then(function(response) {\n                            return response.json();\n                        }).then(function(response) {\n                            return JSON.stringify(response, null, 2);\n                        }).then(function(result) {\n                            return console.log(result);\n                        }).catch(function(error) {\n                            return console.log(\"error\", error);\n                        });\n                        _ctx.next = 10;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 10:\n                        // fetch NFT's:\n                        nfts = _ctx.sent;\n                        _ctx.next = 14;\n                        break;\n                    case 13:\n                        {}\n                    case 14:\n                        if (nfts) {\n                            console.log(nfts);\n                        // setNFTs(nfts);\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-center py-2\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    onChange: function(e) {\n                        setWalletAddress(e.target.value);\n                    },\n                    value: wallet,\n                    type: \"text\",\n                    placeholder: \"Add your wallet address:\"\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    onChange: function(e) {\n                        setCollectionAddress(e.target.value);\n                    },\n                    value: collection,\n                    type: \"text\",\n                    placeholder: \"Add the collection address:\"\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        type: \"checkbox\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 16\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        fetchNFTs();\n                    },\n                    children: \"Let's go! \"\n                }, void 0, false, {\n                    fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"LXOiEPL7RwfWdFWG8y1DwNVz4lQ=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNFO0FBQ0Q7QUFDRzs7QUFFaEMsSUFBTUksSUFBSSxHQUFHLFdBQU07O0lBQ2pCLElBQW1DRCxHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTmpELE1BTWUsR0FBc0JBLEdBQVksR0FBbEMsRUFOZixnQkFNaUMsR0FBSUEsR0FBWSxHQUFoQjtJQUMvQixJQUEyQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVB6RCxVQU9tQixHQUEwQkEsSUFBWSxHQUF0QyxFQVBuQixvQkFPeUMsR0FBSUEsSUFBWSxHQUFoQjtJQUN2QyxJQUF3QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVJ0QyxJQVFhLEdBQWFBLElBQVksR0FBekIsRUFSYixPQVFzQixHQUFJQSxJQUFZLEdBQWhCO0lBRXBCLElBQU1RLFNBQVM7bUJBQUcsNE1BQVc7Z0JBRXZCQyxJQUFJLEVBTUZDLGNBQWMsRUFLWkMsT0FBTyxFQUNQQyxPQUFPLEVBQ1BDLFFBQVE7Ozs7d0JBekJwQixDQVlhO3dCQUNUQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRCQUUxQlgsVUFBVSxDQUFDWSxNQUFNOzs7O3dCQUdmTixjQUFjLEdBQUc7NEJBQ25CTyxNQUFNLEVBQUUsS0FBSzs0QkFDYkMsUUFBUSxFQUFFLFFBQVE7eUJBQ25CLENBQUM7d0JBRUlQLE9BQU8sR0FBRyxrQ0FBa0MsQ0FBQzt3QkFDN0NDLE9BQU8sR0FBRyx1Q0FBc0MsQ0FBVSxNQUFTLENBQWpCRCxPQUFPLEVBQUMsV0FBUyxDQUFDLENBQUM7d0JBQ3JFRSxRQUFRLEdBQUcsRUFBQyxDQUFtQlgsTUFBTSxDQUF2QlUsT0FBTyxFQUFDLFNBQU8sQ0FBUyxRQUFQVixNQUFNLENBQUUsQ0FBQzt3QkFFOUNpQixLQUFLLENBQUNOLFFBQVEsRUFBRUgsY0FBYyxDQUFDLENBQzVCVSxJQUFJLENBQUNDLFNBQUFBLFFBQVE7bUNBQUlBLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO3lCQUFBLENBQUMsQ0FDakNGLElBQUksQ0FBQ0MsU0FBQUEsUUFBUTttQ0FBSUUsSUFBSSxDQUFDQyxTQUFTLENBQUNILFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3lCQUFBLENBQUMsQ0FDbkRELElBQUksQ0FBQ0ssU0FBQUEsTUFBTTttQ0FBSVgsT0FBTyxDQUFDQyxHQUFHLENBQUNVLE1BQU0sQ0FBQzt5QkFBQSxDQUFDLENBQ25DQyxLQUFLLENBQUNDLFNBQUFBLEtBQUs7bUNBQUliLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sRUFBRVksS0FBSyxDQUFDO3lCQUFBLENBQUM7OytCQUduQ1IsS0FBSyxDQUFDTixRQUFRLEVBQUVILGNBQWMsQ0FBQyxDQUFDVSxJQUFJLENBQUNRLFNBQUFBLElBQUk7bUNBQUlBLElBQUksQ0FBQ04sSUFBSSxFQUFFO3lCQUFBLENBQUM7O3dCQUR0RSxlQUFlO3dCQUNmYixJQUFJLFlBQWtFOzs7O3dCQUUvRCxFQUVOOzt3QkFFRCxJQUFHQSxJQUFJLEVBQUM7NEJBQ05LLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixJQUFJLENBQUM7d0JBQ2pCLGlCQUFpQjt5QkFDbEI7Ozs7OztTQUNGO3dCQWxDS0QsU0FBUzs7O09Ba0NkO0lBRUQscUJBQ0UsOERBQUNxQixLQUFHO1FBQUNDLFNBQVMsRUFBQyw2REFBNkQ7a0JBQzFFLDRFQUFDRCxLQUFHOzs4QkFDRiw4REFBQ0UsT0FBSztvQkFDSkMsUUFBUSxFQUFFLFNBQUNDLENBQUMsRUFBSTt3QkFBQzlCLGdCQUFnQixDQUFDOEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQztxQkFBQztvQkFDbERBLEtBQUssRUFBRWpDLE1BQU07b0JBQ2JrQyxJQUFJLEVBQUUsTUFBTTtvQkFDWkMsV0FBVyxFQUFDLDBCQUEwQjs7Ozs7eUJBQ2hDOzhCQUNSLDhEQUFDTixPQUFLO29CQUNKQyxRQUFRLEVBQUUsU0FBQ0MsQ0FBQyxFQUFHO3dCQUFDNUIsb0JBQW9CLENBQUM0QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO3FCQUFDO29CQUNyREEsS0FBSyxFQUFFL0IsVUFBVTtvQkFDakJnQyxJQUFJLEVBQUUsTUFBTTtvQkFDWkMsV0FBVyxFQUFDLDZCQUE2Qjs7Ozs7eUJBQ25DOzhCQUNSLDhEQUFDQyxPQUFLOzhCQUFDLDRFQUFDUCxPQUFLO3dCQUFDSyxJQUFJLEVBQUUsVUFBVTs7Ozs7NkJBQVU7Ozs7O3lCQUFROzhCQUNoRCw4REFBQ0csUUFBTTtvQkFDTEMsT0FBTyxFQUNMLFdBQU07d0JBQ0poQyxTQUFTLEVBQUU7cUJBQ1o7OEJBQ0QsWUFBVTs7Ozs7eUJBQVM7Ozs7OztpQkFDbkI7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBbEVLUCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFvRVYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3dhbGxldCwgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25BZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbTkZUcywgc2V0TkZUc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3QgZmV0Y2hORlRzID0gYXN5bmMoKSA9PiB7XG4gICAgXG4gICAgbGV0IG5mdHM7XG4gICAgY29uc29sZS5sb2coXCJmZXRjaGluZyBORlQnc1wiKTtcblxuICAgIGlmKCFjb2xsZWN0aW9uLmxlbmd0aCl7XG5cbiAgICAgIC8vIE91ciBBbGNoZW15IE5GVCBBUEkgcmVxdWVzdHM6IFxuICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgICAgIH07XG4gICAgICBcbiAgICAgIGNvbnN0IGFwaV9rZXkgPSBcIldBTTgwTU1pVEwyN0c0RTZGZHZ4OVh3UldCeXpjYzc1XCI7XG4gICAgICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vZXRoLW1haW5uZXQuYWxjaGVteWFwaS5pby92Mi8ke2FwaV9rZXl9L2dldE5GVHMvYDtcbiAgICAgIGNvbnN0IGZldGNoVVJMID0gYCR7YmFzZVVSTH0/b3duZXI9JHt3YWxsZXR9YDtcbiAgICAgIFxuICAgICAgZmV0Y2goZmV0Y2hVUkwsIHJlcXVlc3RPcHRpb25zKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLCBudWxsLCAyKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpXG5cbiAgICAvLyBmZXRjaCBORlQnczpcbiAgICBuZnRzID0gYXdhaXQgZmV0Y2goZmV0Y2hVUkwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpO1xuXG4gICAgfSBlbHNlIHtcblxuICAgIH1cblxuICAgIGlmKG5mdHMpe1xuICAgICAgY29uc29sZS5sb2cobmZ0cylcbiAgICAgIC8vIHNldE5GVHMobmZ0cyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PntzZXRXYWxsZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgdmFsdWU9e3dhbGxldH1cbiAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB5b3VyIHdhbGxldCBhZGRyZXNzOlwiPlxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8aW5wdXQgIFxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSk9PntzZXRDb2xsZWN0aW9uQWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIHZhbHVlPXtjb2xsZWN0aW9ufVxuICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHRoZSBjb2xsZWN0aW9uIGFkZHJlc3M6XCI+XG4gICAgICAgIDwvaW5wdXQ+XG4gICAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT17XCJjaGVja2JveFwifT48L2lucHV0PjwvbGFiZWw+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgZmV0Y2hORlRzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9PkxldCdzIGdvISA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZXJJbmZvIiwidXNlU3RhdGUiLCJIb21lIiwid2FsbGV0Iiwic2V0V2FsbGV0QWRkcmVzcyIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uQWRkcmVzcyIsIk5GVHMiLCJzZXRORlRzIiwiZmV0Y2hORlRzIiwibmZ0cyIsInJlcXVlc3RPcHRpb25zIiwiYXBpX2tleSIsImJhc2VVUkwiLCJmZXRjaFVSTCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtZXRob2QiLCJyZWRpcmVjdCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXN1bHQiLCJjYXRjaCIsImVycm9yIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJsYWJlbCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});