/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fortawesome/fontawesome-free/js/all.js":
/*!**************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/js/all.js ***!
  \**************************************************************/
/***/ (() => {


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"poppins\\\", sans-serif;\\n}\\n\\n.container {\\n  max-width: 1200px;\\n  margin: 0 auto;\\n}\\n\\n#header {\\n  padding: 30px 10px;\\n  background-color: #041222;\\n}\\n#header #nav {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n#header #nav .logo {\\n  font-size: 25px;\\n  text-decoration: none;\\n  color: #fff;\\n  text-transform: uppercase;\\n  font-family: sans-serif;\\n}\\n#header #nav .nav-items {\\n  display: flex;\\n  list-style: none;\\n}\\n#header #nav .nav-items .nav-item {\\n  padding: 0 20px;\\n  color: #fff;\\n  font-weight: 400;\\n  cursor: pointer;\\n}\\n#header #nav .nav-items .nav-item .count-movies {\\n  font-weight: 900;\\n  font-size: 17px;\\n}\\n\\n#movies {\\n  margin-top: 70px;\\n}\\n#movies .movie-section {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n  gap: 30px;\\n}\\n#movies .movie-section .card {\\n  max-width: 200px;\\n}\\n#movies .movie-section .card .buttons {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  margin-top: 10px;\\n}\\n#movies .movie-section .card .buttons .comment, #movies .movie-section .card .buttons .reservation {\\n  background-color: #041222;\\n  border: none;\\n  color: white;\\n  padding: 10px 0px;\\n  border-radius: 8px;\\n}\\n#movies .movie-section .card .likesContainer {\\n  display: flex;\\n  gap: 10px;\\n  justify-content: end;\\n}\\n\\n#popup-back {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(180, 180, 180, 0.63);\\n  height: 100vh;\\n  backdrop-filter: blur(20px);\\n}\\n#popup-back.active {\\n  display: flex;\\n}\\n#popup-back #comment-popup {\\n  max-width: 1000px;\\n  margin: 30px auto;\\n  overflow-y: scroll;\\n  position: relative;\\n}\\n#popup-back #comment-popup .popup-close {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  font-size: 60px;\\n}\\n#popup-back #comment-popup .popup-comment-container ul {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  margin-bottom: 10px;\\n}\\n#popup-back #comment-popup .popup-comment-container form {\\n  display: flex;\\n  flex-direction: column;\\n  max-width: 500px;\\n  gap: 10px;\\n}\\n#popup-back #comment-popup .popup-comment-container form input {\\n  padding: 10px 20px;\\n  border: none;\\n  border-radius: 5px;\\n}\\n#popup-back #comment-popup .popup-comment-container form button {\\n  width: max-content;\\n  padding: 10px 20px;\\n  border-radius: 8px;\\n  border: none;\\n  background-color: #041222;\\n  color: white;\\n}\\n\\n#popup-back2 {\\n  display: none;\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  background-color: rgba(180, 180, 180, 0.63);\\n  height: 100vh;\\n  backdrop-filter: blur(20px);\\n}\\n#popup-back2.active {\\n  display: flex;\\n}\\n#popup-back2 #reservations-popup {\\n  max-width: 1000px;\\n  margin: 0 auto;\\n  overflow-y: scroll;\\n  position: relative;\\n}\\n#popup-back2 #reservations-popup .popup-close {\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  font-size: 60px;\\n}\\n#popup-back2 #reservations-popup .popup-reservation-container ul {\\n  list-style: none;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  margin-bottom: 10px;\\n}\\n#popup-back2 #reservations-popup .popup-reservation-container form {\\n  display: flex;\\n  flex-direction: column;\\n  max-width: 500px;\\n  gap: 10px;\\n}\\n#popup-back2 #reservations-popup .popup-reservation-container form input {\\n  padding: 10px 20px;\\n  border: none;\\n  border-radius: 5px;\\n}\\n#popup-back2 #reservations-popup .popup-reservation-container form button {\\n  width: max-content;\\n  padding: 10px 20px;\\n  border-radius: 8px;\\n  border: none;\\n  background-color: #041222;\\n  color: white;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _modules_Counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Counters.js */ \"./src/modules/Counters.js\");\n/* harmony import */ var _modules_fetchMovies_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/fetchMovies.js */ \"./src/modules/fetchMovies.js\");\n\n\n\n\n(0,_modules_fetchMovies_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n// post reservation using fetch api\n// const postReservation = () => {\n//   fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations', {\n//     body: JSON.stringify({\n//       item_id: '1',\n//       date_start: '2020-01-01',\n//       date_end: '2020-01-02',\n//       username: 'Test User',\n//     }),\n//     method: 'POST',\n//     mode: 'cors',\n//     headers: {\n//       'Content-Type': 'application/json',\n//     },\n//   }).then((response) => response.text())\n//     .then((data) => console.log(data));\n// };\n\n// postReservation();\n\n(0,_modules_Counters_js__WEBPACK_IMPORTED_MODULE_1__.displayMoviesCount)();\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/index.js?");

/***/ }),

/***/ "./src/modules/Counters.js":
/*!*********************************!*\
  !*** ./src/modules/Counters.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMoviesCount\": () => (/* binding */ displayMoviesCount),\n/* harmony export */   \"getCommentCounter\": () => (/* binding */ getCommentCounter),\n/* harmony export */   \"getMoviesCounter\": () => (/* binding */ getMoviesCounter),\n/* harmony export */   \"getReservationCounter\": () => (/* binding */ getReservationCounter)\n/* harmony export */ });\nconst getCommentCounter = async (id) => {\n  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${id}`);\n\n  const comments = await data.json();\n  const counter = comments.length;\n\n  return counter;\n};\n\nconst getReservationCounter = async (id) => {\n  const data = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations?item_id=${id}`,\n  );\n\n  const reservations = await data.json();\n  const counter = reservations.length;\n\n  return counter;\n};\n\nconst getMoviesCounter = async () => {\n  const data = await fetch('https://api.tvmaze.com/shows');\n\n  const movies = await data.json();\n  const counter = movies.length;\n\n  return counter;\n};\n\nconst displayMoviesCount = async () => {\n  const all = document.querySelector('.count-movies');\n  const moviesCounter = await getMoviesCounter();\n\n  all.textContent = moviesCounter;\n};\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/Counters.js?");

/***/ }),

/***/ "./src/modules/fetchAppInfo.js":
/*!*************************************!*\
  !*** ./src/modules/fetchAppInfo.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"postReservation\": () => (/* binding */ postReservation)\n/* harmony export */ });\nconst postComment = async (id, user, comment) => {\n  const appID = 'hmHPRyTIRRJiq4ZsoTAe';\n\n  await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/comments`,\n    {\n      body: JSON.stringify(\n        {\n          item_id: id,\n          username: user,\n          comment,\n        },\n      ),\n      method: 'POST',\n      mode: 'cors',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    },\n  );\n};\n\nconst postReservation = async (id, dateStart, dateEnd, username) => {\n  const appID = 'hmHPRyTIRRJiq4ZsoTAe';\n\n  await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/reservations`,\n    {\n      body: JSON.stringify({\n        item_id: id,\n        username,\n        date_start: dateStart,\n        date_end: dateEnd,\n      }),\n      method: 'POST',\n      mode: 'cors',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    },\n  );\n};\n\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/fetchAppInfo.js?");

/***/ }),

/***/ "./src/modules/fetchMovies.js":
/*!************************************!*\
  !*** ./src/modules/fetchMovies.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderMovies_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderMovies.js */ \"./src/modules/renderMovies.js\");\n\n\nconst fetchMovies = async () => {\n  const res = await fetch('https://api.tvmaze.com/shows');\n  const data = await res.json();\n  (0,_renderMovies_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMovies);\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/fetchMovies.js?");

/***/ }),

/***/ "./src/modules/handleSubmit.js":
/*!*************************************!*\
  !*** ./src/modules/handleSubmit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleCommentSubmit\": () => (/* binding */ handleCommentSubmit),\n/* harmony export */   \"handleReservationSubmit\": () => (/* binding */ handleReservationSubmit)\n/* harmony export */ });\n/* harmony import */ var _fetchAppInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchAppInfo.js */ \"./src/modules/fetchAppInfo.js\");\n/* harmony import */ var _Counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counters.js */ \"./src/modules/Counters.js\");\n\n\n\nconst handleReservationSubmit = async (event) => {\n  event.preventDefault();\n\n  const form = event.target;\n  const username = form.elements.username.value;\n  const dateStart = form.elements.date_start.value;\n  const dateEnd = form.elements.date_end.value;\n  const movieID = form.previousSibling.dataset.popupIndex;\n\n  if (!form.previousSibling.children[1].children[0]) {\n    const list = document.createElement('ul');\n    form.previousSibling.children[1].append(list);\n  }\n\n  const newReservation = document.createElement('li');\n  newReservation.innerText = `${dateStart} - ${dateEnd} by ${username}`;\n  form.previousSibling.children[1].children[0].append(newReservation);\n\n  if (dateStart && dateEnd && username) {\n    await (0,_fetchAppInfo_js__WEBPACK_IMPORTED_MODULE_0__.postReservation)(movieID, dateStart, dateEnd, username);\n    // Update Reservation Counter\n    const counter = await (0,_Counters_js__WEBPACK_IMPORTED_MODULE_1__.getReservationCounter)(movieID);\n    form.previousSibling.children[0].innerText = `Reservations (${counter})`;\n  }\n\n  form.elements.username.value = '';\n  form.elements.date_start.value = '';\n  form.elements.date_end.value = '';\n};\n\nconst handleCommentSubmit = async (event) => {\n  event.preventDefault();\n\n  const form = event.target;\n  const name = form.elements.name.value;\n  const comment = form.elements.comment.value;\n  const movieID = form.previousSibling.dataset.popupIndex;\n\n  if (!form.previousSibling.children[1].children[0]) {\n    const list = document.createElement('ul');\n    form.previousSibling.children[1].append(list);\n  }\n\n  const newComment = document.createElement('li');\n  newComment.innerText = `Now , ${name} : ${comment}`;\n  form.previousSibling.children[1].children[0].append(newComment);\n\n  if (name && comment) {\n    await (0,_fetchAppInfo_js__WEBPACK_IMPORTED_MODULE_0__.postComment)(movieID, name, comment);\n    // Update Comment Counter\n    const counter = await (0,_Counters_js__WEBPACK_IMPORTED_MODULE_1__.getCommentCounter)(movieID);\n    form.previousSibling.children[0].innerText = `Comments (${counter})`;\n  }\n\n  form.elements.name.value = '';\n  form.elements.comment.value = '';\n};\n\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/handleSubmit.js?");

/***/ }),

/***/ "./src/modules/loadComments.js":
/*!*************************************!*\
  !*** ./src/modules/loadComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loadComments = async (id) => {\n  const data = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/comments?item_id=${id}`);\n  const comments = await data.json();\n\n  return comments;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadComments);\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/loadComments.js?");

/***/ }),

/***/ "./src/modules/loadPopup.js":
/*!**********************************!*\
  !*** ./src/modules/loadPopup.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ \"./node_modules/@fortawesome/fontawesome-free/js/all.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Counters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Counters.js */ \"./src/modules/Counters.js\");\n/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleSubmit.js */ \"./src/modules/handleSubmit.js\");\n/* harmony import */ var _loadComments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadComments.js */ \"./src/modules/loadComments.js\");\n/* harmony import */ var _loadReservations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loadReservations.js */ \"./src/modules/loadReservations.js\");\n\n\n\n\n\n\nconst loadPopup = async (button) => {\n  const index = button.closest('.card').getAttribute('data-index');\n\n  const data = await fetch(`https://api.tvmaze.com/shows/${index}`);\n  const movie = await data.json();\n  // display popup\n  const commentPopup = document.getElementById('comment-popup');\n  const reservationsPopup = document.getElementById('reservations-popup');\n\n  commentPopup.innerHTML = '';\n  reservationsPopup.innerHTML = '';\n\n  const popupContC = document.getElementById('popup-back');\n  const popupContR = document.getElementById('popup-back2');\n\n  // SHARED CONTENTS\n  const popupClose = document.createElement('span');\n  popupClose.className = 'popup-close';\n  popupClose.innerHTML = '<i class=\"fa-solid fa-xmark\"></i>';\n\n  const popupimg = document.createElement('img');\n  popupimg.className = 'popup-img';\n  popupimg.src = movie.image.medium;\n\n  const popupTitle = document.createElement('h2');\n  popupTitle.textContent = movie.name;\n\n  const popupdes = document.createElement('div');\n  popupdes.innerHTML = movie.summary;\n  // END OF SHARED CONTENTS\n\n  // COMMENT SECTION CONTAINER\n  const popupCommentContainer = document.createElement('div');\n  popupCommentContainer.className = 'popup-comment-container';\n\n  const popupComment = document.createElement('div');\n  popupComment.dataset.popupIndex = index;\n  popupComment.className = 'comments';\n\n  const comentCounter = await (0,_Counters_js__WEBPACK_IMPORTED_MODULE_1__.getCommentCounter)(index) || 0;\n  const popupCommentHeader = document.createElement('h2');\n  popupCommentHeader.innerHTML = `Comments (${comentCounter})`;\n\n  const popupCommentContent = document.createElement('div');\n\n  const popupCommentArray = await (0,_loadComments_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(index);\n\n  if (popupCommentArray.length) {\n    const popupCommentContentlist = document.createElement('ul');\n    popupCommentArray.forEach((comment) => {\n      const commentItem = document.createElement('li');\n\n      const date = document.createElement('span');\n      date.innerText = comment.creation_date;\n      const name = document.createElement('span');\n      name.innerText = `, ${comment.username}: `;\n      const text = document.createElement('span');\n      text.innerText = comment.comment;\n\n      commentItem.append(date, name, text);\n      popupCommentContentlist.append(commentItem);\n    });\n    popupCommentContent.append(popupCommentContentlist);\n  }\n\n  const popupFormComment = document.createElement('form');\n  popupFormComment.method = 'post';\n  popupFormComment.onsubmit = _handleSubmit_js__WEBPACK_IMPORTED_MODULE_2__.handleCommentSubmit;\n\n  const commentFormHead = document.createElement('h2');\n  commentFormHead.innerText = 'Write A Comment';\n  const popupInput1 = document.createElement('input');\n  popupInput1.name = 'name';\n  popupInput1.placeholder = 'Name';\n  const popupInput2 = document.createElement('input');\n  popupInput2.name = 'comment';\n  popupInput2.placeholder = 'Write a Comment...';\n  const popupSubmit = document.createElement('button');\n  popupSubmit.type = 'submit';\n  popupSubmit.innerText = 'Submit';\n\n  popupComment.append(popupCommentHeader, popupCommentContent);\n  popupFormComment.append(popupInput1, popupInput2, popupSubmit);\n  popupCommentContainer.append(popupComment, popupFormComment);\n\n  // RESERVATIONS SECTION\n  const popupReservationContainer = document.createElement('div');\n  popupReservationContainer.className = 'popup-reservation-container';\n\n  const popupReservation = document.createElement('div');\n  popupReservation.dataset.popupIndex = index;\n  popupReservation.className = 'reservations';\n\n  const ResCounter = await (0,_Counters_js__WEBPACK_IMPORTED_MODULE_1__.getReservationCounter)(index) || 0;\n  const popupReservationHeader = document.createElement('h2');\n  popupReservationHeader.innerHTML = `Reservations (${ResCounter})`;\n\n  const popupReservationContent = document.createElement('div');\n\n  const popupReservationArray = await (0,_loadReservations_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(index);\n\n  if (popupReservationArray.length) {\n    const popupReservationContentlist = document.createElement('ul');\n    popupReservationArray.forEach((reservation) => {\n      const reservationItem = document.createElement('li');\n\n      const dateStart = document.createElement('span');\n      dateStart.innerText = reservation.date_start;\n      const dateEnd = document.createElement('span');\n      dateEnd.innerText = reservation.date_end;\n      const userName = document.createElement('span');\n      userName.innerText = reservation.username;\n\n      reservationItem.append(dateStart, ' - ', dateEnd, ' by ', userName);\n      popupReservationContentlist.append(reservationItem);\n    });\n    popupReservationContent.append(popupReservationContentlist);\n  }\n\n  // RESERVATIONS FORM\n\n  const popupFormReservation = document.createElement('form');\n  popupFormReservation.method = 'post';\n  popupFormReservation.onsubmit = _handleSubmit_js__WEBPACK_IMPORTED_MODULE_2__.handleReservationSubmit;\n\n  const reservationFormHead = document.createElement('h2');\n  reservationFormHead.innerText = 'Add A Reservation';\n  const popupReservationInput1 = document.createElement('input');\n  popupReservationInput1.name = 'date_start';\n  popupReservationInput1.placeholder = 'Start Date';\n  popupReservationInput1.type = 'date';\n  const popupReservationInput2 = document.createElement('input');\n  popupReservationInput2.name = 'date_end';\n  popupReservationInput2.placeholder = 'End Date';\n  popupReservationInput2.type = 'date';\n  const popupReservationInput3 = document.createElement('input');\n  popupReservationInput3.name = 'username';\n  popupReservationInput3.placeholder = 'User Name';\n  const popupReservationSubmit = document.createElement('button');\n  popupReservationSubmit.type = 'submit';\n  popupReservationSubmit.innerText = 'Submit';\n\n  popupComment.append(popupCommentHeader, popupCommentContent);\n  popupFormComment.append(popupInput1, popupInput2, popupSubmit);\n  popupCommentContainer.append(popupComment, popupFormComment);\n  popupReservation.append(popupReservationHeader, popupReservationContent);\n  popupFormReservation.append(\n    popupReservationInput1,\n    popupReservationInput2,\n    popupReservationInput3,\n    popupReservationSubmit,\n  );\n  popupReservationContainer.append(popupReservation, popupFormReservation);\n\n  if (button.className === 'comment') {\n    // If comment popup is clicked\n    commentPopup.append(popupClose, popupimg, popupTitle, popupdes, popupCommentContainer);\n    popupContC.classList.toggle('active');\n    popupClose.addEventListener('click', () => {\n      commentPopup.innerHTML = '';\n      popupContC.classList.toggle('active');\n    });\n  } else {\n    // If reservations popup is clicked\n    reservationsPopup.append(popupClose, popupimg, popupTitle, popupdes, popupReservationContainer);\n    popupContR.classList.toggle('active');\n    popupClose.addEventListener('click', () => {\n      reservationsPopup.innerHTML = '';\n      popupContR.classList.toggle('active');\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPopup);\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/loadPopup.js?");

/***/ }),

/***/ "./src/modules/loadReservations.js":
/*!*****************************************!*\
  !*** ./src/modules/loadReservations.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// get all reservations\nconst loadReservations = async (id) => {\n  const data = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hmHPRyTIRRJiq4ZsoTAe/reservations?item_id=${id}`,\n  );\n  const reservations = await data.json();\n  return reservations;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadReservations);\n\n// post reservation using fetch\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/loadReservations.js?");

/***/ }),

/***/ "./src/modules/manageLikes.js":
/*!************************************!*\
  !*** ./src/modules/manageLikes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"postLikes\": () => (/* binding */ postLikes)\n/* harmony export */ });\nconst appID = 'hmHPRyTIRRJiq4ZsoTAe';\nconst postLikes = async (id, likes) => {\n  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`,\n    {\n      body: JSON.stringify(\n        {\n          item_id: id,\n          likes,\n        },\n      ),\n      method: 'POST',\n      mode: 'cors',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n    });\n};\n\nconst getLikes = async () => {\n  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appID}/likes`);\n  const data = await res.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/manageLikes.js?");

/***/ }),

/***/ "./src/modules/renderMovies.js":
/*!*************************************!*\
  !*** ./src/modules/renderMovies.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loadPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadPopup.js */ \"./src/modules/loadPopup.js\");\n/* harmony import */ var _manageLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manageLikes.js */ \"./src/modules/manageLikes.js\");\n\n\n\nconst renderMovies = async (data) => {\n  const movies = document.querySelector('.movie-section');\n  const likesArray = await (0,_manageLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();\n\n  // Renders all the Movies\n  data.forEach((movie) => {\n    const card = document.createElement('div');\n    card.className = 'card';\n    card.setAttribute('data-index', `${movie.id}`);\n\n    const cardImage = document.createElement('img');\n    cardImage.className = 'card-image';\n    cardImage.src = movie.image.medium;\n    cardImage.alt = movie.name;\n\n    const cardTitle = document.createElement('h3');\n    cardTitle.className = 'card-title';\n    cardTitle.textContent = movie.name;\n\n    const likesContainer = document.createElement('div');\n    likesContainer.className = 'likesContainer';\n    const thumbsUp = document.createElement('div');\n    thumbsUp.className = 'tump';\n    thumbsUp.innerHTML = '<i class=\"fa-solid fa-thumbs-up\"></i>';\n\n    const likes = document.createElement('p');\n    likes.className = 'likes';\n    const filtered = [];\n    likesArray.forEach((item) => {\n      if (item.item_id === movie.id) filtered.push(item);\n    });\n    likes.textContent = filtered[0]?.likes || 0;\n    likesContainer.append(likes, thumbsUp);\n\n    thumbsUp.addEventListener('click', () => {\n      (0,_manageLikes_js__WEBPACK_IMPORTED_MODULE_1__.postLikes)(movie.id);\n      likes.textContent = Number(likes.textContent) + 1;\n    });\n\n    const buttonContainer = document.createElement('div');\n    buttonContainer.className = 'buttons';\n\n    const commentButton = document.createElement('button');\n    commentButton.type = 'button';\n    commentButton.textContent = 'Comments';\n    commentButton.className = 'comment';\n    commentButton.addEventListener('click', () => (0,_loadPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(commentButton));\n\n    const reservationButton = document.createElement('button');\n    reservationButton.type = 'button';\n    reservationButton.textContent = 'Reservation';\n    reservationButton.className = 'reservation';\n    reservationButton.addEventListener('click', () => (0,_loadPopup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(reservationButton));\n\n    buttonContainer.append(commentButton, reservationButton);\n    card.append(cardImage, cardTitle, likesContainer, buttonContainer);\n    movies.append(card);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMovies);\n\n//# sourceURL=webpack://Webpack-BoilerPlate/./src/modules/renderMovies.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;