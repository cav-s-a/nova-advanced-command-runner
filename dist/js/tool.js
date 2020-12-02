/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(11);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router) {
    router.addRoutes([{
        name: 'nova-advanced-command-runner',
        path: '/nova-advanced-command-runner',
        component: __webpack_require__(2)
    }]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(8)
/* script */
var __vue_script__ = __webpack_require__(9)
/* template */
var __vue_template__ = __webpack_require__(10)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Tool.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-68ff5483", Component.options)
  } else {
    hotAPI.reload("data-v-68ff5483", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("6e5db1d0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-68ff5483\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Tool.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "\n.history-table {\n    text-align: left;\n}\n.btn-secondary {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n}\n.btn-secondary:hover {\n    color: #fff;\n    background-color: #5a6268;\n    border-color: #545b62;\n}\n.btn-secondary:focus, .btn-secondary.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n.btn-secondary.disabled, .btn-secondary:disabled {\n    color: #fff;\n    background-color: #6c757d;\n    border-color: #6c757d;\n}\n.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle {\n    color: #fff;\n    background-color: #545b62;\n    border-color: #4e555b;\n}\n.btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(130, 138, 145, 0.5);\n}\n.btn-success {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-success:hover {\n    color: #fff;\n    background-color: #218838;\n    border-color: #1e7e34;\n}\n.btn-success:focus, .btn-success.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n.btn-success.disabled, .btn-success:disabled {\n    color: #fff;\n    background-color: #28a745;\n    border-color: #28a745;\n}\n.btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #1e7e34;\n    border-color: #1c7430;\n}\n.btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(72, 180, 97, 0.5);\n}\n.btn-info {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n}\n.btn-info:hover {\n    color: #fff;\n    background-color: #138496;\n    border-color: #117a8b;\n}\n.btn-info:focus, .btn-info.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n.btn-info.disabled, .btn-info:disabled {\n    color: #fff;\n    background-color: #17a2b8;\n    border-color: #17a2b8;\n}\n.btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #117a8b;\n    border-color: #10707f;\n}\n.btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(58, 176, 195, 0.5);\n}\n.btn-warning {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n}\n.btn-warning:hover {\n    color: #212529;\n    background-color: #e0a800;\n    border-color: #d39e00;\n}\n.btn-warning:focus, .btn-warning.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-warning.disabled, .btn-warning:disabled {\n    color: #212529;\n    background-color: #ffc107;\n    border-color: #ffc107;\n}\n.btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle {\n    color: #212529;\n    background-color: #d39e00;\n    border-color: #c69500;\n}\n.btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(222, 170, 12, 0.5);\n}\n.btn-light {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n.btn-light:hover {\n    color: #212529;\n    background-color: #e2e6ea;\n    border-color: #dae0e5;\n}\n.btn-light:focus, .btn-light.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n.btn-light.disabled, .btn-light:disabled {\n    color: #212529;\n    background-color: #f8f9fa;\n    border-color: #f8f9fa;\n}\n.btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle {\n    color: #212529;\n    background-color: #dae0e5;\n    border-color: #d3d9df;\n}\n.btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(216, 217, 219, 0.5);\n}\n.btn-dark {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n}\n.btn-dark:hover {\n    color: #fff;\n    background-color: #23272b;\n    border-color: #1d2124;\n}\n.btn-dark:focus, .btn-dark.focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n.btn-dark.disabled, .btn-dark:disabled {\n    color: #fff;\n    background-color: #343a40;\n    border-color: #343a40;\n}\n.btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle {\n    color: #fff;\n    background-color: #1d2124;\n    border-color: #171a1d;\n}\n.btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus {\n    -webkit-box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n            box-shadow: 0 0 0 0.2rem rgba(82, 88, 93, 0.5);\n}\n.badge {\n    display: inline-block;\n    padding: 0.25em 0.4em;\n    font-size: 75%;\n    font-weight: 700;\n    line-height: 1;\n    text-align: center;\n    white-space: nowrap;\n    vertical-align: baseline;\n    border-radius: 0.25rem;\n}\n.badge-success {\n    color: #fff;\n    background-color: #28a745;\n}\n.badge-error {\n    color: #fff;\n    background-color: #dc3545;\n}\n.badge-pending{\n    color:#212529;\n    background-color:#ffc107\n}\n.boton_clear_history{\n    display: none;\n}\n", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            modalOpen: false,
            running: false,
            groups: [],
            commands: {},
            customCommand: {
                label: 'Custom Command',
                type: 'primary',
                help: 'are you sure you want to run this command?',
                command_type: 'artisan',
                command: '',
                variables: [],
                flags: []
            },
            history: {},
            runningCommand: {},
            help: '',
            heading: '',
            customCommands: {}
        };
    },
    created: function created() {
        this.getData();
    },

    methods: {
        /*
        clearHistory(){
            this.openModal( {
                label : 'Clear Command Run History',
                type : 'primary',
                help : 'are you sure you want to clear the command run history?',
                command_type :'artisan',
                command : 'cache:forget nova-advanced-command-runner-history',
                variables : [],
                flags : []
            } );
        },*/

        runCustomCommand: function runCustomCommand() {
            if (!this.customCommand.command) {
                this.$toasted.show('Please enter a command', { type: 'error' });
                return;
            }
            this.openModal(this.customCommand);
        },
        getData: function getData() {
            var _this = this;

            Nova.request().get('/nova-vendor/binarybuilds/nova-advanced-command-runner').then(function (response) {
                _this.groups = [];

                response.data.commands.forEach(function (command) {
                    var group = command.group;
                    if (_this.groups.indexOf(group) < 0) {
                        _this.groups.push(group);
                    }
                });

                _this.commands = response.data.commands;
                _this.history = response.data.history;
                _this.help = response.data.help;
                _this.heading = response.data.heading;
                _this.customCommands = response.data.custom_commands;

                if (_this.customCommands) {
                    _this.customCommand.command_type = Object.keys(_this.customCommands)[0];
                }
            });
        },
        runCommand: function runCommand() {
            var _this2 = this;

            var readyToSubmit = true;

            if (this.runningCommand.variables) {
                Object.keys(this.runningCommand.variables).forEach(function (variable) {
                    if (!_this2.runningCommand.variables[variable].value) {
                        readyToSubmit = false;
                        _this2.$toasted.show(_this2.runningCommand.variables[variable].label + ' is required', { type: 'error' });
                    }
                });
            }

            if (!readyToSubmit) {
                return;
            }

            this.running = true;
            Nova.request().post('/nova-vendor/binarybuilds/nova-advanced-command-runner/run', { command: this.runningCommand }).then(function (response) {
                _this2.$toasted.show(response.data.result, { type: response.data.status ? 'success' : 'error' });
                _this2.running = false;
                _this2.history = response.data.history;
                _this2.closeModal();
            }).catch(function (error) {
                _this2.running = false;
            });
        },
        openModal: function openModal(command) {
            this.runningCommand = command;
            this.modalOpen = true;
        },
        closeModal: function closeModal() {
            this.modalOpen = false;
            this.runningCommand = {};
        }
    }
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _vm.modalOpen
            ? _c(
                "modal",
                {
                  staticClass: "modal",
                  attrs: { tabindex: "-1", role: "dialog" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "bg-white rounded-lg shadow-lg overflow-hidden w-action"
                    },
                    [
                      _c("div", [
                        _c(
                          "h2",
                          {
                            staticClass: "pt-8 px-8 text-90 font-normal text-xl"
                          },
                          [_vm._v(_vm._s(_vm.runningCommand.label))]
                        ),
                        _vm._v(" "),
                        _c("p", {
                          staticClass: "text-80 px-8 my-8",
                          domProps: {
                            innerHTML: _vm._s(_vm.runningCommand.help)
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.runningCommand.variables, function(
                        variable,
                        index
                      ) {
                        return _c(
                          "div",
                          {
                            staticClass: "flex border-b border-40 p-2 flex-col"
                          },
                          [
                            _c(
                              "label",
                              {
                                staticClass:
                                  "inline-block text-80 pt-2 leading-tight w-full capitalize"
                              },
                              [_vm._v(_vm._s(variable.label))]
                            ),
                            _vm._v(" "),
                            variable.field === "select"
                              ? _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: variable.value,
                                        expression: "variable.value"
                                      }
                                    ],
                                    staticClass: "form-control form-select",
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          variable,
                                          "value",
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "option",
                                      {
                                        attrs: {
                                          value: "",
                                          disabled: "disabled"
                                        }
                                      },
                                      [_vm._v(_vm._s(variable.placeholder))]
                                    ),
                                    _vm._v(" "),
                                    _vm._l(variable.options, function(
                                      label,
                                      key
                                    ) {
                                      return _c(
                                        "option",
                                        { domProps: { value: key } },
                                        [_vm._v(_vm._s(label))]
                                      )
                                    })
                                  ],
                                  2
                                )
                              : variable.field === "checkbox"
                              ? _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: variable.value,
                                      expression: "variable.value"
                                    }
                                  ],
                                  staticClass:
                                    "w-full form-control form-input form-input-bordered w-full",
                                  attrs: {
                                    placeholder: variable.placeholder,
                                    type: "checkbox"
                                  },
                                  domProps: {
                                    checked: Array.isArray(variable.value)
                                      ? _vm._i(variable.value, null) > -1
                                      : variable.value
                                  },
                                  on: {
                                    change: function($event) {
                                      var $$a = variable.value,
                                        $$el = $event.target,
                                        $$c = $$el.checked ? true : false
                                      if (Array.isArray($$a)) {
                                        var $$v = null,
                                          $$i = _vm._i($$a, $$v)
                                        if ($$el.checked) {
                                          $$i < 0 &&
                                            _vm.$set(
                                              variable,
                                              "value",
                                              $$a.concat([$$v])
                                            )
                                        } else {
                                          $$i > -1 &&
                                            _vm.$set(
                                              variable,
                                              "value",
                                              $$a
                                                .slice(0, $$i)
                                                .concat($$a.slice($$i + 1))
                                            )
                                        }
                                      } else {
                                        _vm.$set(variable, "value", $$c)
                                      }
                                    }
                                  }
                                })
                              : variable.field === "radio"
                              ? _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: variable.value,
                                      expression: "variable.value"
                                    }
                                  ],
                                  staticClass:
                                    "w-full form-control form-input form-input-bordered w-full",
                                  attrs: {
                                    placeholder: variable.placeholder,
                                    type: "radio"
                                  },
                                  domProps: {
                                    checked: _vm._q(variable.value, null)
                                  },
                                  on: {
                                    change: function($event) {
                                      return _vm.$set(variable, "value", null)
                                    }
                                  }
                                })
                              : _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: variable.value,
                                      expression: "variable.value"
                                    }
                                  ],
                                  staticClass:
                                    "w-full form-control form-input form-input-bordered w-full",
                                  attrs: {
                                    placeholder: variable.placeholder,
                                    type: variable.field
                                  },
                                  domProps: { value: variable.value },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        variable,
                                        "value",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _vm._l(_vm.runningCommand.flags, function(flag, index) {
                        return _c(
                          "div",
                          { staticClass: "flex border-b border-40 p-2" },
                          [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value:
                                    _vm.runningCommand.flags[index].selected,
                                  expression:
                                    "runningCommand.flags[index].selected"
                                }
                              ],
                              staticClass: "checkbox m-2",
                              attrs: { type: "checkbox", id: "flag-" + index },
                              domProps: {
                                checked: Array.isArray(
                                  _vm.runningCommand.flags[index].selected
                                )
                                  ? _vm._i(
                                      _vm.runningCommand.flags[index].selected,
                                      null
                                    ) > -1
                                  : _vm.runningCommand.flags[index].selected
                              },
                              on: {
                                change: function($event) {
                                  var $$a =
                                      _vm.runningCommand.flags[index].selected,
                                    $$el = $event.target,
                                    $$c = $$el.checked ? true : false
                                  if (Array.isArray($$a)) {
                                    var $$v = null,
                                      $$i = _vm._i($$a, $$v)
                                    if ($$el.checked) {
                                      $$i < 0 &&
                                        _vm.$set(
                                          _vm.runningCommand.flags[index],
                                          "selected",
                                          $$a.concat([$$v])
                                        )
                                    } else {
                                      $$i > -1 &&
                                        _vm.$set(
                                          _vm.runningCommand.flags[index],
                                          "selected",
                                          $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1))
                                        )
                                    }
                                  } else {
                                    _vm.$set(
                                      _vm.runningCommand.flags[index],
                                      "selected",
                                      $$c
                                    )
                                  }
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "label",
                              {
                                staticClass: "m-2",
                                attrs: { for: "flag-" + index }
                              },
                              [_vm._v(_vm._s(flag.label))]
                            )
                          ]
                        )
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "bg-30 px-6 py-3 flex" }, [
                        _c(
                          "div",
                          { staticClass: "flex items-center ml-auto" },
                          [
                            _c(
                              "button",
                              {
                                staticClass:
                                  "btn text-80 font-normal h-9 px-3 mr-3 btn-link",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.closeModal($event)
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-default",
                                class: _vm.runningCommand.type
                                  ? "btn-" + _vm.runningCommand.type
                                  : "btn-primary",
                                attrs: { type: "submit" },
                                on: {
                                  click: function($event) {
                                    return _vm.runCommand()
                                  }
                                }
                              },
                              [
                                !_vm.running
                                  ? _c("span", [_vm._v("Run Command")])
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.running
                                  ? _c(
                                      "svg",
                                      {
                                        staticClass: "mx-auto block",
                                        staticStyle: { width: "30px" },
                                        attrs: {
                                          viewBox: "0 0 120 30",
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "currentColor"
                                        }
                                      },
                                      [
                                        _c(
                                          "circle",
                                          {
                                            attrs: {
                                              cx: "15",
                                              cy: "15",
                                              r: "10.9958"
                                            }
                                          },
                                          [
                                            _c("animate", {
                                              attrs: {
                                                attributeName: "r",
                                                from: "15",
                                                to: "15",
                                                begin: "0s",
                                                dur: "0.8s",
                                                values: "15;9;15",
                                                calcMode: "linear",
                                                repeatCount: "indefinite"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("animate", {
                                              attrs: {
                                                attributeName: "fill-opacity",
                                                from: "1",
                                                to: "1",
                                                begin: "0s",
                                                dur: "0.8s",
                                                values: "1;.5;1",
                                                calcMode: "linear",
                                                repeatCount: "indefinite"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "circle",
                                          {
                                            attrs: {
                                              cx: "60",
                                              cy: "15",
                                              r: "13.0042",
                                              "fill-opacity": "0.3"
                                            }
                                          },
                                          [
                                            _c("animate", {
                                              attrs: {
                                                attributeName: "r",
                                                from: "9",
                                                to: "9",
                                                begin: "0s",
                                                dur: "0.8s",
                                                values: "9;15;9",
                                                calcMode: "linear",
                                                repeatCount: "indefinite"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("animate", {
                                              attrs: {
                                                attributeName: "fill-opacity",
                                                from: "0.5",
                                                to: "0.5",
                                                begin: "0s",
                                                dur: "0.8s",
                                                values: ".5;1;.5",
                                                calcMode: "linear",
                                                repeatCount: "indefinite"
                                              }
                                            })
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "circle",
                                          {
                                            attrs: {
                                              cx: "105",
                                              cy: "15",
                                              r: "10.9958"
                                            }
                                          },
                                          [
                                            _c("animate", {
                                              attrs: {
                                                attributeName: "r",
                                                from: "15",
                                                to: "15",
                                                begin: "0s",
                                                dur: "0.8s",
                                                values: "15;9;15",
                                                calcMode: "linear",
                                                repeatCount: "indefinite"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("animate", {
                                              attrs: {
                                                attributeName: "fill-opacity",
                                                from: "1",
                                                to: "1",
                                                begin: "0s",
                                                dur: "0.8s",
                                                values: "1;.5;1",
                                                calcMode: "linear",
                                                repeatCount: "indefinite"
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]
                        )
                      ])
                    ],
                    2
                  )
                ]
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("heading", { staticClass: "mb-6" }, [_vm._v(_vm._s(_vm.heading))]),
      _vm._v(" "),
      _vm.help
        ? _c("card", {
            staticClass: "p-3",
            domProps: { innerHTML: _vm._s(_vm.help) }
          })
        : _vm._e(),
      _vm._v(" "),
      !Array.isArray(_vm.customCommands)
        ? _c("div", { staticClass: "flex mt-6 mb-6" }, [
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.customCommand.command_type,
                    expression: "customCommand.command_type"
                  }
                ],
                staticClass: "form-control form-select rounded-r-none",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.customCommand,
                      "command_type",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              _vm._l(_vm.customCommands, function(label, key) {
                return _c("option", { domProps: { value: key } }, [
                  _vm._v(_vm._s(label))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.customCommand.command,
                  expression: "customCommand.command"
                }
              ],
              staticClass:
                "w-full form-control form-input form-input-bordered mr-2 rounded-l-none",
              attrs: { type: "text", placeholder: "Enter a Command..." },
              domProps: { value: _vm.customCommand.command },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.customCommand, "command", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "items-right btn btn-default btn-primary",
                attrs: { type: "button" },
                on: { click: _vm.runCustomCommand }
              },
              [_vm._v("Run")]
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "card",
        {
          staticClass: "flex flex-col items-center",
          staticStyle: { "min-height": "300px" }
        },
        [
          _c("h2", { staticClass: "text-black text-3xl font-light mt-4" }, [
            _vm._v("\n            Available commands\n        ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex bg-grey-lighter" },
            _vm._l(_vm.groups, function(group) {
              return _c(
                "div",
                {
                  staticClass:
                    "flex-1 text-grey-darker text-center bg-grey-light px-4 py-2 m-2"
                },
                [
                  _c(
                    "h4",
                    {
                      staticClass:
                        "text-black text-2xl text-60 font-light mb-6 mt-4"
                    },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(group ? group : "Unnamed group") +
                          "\n                "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.commands, function(command, index) {
                    return command.group === group
                      ? _c(
                          "button",
                          {
                            staticClass: "items-left btn btn-default mb-2",
                            class: command.type
                              ? "btn-" + command.type
                              : "btn-primary",
                            staticStyle: { width: "100%" },
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.openModal(command)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                    " +
                                _vm._s(command.label) +
                                "\n                "
                            )
                          ]
                        )
                      : _vm._e()
                  })
                ],
                2
              )
            }),
            0
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex justify-between mt-6 mb-6 d-none",
          staticStyle: { display: "none" }
        },
        [
          _c("heading", {}, [_vm._v("Historial")]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass:
                "items-right btn btn-default btn-danger boton_clear_history",
              attrs: { type: "button" }
            },
            [_vm._v("Limpiar Historial")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("card", { staticClass: "mb-6 max-w-full overflow-x-auto" }, [
        _c("table", { staticClass: "table w-full" }, [
          _c("thead", [
            _c("tr", [
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Comando")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Tipo")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Ejecutado por")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Estado")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Resultado")]),
              _vm._v(" "),
              _c("th", { attrs: { scope: "col" } }, [_vm._v("Duracion")]),
              _vm._v(" "),
              _c("th", { staticClass: "table-fit", attrs: { scope: "col" } }, [
                _vm._v("Desde hace")
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.history, function(value) {
              return _c("tr", [
                _c("td", [_vm._v(_vm._s(value.run))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(value.type))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(value.ran_by))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "span",
                    { staticClass: "badge", class: "badge-" + value.status },
                    [_vm._v(_vm._s(value.status))]
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c("pre", { domProps: { innerHTML: _vm._s(value.result) } })
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm._v(_vm._s(value.duration ? value.duration + " sec." : ""))
                ]),
                _vm._v(" "),
                _c("td", { staticClass: "table-fit" }, [
                  _vm._v(_vm._s(value.time))
                ])
              ])
            }),
            0
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-68ff5483", module.exports)
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);