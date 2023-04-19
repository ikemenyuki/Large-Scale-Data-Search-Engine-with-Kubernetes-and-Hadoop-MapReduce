"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search-result",{

/***/ "./src/pages/search-result.js":
/*!************************************!*\
  !*** ./src/pages/search-result.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/styles */ \"./src/styles/styles.js\");\n/* harmony import */ var _testdataset_dataset_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../testdataset/dataset.json */ \"./src/testdataset/dataset.json\");\n/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Grid */ \"./src/components/Grid.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SearchResult = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // Retrieve the data from local storage\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const value = router.query.value;\n    // Restore the data from the cookie on the client-side\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cookies = document.cookie.split(\";\");\n        const cookieData = cookies.find((cookie)=>cookie.startsWith(\"hadoop-data=\"));\n        if (cookieData) {\n            const storedData = cookieData.split(\"=\")[1];\n            console.log(\"Stored data:\", storedData);\n            setData(JSON.parse(storedData));\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"right\",\n                    fontSize: \"20px\",\n                    color: \"blue\",\n                    marginTop: \"2rem\",\n                    textDecoration: \"underline\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/engine\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Go Back To Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    textAlign: \"left\",\n                    fontSize: \"15px\",\n                    marginTop: \"1rem\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"You searched for the term: \" + value\n                    }, void 0, false, {\n                        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Your search was executed in XXX ms\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: _styles_styles__WEBPACK_IMPORTED_MODULE_4__[\"default\"].marginTopHeader,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Grid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    data: data,\n                    term: value\n                }, void 0, false, {\n                    fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/search-result.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchResult, \"CE4bb1OrJK230QipCdW5J54W3ks=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SearchResult;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResult);\nvar _c;\n$RefreshReg$(_c, \"SearchResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VhcmNoLXJlc3VsdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQVNNQTtBQVI2QztBQUNYO0FBQ1g7QUFFUztBQUNZO0FBQ1o7QUFJdEMsTUFBTVMsZUFBZSxJQUFNOztJQUN6QixNQUFNQyxTQUFTTixzREFBU0E7SUFDeEIsdUNBQXVDO0lBQ3ZDLE1BQU0sQ0FBQ08sTUFBTUMsUUFBUSxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DLE1BQU1XLFFBQVFILE9BQU9JLEtBQUssQ0FBQ0QsS0FBSztJQUVoQyxzREFBc0Q7SUFDdERWLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNWSxVQUFVQyxTQUFTQyxNQUFNLENBQUNDLEtBQUssQ0FBQztRQUN0QyxNQUFNQyxhQUFhSixRQUFRSyxJQUFJLENBQUNILENBQUFBLFNBQVVBLE9BQU9JLFVBQVUsQ0FBQztRQUM1RCxJQUFJRixZQUFZO1lBQ2QsTUFBTUcsYUFBYUgsV0FBV0QsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNDSyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRjtZQUM1QlYsUUFBUWEsS0FBS0MsS0FBSyxDQUFDSjtRQUNyQixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNLOzswQkFDQyw4REFBQ0E7Z0JBQ0NDLE9BQU87b0JBQ0xDLFdBQVc7b0JBQ1hDLFVBQVU7b0JBQ1ZDLE9BQU87b0JBQ1BDLFdBQVc7b0JBQ1hDLGdCQUFnQjtnQkFDbEI7MEJBRUEsNEVBQUM1QixrREFBSUE7b0JBQUM2QixNQUFLOzhCQUNULDRFQUFDQztrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHUiw4REFBQ1I7Z0JBQ0NDLE9BQU87b0JBQ0xDLFdBQVc7b0JBQ1hDLFVBQVU7b0JBQ1ZFLFdBQVc7Z0JBQ2I7O2tDQUVBLDhEQUFDRztrQ0FBSSxnQ0FBZ0N0Qjs7Ozs7O2tDQUNyQyw4REFBQ3NCO2tDQUFHOzs7Ozs7Ozs7Ozs7MEJBRU4sOERBQUNSO2dCQUFJQyxPQUFPdEIsc0VBQXNCOzBCQUNoQyw0RUFBQ0Usd0RBQUlBO29CQUFDRyxNQUFNQTtvQkFBTTBCLE1BQU14Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0EvQ01KOztRQUNXTCxrREFBU0E7OztLQURwQks7QUFpRE4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlYXJjaC1yZXN1bHQuanM/MGU2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXNcIjtcbmltcG9ydCBkYXRhc2V0IGZyb20gXCIuLi90ZXN0ZGF0YXNldC9kYXRhc2V0Lmpzb25cIjtcbmltcG9ydCBHcmlkIGZyb20gXCIuLi9jb21wb25lbnRzL0dyaWRcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5jb25zdCBTZWFyY2hSZXN1bHQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBSZXRyaWV2ZSB0aGUgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCB2YWx1ZSA9IHJvdXRlci5xdWVyeS52YWx1ZTtcblxuICAvLyBSZXN0b3JlIHRoZSBkYXRhIGZyb20gdGhlIGNvb2tpZSBvbiB0aGUgY2xpZW50LXNpZGVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jyk7XG4gICAgY29uc3QgY29va2llRGF0YSA9IGNvb2tpZXMuZmluZChjb29raWUgPT4gY29va2llLnN0YXJ0c1dpdGgoJ2hhZG9vcC1kYXRhPScpKTtcbiAgICBpZiAoY29va2llRGF0YSkge1xuICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGNvb2tpZURhdGEuc3BsaXQoJz0nKVsxXTtcbiAgICAgIGNvbnNvbGUubG9nKCdTdG9yZWQgZGF0YTonLCBzdG9yZWREYXRhKTtcbiAgICAgIHNldERhdGEoSlNPTi5wYXJzZShzdG9yZWREYXRhKSk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRleHRBbGlnbjogXCJyaWdodFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgICBjb2xvcjogXCJibHVlXCIsXG4gICAgICAgICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcbiAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9lbmdpbmVcIj5cbiAgICAgICAgICA8aDE+R28gQmFjayBUbyBTZWFyY2g8L2gxPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8aDE+e1wiWW91IHNlYXJjaGVkIGZvciB0aGUgdGVybTogXCIgKyB2YWx1ZX08L2gxPlxuICAgICAgICA8aDE+WW91ciBzZWFyY2ggd2FzIGV4ZWN1dGVkIGluIFhYWCBtczwvaDE+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYXJnaW5Ub3BIZWFkZXJ9PlxuICAgICAgICA8R3JpZCBkYXRhPXtkYXRhfSB0ZXJtPXt2YWx1ZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUmVzdWx0O1xuIl0sIm5hbWVzIjpbImludGVyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkxpbmsiLCJzdHlsZXMiLCJkYXRhc2V0IiwiR3JpZCIsIlNlYXJjaFJlc3VsdCIsInJvdXRlciIsImRhdGEiLCJzZXREYXRhIiwidmFsdWUiLCJxdWVyeSIsImNvb2tpZXMiLCJkb2N1bWVudCIsImNvb2tpZSIsInNwbGl0IiwiY29va2llRGF0YSIsImZpbmQiLCJzdGFydHNXaXRoIiwic3RvcmVkRGF0YSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJkaXYiLCJzdHlsZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJ0ZXh0RGVjb3JhdGlvbiIsImhyZWYiLCJoMSIsIm1hcmdpblRvcEhlYWRlciIsInRlcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/search-result.js\n"));

/***/ })

});