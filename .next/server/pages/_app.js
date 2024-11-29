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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    const [isInverted, setIsInverted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hydrated, setHydrated] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Tracks hydration status\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Tracks login status\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setHydrated(true); // Ensure client-side rendering\n        // Check if inversion was previously enabled\n        const storedTheme = localStorage.getItem(\"inverted\");\n        if (storedTheme === \"true\") {\n            document.body.classList.add(\"inverted\");\n            setIsInverted(true);\n        }\n        // Check for user login status\n        const token = localStorage.getItem(\"accessToken\");\n        setIsLoggedIn(!!token); // If a token exists, user is logged in\n    }, []);\n    const toggleInvert = ()=>{\n        const newInversionState = !isInverted;\n        setIsInverted(newInversionState);\n        if (newInversionState) {\n            document.body.classList.add(\"inverted\");\n        } else {\n            document.body.classList.remove(\"inverted\");\n        }\n        localStorage.setItem(\"inverted\", newInversionState.toString());\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"flex flex-row bg-blue-900 text-white px-4 py-2 gap-2 flex-wrap\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/IDE\",\n                        children: \"IDE\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/blogs\",\n                        children: \"Blogs\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/templateSearch\",\n                        children: \"Templates\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/profile\",\n                        children: \"Profile\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    hydrated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleInvert,\n                        className: \"bg-gray-800 hover:bg-gray-700 text-white py-1 px-3 ml-20 rounded\",\n                        children: isInverted ? \"Light Mode\" : \"Dark Mode\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/admin\",\n                        children: \"Admin Only\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    isLoggedIn && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/logout\",\n                        children: \"Logout\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 24\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\CSC309\\\\PP2MARKUS\\\\group_11062\\\\PP2\\\\pages\\\\_app.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQW1EO0FBRXJCO0FBQ0Q7QUFFZCxTQUFTSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNRLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsUUFBUSwwQkFBMEI7SUFDM0UsTUFBTSxDQUFDVSxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDLFFBQVEsc0JBQXNCO0lBRTNFQyxnREFBU0EsQ0FBQztRQUNSUSxZQUFZLE9BQU8sK0JBQStCO1FBRWxELDRDQUE0QztRQUM1QyxNQUFNRyxjQUFjQyxhQUFhQyxPQUFPLENBQUM7UUFDekMsSUFBSUYsZ0JBQWdCLFFBQVE7WUFDMUJHLFNBQVNDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7WUFDNUJYLGNBQWM7UUFDaEI7UUFFQSw4QkFBOEI7UUFDOUIsTUFBTVksUUFBUU4sYUFBYUMsT0FBTyxDQUFDO1FBQ25DSCxjQUFjLENBQUMsQ0FBQ1EsUUFBUSx1Q0FBdUM7SUFDakUsR0FBRyxFQUFFO0lBRUwsTUFBTUMsZUFBZTtRQUNuQixNQUFNQyxvQkFBb0IsQ0FBQ2Y7UUFDM0JDLGNBQWNjO1FBRWQsSUFBSUEsbUJBQW1CO1lBQ3JCTixTQUFTQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDO1FBQzlCLE9BQU87WUFDTEgsU0FBU0MsSUFBSSxDQUFDQyxTQUFTLENBQUNLLE1BQU0sQ0FBQztRQUNqQztRQUVBVCxhQUFhVSxPQUFPLENBQUMsWUFBWUYsa0JBQWtCRyxRQUFRO0lBQzdEO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUN4QixrREFBSUE7d0JBQUN5QixNQUFLO2tDQUFJOzs7Ozs7a0NBQ2YsOERBQUN6QixrREFBSUE7d0JBQUN5QixNQUFLO2tDQUFPOzs7Ozs7a0NBQ2xCLDhEQUFDekIsa0RBQUlBO3dCQUFDeUIsTUFBSztrQ0FBUzs7Ozs7O2tDQUNwQiw4REFBQ3pCLGtEQUFJQTt3QkFBQ3lCLE1BQUs7a0NBQWtCOzs7Ozs7a0NBQzdCLDhEQUFDekIsa0RBQUlBO3dCQUFDeUIsTUFBSztrQ0FBVzs7Ozs7O29CQUNyQm5CLDBCQUNDLDhEQUFDb0I7d0JBQ0NDLFNBQVNUO3dCQUNUTSxXQUFVO2tDQUVUcEIsYUFBYSxlQUFlOzs7Ozs7a0NBR2pDLDhEQUFDd0I7d0JBQUlKLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ3hCLGtEQUFJQTt3QkFBQ3lCLE1BQUs7a0NBQVM7Ozs7OztvQkFDbkJqQiw0QkFBYyw4REFBQ1Isa0RBQUlBO3dCQUFDeUIsTUFBSztrQ0FBVTs7Ozs7Ozs7Ozs7OzBCQUV0Qyw4REFBQ3ZCO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjsgLy8gSW1wb3J0IEFwcFByb3BzIHR5cGUgZnJvbSBOZXh0LmpzXG5pbXBvcnQgXCJAL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xuICBjb25zdCBbaXNJbnZlcnRlZCwgc2V0SXNJbnZlcnRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoeWRyYXRlZCwgc2V0SHlkcmF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBUcmFja3MgaHlkcmF0aW9uIHN0YXR1c1xuICBjb25zdCBbaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbl0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFRyYWNrcyBsb2dpbiBzdGF0dXNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEh5ZHJhdGVkKHRydWUpOyAvLyBFbnN1cmUgY2xpZW50LXNpZGUgcmVuZGVyaW5nXG5cbiAgICAvLyBDaGVjayBpZiBpbnZlcnNpb24gd2FzIHByZXZpb3VzbHkgZW5hYmxlZFxuICAgIGNvbnN0IHN0b3JlZFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJpbnZlcnRlZFwiKTtcbiAgICBpZiAoc3RvcmVkVGhlbWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJpbnZlcnRlZFwiKTtcbiAgICAgIHNldElzSW52ZXJ0ZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIHVzZXIgbG9naW4gc3RhdHVzXG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpO1xuICAgIHNldElzTG9nZ2VkSW4oISF0b2tlbik7IC8vIElmIGEgdG9rZW4gZXhpc3RzLCB1c2VyIGlzIGxvZ2dlZCBpblxuICB9LCBbXSk7XG5cbiAgY29uc3QgdG9nZ2xlSW52ZXJ0ID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld0ludmVyc2lvblN0YXRlID0gIWlzSW52ZXJ0ZWQ7XG4gICAgc2V0SXNJbnZlcnRlZChuZXdJbnZlcnNpb25TdGF0ZSk7XG5cbiAgICBpZiAobmV3SW52ZXJzaW9uU3RhdGUpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImludmVydGVkXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZlcnRlZFwiKTtcbiAgICB9XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImludmVydGVkXCIsIG5ld0ludmVyc2lvblN0YXRlLnRvU3RyaW5nKCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBiZy1ibHVlLTkwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiBnYXAtMiBmbGV4LXdyYXBcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL0lERVwiPklERTwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9ibG9nc1wiPkJsb2dzPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3RlbXBsYXRlU2VhcmNoXCI+VGVtcGxhdGVzPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL3Byb2ZpbGVcIj5Qcm9maWxlPC9MaW5rPlxuICAgICAgICB7aHlkcmF0ZWQgJiYgKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUludmVydH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktODAwIGhvdmVyOmJnLWdyYXktNzAwIHRleHQtd2hpdGUgcHktMSBweC0zIG1sLTIwIHJvdW5kZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpc0ludmVydGVkID8gXCJMaWdodCBNb2RlXCIgOiBcIkRhcmsgTW9kZVwifVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMVwiIC8+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW5cIj5BZG1pbiBPbmx5PC9MaW5rPlxuICAgICAgICB7aXNMb2dnZWRJbiAmJiA8TGluayBocmVmPVwiL2xvZ291dFwiPkxvZ291dDwvTGluaz59XG4gICAgICA8L25hdj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzSW52ZXJ0ZWQiLCJzZXRJc0ludmVydGVkIiwiaHlkcmF0ZWQiLCJzZXRIeWRyYXRlZCIsImlzTG9nZ2VkSW4iLCJzZXRJc0xvZ2dlZEluIiwic3RvcmVkVGhlbWUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwidG9rZW4iLCJ0b2dnbGVJbnZlcnQiLCJuZXdJbnZlcnNpb25TdGF0ZSIsInJlbW92ZSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsIm5hdiIsImNsYXNzTmFtZSIsImhyZWYiLCJidXR0b24iLCJvbkNsaWNrIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();