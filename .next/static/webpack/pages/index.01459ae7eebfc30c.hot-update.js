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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! os */ \"./node_modules/next/dist/compiled/os-browserify/browser.js\");\n/* harmony import */ var os__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(os__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_nftCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nftCard */ \"./pages/components/nftCard.jsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), wallet = ref[0], setWalletAddress = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"\"), collection = ref1[0], setCollectionAddress = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), NFTs = ref2[0], setNFTs = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false), fetchForCollection = ref3[0], setFetchForCollection = ref3[1];\n    // Gets Nft's owned in a collection:\n    var fetchNFTs = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var nfts, api_key, baseURL, requestOptions, fetchURL, fetchURL1;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        console.log(\"fetching NFT's\");\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTs/\");\n                        if (collection.length) {\n                            _ctx.next = 12;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\"\n                        };\n                        fetchURL = \"\".concat(baseURL, \"?owner=\").concat(wallet);\n                        _ctx.next = 9;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 9:\n                        // fetch NFT's:\n                        nfts = _ctx.sent;\n                        _ctx.next = 17;\n                        break;\n                    case 12:\n                        console.log(\"fetching NFt's for collection owned by address\");\n                        fetchURL1 = \"\".concat(baseURL, \"?owner=\").concat(wallet, \"&contractAddresses%5B%5D=\").concat(collection);\n                        _ctx.next = 16;\n                        return fetch(fetchURL1, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 16:\n                        nfts = _ctx.sent;\n                    case 17:\n                        if (nfts) {\n                            console.log(\"NFT's\", nfts);\n                            setNFTs(nfts.ownedNfts);\n                        }\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTs() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // Fetch NFts for collections:\n    var fetchNFTsForCollection = function() {\n        var _ref = _asyncToGenerator(_Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var requestOptions, api_key, baseURL, fetchURL, nfts;\n            return _Users_niemawidaha_Desktop_Web3_Alchemy_Week4_nft_demo_rtw3_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!collection.length) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        requestOptions = {\n                            method: \"GET\"\n                        };\n                        api_key = \"WAM80MMiTL27G4E6Fdvx9XwRWByzcc75\";\n                        baseURL = \"https://eth-mainnet.alchemyapi.io/v2/\".concat(api_key, \"/getNFTsForCollection/\");\n                        fetchURL = \"\".concat(baseURL, \"?&contractAddress=\").concat(collection, \"&withMetadata=\", \"true\");\n                        _ctx.next = 7;\n                        return fetch(fetchURL, requestOptions).then(function(data) {\n                            return data.json();\n                        });\n                    case 7:\n                        nfts = _ctx.sent;\n                        if (nfts) {\n                            console.log(\"NFT's in collection: \", nfts);\n                            setNFTs(nfts.nfts);\n                        }\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function fetchNFTsForCollection() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center justify-center py-8 gap-y-3\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full items-center justify-center gap-y-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"font-bold text-4xl items-center justify-center\",\n                        children: \"NFT Gallery Explorer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50 outline outline-2\",\n                        disabled: fetchForCollection,\n                        onChange: function(e) {\n                            setWalletAddress(e.target.value);\n                        },\n                        value: wallet,\n                        type: \"text\",\n                        placeholder: \"Add your wallet address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"w-2/5 bg-slate-100 py-2 px-2 rounded-lg text-gray-800 focus:outline-blue-300 disabled:bg-slate-50 disabled:text-gray-50 outline outline-2\",\n                        onChange: function(e) {\n                            setCollectionAddress(e.target.value);\n                        },\n                        value: collection,\n                        type: \"text\",\n                        placeholder: \"Add the collection address:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"text-gray-500 text-xl\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                onChange: function(e) {\n                                    setFetchForCollection(e.target.checked);\n                                },\n                                type: \"checkbox\",\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, _this),\n                            \"Fetch for collection\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        className: \"w-2/5 disabled:bg-slate-500 px-2 py-2 rounded-lg focus:outline-white text-white bg-blue-400 mt-3 \",\n                        onClick: function() {\n                            if (fetchForCollection) {\n                                fetchNFTsForCollection();\n                            } else {\n                                fetchNFTs();\n                            }\n                        },\n                        children: \"Let's go! \"\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"divide-y md:divide-y-8 divide-gray-400\"\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap gap-y-8 mt-4 w-5/6 gap-x-8 justify-center\",\n                children: NFTs.length && NFTs.map(function(nft) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_nftCard__WEBPACK_IMPORTED_MODULE_6__.NFTCard, {\n                        nft: nft\n                    }, void 0, false, {\n                        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 17\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/niemawidaha/Desktop/Web3/Alchemy/Week4/nft_demo_rtw3/pages/index.jsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"zJ3xO3hss/2IF6qbmh4ScRf3odg=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7YUFDRixDQUNQO0NBQ0Y7R0FuSEt4QyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFxSFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VySW5mbyB9IGZyb20gJ29zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5GVENhcmQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmZ0Q2FyZCdcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgW3dhbGxldCwgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25BZGRyZXNzXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbTkZUcywgc2V0TkZUc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmZXRjaEZvckNvbGxlY3Rpb24sIHNldEZldGNoRm9yQ29sbGVjdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblxuICAvLyBHZXRzIE5mdCdzIG93bmVkIGluIGEgY29sbGVjdGlvbjpcbiAgY29uc3QgZmV0Y2hORlRzID0gYXN5bmMoKSA9PiB7XG4gICAgXG4gICAgbGV0IG5mdHM7XG4gICAgY29uc29sZS5sb2coXCJmZXRjaGluZyBORlQnc1wiKTtcbiAgICAgIFxuICAgIGNvbnN0IGFwaV9rZXkgPSBcIldBTTgwTU1pVEwyN0c0RTZGZHZ4OVh3UldCeXpjYzc1XCI7XG4gICAgY29uc3QgYmFzZVVSTCA9IGBodHRwczovL2V0aC1tYWlubmV0LmFsY2hlbXlhcGkuaW8vdjIvJHthcGlfa2V5fS9nZXRORlRzL2A7XG5cbiAgICBpZighY29sbGVjdGlvbi5sZW5ndGgpe1xuXG4gICAgICAvLyBPdXIgQWxjaGVteSBORlQgQVBJIHJlcXVlc3RzOiBcbiAgICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgfTtcblxuICAgICAgY29uc3QgZmV0Y2hVUkwgPSBgJHtiYXNlVVJMfT9vd25lcj0ke3dhbGxldH1gO1xuXG4gICAgICAvLyBmZXRjaCBORlQnczpcbiAgICAgIG5mdHMgPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJmZXRjaGluZyBORnQncyBmb3IgY29sbGVjdGlvbiBvd25lZCBieSBhZGRyZXNzXCIpXG4gICAgICBjb25zdCBmZXRjaFVSTCA9IGAke2Jhc2VVUkx9P293bmVyPSR7d2FsbGV0fSZjb250cmFjdEFkZHJlc3NlcyU1QiU1RD0ke2NvbGxlY3Rpb259YDtcbiAgICAgIG5mdHM9IGF3YWl0IGZldGNoKGZldGNoVVJMLCByZXF1ZXN0T3B0aW9ucykudGhlbihkYXRhID0+IGRhdGEuanNvbigpKTtcbiAgICB9XG5cbiAgICBpZihuZnRzKXtcbiAgICAgIGNvbnNvbGUubG9nKFwiTkZUJ3NcIiwgbmZ0cyk7XG4gICAgICBzZXRORlRzKG5mdHMub3duZWROZnRzKTtcbiAgICB9XG4gIH1cblxuICAvLyBGZXRjaCBORnRzIGZvciBjb2xsZWN0aW9uczpcbiAgY29uc3QgZmV0Y2hORlRzRm9yQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgXG4gICAgaWYoY29sbGVjdGlvbi5sZW5ndGgpe1xuICAgIFxuICAgICAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdHRVQnXG4gICAgICB9O1xuICAgICAgXG4gICAgICAvLyBBcGkgY2FsbDpcbiAgICAgIGNvbnN0IGFwaV9rZXkgPSBcIldBTTgwTU1pVEwyN0c0RTZGZHZ4OVh3UldCeXpjYzc1XCI7XG4gICAgICBjb25zdCBiYXNlVVJMID0gYGh0dHBzOi8vZXRoLW1haW5uZXQuYWxjaGVteWFwaS5pby92Mi8ke2FwaV9rZXl9L2dldE5GVHNGb3JDb2xsZWN0aW9uL2A7XG4gICAgICBjb25zdCBmZXRjaFVSTCA9IGAke2Jhc2VVUkx9PyZjb250cmFjdEFkZHJlc3M9JHtjb2xsZWN0aW9ufSZ3aXRoTWV0YWRhdGE9JHtcInRydWVcIn1gO1xuXG4gICAgICAvLyBGZXRjaCBOZnQnczpcbiAgICAgIGNvbnN0IG5mdHMgPSBhd2FpdCBmZXRjaChmZXRjaFVSTCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSk7XG5cbiAgICAgIGlmKG5mdHMpe1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5GVCdzIGluIGNvbGxlY3Rpb246IFwiLCBuZnRzKTtcbiAgICAgICAgc2V0TkZUcyhuZnRzLm5mdHMpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHB5LTggZ2FwLXktM1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLXktMlwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtNHhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPk5GVCBHYWxsZXJ5IEV4cGxvcmVyPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMi81IGJnLXNsYXRlLTEwMCBweS0yIHB4LTIgcm91bmRlZC1sZyB0ZXh0LWdyYXktODAwIGZvY3VzOm91dGxpbmUtYmx1ZS0zMDAgZGlzYWJsZWQ6Ymctc2xhdGUtNTAgZGlzYWJsZWQ6dGV4dC1ncmF5LTUwIG91dGxpbmUgb3V0bGluZS0yXCJcbiAgICAgICAgICBkaXNhYmxlZD17ZmV0Y2hGb3JDb2xsZWN0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT57c2V0V2FsbGV0QWRkcmVzcyhlLnRhcmdldC52YWx1ZSl9fVxuICAgICAgICAgIHZhbHVlPXt3YWxsZXR9XG4gICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgeW91ciB3YWxsZXQgYWRkcmVzczpcIj5cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInctMi81IGJnLXNsYXRlLTEwMCBweS0yIHB4LTIgcm91bmRlZC1sZyB0ZXh0LWdyYXktODAwIGZvY3VzOm91dGxpbmUtYmx1ZS0zMDAgZGlzYWJsZWQ6Ymctc2xhdGUtNTAgZGlzYWJsZWQ6dGV4dC1ncmF5LTUwIG91dGxpbmUgb3V0bGluZS0yXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpPT57c2V0Q29sbGVjdGlvbkFkZHJlc3MoZS50YXJnZXQudmFsdWUpfX1cbiAgICAgICAgICB2YWx1ZT17Y29sbGVjdGlvbn1cbiAgICAgICAgICB0eXBlPXtcInRleHRcIn1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCB0aGUgY29sbGVjdGlvbiBhZGRyZXNzOlwiPlxuICAgICAgICA8L2lucHV0PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCB0ZXh0LXhsXCI+XG4gICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7c2V0RmV0Y2hGb3JDb2xsZWN0aW9uKGUudGFyZ2V0LmNoZWNrZWQpfX1cbiAgICAgICAgICAgIHR5cGU9e1wiY2hlY2tib3hcIn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIj5cbiAgICAgICAgICA8L2lucHV0PlxuICAgICAgICAgICAgRmV0Y2ggZm9yIGNvbGxlY3Rpb25cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17XCJ3LTIvNSBkaXNhYmxlZDpiZy1zbGF0ZS01MDAgcHgtMiBweS0yIHJvdW5kZWQtbGcgZm9jdXM6b3V0bGluZS13aGl0ZSB0ZXh0LXdoaXRlIGJnLWJsdWUtNDAwIG10LTMgXCJ9XG4gICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgIGlmKGZldGNoRm9yQ29sbGVjdGlvbil7XG4gICAgICAgICAgICAgICAgZmV0Y2hORlRzRm9yQ29sbGVjdGlvbigpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZldGNoTkZUcygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfT5MZXQncyBnbyEgPC9idXR0b24+XG4gICAgICA8L2Rpdj4gIFxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZS15IG1kOmRpdmlkZS15LTggZGl2aWRlLWdyYXktNDAwXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgZ2FwLXktOCBtdC00IHctNS82IGdhcC14LTgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBORlRzLmxlbmd0aCAmJiBORlRzLm1hcChuZnQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgPE5GVENhcmQgbmZ0PXtuZnR9PjwvTkZUQ2FyZD5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwidXNlckluZm8iLCJ1c2VTdGF0ZSIsIk5GVENhcmQiLCJIb21lIiwid2FsbGV0Iiwic2V0V2FsbGV0QWRkcmVzcyIsImNvbGxlY3Rpb24iLCJzZXRDb2xsZWN0aW9uQWRkcmVzcyIsIk5GVHMiLCJzZXRORlRzIiwiZmV0Y2hGb3JDb2xsZWN0aW9uIiwic2V0RmV0Y2hGb3JDb2xsZWN0aW9uIiwiZmV0Y2hORlRzIiwibmZ0cyIsImFwaV9rZXkiLCJiYXNlVVJMIiwicmVxdWVzdE9wdGlvbnMiLCJmZXRjaFVSTCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJtZXRob2QiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsIm93bmVkTmZ0cyIsImZldGNoTkZUc0ZvckNvbGxlY3Rpb24iLCJkaXYiLCJjbGFzc05hbWUiLCJsYWJlbCIsImlucHV0IiwiZGlzYWJsZWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsImNoZWNrZWQiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwibmZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

});