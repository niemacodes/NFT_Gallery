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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! os */ \"./node_modules/next/dist/compiled/os-browserify/browser.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_nftCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nftCard */ \"./pages/components/nftCard.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), wallet = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), collection = ref1[0], setCollectionAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), NFTs = ref2[0], setNFTs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), fetchForCollection = ref3[0], setFetchForCollection = ref3[1];\n    // Gets Nft's owned in a collection:\n    var fetchNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var nfts, api_key, baseURL, requestOptions, fetchURL, fetchURL1;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        console.log(\"fetching NFT's\");\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTs/\");\n                        if (collection.length) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\"\n                        };\n                        fetchURL = \"\".concat(baseURL, \"?owner=\").concat(wallet);\n                        _ctx.next = 9;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 9:\n                        // fetch NFT's:\n                        nfts = _ctx.sent;\n                        _ctx.next = 17;\n                        break;\n                    case 12:\n                        console.log(\"fetching NFt's for collection owned by address\");\n                        fetchURL1 = \"\".concat(baseURL, \"?owner=\").concat(wallet, \"&contractAddresses%5B%5D=\").concat(collection);\n                        _ctx.next = 16;\n                        return fetch(fetchURL1, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 16:\n                        nfts = _ctx.sent;\n                    case 17:\n                        if (nfts) {\n                            console.log(\"NFT's\", nfts);\n                            setNFTs(nfts.ownedNfts);\n                        }\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Fetch NFts for collections:\n    var fetchNFTsForCollection = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var requestOptions, api_key, baseURL, fetchURL, nfts;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!collection.length) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\"\n                        };\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTsForCollection/\");\n                        fetchURL = \"\".concat(baseURL, \"?&contractAddress=\").concat(collection, \"&withMetadata=\", \"true\");\n                        _ctx.next = 7;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 7:\n                        nfts = _ctx.sent;\n                        if (nfts) {\n                            console.log(\"NFT's in collection: \", nfts);\n                            setNFTs(nfts.nfts);\n                        }\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTsForCollection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center py-8 gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full items-center justify-center gap-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50\",\n                        disabled: fetchForCollection,\n                        onChange: function(e) {\n                            setWalletAddress(e.target.value);\n                        },\n                        value: wallet,\n                        type: \"text\",\n                        placeholder: \"Add your wallet address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50\",\n                        onChange: function(e) {\n                            setCollectionAddress(e.target.value);\n                        },\n                        value: collection,\n                        type: \"text\",\n                        placeholder: \"Add the collection address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"text-gray-600\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    setFetchForCollection(e.target.checked);\n                                },\n                                type: \"checkbox\",\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this),\n                            \"Fetch for collection\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2\",\n                        onClick: function() {\n                            if (fetchForCollection) {\n                                fetchNFTsForCollection();\n                            } else {\n                                fetchNFTs();\n                            }\n                        },\n                        children: \"Let's go! \"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: NFTs.length && NFTs.map(function(nft) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_nftCard__WEBPACK_IMPORTED_MODULE_6__.NFTCard, {\n                        nft: nft\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"zJ3xO3hss/2IF6qbmh4ScRf3odg=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRzs0QkFBQzFCLG9CQUFvQixDQUFDMEIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQzt5QkFBQzt3QkFDckRBLEtBQUssRUFBRTdCLFVBQVU7d0JBQ2pCOEIsSUFBSSxFQUFFLE1BQU07d0JBQ1pDLFdBQVcsRUFBQyw2QkFBNkI7Ozs7OzZCQUNuQztrQ0FDUiw4REFBQ0MsT0FBSzt3QkFBQ1QsU0FBUyxFQUFDLGVBQWU7OzBDQUM5Qiw4REFBQ0MsT0FBSztnQ0FDSkUsUUFBUSxFQUFFLFNBQUNDLENBQUMsRUFBSztvQ0FBQ3RCLHFCQUFxQixDQUFDc0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNLLE9BQU8sQ0FBQztpQ0FBQztnQ0FDMURILElBQUksRUFBRSxVQUFVO2dDQUNoQlAsU0FBUyxFQUFDLE1BQU07Ozs7O3FDQUNWOzRCQUFBLHNCQUVSOzs7Ozs7NkJBQVE7a0NBQ1YsOERBQUNXLFFBQU07d0JBQ0xYLFNBQVMsRUFBRSx3REFBd0Q7d0JBQ25FWSxPQUFPLEVBQ0wsV0FBTTs0QkFDSixJQUFHL0Isa0JBQWtCLEVBQUM7Z0NBQ3BCaUIsc0JBQXNCLEVBQUUsQ0FBQzs2QkFDMUIsTUFBTTtnQ0FDTGYsU0FBUyxFQUFFLENBQUM7NkJBQ2I7eUJBQ0Y7a0NBQ0QsWUFBVTs7Ozs7NkJBQVM7Ozs7OztxQkFDbkI7MEJBQ04sOERBQUNnQixLQUFHOzBCQUVFcEIsSUFBSSxDQUFDWSxNQUFNLElBQUlaLElBQUksQ0FBQ2tDLEdBQUcsQ0FBQ0MsU0FBQUEsR0FBRyxFQUFJO29CQUM3QixxQkFDRSw4REFBQ3pDLHdEQUFPO3dCQUFDeUMsR0FBRyxFQUFFQSxHQUFHOzs7Ozs4QkFBWSxDQUM5QjtpQkFDRixDQUFDOzs7OztxQkFFRjs7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0dBL0dLeEMsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBaUhWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgdXNlckluZm8gfSBmcm9tICdvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBORlRDYXJkIH0gZnJvbSAnLi9jb21wb25lbnRzL25mdENhcmQnXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt3YWxsZXQsIHNldFdhbGxldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2xsZWN0aW9uLCBzZXRDb2xsZWN0aW9uQWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW05GVHMsIHNldE5GVHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZmV0Y2hGb3JDb2xsZWN0aW9uLCBzZXRGZXRjaEZvckNvbGxlY3Rpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cbiAgLy8gR2V0cyBOZnQncyBvd25lZCBpbiBhIGNvbGxlY3Rpb246XG4gIGNvbnN0IGZldGNoTkZUcyA9IGFzeW5jKCkgPT4ge1xuICAgIFxuICAgIGxldCBuZnRzO1xuICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgTkZUJ3NcIik7XG4gICAgICBcbiAgICBjb25zdCBhcGlfa2V5ID0gXCJXQU04ME1NaVRMMjdHNEU2RmR2eDlYd1JXQnl6Y2M3NVwiO1xuICAgIGNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyLyR7YXBpX2tleX0vZ2V0TkZUcy9gO1xuXG4gICAgaWYoIWNvbGxlY3Rpb24ubGVuZ3RoKXtcblxuICAgICAgLy8gT3VyIEFsY2hlbXkgTkZUIEFQSSByZXF1ZXN0czogXG4gICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZldGNoVVJMID0gYCR7YmFzZVVSTH0/b3duZXI9JHt3YWxsZXR9YDtcblxuICAgICAgLy8gZmV0Y2ggTkZUJ3M6XG4gICAgICBuZnRzID0gYXdhaXQgZmV0Y2goZmV0Y2hVUkwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hpbmcgTkZ0J3MgZm9yIGNvbGxlY3Rpb24gb3duZWQgYnkgYWRkcmVzc1wiKVxuICAgICAgY29uc3QgZmV0Y2hVUkwgPSBgJHtiYXNlVVJMfT9vd25lcj0ke3dhbGxldH0mY29udHJhY3RBZGRyZXNzZXMlNUIlNUQ9JHtjb2xsZWN0aW9ufWA7XG4gICAgICBuZnRzPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSk7XG4gICAgfVxuXG4gICAgaWYobmZ0cyl7XG4gICAgICBjb25zb2xlLmxvZyhcIk5GVCdzXCIsIG5mdHMpO1xuICAgICAgc2V0TkZUcyhuZnRzLm93bmVkTmZ0cyk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmV0Y2ggTkZ0cyBmb3IgY29sbGVjdGlvbnM6XG4gIGNvbnN0IGZldGNoTkZUc0ZvckNvbGxlY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIFxuICAgIGlmKGNvbGxlY3Rpb24ubGVuZ3RoKXtcbiAgICBcbiAgICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfTtcbiAgICAgIFxuICAgICAgLy8gQXBpIGNhbGw6XG4gICAgICBjb25zdCBhcGlfa2V5ID0gXCJXQU04ME1NaVRMMjdHNEU2RmR2eDlYd1JXQnl6Y2M3NVwiO1xuICAgICAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL2V0aC1tYWlubmV0LmFsY2hlbXlhcGkuaW8vdjIvJHthcGlfa2V5fS9nZXRORlRzRm9yQ29sbGVjdGlvbi9gO1xuICAgICAgY29uc3QgZmV0Y2hVUkwgPSBgJHtiYXNlVVJMfT8mY29udHJhY3RBZGRyZXNzPSR7Y29sbGVjdGlvbn0md2l0aE1ldGFkYXRhPSR7XCJ0cnVlXCJ9YDtcblxuICAgICAgLy8gRmV0Y2ggTmZ0J3M6XG4gICAgICBjb25zdCBuZnRzID0gYXdhaXQgZmV0Y2goZmV0Y2hVUkwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpO1xuXG4gICAgICBpZihuZnRzKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJORlQncyBpbiBjb2xsZWN0aW9uOiBcIiwgbmZ0cyk7XG4gICAgICAgIHNldE5GVHMobmZ0cy5uZnRzKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS04IGdhcC15LTNcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC15LTJcIj5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMi81IGJnLXNsYXRlLTEwMCBweS0yIHB4LTIgcm91bmRlZC1sZyB0ZXh0LWdyYXktODAwIGZvY3VzOm91dGxpbmUtYmx1ZS0zMDAgZGlzYWJsZWQ6Ymctc2xhdGUtNTAgZGlzYWJsZWQ6dGV4dC1ncmF5LTUwXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZmV0Y2hGb3JDb2xsZWN0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT57c2V0V2FsbGV0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIHZhbHVlPXt3YWxsZXR9XG4gICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciB3YWxsZXQgYWRkcmVzczpcIj5cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMi81IGJnLXNsYXRlLTEwMCBweS0yIHB4LTIgcm91bmRlZC1sZyB0ZXh0LWdyYXktODAwIGZvY3VzOm91dGxpbmUtYmx1ZS0zMDAgZGlzYWJsZWQ6Ymctc2xhdGUtNTAgZGlzYWJsZWQ6dGV4dC1ncmF5LTUwXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0Q29sbGVjdGlvbkFkZHJlc3MoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICB2YWx1ZT17Y29sbGVjdGlvbn1cbiAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB0aGUgY29sbGVjdGlvbiBhZGRyZXNzOlwiPlxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge3NldEZldGNoRm9yQ29sbGVjdGlvbihlLnRhcmdldC5jaGVja2VkKX19XG4gICAgICAgICAgICB0eXBlPXtcImNoZWNrYm94XCJ9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCI+XG4gICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgIEZldGNoIGZvciBjb2xsZWN0aW9uXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17XCJkaXNhYmxlZDpiZy1zbGF0ZS01MDAgdGV4dC13aGl0ZSBiZy1ibHVlLTQwMCBweC00IHB5LTJcIn1cbiAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgaWYoZmV0Y2hGb3JDb2xsZWN0aW9uKXtcbiAgICAgICAgICAgICAgICBmZXRjaE5GVHNGb3JDb2xsZWN0aW9uKCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hORlRzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9PkxldCdzIGdvISA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PiAgXG4gICAgICA8ZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIE5GVHMubGVuZ3RoICYmIE5GVHMubWFwKG5mdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgICA8TkZUQ2FyZCBuZnQ9e25mdH0+PC9ORlRDYXJkPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VySW5mbyIsInVzZVN0YXRlIiwiTkZUQ2FyZCIsIkhvbWUiLCJ3YWxsZXQiLCJzZXRXYWxsZXRBZGRyZXNzIiwiY29sbGVjdGlvbiIsInNldENvbGxlY3Rpb25BZGRyZXNzIiwiTkZUcyIsInNldE5GVHMiLCJmZXRjaEZvckNvbGxlY3Rpb24iLCJzZXRGZXRjaEZvckNvbGxlY3Rpb24iLCJmZXRjaE5GVHMiLCJuZnRzIiwiYXBpX2tleSIsImJhc2VVUkwiLCJyZXF1ZXN0T3B0aW9ucyIsImZldGNoVVJMIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIm1ldGhvZCIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwib3duZWROZnRzIiwiZmV0Y2hORlRzRm9yQ29sbGVjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImxhYmVsIiwiY2hlY2tlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJuZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});