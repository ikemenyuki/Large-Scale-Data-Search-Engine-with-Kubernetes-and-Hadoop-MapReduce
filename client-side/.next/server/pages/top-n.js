"use strict";
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
exports.id = "pages/top-n";
exports.ids = ["pages/top-n"];
exports.modules = {

/***/ "./src/pages/top-n.js":
/*!****************************!*\
  !*** ./src/pages/top-n.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/styles */ \"./src/styles/styles.js\");\n\n\n\n\nconst TopN = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleInputChange = (event)=>{\n        setValue(event.target.value);\n    };\n    const handleSearch = async ()=>{\n        if (value.length) {\n            router.push({\n                pathname: \"/top-n-result\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                ..._styles_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].center\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: _styles_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].marginTopHeader,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Enter Your N Value\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: value,\n                        onChange: handleInputChange,\n                        style: _styles_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].inputBox\n                    }, void 0, false, {\n                        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: _styles_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].marginTopHeader,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: _styles_styles__WEBPACK_IMPORTED_MODULE_3__[\"default\"].buttonStyle,\n                        onClick: handleSearch,\n                        children: \"Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/yueqiliao/Documents/cmu14848/finalproject/course-project-option-ii-ikemenyuki/client-side/src/pages/top-n.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopN);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvdG9wLW4uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ0E7QUFFRjtBQUV0QyxNQUFNSSxPQUFPLElBQU07SUFDakIsTUFBTUMsU0FBU0gsc0RBQVNBO0lBQ3hCLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNTyxvQkFBb0IsQ0FBQ0MsUUFBVTtRQUNuQ0YsU0FBU0UsTUFBTUMsTUFBTSxDQUFDSixLQUFLO0lBQzdCO0lBRUEsTUFBTUssZUFBZSxVQUFZO1FBQy9CLElBQUlMLE1BQU1NLE1BQU0sRUFBRTtZQUNoQlAsT0FBT1EsSUFBSSxDQUFDO2dCQUNWQyxVQUFVO1lBQ1o7UUFDRixDQUFDO0lBQ0g7SUFFQSxxQkFDRSw4REFBQ0M7a0JBQ0MsNEVBQUNBO1lBQUlDLE9BQU87Z0JBQUUsR0FBR2IsNkRBQWE7WUFBQzs7OEJBQzdCLDhEQUFDWTtvQkFBSUMsT0FBT2Isc0VBQXNCOzhCQUNoQyw0RUFBQ2dCO2tDQUFHOzs7Ozs7Ozs7Ozs4QkFFTiw4REFBQ0o7OEJBQ0MsNEVBQUNLO3dCQUNDQyxNQUFLO3dCQUNMZixPQUFPQTt3QkFDUGdCLFVBQVVkO3dCQUNWUSxPQUFPYiwrREFBZTs7Ozs7Ozs7Ozs7OEJBRzFCLDhEQUFDWTtvQkFBSUMsT0FBT2Isc0VBQXNCOzhCQUNoQyw0RUFBQ3FCO3dCQUFPUixPQUFPYixrRUFBa0I7d0JBQUV1QixTQUFTZjtrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9wRTtBQUVBLGlFQUFlUCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VhcmNoLWVuZ2luZS0xNDg0OC8uL3NyYy9wYWdlcy90b3Atbi5qcz8xMzIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zdHlsZXNcIjtcblxuY29uc3QgVG9wTiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNlYXJjaCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodmFsdWUubGVuZ3RoKSB7XG4gICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgIHBhdGhuYW1lOiBcIi90b3Atbi1yZXN1bHRcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IC4uLnN0eWxlcy5jZW50ZXIgfX0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYXJnaW5Ub3BIZWFkZXJ9PlxuICAgICAgICAgIDxoMT5FbnRlciBZb3VyIE4gVmFsdWU8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaW5wdXRCb3h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5tYXJnaW5Ub3BIZWFkZXJ9PlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b25TdHlsZX0gb25DbGljaz17aGFuZGxlU2VhcmNofT5cbiAgICAgICAgICAgIFNlYXJjaFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9wTjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3R5bGVzIiwiVG9wTiIsInJvdXRlciIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVJbnB1dENoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiaGFuZGxlU2VhcmNoIiwibGVuZ3RoIiwicHVzaCIsInBhdGhuYW1lIiwiZGl2Iiwic3R5bGUiLCJjZW50ZXIiLCJtYXJnaW5Ub3BIZWFkZXIiLCJoMSIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiaW5wdXRCb3giLCJidXR0b24iLCJidXR0b25TdHlsZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/top-n.js\n");

/***/ }),

/***/ "./src/styles/styles.js":
/*!******************************!*\
  !*** ./src/styles/styles.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst styles = {\n    marginTop: {\n        marginTop: \"2rem\"\n    },\n    marginTopUpload: {\n        marginTop: \"6rem\"\n    },\n    marginTopHeader: {\n        marginTop: \"8rem\"\n    },\n    marginBottom: {\n        marginBottom: \"2rem\"\n    },\n    flexColumn: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\"\n    },\n    alignCenter: {\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\"\n    },\n    labelButton: {\n        display: \"inline-block\",\n        padding: \"10px 20px\",\n        backgroundColor: \"gray\",\n        color: \"white\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        cursor: \"pointer\"\n    },\n    center: {\n        // transform: \"translateY(50px)\",\n        display: \"flex\",\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        textAlign: \"center\"\n    },\n    buttonStyle: {\n        backgroundColor: \"gray\",\n        color: \"white\",\n        padding: \"10px\",\n        width: \"200px\",\n        border: \"none\",\n        borderRadius: \"5px\",\n        cursor: \"pointer\",\n        fontSize: \"16px\"\n    },\n    inputBox: {\n        width: \"200px\",\n        height: \"30px\",\n        marginTop: \"6rem\"\n    },\n    spinnerContainer: {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\"\n    },\n    spinner: {\n        width: \"100px\",\n        height: \"100px\",\n        borderRadius: \"50%\",\n        border: \"10px solid #ccc\",\n        borderTopColor: \"#555\",\n        animation: \"spinner 0.8s infinite linear\",\n        WebkitAnimation: \"spinner 0.8s infinite linear\"\n    },\n    \"@keyframes spinner\": {\n        from: {\n            transform: \"rotate(0deg)\"\n        },\n        to: {\n            transform: \"rotate(360deg)\"\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3N0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsU0FBUztJQUNiQyxXQUFXO1FBQ1RBLFdBQVc7SUFDYjtJQUNBQyxpQkFBaUI7UUFDZkQsV0FBVztJQUNiO0lBQ0FFLGlCQUFpQjtRQUNmRixXQUFXO0lBQ2I7SUFDQUcsY0FBYztRQUNaQSxjQUFjO0lBQ2hCO0lBQ0FDLFlBQVk7UUFDVkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7SUFDZDtJQUNBQyxhQUFhO1FBQ1hILFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxZQUFZO0lBQ2Q7SUFDQUUsYUFBYTtRQUNYSixTQUFTO1FBQ1RLLFNBQVM7UUFDVEMsaUJBQWlCO1FBQ2pCQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsY0FBYztRQUNkQyxRQUFRO0lBQ1Y7SUFDQUMsUUFBUTtRQUNOLGlDQUFpQztRQUNqQ1gsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQVk7UUFDWlUsV0FBVztJQUNiO0lBQ0FDLGFBQWE7UUFDWFAsaUJBQWlCO1FBQ2pCQyxPQUFPO1FBQ1BGLFNBQVM7UUFDVFMsT0FBTztRQUNQTixRQUFRO1FBQ1JDLGNBQWM7UUFDZEMsUUFBUTtRQUNSSyxVQUFVO0lBQ1o7SUFDQUMsVUFBVTtRQUNSRixPQUFPO1FBQ1BHLFFBQVE7UUFDUnRCLFdBQVc7SUFDYjtJQUNBdUIsa0JBQWtCO1FBQ2hCbEIsU0FBUztRQUNUbUIsZ0JBQWdCO1FBQ2hCakIsWUFBWTtRQUNaZSxRQUFRO0lBQ1Y7SUFDQUcsU0FBUztRQUNQTixPQUFPO1FBQ1BHLFFBQVE7UUFDUlIsY0FBYztRQUNkRCxRQUFRO1FBQ1JhLGdCQUFnQjtRQUNoQkMsV0FBVztRQUNYQyxpQkFBaUI7SUFDbkI7SUFDQSxzQkFBc0I7UUFDcEJDLE1BQU07WUFDSkMsV0FBVztRQUNiO1FBQ0FDLElBQUk7WUFDRkQsV0FBVztRQUNiO0lBQ0Y7QUFDRjtBQUVBLGlFQUFlL0IsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NlYXJjaC1lbmdpbmUtMTQ4NDgvLi9zcmMvc3R5bGVzL3N0eWxlcy5qcz9jM2M4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0eWxlcyA9IHtcbiAgbWFyZ2luVG9wOiB7XG4gICAgbWFyZ2luVG9wOiBcIjJyZW1cIixcbiAgfSxcbiAgbWFyZ2luVG9wVXBsb2FkOiB7XG4gICAgbWFyZ2luVG9wOiBcIjZyZW1cIixcbiAgfSxcbiAgbWFyZ2luVG9wSGVhZGVyOiB7XG4gICAgbWFyZ2luVG9wOiBcIjhyZW1cIixcbiAgfSxcbiAgbWFyZ2luQm90dG9tOiB7XG4gICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcbiAgfSxcbiAgZmxleENvbHVtbjoge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgfSxcbiAgYWxpZ25DZW50ZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gIH0sXG4gIGxhYmVsQnV0dG9uOiB7XG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJncmF5XCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgIGJvcmRlclJhZGl1czogXCI1cHhcIixcbiAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICB9LFxuICBjZW50ZXI6IHtcbiAgICAvLyB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWSg1MHB4KVwiLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gIH0sXG4gIGJ1dHRvblN0eWxlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcImdyYXlcIixcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgIHBhZGRpbmc6IFwiMTBweFwiLFxuICAgIHdpZHRoOiBcIjIwMHB4XCIsXG4gICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIxNnB4XCIsXG4gIH0sXG4gIGlucHV0Qm94OiB7XG4gICAgd2lkdGg6IFwiMjAwcHhcIixcbiAgICBoZWlnaHQ6IFwiMzBweFwiLFxuICAgIG1hcmdpblRvcDogXCI2cmVtXCIsXG4gIH0sXG4gIHNwaW5uZXJDb250YWluZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICB9LFxuICBzcGlubmVyOiB7XG4gICAgd2lkdGg6IFwiMTAwcHhcIixcbiAgICBoZWlnaHQ6IFwiMTAwcHhcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgYm9yZGVyOiBcIjEwcHggc29saWQgI2NjY1wiLFxuICAgIGJvcmRlclRvcENvbG9yOiBcIiM1NTVcIixcbiAgICBhbmltYXRpb246IFwic3Bpbm5lciAwLjhzIGluZmluaXRlIGxpbmVhclwiLFxuICAgIFdlYmtpdEFuaW1hdGlvbjogXCJzcGlubmVyIDAuOHMgaW5maW5pdGUgbGluZWFyXCIsXG4gIH0sXG4gIFwiQGtleWZyYW1lcyBzcGlubmVyXCI6IHtcbiAgICBmcm9tOiB7XG4gICAgICB0cmFuc2Zvcm06IFwicm90YXRlKDBkZWcpXCIsXG4gICAgfSxcbiAgICB0bzoge1xuICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCIsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Ub3BVcGxvYWQiLCJtYXJnaW5Ub3BIZWFkZXIiLCJtYXJnaW5Cb3R0b20iLCJmbGV4Q29sdW1uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiYWxpZ25DZW50ZXIiLCJsYWJlbEJ1dHRvbiIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImN1cnNvciIsImNlbnRlciIsInRleHRBbGlnbiIsImJ1dHRvblN0eWxlIiwid2lkdGgiLCJmb250U2l6ZSIsImlucHV0Qm94IiwiaGVpZ2h0Iiwic3Bpbm5lckNvbnRhaW5lciIsImp1c3RpZnlDb250ZW50Iiwic3Bpbm5lciIsImJvcmRlclRvcENvbG9yIiwiYW5pbWF0aW9uIiwiV2Via2l0QW5pbWF0aW9uIiwiZnJvbSIsInRyYW5zZm9ybSIsInRvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/styles.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/top-n.js"));
module.exports = __webpack_exports__;

})();