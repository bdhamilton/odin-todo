/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/c.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/c.css ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! img/plus-circle.svg */ "./src/img/plus-circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! img/delete.svg */ "./src/img/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/check.svg */ "./src/img/check.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/circle.svg */ "./src/img/circle.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*	// CSS Reset
	// https://www.joshwcomeau.com/css/custom-css-reset/
*/

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

/** || Core */

body {
  display: flex;
  font-family: Roboto, serif;
  --header-color: hsl(185, 14%, 17%);
  --projects-color: hsl(185, 14%, 47%);
  --todos-color: hsl(167, 27%, 69%);
  --standard-padding: 15px;
  font-size: 18px;
}

h2 {
  text-transform: uppercase;
  font-size: .9rem;
  letter-spacing: 1px;
  padding: var(--standard-padding);
}

ul {
  list-style: none;
  padding: 0;
}

/** || Header */

header {
  background-color: var(--header-color);
  box-shadow: 1px 0 1px #666;
  color: var(--projects-color);
  height: 100vh;
  width:65px;
  position: relative;
  display: flex;
  z-index: 2;
}

header h1 {
  position: fixed;
  bottom: 0;
  left: 0;
  writing-mode: vertical-lr;
  rotate: 180deg;
  margin-bottom: var(--standard-padding);
}

/** || Projects list  */

.project-section {
  background-color: var(--projects-color);
  box-shadow: 1px 0 5px #666;
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: end;
  z-index: 1;
}

.add-div {
  background-color: white;
  border-top: 1px solid #666;
  opacity: .5;
  display: flex;
  flex-direction: row-reverse;
}

.add-div:focus-within {
  opacity: .8;
}

.add-div input[type="button"] {
  background: transparent;
  background: no-repeat center/70% url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  border: 0;
  margin-left: 5px;
  outline: 0;
  text-indent: -2000px;
  width: 40px;
}

.add-div input[type="text"] {
  background-color: inherit;
  border: 0;
  flex: 1;
  font-family: inherit;
  font-weight: bold;
  padding: var(--standard-padding);
  outline: 0;
}

#projects li {
  border: 1px solid var(--todos-color);
  border-width: 1px 0 0;
  display: flex;
  flex-direction: row-reverse;
}

.selected {
  background-color: var(--todos-color);
}

.project-button {
  border: 0;
  background-color: inherit;
  color: white;
  flex: 1;
  outline: 0;
  padding: var(--standard-padding);
  text-align: right;
}

.selected .project-button {
  background-color: var(--todos-color);
  color: var(--header-color);
  font-weight: bold;
}

.delete {
  background-color: inherit;
  background: no-repeat center/40% url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  border: 0;
  color: var(--todos-color);
  text-indent: -2000px;
  margin: 5px;
  opacity: .5;
  width: 40px;
}

/** || Todo list  */

.todo-section {
  background-color: var(--todos-color);
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: end;
}

#todos li {
  display: flex;
  padding: 5px 0;
}

#todos input {
  border: 0;
  outline: 0;
  background-color: inherit;
  font: inherit;
  padding: 0;
}

#todos input::placeholder {
  font: inherit;
  letter-spacing: 0;
  font-style: oblique;
}

#todos span {
  display: none;
}

.complete {
  opacity: .3;
}

.complete .toggle-complete {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.toggle-complete {
  background: no-repeat center/70% url(${___CSS_LOADER_URL_REPLACEMENT_3___});
  border: 0;
  margin: 5px;
  text-indent: -2000px;
  width: 40px;
}

.todo-text {
  flex: 1;
}

.description,
.due-date {
  font-size: .9rem;
}

input.edit-title {
  font-weight: bold !important;
}

.edit-duedate {
  height: 1rem;
}

.priority {
  background: inherit;
  border: 0;
  font-size: 1.5rem;
  font-weight: bold;
  opacity: .1;
}

.priority-high {
  text-shadow: 1px 1px 1px black;
  color: white;
  opacity: 1;
}`, "",{"version":3,"sources":["webpack://./src/c.css"],"names":[],"mappings":"AAAA;;CAEC;;AAED;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;AACpB;;AAEA,aAAa;;AAEb;EACE,aAAa;EACb,0BAA0B;EAC1B,kCAAkC;EAClC,oCAAoC;EACpC,iCAAiC;EACjC,wBAAwB;EACxB,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,gBAAgB;EAChB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,gBAAgB;EAChB,UAAU;AACZ;;AAEA,eAAe;;AAEf;EACE,qCAAqC;EACrC,0BAA0B;EAC1B,4BAA4B;EAC5B,aAAa;EACb,UAAU;EACV,kBAAkB;EAClB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,yBAAyB;EACzB,cAAc;EACd,sCAAsC;AACxC;;AAEA,uBAAuB;;AAEvB;EACE,uCAAuC;EACvC,0BAA0B;EAC1B,OAAO;EACP,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,oBAAoB;EACpB,UAAU;AACZ;;AAEA;EACE,uBAAuB;EACvB,0BAA0B;EAC1B,WAAW;EACX,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,uBAAuB;EACvB,wEAAyD;EACzD,SAAS;EACT,gBAAgB;EAChB,UAAU;EACV,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,OAAO;EACP,oBAAoB;EACpB,iBAAiB;EACjB,gCAAgC;EAChC,UAAU;AACZ;;AAEA;EACE,oCAAoC;EACpC,qBAAqB;EACrB,aAAa;EACb,2BAA2B;AAC7B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,SAAS;EACT,yBAAyB;EACzB,YAAY;EACZ,OAAO;EACP,UAAU;EACV,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;EACpC,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,wEAAoD;EACpD,SAAS;EACT,yBAAyB;EACzB,oBAAoB;EACpB,WAAW;EACX,WAAW;EACX,WAAW;AACb;;AAEA,mBAAmB;;AAEnB;EACE,oCAAoC;EACpC,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,aAAa;EACb,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yDAAsC;AACxC;;AAEA;EACE,wEAAsD;EACtD,SAAS;EACT,WAAW;EACX,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,OAAO;AACT;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,SAAS;EACT,iBAAiB;EACjB,iBAAiB;EACjB,WAAW;AACb;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,UAAU;AACZ","sourcesContent":["/*\t// CSS Reset\n\t// https://www.joshwcomeau.com/css/custom-css-reset/\n*/\n\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n\n* {\n  margin: 0;\n}\n\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\n\nimg, picture, video, canvas, svg {\n  display: block;\n  max-width: 100%;\n}\n\ninput, button, textarea, select {\n  font: inherit;\n}\n\np, h1, h2, h3, h4, h5, h6 {\n  overflow-wrap: break-word;\n}\n\n#root, #__next {\n  isolation: isolate;\n}\n\n/** || Core */\n\nbody {\n  display: flex;\n  font-family: Roboto, serif;\n  --header-color: hsl(185, 14%, 17%);\n  --projects-color: hsl(185, 14%, 47%);\n  --todos-color: hsl(167, 27%, 69%);\n  --standard-padding: 15px;\n  font-size: 18px;\n}\n\nh2 {\n  text-transform: uppercase;\n  font-size: .9rem;\n  letter-spacing: 1px;\n  padding: var(--standard-padding);\n}\n\nul {\n  list-style: none;\n  padding: 0;\n}\n\n/** || Header */\n\nheader {\n  background-color: var(--header-color);\n  box-shadow: 1px 0 1px #666;\n  color: var(--projects-color);\n  height: 100vh;\n  width:65px;\n  position: relative;\n  display: flex;\n  z-index: 2;\n}\n\nheader h1 {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  writing-mode: vertical-lr;\n  rotate: 180deg;\n  margin-bottom: var(--standard-padding);\n}\n\n/** || Projects list  */\n\n.project-section {\n  background-color: var(--projects-color);\n  box-shadow: 1px 0 5px #666;\n  flex: 1;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  z-index: 1;\n}\n\n.add-div {\n  background-color: white;\n  border-top: 1px solid #666;\n  opacity: .5;\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.add-div:focus-within {\n  opacity: .8;\n}\n\n.add-div input[type=\"button\"] {\n  background: transparent;\n  background: no-repeat center/70% url(img/plus-circle.svg);\n  border: 0;\n  margin-left: 5px;\n  outline: 0;\n  text-indent: -2000px;\n  width: 40px;\n}\n\n.add-div input[type=\"text\"] {\n  background-color: inherit;\n  border: 0;\n  flex: 1;\n  font-family: inherit;\n  font-weight: bold;\n  padding: var(--standard-padding);\n  outline: 0;\n}\n\n#projects li {\n  border: 1px solid var(--todos-color);\n  border-width: 1px 0 0;\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.selected {\n  background-color: var(--todos-color);\n}\n\n.project-button {\n  border: 0;\n  background-color: inherit;\n  color: white;\n  flex: 1;\n  outline: 0;\n  padding: var(--standard-padding);\n  text-align: right;\n}\n\n.selected .project-button {\n  background-color: var(--todos-color);\n  color: var(--header-color);\n  font-weight: bold;\n}\n\n.delete {\n  background-color: inherit;\n  background: no-repeat center/40% url(img/delete.svg);\n  border: 0;\n  color: var(--todos-color);\n  text-indent: -2000px;\n  margin: 5px;\n  opacity: .5;\n  width: 40px;\n}\n\n/** || Todo list  */\n\n.todo-section {\n  background-color: var(--todos-color);\n  flex: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n}\n\n#todos li {\n  display: flex;\n  padding: 5px 0;\n}\n\n#todos input {\n  border: 0;\n  outline: 0;\n  background-color: inherit;\n  font: inherit;\n  padding: 0;\n}\n\n#todos input::placeholder {\n  font: inherit;\n  letter-spacing: 0;\n  font-style: oblique;\n}\n\n#todos span {\n  display: none;\n}\n\n.complete {\n  opacity: .3;\n}\n\n.complete .toggle-complete {\n  background-image: url(./img/check.svg);\n}\n\n.toggle-complete {\n  background: no-repeat center/70% url(./img/circle.svg);\n  border: 0;\n  margin: 5px;\n  text-indent: -2000px;\n  width: 40px;\n}\n\n.todo-text {\n  flex: 1;\n}\n\n.description,\n.due-date {\n  font-size: .9rem;\n}\n\ninput.edit-title {\n  font-weight: bold !important;\n}\n\n.edit-duedate {\n  height: 1rem;\n}\n\n.priority {\n  background: inherit;\n  border: 0;\n  font-size: 1.5rem;\n  font-weight: bold;\n  opacity: .1;\n}\n\n.priority-high {\n  text-shadow: 1px 1px 1px black;\n  color: white;\n  opacity: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/c.css":
/*!*******************!*\
  !*** ./src/c.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_c_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./c.css */ "./node_modules/css-loader/dist/cjs.js!./src/c.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_c_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_c_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_c_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_c_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function displayTodos(list) {
  // Print out an initial version of the todo list
  updateList();

  // Write the current list to the DOM
  function updateList() {
    // Grab the DOM elements we need to overwrite.
    const projectList = document.querySelector("#projects");
    const todoHeader = document.querySelector("#todo-header");
    const todoList = document.querySelector("#todos");
  
    // Blank them all.
    projectList.innerHTML = '';
    todoHeader.innerText = '';
    todoList.innerHTML = '';

    // Add all of the projects
    for (let i = 0; i < list.projects.length; i++) {
      const nextListItem = document.createElement("li");
      nextListItem.dataset.project = i;
      if (list.selectedProject === i) {
        nextListItem.classList.add("selected");
      }

      // Create and append a button for each project
      const nextProject = document.createElement("button");
      nextProject.classList.add("project-button")
      nextProject.dataset.project = i;
      nextProject.innerText = list.projects[i].title;
      nextListItem.appendChild(nextProject);
  
      // Create and append a delete button for all but the default list
      if (i !== 0) {
        const deleteButton = document.createElement("button")
        deleteButton.dataset.project = i;
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete");
        nextListItem.appendChild(deleteButton);
      }
      
      projectList.appendChild(nextListItem)
    }
  
    // Grab the currently selected project.
    const project = list.projects[list.selectedProject];
  
    // Print the todos from that project.
    todoHeader.innerText = project.title;
    todoList.dataset.project = list.selectedProject;
  
    for (let i = 0; i < project.todos.length; i++) {
      // Simplify our variable name.
      const thisTodo = project.todos[i];

      // Create all the elements with necessary attributes and contents.
      const nextTodo = document.createElement("li");
      nextTodo.dataset.todo = i;
      if (thisTodo.completed) nextTodo.classList.add("complete");

      const todoComplete = document.createElement("button");
      todoComplete.classList.add("toggle-complete");
      todoComplete.innerText = thisTodo.completed ? "[✓]" : "[ ]";

      const todoInfo = document.createElement("div");
      todoInfo.classList.add("todo-text");

      const todoTitle = document.createElement("strong");
      todoTitle.innerText = thisTodo.title;

      const todoDue = document.createElement("div");
      todoDue.classList.add("due-date");
      const dueDate = thisTodo.dueDate ? thisTodo.dueDate : "No due date.";
      todoDue.innerHTML = `<span>Due:</span> ${dueDate}`;

      const todoDescription = document.createElement("div");
      todoDescription.classList.add("description");
      const description = thisTodo.description ? thisTodo.description : "No description.";
      todoDescription.innerHTML = `<span>Description:</span> ${description}`;
      
      const todoPriority = document.createElement("button");
      todoPriority.classList.add("priority");
      if (thisTodo.highPriority === true) {
        todoPriority.classList.add("priority-high");
      }
      todoPriority.innerText = "!";

      const todoDelete = document.createElement("button");
      todoDelete.classList.add("delete");
      todoDelete.innerText = "X";

      // Write everything to the DOM
      nextTodo.appendChild(todoComplete);

      todoInfo.appendChild(todoTitle);
      todoInfo.appendChild(todoDue);
      todoInfo.appendChild(todoDescription);
      nextTodo.appendChild(todoInfo);

      nextTodo.appendChild(todoPriority);
      nextTodo.appendChild(todoDelete);
      todoList.appendChild(nextTodo);
    }
  
    setListeners();
  }
  
  // Listen for changes from the user.
  function setListeners() {
    // Listen for any clicks on a project or todo
    const items = document.querySelectorAll("#todos li, #projects li");
    for (let i = 0; i < items.length; i++) {
      // And send them to a handler
      items[i].addEventListener("click", handleClicks);
    }

    // Listen for add buttons 
    document.querySelector("#addproject").addEventListener("click", addProject);
    document.querySelector("#newproject").addEventListener("keypress", (event) => {
      if (event.key === "Enter") addProject();
    });
    document.querySelector("#addtodo").addEventListener("click", addTodo);
    document.querySelector("#newtodo").addEventListener("keypress", (event) => {
      if (event.key === "Enter") addTodo();
    });
  }

  // Decide what to do depending on where the user clicked.
  function handleClicks(event) {
    if (event.currentTarget.dataset.project) {
      // First handle project interactions.
      const projectId = Number(event.currentTarget.dataset.project);

      // Either select or delete the project
      if (event.target.classList.contains('project-button')) {
        list.selectProject(projectId);
        updateList();
      } else if (event.target.classList.contains('delete')) {
        // If we're deleting the current project,
        // switch back to the default project first.
        if (list.selectedProject === projectId) {
          list.selectProject(0);
        }
        list.deleteProject(list, projectId);
        updateList();
      }
    } else if (event.currentTarget.dataset.todo) {
      // Then handle todo interactions.
      const todoId = Number(event.currentTarget.dataset.todo);
      const project = list.projects[list.selectedProject];    const classList = event.target.classList;
      const todo = project.todos[todoId];

      if (classList.contains('toggle-complete')) {
        todo.toggleComplete();
        updateList();
      } else if (classList.contains('priority')) {
        todo.togglePriority();
        updateList();
      } else if (classList.contains('delete')) {
        project.deleteTodo(project, todoId);
        updateList();
      } else if (classList.contains('description')) {
        // Create a new input element
        const editDescription = document.createElement('input');
        editDescription.value = todo.description || '';
        if (!todo.description) editDescription.placeholder = 'Add a description';
        editDescription.classList.add('edit-description');
        editDescription.dataset.todo = todoId;

        // Replace the current title with the new input
        const currentDescription = event.currentTarget.querySelector('.description');
        currentDescription.innerHTML = '';
        currentDescription.appendChild(editDescription);

        // Focus on it, and set up an event listener
        editDescription.focus();
        editDescription.addEventListener('focusout', updateTodoDescription);      
        editDescription.addEventListener('keypress', (event) => {
          if (event.key === "Enter")  {
            editDescription.removeEventListener('focusout', updateTodoDescription);
            updateTodoDescription();
          }
        });  
      } else if (classList.contains('due-date')) {
        // Create a new input element
        const editDueDate = document.createElement('input');
        editDueDate.type = 'date';
        editDueDate.classList.add('edit-duedate');
        editDueDate.dataset.todo = todoId;

        // Replace the current title with the new input
        const currentDueDate = event.currentTarget.querySelector('.due-date');
        currentDueDate.innerHTML = '';
        currentDueDate.appendChild(editDueDate);

        // Focus on it, and set up an event listener
        editDueDate.focus();
        editDueDate.addEventListener('focusout', updateTodoDueDate);   
        editDueDate.addEventListener('keypress', (event) => {
          if (event.key === "Enter")  {
            editDueDate.removeEventListener('focusout', updateTodoDueDate);
            updateTodoDueDate();
          }
        });
      } else {
        // Create a new input element
        const editInput = document.createElement('input');
        editInput.value = todo.title;
        editInput.classList.add('edit-title');
        editInput.dataset.todo = todoId;

        // Replace the current title with the new input
        const currentTitle = event.currentTarget.querySelector('strong');
        currentTitle.after(editInput);
        currentTitle.remove();

        // Focus on it, and set up an event listener
        editInput.focus();
        editInput.addEventListener('focusout', updateTodoTitle);
        editInput.addEventListener('keypress', (event) => {
          if (event.key === "Enter")  {
            editInput.removeEventListener('focusout', updateTodoTitle);
            updateTodoTitle();
          }
        });
      }
    }
  }
  
  // Handle requests to add a project.
  function addProject() {
    // Grab new project title
    const projectInput = document.querySelector('#newproject');
    const newProject = projectInput.value;

    // If nothing has been entered, quit.
    if (newProject === '') return;

    // Otherwise, blank the field and add it to the project list.
    projectInput.value = '';
    list.addProject(newProject);
  
    // Select the newly created list and update
    list.selectProject(list.projects.length-1);
    updateList();
  }
  
  // Handle requests to add a todo to a particular project.
  function addTodo() {
    // Grab new todo title
    const todoInput = document.querySelector("#newtodo");
    const newTodo = todoInput.value;

    // If nothing has been entered, quit.
    if (newTodo === '') return;

    // Otherwise, blank the field and add it to the project
    todoInput.value = '';
    list.projects[list.selectedProject].addTodo(newTodo);

    // Rewrite the todo list
    updateList();
  }

  // When the user enters a new todo title, update it and update the app.
  function updateTodoTitle() {
    const todoInput = document.querySelector('.edit-title');
    const thisTodo = list.projects[list.selectedProject].todos[todoInput.dataset.todo];
    thisTodo.update('title', todoInput.value);

    updateList();
  }

   // When the user enteres a new todo description, update it and update the app.
   function updateTodoDescription() {
    const todoInput = document.querySelector('.edit-description');
    const thisTodo = list.projects[list.selectedProject].todos[todoInput.dataset.todo];
    thisTodo.update('description', todoInput.value);

    updateList();
  }

  // When the user enteres a new todo due date, update it and update the app.
  function updateTodoDueDate() {
    const todoInput = document.querySelector('.edit-duedate');
    const thisTodo = list.projects[list.selectedProject].todos[todoInput.dataset.todo];
    thisTodo.update('dueDate', todoInput.value);

    updateList();
  }  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTodos);

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logError: () => (/* binding */ logError),
/* harmony export */   logSuccess: () => (/* binding */ logSuccess)
/* harmony export */ });
function logError(message) {
  console.log(message);
}

function logSuccess(message) {
  console.log(message);
}



/***/ }),

/***/ "./src/manageTodos.js":
/*!****************************!*\
  !*** ./src/manageTodos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.js */ "./src/logger.js");


// A class for building and managing individual todo items
class Todo {
  constructor(title, projectID = 0) {
    if (title === undefined) {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logError)("You need at least a title!");
      return;
    }

    this.title = title;
    this.projectID = projectID;
    this.highPriority = false;
    this.completed = false;
    this.dueDate = undefined;
  }

  update(field, value) {
    // Make sure we don't blank a todo title.
    if (field === 'title' && !value) {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logError)("You can't set a todo's title to blank.");
      return;
    }

    this[field] = value;
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logSuccess)(`Updated the ${field} of this todo to ${value}.`);
  }

  toggleComplete() {
    this.completed = this.completed === false ? true : false;
  }

  togglePriority() {
    this.highPriority = this.highPriority === false ? true : false;
  }
}

// A class for building and managing individual projects
class Project {
  constructor(title) {
    this.title = title;
    this.todos = [];  // This blank array is where we'll keep our list of todos.
  }

  update(field, value) {
    // Make sure we don't blank a todo title.
    if (field === 'title' && !value) {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logError)("You can't set a todo's title to blank.");
      return;
    }

    this[field] = value;
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logSuccess)(`Updated the ${field} of this todo to ${value}.`);
  }

  addTodo(title) {
    if (!title) {
      (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logError)("Your todo needs a title!");
      return;
    }

    this.todos.push(new Todo(title));
  }

  deleteTodo(project, id) {
    project.todos.splice(id, 1);
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logSuccess)("Your todo has been deleted.");
  }
}

// The master todo list, with projects inside and todos inside those projects.
// This will be the object we pass outside the module.
class todoList {
  constructor(storedList) {
    if (storedList) {
      // If list has been pulled from storage, convert and use it.
      Object.setPrototypeOf(storedList, new todoList());
      for (const project of storedList.projects) {
        Object.setPrototypeOf(project, new Project());
        for (const todo of project.todos) {
          Object.setPrototypeOf(todo, new Todo());
        }
      }

      return storedList;
    } else {
      // Otherwise initialize a new one.
      // Initialize a new project list.
      this.projects = [new Project("Inbox", "This is where all of your todos live by default.")];
  
      // Start by selecting the default project.
      this.selectedProject = 0;
    }
  }

  addProject(title) {
    this.projects.push(new Project(title));
  }

  deleteProject(list, id) {
    list.projects.splice(id, 1);
    (0,_logger_js__WEBPACK_IMPORTED_MODULE_0__.logSuccess)("Your project has been deleted.");
  }

  selectProject(project) {
    this.selectedProject = project;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoList);

/***/ }),

/***/ "./src/img/check.svg":
/*!***************************!*\
  !*** ./src/img/check.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "61535918a108ad8925cd.svg";

/***/ }),

/***/ "./src/img/circle.svg":
/*!****************************!*\
  !*** ./src/img/circle.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0486fe40e1f478a3700.svg";

/***/ }),

/***/ "./src/img/delete.svg":
/*!****************************!*\
  !*** ./src/img/delete.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fcba734bbf37cc9391fd.svg";

/***/ }),

/***/ "./src/img/plus-circle.svg":
/*!*********************************!*\
  !*** ./src/img/plus-circle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "13a561ce26c17c9b5f6c.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manageTodos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manageTodos */ "./src/manageTodos.js");
/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodos */ "./src/displayTodos.js");
/* harmony import */ var _c_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c.css */ "./src/c.css");




// If there's a stored list, grab it.
const storedList = JSON.parse(localStorage.getItem("list"));

// Build our new todo list (with stored values if necessary).
const list = new _manageTodos__WEBPACK_IMPORTED_MODULE_0__["default"](storedList);

// Start the app
(0,_displayTodos__WEBPACK_IMPORTED_MODULE_1__["default"])(list);

// Save our list to memory before leaving.
window.addEventListener('beforeunload', () => {
  localStorage.setItem("list", JSON.stringify(list));
  console.log("stored!");
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QiwwQkFBMEI7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFROztBQUV2RDtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsWUFBWTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNuUzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVE7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFRO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBLElBQUksc0RBQVUsZ0JBQWdCLE9BQU8sa0JBQWtCLE1BQU07QUFDN0Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sb0RBQVE7QUFDZDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxzREFBVSxnQkFBZ0IsT0FBTyxrQkFBa0IsTUFBTTtBQUM3RDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxvREFBUTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0d2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQztBQUNLO0FBQ3pCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG9EQUFROztBQUV6QjtBQUNBLHlEQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2MuY3NzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvYy5jc3M/ZTFmMyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kaXNwbGF5VG9kb3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL2xvZ2dlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvbWFuYWdlVG9kb3MuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLXRvZG8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImltZy9wbHVzLWNpcmNsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWcvZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL2NoZWNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL2NpcmNsZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qXHQvLyBDU1MgUmVzZXRcblx0Ly8gaHR0cHM6Ly93d3cuam9zaHdjb21lYXUuY29tL2Nzcy9jdXN0b20tY3NzLXJlc2V0L1xuKi9cblxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMS41O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCwgYnV0dG9uLCB0ZXh0YXJlYSwgc2VsZWN0IHtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG59XG5cbiNyb290LCAjX19uZXh0IHtcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xufVxuXG4vKiogfHwgQ29yZSAqL1xuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XG4gIC0taGVhZGVyLWNvbG9yOiBoc2woMTg1LCAxNCUsIDE3JSk7XG4gIC0tcHJvamVjdHMtY29sb3I6IGhzbCgxODUsIDE0JSwgNDclKTtcbiAgLS10b2Rvcy1jb2xvcjogaHNsKDE2NywgMjclLCA2OSUpO1xuICAtLXN0YW5kYXJkLXBhZGRpbmc6IDE1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDIge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IC45cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZC1wYWRkaW5nKTtcbn1cblxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiogfHwgSGVhZGVyICovXG5cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XG4gIGJveC1zaGFkb3c6IDFweCAwIDFweCAjNjY2O1xuICBjb2xvcjogdmFyKC0tcHJvamVjdHMtY29sb3IpO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDo2NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHotaW5kZXg6IDI7XG59XG5cbmhlYWRlciBoMSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3cml0aW5nLW1vZGU6IHZlcnRpY2FsLWxyO1xuICByb3RhdGU6IDE4MGRlZztcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3RhbmRhcmQtcGFkZGluZyk7XG59XG5cbi8qKiB8fCBQcm9qZWN0cyBsaXN0ICAqL1xuXG4ucHJvamVjdC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtY29sb3IpO1xuICBib3gtc2hhZG93OiAxcHggMCA1cHggIzY2NjtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hZGQtZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xuICBvcGFjaXR5OiAuNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uYWRkLWRpdjpmb2N1cy13aXRoaW4ge1xuICBvcGFjaXR5OiAuODtcbn1cblxuLmFkZC1kaXYgaW5wdXRbdHlwZT1cImJ1dHRvblwiXSB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyLzcwJSB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJvcmRlcjogMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgb3V0bGluZTogMDtcbiAgdGV4dC1pbmRlbnQ6IC0yMDAwcHg7XG4gIHdpZHRoOiA0MHB4O1xufVxuXG4uYWRkLWRpdiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogMDtcbiAgZmxleDogMTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZC1wYWRkaW5nKTtcbiAgb3V0bGluZTogMDtcbn1cblxuI3Byb2plY3RzIGxpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdG9kb3MtY29sb3IpO1xuICBib3JkZXItd2lkdGg6IDFweCAwIDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cblxuLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kb3MtY29sb3IpO1xufVxuXG4ucHJvamVjdC1idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleDogMTtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmQtcGFkZGluZyk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uc2VsZWN0ZWQgLnByb2plY3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kb3MtY29sb3IpO1xuICBjb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5kZWxldGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgY2VudGVyLzQwJSB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6IHZhcigtLXRvZG9zLWNvbG9yKTtcbiAgdGV4dC1pbmRlbnQ6IC0yMDAwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBvcGFjaXR5OiAuNTtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi8qKiB8fCBUb2RvIGxpc3QgICovXG5cbi50b2RvLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2Rvcy1jb2xvcik7XG4gIGZsZXg6IDM7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG4jdG9kb3MgbGkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMDtcbn1cblxuI3RvZG9zIGlucHV0IHtcbiAgYm9yZGVyOiAwO1xuICBvdXRsaW5lOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250OiBpbmhlcml0O1xuICBwYWRkaW5nOiAwO1xufVxuXG4jdG9kb3MgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udDogaW5oZXJpdDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG59XG5cbiN0b2RvcyBzcGFuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbXBsZXRlIHtcbiAgb3BhY2l0eTogLjM7XG59XG5cbi5jb21wbGV0ZSAudG9nZ2xlLWNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xufVxuXG4udG9nZ2xlLWNvbXBsZXRlIHtcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci83MCUgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICBib3JkZXI6IDA7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWluZGVudDogLTIwMDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbi50b2RvLXRleHQge1xuICBmbGV4OiAxO1xufVxuXG4uZGVzY3JpcHRpb24sXG4uZHVlLWRhdGUge1xuICBmb250LXNpemU6IC45cmVtO1xufVxuXG5pbnB1dC5lZGl0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuLmVkaXQtZHVlZGF0ZSB7XG4gIGhlaWdodDogMXJlbTtcbn1cblxuLnByaW9yaXR5IHtcbiAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG9wYWNpdHk6IC4xO1xufVxuXG4ucHJpb3JpdHktaGlnaCB7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2MuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUVDOztBQUVEO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGFBQWE7O0FBRWI7RUFDRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLGtDQUFrQztFQUNsQyxvQ0FBb0M7RUFDcEMsaUNBQWlDO0VBQ2pDLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UscUNBQXFDO0VBQ3JDLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsc0NBQXNDO0FBQ3hDOztBQUVBLHVCQUF1Qjs7QUFFdkI7RUFDRSx1Q0FBdUM7RUFDdkMsMEJBQTBCO0VBQzFCLE9BQU87RUFDUCxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix3RUFBeUQ7RUFDekQsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLE9BQU87RUFDUCxVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQywwQkFBMEI7RUFDMUIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdFQUFvRDtFQUNwRCxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0Usb0NBQW9DO0VBQ3BDLE9BQU87RUFDUCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseURBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usd0VBQXNEO0VBQ3RELFNBQVM7RUFDVCxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsU0FBUztFQUNULGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixVQUFVO0FBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypcXHQvLyBDU1MgUmVzZXRcXG5cXHQvLyBodHRwczovL3d3dy5qb3Nod2NvbWVhdS5jb20vY3NzL2N1c3RvbS1jc3MtcmVzZXQvXFxuKi9cXG5cXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuaW1nLCBwaWN0dXJlLCB2aWRlbywgY2FudmFzLCBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbmlucHV0LCBidXR0b24sIHRleHRhcmVhLCBzZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxuXFxucCwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG5cXG4jcm9vdCwgI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbi8qKiB8fCBDb3JlICovXFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XFxuICAtLWhlYWRlci1jb2xvcjogaHNsKDE4NSwgMTQlLCAxNyUpO1xcbiAgLS1wcm9qZWN0cy1jb2xvcjogaHNsKDE4NSwgMTQlLCA0NyUpO1xcbiAgLS10b2Rvcy1jb2xvcjogaHNsKDE2NywgMjclLCA2OSUpO1xcbiAgLS1zdGFuZGFyZC1wYWRkaW5nOiAxNXB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5oMiB7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAuOXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxuICBwYWRkaW5nOiB2YXIoLS1zdGFuZGFyZC1wYWRkaW5nKTtcXG59XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKiB8fCBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IDFweCAwIDFweCAjNjY2O1xcbiAgY29sb3I6IHZhcigtLXByb2plY3RzLWNvbG9yKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDo2NXB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHotaW5kZXg6IDI7XFxufVxcblxcbmhlYWRlciBoMSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgd3JpdGluZy1tb2RlOiB2ZXJ0aWNhbC1scjtcXG4gIHJvdGF0ZTogMTgwZGVnO1xcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3RhbmRhcmQtcGFkZGluZyk7XFxufVxcblxcbi8qKiB8fCBQcm9qZWN0cyBsaXN0ICAqL1xcblxcbi5wcm9qZWN0LXNlY3Rpb24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvamVjdHMtY29sb3IpO1xcbiAgYm94LXNoYWRvdzogMXB4IDAgNXB4ICM2NjY7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uYWRkLWRpdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNjY2O1xcbiAgb3BhY2l0eTogLjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbn1cXG5cXG4uYWRkLWRpdjpmb2N1cy13aXRoaW4ge1xcbiAgb3BhY2l0eTogLjg7XFxufVxcblxcbi5hZGQtZGl2IGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci83MCUgdXJsKGltZy9wbHVzLWNpcmNsZS5zdmcpO1xcbiAgYm9yZGVyOiAwO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIG91dGxpbmU6IDA7XFxuICB0ZXh0LWluZGVudDogLTIwMDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbn1cXG5cXG4uYWRkLWRpdiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGJvcmRlcjogMDtcXG4gIGZsZXg6IDE7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogdmFyKC0tc3RhbmRhcmQtcGFkZGluZyk7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG5cXG4jcHJvamVjdHMgbGkge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdG9kb3MtY29sb3IpO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG59XFxuXFxuLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG9zLWNvbG9yKTtcXG59XFxuXFxuLnByb2plY3QtYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbiAgb3V0bGluZTogMDtcXG4gIHBhZGRpbmc6IHZhcigtLXN0YW5kYXJkLXBhZGRpbmcpO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbi5zZWxlY3RlZCAucHJvamVjdC1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9kb3MtY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgYmFja2dyb3VuZDogbm8tcmVwZWF0IGNlbnRlci80MCUgdXJsKGltZy9kZWxldGUuc3ZnKTtcXG4gIGJvcmRlcjogMDtcXG4gIGNvbG9yOiB2YXIoLS10b2Rvcy1jb2xvcik7XFxuICB0ZXh0LWluZGVudDogLTIwMDBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgb3BhY2l0eTogLjU7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLyoqIHx8IFRvZG8gbGlzdCAgKi9cXG5cXG4udG9kby1zZWN0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZG9zLWNvbG9yKTtcXG4gIGZsZXg6IDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4jdG9kb3MgbGkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweCAwO1xcbn1cXG5cXG4jdG9kb3MgaW5wdXQge1xcbiAgYm9yZGVyOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250OiBpbmhlcml0O1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuI3RvZG9zIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBmb250OiBpbmhlcml0O1xcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbn1cXG5cXG4jdG9kb3Mgc3BhbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29tcGxldGUge1xcbiAgb3BhY2l0eTogLjM7XFxufVxcblxcbi5jb21wbGV0ZSAudG9nZ2xlLWNvbXBsZXRlIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2ltZy9jaGVjay5zdmcpO1xcbn1cXG5cXG4udG9nZ2xlLWNvbXBsZXRlIHtcXG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCBjZW50ZXIvNzAlIHVybCguL2ltZy9jaXJjbGUuc3ZnKTtcXG4gIGJvcmRlcjogMDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgdGV4dC1pbmRlbnQ6IC0yMDAwcHg7XFxuICB3aWR0aDogNDBweDtcXG59XFxuXFxuLnRvZG8tdGV4dCB7XFxuICBmbGV4OiAxO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24sXFxuLmR1ZS1kYXRlIHtcXG4gIGZvbnQtc2l6ZTogLjlyZW07XFxufVxcblxcbmlucHV0LmVkaXQtdGl0bGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcXG59XFxuXFxuLmVkaXQtZHVlZGF0ZSB7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5wcmlvcml0eSB7XFxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG9wYWNpdHk6IC4xO1xcbn1cXG5cXG4ucHJpb3JpdHktaGlnaCB7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gZGlzcGxheVRvZG9zKGxpc3QpIHtcbiAgLy8gUHJpbnQgb3V0IGFuIGluaXRpYWwgdmVyc2lvbiBvZiB0aGUgdG9kbyBsaXN0XG4gIHVwZGF0ZUxpc3QoKTtcblxuICAvLyBXcml0ZSB0aGUgY3VycmVudCBsaXN0IHRvIHRoZSBET01cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdCgpIHtcbiAgICAvLyBHcmFiIHRoZSBET00gZWxlbWVudHMgd2UgbmVlZCB0byBvdmVyd3JpdGUuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuICAgIGNvbnN0IHRvZG9IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZG8taGVhZGVyXCIpO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2Rvc1wiKTtcbiAgXG4gICAgLy8gQmxhbmsgdGhlbSBhbGwuXG4gICAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSAnJztcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcblxuICAgIC8vIEFkZCBhbGwgb2YgdGhlIHByb2plY3RzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0LnByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuZXh0TGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBuZXh0TGlzdEl0ZW0uZGF0YXNldC5wcm9qZWN0ID0gaTtcbiAgICAgIGlmIChsaXN0LnNlbGVjdGVkUHJvamVjdCA9PT0gaSkge1xuICAgICAgICBuZXh0TGlzdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBhIGJ1dHRvbiBmb3IgZWFjaCBwcm9qZWN0XG4gICAgICBjb25zdCBuZXh0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBuZXh0UHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1idXR0b25cIilcbiAgICAgIG5leHRQcm9qZWN0LmRhdGFzZXQucHJvamVjdCA9IGk7XG4gICAgICBuZXh0UHJvamVjdC5pbm5lclRleHQgPSBsaXN0LnByb2plY3RzW2ldLnRpdGxlO1xuICAgICAgbmV4dExpc3RJdGVtLmFwcGVuZENoaWxkKG5leHRQcm9qZWN0KTtcbiAgXG4gICAgICAvLyBDcmVhdGUgYW5kIGFwcGVuZCBhIGRlbGV0ZSBidXR0b24gZm9yIGFsbCBidXQgdGhlIGRlZmF1bHQgbGlzdFxuICAgICAgaWYgKGkgIT09IDApIHtcbiAgICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgICAgICBkZWxldGVCdXR0b24uZGF0YXNldC5wcm9qZWN0ID0gaTtcbiAgICAgICAgZGVsZXRlQnV0dG9uLmlubmVyVGV4dCA9IFwiRGVsZXRlXCI7XG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgICBuZXh0TGlzdEl0ZW0uYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQobmV4dExpc3RJdGVtKVxuICAgIH1cbiAgXG4gICAgLy8gR3JhYiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIHByb2plY3QuXG4gICAgY29uc3QgcHJvamVjdCA9IGxpc3QucHJvamVjdHNbbGlzdC5zZWxlY3RlZFByb2plY3RdO1xuICBcbiAgICAvLyBQcmludCB0aGUgdG9kb3MgZnJvbSB0aGF0IHByb2plY3QuXG4gICAgdG9kb0hlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xuICAgIHRvZG9MaXN0LmRhdGFzZXQucHJvamVjdCA9IGxpc3Quc2VsZWN0ZWRQcm9qZWN0O1xuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3QudG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIFNpbXBsaWZ5IG91ciB2YXJpYWJsZSBuYW1lLlxuICAgICAgY29uc3QgdGhpc1RvZG8gPSBwcm9qZWN0LnRvZG9zW2ldO1xuXG4gICAgICAvLyBDcmVhdGUgYWxsIHRoZSBlbGVtZW50cyB3aXRoIG5lY2Vzc2FyeSBhdHRyaWJ1dGVzIGFuZCBjb250ZW50cy5cbiAgICAgIGNvbnN0IG5leHRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbmV4dFRvZG8uZGF0YXNldC50b2RvID0gaTtcbiAgICAgIGlmICh0aGlzVG9kby5jb21wbGV0ZWQpIG5leHRUb2RvLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTtcblxuICAgICAgY29uc3QgdG9kb0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIHRvZG9Db21wbGV0ZS5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlLWNvbXBsZXRlXCIpO1xuICAgICAgdG9kb0NvbXBsZXRlLmlubmVyVGV4dCA9IHRoaXNUb2RvLmNvbXBsZXRlZCA/IFwiW+Kck11cIiA6IFwiWyBdXCI7XG5cbiAgICAgIGNvbnN0IHRvZG9JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRvZG9JbmZvLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRleHRcIik7XG5cbiAgICAgIGNvbnN0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7XG4gICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdGhpc1RvZG8udGl0bGU7XG5cbiAgICAgIGNvbnN0IHRvZG9EdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9kb0R1ZS5jbGFzc0xpc3QuYWRkKFwiZHVlLWRhdGVcIik7XG4gICAgICBjb25zdCBkdWVEYXRlID0gdGhpc1RvZG8uZHVlRGF0ZSA/IHRoaXNUb2RvLmR1ZURhdGUgOiBcIk5vIGR1ZSBkYXRlLlwiO1xuICAgICAgdG9kb0R1ZS5pbm5lckhUTUwgPSBgPHNwYW4+RHVlOjwvc3Bhbj4gJHtkdWVEYXRlfWA7XG5cbiAgICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uXCIpO1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB0aGlzVG9kby5kZXNjcmlwdGlvbiA/IHRoaXNUb2RvLmRlc2NyaXB0aW9uIDogXCJObyBkZXNjcmlwdGlvbi5cIjtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgPHNwYW4+RGVzY3JpcHRpb246PC9zcGFuPiAke2Rlc2NyaXB0aW9ufWA7XG4gICAgICBcbiAgICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIpO1xuICAgICAgaWYgKHRoaXNUb2RvLmhpZ2hQcmlvcml0eSA9PT0gdHJ1ZSkge1xuICAgICAgICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5LWhpZ2hcIik7XG4gICAgICB9XG4gICAgICB0b2RvUHJpb3JpdHkuaW5uZXJUZXh0ID0gXCIhXCI7XG5cbiAgICAgIGNvbnN0IHRvZG9EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgdG9kb0RlbGV0ZS5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xuICAgICAgdG9kb0RlbGV0ZS5pbm5lclRleHQgPSBcIlhcIjtcblxuICAgICAgLy8gV3JpdGUgZXZlcnl0aGluZyB0byB0aGUgRE9NXG4gICAgICBuZXh0VG9kby5hcHBlbmRDaGlsZCh0b2RvQ29tcGxldGUpO1xuXG4gICAgICB0b2RvSW5mby5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICAgICAgdG9kb0luZm8uYXBwZW5kQ2hpbGQodG9kb0R1ZSk7XG4gICAgICB0b2RvSW5mby5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICAgICAgbmV4dFRvZG8uYXBwZW5kQ2hpbGQodG9kb0luZm8pO1xuXG4gICAgICBuZXh0VG9kby5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgbmV4dFRvZG8uYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZSk7XG4gICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChuZXh0VG9kbyk7XG4gICAgfVxuICBcbiAgICBzZXRMaXN0ZW5lcnMoKTtcbiAgfVxuICBcbiAgLy8gTGlzdGVuIGZvciBjaGFuZ2VzIGZyb20gdGhlIHVzZXIuXG4gIGZ1bmN0aW9uIHNldExpc3RlbmVycygpIHtcbiAgICAvLyBMaXN0ZW4gZm9yIGFueSBjbGlja3Mgb24gYSBwcm9qZWN0IG9yIHRvZG9cbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjdG9kb3MgbGksICNwcm9qZWN0cyBsaVwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBBbmQgc2VuZCB0aGVtIHRvIGEgaGFuZGxlclxuICAgICAgaXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsaWNrcyk7XG4gICAgfVxuXG4gICAgLy8gTGlzdGVuIGZvciBhZGQgYnV0dG9ucyBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHByb2plY3RcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3QpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3cHJvamVjdFwiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIGFkZFByb2plY3QoKTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZHRvZG9cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvZG8pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV3dG9kb1wiKS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIGFkZFRvZG8oKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERlY2lkZSB3aGF0IHRvIGRvIGRlcGVuZGluZyBvbiB3aGVyZSB0aGUgdXNlciBjbGlja2VkLlxuICBmdW5jdGlvbiBoYW5kbGVDbGlja3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnByb2plY3QpIHtcbiAgICAgIC8vIEZpcnN0IGhhbmRsZSBwcm9qZWN0IGludGVyYWN0aW9ucy5cbiAgICAgIGNvbnN0IHByb2plY3RJZCA9IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucHJvamVjdCk7XG5cbiAgICAgIC8vIEVpdGhlciBzZWxlY3Qgb3IgZGVsZXRlIHRoZSBwcm9qZWN0XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1idXR0b24nKSkge1xuICAgICAgICBsaXN0LnNlbGVjdFByb2plY3QocHJvamVjdElkKTtcbiAgICAgICAgdXBkYXRlTGlzdCgpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGUnKSkge1xuICAgICAgICAvLyBJZiB3ZSdyZSBkZWxldGluZyB0aGUgY3VycmVudCBwcm9qZWN0LFxuICAgICAgICAvLyBzd2l0Y2ggYmFjayB0byB0aGUgZGVmYXVsdCBwcm9qZWN0IGZpcnN0LlxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZFByb2plY3QgPT09IHByb2plY3RJZCkge1xuICAgICAgICAgIGxpc3Quc2VsZWN0UHJvamVjdCgwKTtcbiAgICAgICAgfVxuICAgICAgICBsaXN0LmRlbGV0ZVByb2plY3QobGlzdCwgcHJvamVjdElkKTtcbiAgICAgICAgdXBkYXRlTGlzdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnRvZG8pIHtcbiAgICAgIC8vIFRoZW4gaGFuZGxlIHRvZG8gaW50ZXJhY3Rpb25zLlxuICAgICAgY29uc3QgdG9kb0lkID0gTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50b2RvKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBsaXN0LnByb2plY3RzW2xpc3Quc2VsZWN0ZWRQcm9qZWN0XTsgICAgY29uc3QgY2xhc3NMaXN0ID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdDtcbiAgICAgIGNvbnN0IHRvZG8gPSBwcm9qZWN0LnRvZG9zW3RvZG9JZF07XG5cbiAgICAgIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZS1jb21wbGV0ZScpKSB7XG4gICAgICAgIHRvZG8udG9nZ2xlQ29tcGxldGUoKTtcbiAgICAgICAgdXBkYXRlTGlzdCgpO1xuICAgICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ3ByaW9yaXR5JykpIHtcbiAgICAgICAgdG9kby50b2dnbGVQcmlvcml0eSgpO1xuICAgICAgICB1cGRhdGVMaXN0KCk7XG4gICAgICB9IGVsc2UgaWYgKGNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlJykpIHtcbiAgICAgICAgcHJvamVjdC5kZWxldGVUb2RvKHByb2plY3QsIHRvZG9JZCk7XG4gICAgICAgIHVwZGF0ZUxpc3QoKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xhc3NMaXN0LmNvbnRhaW5zKCdkZXNjcmlwdGlvbicpKSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbnB1dCBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVkaXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXREZXNjcmlwdGlvbi52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb24gfHwgJyc7XG4gICAgICAgIGlmICghdG9kby5kZXNjcmlwdGlvbikgZWRpdERlc2NyaXB0aW9uLnBsYWNlaG9sZGVyID0gJ0FkZCBhIGRlc2NyaXB0aW9uJztcbiAgICAgICAgZWRpdERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgZWRpdERlc2NyaXB0aW9uLmRhdGFzZXQudG9kbyA9IHRvZG9JZDtcblxuICAgICAgICAvLyBSZXBsYWNlIHRoZSBjdXJyZW50IHRpdGxlIHdpdGggdGhlIG5ldyBpbnB1dFxuICAgICAgICBjb25zdCBjdXJyZW50RGVzY3JpcHRpb24gPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpO1xuICAgICAgICBjdXJyZW50RGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGN1cnJlbnREZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChlZGl0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgIC8vIEZvY3VzIG9uIGl0LCBhbmQgc2V0IHVwIGFuIGV2ZW50IGxpc3RlbmVyXG4gICAgICAgIGVkaXREZXNjcmlwdGlvbi5mb2N1cygpO1xuICAgICAgICBlZGl0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB1cGRhdGVUb2RvRGVzY3JpcHRpb24pOyAgICAgIFxuICAgICAgICBlZGl0RGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpICB7XG4gICAgICAgICAgICBlZGl0RGVzY3JpcHRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB1cGRhdGVUb2RvRGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgdXBkYXRlVG9kb0Rlc2NyaXB0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTsgIFxuICAgICAgfSBlbHNlIGlmIChjbGFzc0xpc3QuY29udGFpbnMoJ2R1ZS1kYXRlJykpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGlucHV0IGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWRpdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0RHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xuICAgICAgICBlZGl0RHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCdlZGl0LWR1ZWRhdGUnKTtcbiAgICAgICAgZWRpdER1ZURhdGUuZGF0YXNldC50b2RvID0gdG9kb0lkO1xuXG4gICAgICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgdGl0bGUgd2l0aCB0aGUgbmV3IGlucHV0XG4gICAgICAgIGNvbnN0IGN1cnJlbnREdWVEYXRlID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCcuZHVlLWRhdGUnKTtcbiAgICAgICAgY3VycmVudER1ZURhdGUuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGN1cnJlbnREdWVEYXRlLmFwcGVuZENoaWxkKGVkaXREdWVEYXRlKTtcblxuICAgICAgICAvLyBGb2N1cyBvbiBpdCwgYW5kIHNldCB1cCBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICBlZGl0RHVlRGF0ZS5mb2N1cygpO1xuICAgICAgICBlZGl0RHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHVwZGF0ZVRvZG9EdWVEYXRlKTsgICBcbiAgICAgICAgZWRpdER1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpICB7XG4gICAgICAgICAgICBlZGl0RHVlRGF0ZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIHVwZGF0ZVRvZG9EdWVEYXRlKTtcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9EdWVEYXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBpbnB1dCBlbGVtZW50XG4gICAgICAgIGNvbnN0IGVkaXRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXRJbnB1dC52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgICAgIGVkaXRJbnB1dC5jbGFzc0xpc3QuYWRkKCdlZGl0LXRpdGxlJyk7XG4gICAgICAgIGVkaXRJbnB1dC5kYXRhc2V0LnRvZG8gPSB0b2RvSWQ7XG5cbiAgICAgICAgLy8gUmVwbGFjZSB0aGUgY3VycmVudCB0aXRsZSB3aXRoIHRoZSBuZXcgaW5wdXRcbiAgICAgICAgY29uc3QgY3VycmVudFRpdGxlID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKCdzdHJvbmcnKTtcbiAgICAgICAgY3VycmVudFRpdGxlLmFmdGVyKGVkaXRJbnB1dCk7XG4gICAgICAgIGN1cnJlbnRUaXRsZS5yZW1vdmUoKTtcblxuICAgICAgICAvLyBGb2N1cyBvbiBpdCwgYW5kIHNldCB1cCBhbiBldmVudCBsaXN0ZW5lclxuICAgICAgICBlZGl0SW5wdXQuZm9jdXMoKTtcbiAgICAgICAgZWRpdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdXBkYXRlVG9kb1RpdGxlKTtcbiAgICAgICAgZWRpdElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSAge1xuICAgICAgICAgICAgZWRpdElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdXBkYXRlVG9kb1RpdGxlKTtcbiAgICAgICAgICAgIHVwZGF0ZVRvZG9UaXRsZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAvLyBIYW5kbGUgcmVxdWVzdHMgdG8gYWRkIGEgcHJvamVjdC5cbiAgZnVuY3Rpb24gYWRkUHJvamVjdCgpIHtcbiAgICAvLyBHcmFiIG5ldyBwcm9qZWN0IHRpdGxlXG4gICAgY29uc3QgcHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ld3Byb2plY3QnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdElucHV0LnZhbHVlO1xuXG4gICAgLy8gSWYgbm90aGluZyBoYXMgYmVlbiBlbnRlcmVkLCBxdWl0LlxuICAgIGlmIChuZXdQcm9qZWN0ID09PSAnJykgcmV0dXJuO1xuXG4gICAgLy8gT3RoZXJ3aXNlLCBibGFuayB0aGUgZmllbGQgYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdCBsaXN0LlxuICAgIHByb2plY3RJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGxpc3QuYWRkUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgXG4gICAgLy8gU2VsZWN0IHRoZSBuZXdseSBjcmVhdGVkIGxpc3QgYW5kIHVwZGF0ZVxuICAgIGxpc3Quc2VsZWN0UHJvamVjdChsaXN0LnByb2plY3RzLmxlbmd0aC0xKTtcbiAgICB1cGRhdGVMaXN0KCk7XG4gIH1cbiAgXG4gIC8vIEhhbmRsZSByZXF1ZXN0cyB0byBhZGQgYSB0b2RvIHRvIGEgcGFydGljdWxhciBwcm9qZWN0LlxuICBmdW5jdGlvbiBhZGRUb2RvKCkge1xuICAgIC8vIEdyYWIgbmV3IHRvZG8gdGl0bGVcbiAgICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25ld3RvZG9cIik7XG4gICAgY29uc3QgbmV3VG9kbyA9IHRvZG9JbnB1dC52YWx1ZTtcblxuICAgIC8vIElmIG5vdGhpbmcgaGFzIGJlZW4gZW50ZXJlZCwgcXVpdC5cbiAgICBpZiAobmV3VG9kbyA9PT0gJycpIHJldHVybjtcblxuICAgIC8vIE90aGVyd2lzZSwgYmxhbmsgdGhlIGZpZWxkIGFuZCBhZGQgaXQgdG8gdGhlIHByb2plY3RcbiAgICB0b2RvSW5wdXQudmFsdWUgPSAnJztcbiAgICBsaXN0LnByb2plY3RzW2xpc3Quc2VsZWN0ZWRQcm9qZWN0XS5hZGRUb2RvKG5ld1RvZG8pO1xuXG4gICAgLy8gUmV3cml0ZSB0aGUgdG9kbyBsaXN0XG4gICAgdXBkYXRlTGlzdCgpO1xuICB9XG5cbiAgLy8gV2hlbiB0aGUgdXNlciBlbnRlcnMgYSBuZXcgdG9kbyB0aXRsZSwgdXBkYXRlIGl0IGFuZCB1cGRhdGUgdGhlIGFwcC5cbiAgZnVuY3Rpb24gdXBkYXRlVG9kb1RpdGxlKCkge1xuICAgIGNvbnN0IHRvZG9JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRpdGxlJyk7XG4gICAgY29uc3QgdGhpc1RvZG8gPSBsaXN0LnByb2plY3RzW2xpc3Quc2VsZWN0ZWRQcm9qZWN0XS50b2Rvc1t0b2RvSW5wdXQuZGF0YXNldC50b2RvXTtcbiAgICB0aGlzVG9kby51cGRhdGUoJ3RpdGxlJywgdG9kb0lucHV0LnZhbHVlKTtcblxuICAgIHVwZGF0ZUxpc3QoKTtcbiAgfVxuXG4gICAvLyBXaGVuIHRoZSB1c2VyIGVudGVyZXMgYSBuZXcgdG9kbyBkZXNjcmlwdGlvbiwgdXBkYXRlIGl0IGFuZCB1cGRhdGUgdGhlIGFwcC5cbiAgIGZ1bmN0aW9uIHVwZGF0ZVRvZG9EZXNjcmlwdGlvbigpIHtcbiAgICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1kZXNjcmlwdGlvbicpO1xuICAgIGNvbnN0IHRoaXNUb2RvID0gbGlzdC5wcm9qZWN0c1tsaXN0LnNlbGVjdGVkUHJvamVjdF0udG9kb3NbdG9kb0lucHV0LmRhdGFzZXQudG9kb107XG4gICAgdGhpc1RvZG8udXBkYXRlKCdkZXNjcmlwdGlvbicsIHRvZG9JbnB1dC52YWx1ZSk7XG5cbiAgICB1cGRhdGVMaXN0KCk7XG4gIH1cblxuICAvLyBXaGVuIHRoZSB1c2VyIGVudGVyZXMgYSBuZXcgdG9kbyBkdWUgZGF0ZSwgdXBkYXRlIGl0IGFuZCB1cGRhdGUgdGhlIGFwcC5cbiAgZnVuY3Rpb24gdXBkYXRlVG9kb0R1ZURhdGUoKSB7XG4gICAgY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtZHVlZGF0ZScpO1xuICAgIGNvbnN0IHRoaXNUb2RvID0gbGlzdC5wcm9qZWN0c1tsaXN0LnNlbGVjdGVkUHJvamVjdF0udG9kb3NbdG9kb0lucHV0LmRhdGFzZXQudG9kb107XG4gICAgdGhpc1RvZG8udXBkYXRlKCdkdWVEYXRlJywgdG9kb0lucHV0LnZhbHVlKTtcblxuICAgIHVwZGF0ZUxpc3QoKTtcbiAgfSAgXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlUb2RvczsiLCJmdW5jdGlvbiBsb2dFcnJvcihtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBsb2dTdWNjZXNzKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5sb2cobWVzc2FnZSk7XG59XG5cbmV4cG9ydCB7IGxvZ0Vycm9yLCBsb2dTdWNjZXNzIH07IiwiaW1wb3J0IHsgbG9nRXJyb3IsIGxvZ1N1Y2Nlc3MgfSBmcm9tIFwiLi9sb2dnZXIuanNcIjtcblxuLy8gQSBjbGFzcyBmb3IgYnVpbGRpbmcgYW5kIG1hbmFnaW5nIGluZGl2aWR1YWwgdG9kbyBpdGVtc1xuY2xhc3MgVG9kbyB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBwcm9qZWN0SUQgPSAwKSB7XG4gICAgaWYgKHRpdGxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGxvZ0Vycm9yKFwiWW91IG5lZWQgYXQgbGVhc3QgYSB0aXRsZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMucHJvamVjdElEID0gcHJvamVjdElEO1xuICAgIHRoaXMuaGlnaFByaW9yaXR5ID0gZmFsc2U7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmR1ZURhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICB1cGRhdGUoZmllbGQsIHZhbHVlKSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IGJsYW5rIGEgdG9kbyB0aXRsZS5cbiAgICBpZiAoZmllbGQgPT09ICd0aXRsZScgJiYgIXZhbHVlKSB7XG4gICAgICBsb2dFcnJvcihcIllvdSBjYW4ndCBzZXQgYSB0b2RvJ3MgdGl0bGUgdG8gYmxhbmsuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXNbZmllbGRdID0gdmFsdWU7XG4gICAgbG9nU3VjY2VzcyhgVXBkYXRlZCB0aGUgJHtmaWVsZH0gb2YgdGhpcyB0b2RvIHRvICR7dmFsdWV9LmApO1xuICB9XG5cbiAgdG9nZ2xlQ29tcGxldGUoKSB7XG4gICAgdGhpcy5jb21wbGV0ZWQgPSB0aGlzLmNvbXBsZXRlZCA9PT0gZmFsc2UgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICB0b2dnbGVQcmlvcml0eSgpIHtcbiAgICB0aGlzLmhpZ2hQcmlvcml0eSA9IHRoaXMuaGlnaFByaW9yaXR5ID09PSBmYWxzZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxufVxuXG4vLyBBIGNsYXNzIGZvciBidWlsZGluZyBhbmQgbWFuYWdpbmcgaW5kaXZpZHVhbCBwcm9qZWN0c1xuY2xhc3MgUHJvamVjdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMudG9kb3MgPSBbXTsgIC8vIFRoaXMgYmxhbmsgYXJyYXkgaXMgd2hlcmUgd2UnbGwga2VlcCBvdXIgbGlzdCBvZiB0b2Rvcy5cbiAgfVxuXG4gIHVwZGF0ZShmaWVsZCwgdmFsdWUpIHtcbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgYmxhbmsgYSB0b2RvIHRpdGxlLlxuICAgIGlmIChmaWVsZCA9PT0gJ3RpdGxlJyAmJiAhdmFsdWUpIHtcbiAgICAgIGxvZ0Vycm9yKFwiWW91IGNhbid0IHNldCBhIHRvZG8ncyB0aXRsZSB0byBibGFuay5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpc1tmaWVsZF0gPSB2YWx1ZTtcbiAgICBsb2dTdWNjZXNzKGBVcGRhdGVkIHRoZSAke2ZpZWxkfSBvZiB0aGlzIHRvZG8gdG8gJHt2YWx1ZX0uYCk7XG4gIH1cblxuICBhZGRUb2RvKHRpdGxlKSB7XG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgbG9nRXJyb3IoXCJZb3VyIHRvZG8gbmVlZHMgYSB0aXRsZSFcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50b2Rvcy5wdXNoKG5ldyBUb2RvKHRpdGxlKSk7XG4gIH1cblxuICBkZWxldGVUb2RvKHByb2plY3QsIGlkKSB7XG4gICAgcHJvamVjdC50b2Rvcy5zcGxpY2UoaWQsIDEpO1xuICAgIGxvZ1N1Y2Nlc3MoXCJZb3VyIHRvZG8gaGFzIGJlZW4gZGVsZXRlZC5cIik7XG4gIH1cbn1cblxuLy8gVGhlIG1hc3RlciB0b2RvIGxpc3QsIHdpdGggcHJvamVjdHMgaW5zaWRlIGFuZCB0b2RvcyBpbnNpZGUgdGhvc2UgcHJvamVjdHMuXG4vLyBUaGlzIHdpbGwgYmUgdGhlIG9iamVjdCB3ZSBwYXNzIG91dHNpZGUgdGhlIG1vZHVsZS5cbmNsYXNzIHRvZG9MaXN0IHtcbiAgY29uc3RydWN0b3Ioc3RvcmVkTGlzdCkge1xuICAgIGlmIChzdG9yZWRMaXN0KSB7XG4gICAgICAvLyBJZiBsaXN0IGhhcyBiZWVuIHB1bGxlZCBmcm9tIHN0b3JhZ2UsIGNvbnZlcnQgYW5kIHVzZSBpdC5cbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihzdG9yZWRMaXN0LCBuZXcgdG9kb0xpc3QoKSk7XG4gICAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2Ygc3RvcmVkTGlzdC5wcm9qZWN0cykge1xuICAgICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YocHJvamVjdCwgbmV3IFByb2plY3QoKSk7XG4gICAgICAgIGZvciAoY29uc3QgdG9kbyBvZiBwcm9qZWN0LnRvZG9zKSB7XG4gICAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRvZG8sIG5ldyBUb2RvKCkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9yZWRMaXN0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdGhlcndpc2UgaW5pdGlhbGl6ZSBhIG5ldyBvbmUuXG4gICAgICAvLyBJbml0aWFsaXplIGEgbmV3IHByb2plY3QgbGlzdC5cbiAgICAgIHRoaXMucHJvamVjdHMgPSBbbmV3IFByb2plY3QoXCJJbmJveFwiLCBcIlRoaXMgaXMgd2hlcmUgYWxsIG9mIHlvdXIgdG9kb3MgbGl2ZSBieSBkZWZhdWx0LlwiKV07XG4gIFxuICAgICAgLy8gU3RhcnQgYnkgc2VsZWN0aW5nIHRoZSBkZWZhdWx0IHByb2plY3QuXG4gICAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IDA7XG4gICAgfVxuICB9XG5cbiAgYWRkUHJvamVjdCh0aXRsZSkge1xuICAgIHRoaXMucHJvamVjdHMucHVzaChuZXcgUHJvamVjdCh0aXRsZSkpO1xuICB9XG5cbiAgZGVsZXRlUHJvamVjdChsaXN0LCBpZCkge1xuICAgIGxpc3QucHJvamVjdHMuc3BsaWNlKGlkLCAxKTtcbiAgICBsb2dTdWNjZXNzKFwiWW91ciBwcm9qZWN0IGhhcyBiZWVuIGRlbGV0ZWQuXCIpO1xuICB9XG5cbiAgc2VsZWN0UHJvamVjdChwcm9qZWN0KSB7XG4gICAgdGhpcy5zZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9MaXN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgdG9kb0xpc3QgZnJvbSBcIi4vbWFuYWdlVG9kb3NcIjtcbmltcG9ydCBkaXNwbGF5VG9kb3MgZnJvbSBcIi4vZGlzcGxheVRvZG9zXCI7XG5pbXBvcnQgJy4vYy5jc3MnO1xuXG4vLyBJZiB0aGVyZSdzIGEgc3RvcmVkIGxpc3QsIGdyYWIgaXQuXG5jb25zdCBzdG9yZWRMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RcIikpO1xuXG4vLyBCdWlsZCBvdXIgbmV3IHRvZG8gbGlzdCAod2l0aCBzdG9yZWQgdmFsdWVzIGlmIG5lY2Vzc2FyeSkuXG5jb25zdCBsaXN0ID0gbmV3IHRvZG9MaXN0KHN0b3JlZExpc3QpO1xuXG4vLyBTdGFydCB0aGUgYXBwXG5kaXNwbGF5VG9kb3MobGlzdCk7XG5cbi8vIFNhdmUgb3VyIGxpc3QgdG8gbWVtb3J5IGJlZm9yZSBsZWF2aW5nLlxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0XCIsIEpTT04uc3RyaW5naWZ5KGxpc3QpKTtcbiAgY29uc29sZS5sb2coXCJzdG9yZWQhXCIpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9