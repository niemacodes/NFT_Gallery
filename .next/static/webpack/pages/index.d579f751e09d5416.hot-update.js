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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! os */ \"./node_modules/next/dist/compiled/os-browserify/browser.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_nftCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nftCard */ \"./pages/components/nftCard.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), wallet = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), collection = ref1[0], setCollectionAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), NFTs = ref2[0], setNFTs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), fetchForCollection = ref3[0], setFetchForCollection = ref3[1];\n    // Gets Nft's owned in a collection:\n    var fetchNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var nfts, api_key, baseURL, requestOptions, fetchURL, fetchURL1;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        console.log(\"fetching NFT's\");\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTs/\");\n                        if (collection.length) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\"\n                        };\n                        fetchURL = \"\".concat(baseURL, \"?owner=\").concat(wallet);\n                        _ctx.next = 9;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 9:\n                        // fetch NFT's:\n                        nfts = _ctx.sent;\n                        _ctx.next = 17;\n                        break;\n                    case 12:\n                        console.log(\"fetching NFt's for collection owned by address\");\n                        fetchURL1 = \"\".concat(baseURL, \"?owner=\").concat(wallet, \"&contractAddresses%5B%5D=\").concat(collection);\n                        _ctx.next = 16;\n                        return fetch(fetchURL1, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 16:\n                        nfts = _ctx.sent;\n                    case 17:\n                        if (nfts) {\n                            console.log(\"NFT's\", nfts);\n                            setNFTs(nfts.ownedNfts);\n                        }\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Fetch NFts for collections:\n    var fetchNFTsForCollection = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var requestOptions, api_key, baseURL, fetchURL, nfts;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!collection.length) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\"\n                        };\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTsForCollection/\");\n                        fetchURL = \"\".concat(baseURL, \"?&contractAddress=\").concat(collection, \"&withMetadata=\", \"true\");\n                        _ctx.next = 7;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 7:\n                        nfts = _ctx.sent;\n                        if (nfts) {\n                            console.log(\"NFT's in collection: \", nfts);\n                            setNFTs(nfts.nfts);\n                        }\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTsForCollection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center py-8 gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full items-center justify-center gap-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50\",\n                        disabled: fetchForCollection,\n                        onChange: function(e) {\n                            setWalletAddress(e.target.value);\n                        },\n                        value: wallet,\n                        type: \"text\",\n                        placeholder: \"Add your wallet address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50\",\n                        onChange: function(e) {\n                            setCollectionAddress(e.target.value);\n                        },\n                        value: collection,\n                        type: \"text\",\n                        placeholder: \"Add the collection address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"text-gray-600\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    setFetchForCollection(e.target.checked);\n                                },\n                                type: \"checkbox\",\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, _this),\n                            \"Fetch for collection\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"disabled:bg-slate-500 text-white bg-blue-400 px-4 py-2 mt-3 rounded-sm w-1/5\",\n                        onClick: function() {\n                            if (fetchForCollection) {\n                                fetchNFTsForCollection();\n                            } else {\n                                fetchNFTs();\n                            }\n                        },\n                        children: \"Let's go! \"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-y-12 mt-4 w-5/6 gap-x-4 justify-center\",\n                children: NFTs.length && NFTs.map(function(nft) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_nftCard__WEBPACK_IMPORTED_MODULE_6__.NFTCard, {\n                        nft: nft\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"zJ3xO3hss/2IF6qbmh4ScRf3odg=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7IHVzZXJJbmZvIH0gZnJvbSAnb3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTkZUQ2FyZCB9IGZyb20gJy4vY29tcG9uZW50cy9uZnRDYXJkJ1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBbd2FsbGV0LCBzZXRXYWxsZXRBZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY29sbGVjdGlvbiwgc2V0Q29sbGVjdGlvbkFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtORlRzLCBzZXRORlRzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2ZldGNoRm9yQ29sbGVjdGlvbiwgc2V0RmV0Y2hGb3JDb2xsZWN0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXG4gIC8vIEdldHMgTmZ0J3Mgb3duZWQgaW4gYSBjb2xsZWN0aW9uOlxuICBjb25zdCBmZXRjaE5GVHMgPSBhc3luYygpID0+IHtcbiAgICBcbiAgICBsZXQgbmZ0cztcbiAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nIE5GVCdzXCIpO1xuICAgICAgXG4gICAgY29uc3QgYXBpX2tleSA9IFwiV0FNODBNTWlUTDI3RzRFNkZkdng5WHdSV0J5emNjNzVcIjtcbiAgICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vZXRoLW1haW5uZXQuYWxjaGVteWFwaS5pby92Mi8ke2FwaV9rZXl9L2dldE5GVHMvYDtcblxuICAgIGlmKCFjb2xsZWN0aW9uLmxlbmd0aCl7XG5cbiAgICAgIC8vIE91ciBBbGNoZW15IE5GVCBBUEkgcmVxdWVzdHM6IFxuICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBmZXRjaFVSTCA9IGAke2Jhc2VVUkx9P293bmVyPSR7d2FsbGV0fWA7XG5cbiAgICAgIC8vIGZldGNoIE5GVCdzOlxuICAgICAgbmZ0cyA9IGF3YWl0IGZldGNoKGZldGNoVVJMLCByZXF1ZXN0T3B0aW9ucykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImZldGNoaW5nIE5GdCdzIGZvciBjb2xsZWN0aW9uIG93bmVkIGJ5IGFkZHJlc3NcIilcbiAgICAgIGNvbnN0IGZldGNoVVJMID0gYCR7YmFzZVVSTH0/b3duZXI9JHt3YWxsZXR9JmNvbnRyYWN0QWRkcmVzc2VzJTVCJTVEPSR7Y29sbGVjdGlvbn1gO1xuICAgICAgbmZ0cz0gYXdhaXQgZmV0Y2goZmV0Y2hVUkwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGRhdGEgPT4gZGF0YS5qc29uKCkpO1xuICAgIH1cblxuICAgIGlmKG5mdHMpe1xuICAgICAgY29uc29sZS5sb2coXCJORlQnc1wiLCBuZnRzKTtcbiAgICAgIHNldE5GVHMobmZ0cy5vd25lZE5mdHMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZldGNoIE5GdHMgZm9yIGNvbGxlY3Rpb25zOlxuICBjb25zdCBmZXRjaE5GVHNGb3JDb2xsZWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBcbiAgICBpZihjb2xsZWN0aW9uLmxlbmd0aCl7XG4gICAgXG4gICAgICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICAgIH07XG4gICAgICBcbiAgICAgIC8vIEFwaSBjYWxsOlxuICAgICAgY29uc3QgYXBpX2tleSA9IFwiV0FNODBNTWlUTDI3RzRFNkZkdng5WHdSV0J5emNjNzVcIjtcbiAgICAgIGNvbnN0IGJhc2VVUkwgPSBgaHR0cHM6Ly9ldGgtbWFpbm5ldC5hbGNoZW15YXBpLmlvL3YyLyR7YXBpX2tleX0vZ2V0TkZUc0ZvckNvbGxlY3Rpb24vYDtcbiAgICAgIGNvbnN0IGZldGNoVVJMID0gYCR7YmFzZVVSTH0/JmNvbnRyYWN0QWRkcmVzcz0ke2NvbGxlY3Rpb259JndpdGhNZXRhZGF0YT0ke1widHJ1ZVwifWA7XG5cbiAgICAgIC8vIEZldGNoIE5mdCdzOlxuICAgICAgY29uc3QgbmZ0cyA9IGF3YWl0IGZldGNoKGZldGNoVVJMLCByZXF1ZXN0T3B0aW9ucykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKTtcblxuICAgICAgaWYobmZ0cyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTkZUJ3MgaW4gY29sbGVjdGlvbjogXCIsIG5mdHMpO1xuICAgICAgICBzZXRORlRzKG5mdHMubmZ0cylcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktOCBnYXAteS0zXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAteS0yXCI+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTIvNSBiZy1zbGF0ZS0xMDAgcHktMiBweC0yIHJvdW5kZWQtbGcgdGV4dC1ncmF5LTgwMCBmb2N1czpvdXRsaW5lLWJsdWUtMzAwIGRpc2FibGVkOmJnLXNsYXRlLTUwIGRpc2FibGVkOnRleHQtZ3JheS01MFwiXG4gICAgICAgICAgZGlzYWJsZWQ9e2ZldGNoRm9yQ29sbGVjdGlvbn1cbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+e3NldFdhbGxldEFkZHJlc3MoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICB2YWx1ZT17d2FsbGV0fVxuICAgICAgICAgIHR5cGU9e1widGV4dFwifVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkIHlvdXIgd2FsbGV0IGFkZHJlc3M6XCI+XG4gICAgICAgIDwvaW5wdXQ+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJ3LTIvNSBiZy1zbGF0ZS0xMDAgcHktMiBweC0yIHJvdW5kZWQtbGcgdGV4dC1ncmF5LTgwMCBmb2N1czpvdXRsaW5lLWJsdWUtMzAwIGRpc2FibGVkOmJnLXNsYXRlLTUwIGRpc2FibGVkOnRleHQtZ3JheS01MFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+e3NldENvbGxlY3Rpb25BZGRyZXNzKGUudGFyZ2V0LnZhbHVlKX19XG4gICAgICAgICAgdmFsdWU9e2NvbGxlY3Rpb259XG4gICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgdGhlIGNvbGxlY3Rpb24gYWRkcmVzczpcIj5cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtzZXRGZXRjaEZvckNvbGxlY3Rpb24oZS50YXJnZXQuY2hlY2tlZCl9fVxuICAgICAgICAgICAgdHlwZT17XCJjaGVja2JveFwifVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiPlxuICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICBGZXRjaCBmb3IgY29sbGVjdGlvblxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9e1wiZGlzYWJsZWQ6Ymctc2xhdGUtNTAwIHRleHQtd2hpdGUgYmctYmx1ZS00MDAgcHgtNCBweS0yIG10LTMgcm91bmRlZC1zbSB3LTEvNVwifVxuICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICBpZihmZXRjaEZvckNvbGxlY3Rpb24pe1xuICAgICAgICAgICAgICAgIGZldGNoTkZUc0ZvckNvbGxlY3Rpb24oKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmZXRjaE5GVHMoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0+TGV0J3MgZ28hIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+ICBcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLXktMTIgbXQtNCB3LTUvNiBnYXAteC00IGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge1xuICAgICAgICAgICAgTkZUcy5sZW5ndGggJiYgTkZUcy5tYXAobmZ0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICAgIDxORlRDYXJkIG5mdD17bmZ0fT48L05GVENhcmQ+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZXJJbmZvIiwidXNlU3RhdGUiLCJORlRDYXJkIiwiSG9tZSIsIndhbGxldCIsInNldFdhbGxldEFkZHJlc3MiLCJjb2xsZWN0aW9uIiwic2V0Q29sbGVjdGlvbkFkZHJlc3MiLCJORlRzIiwic2V0TkZUcyIsImZldGNoRm9yQ29sbGVjdGlvbiIsInNldEZldGNoRm9yQ29sbGVjdGlvbiIsImZldGNoTkZUcyIsIm5mdHMiLCJhcGlfa2V5IiwiYmFzZVVSTCIsInJlcXVlc3RPcHRpb25zIiwiZmV0Y2hVUkwiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwibWV0aG9kIiwiZmV0Y2giLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJvd25lZE5mdHMiLCJmZXRjaE5GVHNGb3JDb2xsZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJkaXNhYmxlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibGFiZWwiLCJjaGVja2VkIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIm5mdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});