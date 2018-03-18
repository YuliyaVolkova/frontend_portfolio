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
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(root, factory) {
     true ? // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
        return root.svg4everybody = factory();
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(5);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

//* or
//var svgEveryBody = require('svg4everybody');
//svgEveryBody();

//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//*
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__(6));

var init = function init() {
  if (window.location.hash === '#login') flip.autorizate();else flip.initWelcome();
  prlxMontains.handler();
};

var prlxMontains = function () {

  var container = document.body.querySelector('.l-parallax__container');
  var flag = false;

  /// parallax background-effect 
  var bgmove = function bgmove(e) {
    if (flag) return;
    var x = -(e.pageX + e.target.offsetLeft) / 2.5,
        y = -(e.pageY + e.target.offsetTop) / 2.5;

    container.style.backgroundPosition = x + 'px ' + y + 'px';
    setTimeout(function () {
      return flag = false;
    }, 420);
  };

  var handler = function handler() {
    container.addEventListener('mousemove', bgmove, false);
  };
  return { handler: handler };
}();

var flip = function () {

  var container = document.body.querySelector('.l-welcome'),
      butLogin = document.body.querySelector('.c-button#targetLogin'),
      loginTargEl = document.body.querySelector('.l-login__button'),
      templFace = document.body.querySelector('#faceBl'),
      templBackFace = document.body.querySelector('#backFaceBl'),
      containerFace = document.body.querySelector('.l-face-container'),
      containerBackface = document.body.querySelector('.l-backface-container');

  var flipHash = function flipHash(e) {
    e.preventDefault();
    if (container.classList.contains('flip')) container.classList.remove('flip');else container.classList.add('flip');
    setTimeout(function () {
      loginTargEl.classList.toggle('visually-hidden');
      if (!loginTargEl.classList.contains('visually-hidden')) {
        butLogin.addEventListener('click', flip, false);
      }
    }, 500);
  };

  var flip = function flip(e) {
    e.preventDefault();
    if (container.classList.contains('flip')) container.classList.remove('flip');else container.classList.add('flip');
    setTimeout(function () {
      loginTargEl.classList.toggle('visually-hidden');
      if (!loginTargEl.classList.contains('visually-hidden')) butLogin.addEventListener('click', flip, false);else {
        var butMain = document.body.querySelector('.c-form__nav-link#targetMain');
        butMain.addEventListener('click', flipHash, false);
      }
    }, 500);
  };

  var autorizate = function autorizate() {
    containerFace.innerHTML = templBackFace.innerHTML;
    templBackFace.innerHTML = '';
    containerBackface.innerHTML = templFace.innerHTML;
    templFace.innerHTML = '';
    loginTargEl.classList.add('visually-hidden');
    var butMain = document.body.querySelector('.c-form__nav-link#targetMain');
    butMain.addEventListener('click', flipHash, false);
  };

  var initWelcome = function initWelcome() {
    containerFace.innerHTML = templFace.innerHTML;
    templFace.innerHTML = '';
    containerBackface.innerHTML = templBackFace.innerHTML;
    templBackFace.innerHTML = '';
    if (!loginTargEl.classList.contains('visually-hidden')) butLogin.addEventListener('click', flip, false);
  };

  return { initWelcome: initWelcome, autorizate: autorizate };
}();

window.onload = init();
console.log('It` work %%%!');

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./about_header.svg": 7,
	"./arrow_down.svg": 8,
	"./bg.svg": 9,
	"./blog_header.svg": 10,
	"./dash.svg": 11,
	"./edge_two_color.svg": 12,
	"./github.svg": 13,
	"./hamburger.svg": 14,
	"./in.svg": 15,
	"./link.svg": 16,
	"./login.svg": 17,
	"./mail.svg": 18,
	"./map_marker.svg": 19,
	"./password.svg": 20,
	"./phone.svg": 21,
	"./portf_arrow_down.svg": 22,
	"./portf_arrow_up.svg": 23,
	"./portfolio_header.svg": 24,
	"./skype.svg": 25,
	"./vk.svg": 26,
	"./works_header.svg": 27
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/about_header.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/arrow_down.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/bg.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/blog_header.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/dash.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/edge_two_color.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/github.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/hamburger.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/in.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/link.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/login.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/mail.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/map_marker.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/password.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/phone.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/portf_arrow_down.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/portf_arrow_up.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/portfolio_header.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/skype.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/vk.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/images/sprites/to_sprite/works_header.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNThlNGI1NjI2ODc2NWZjNWQ0MDUiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3M/YjFiMiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9hYm91dF9oZWFkZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvYXJyb3dfZG93bi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9iZy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9ibG9nX2hlYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9kYXNoLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2VkZ2VfdHdvX2NvbG9yLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2dpdGh1Yi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9oYW1idXJnZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvaW4uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvbGluay5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9sb2dpbi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9tYWlsLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL21hcF9tYXJrZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcGFzc3dvcmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcGhvbmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcG9ydGZfYXJyb3dfZG93bi5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9wb3J0Zl9hcnJvd191cC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9wb3J0Zm9saW9faGVhZGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL3NreXBlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL3ZrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL3dvcmtzX2hlYWRlci5zdmciXSwibmFtZXMiOlsicmVxdWlyZUFsbCIsInIiLCJrZXlzIiwiZm9yRWFjaCIsImluaXQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJmbGlwIiwiYXV0b3JpemF0ZSIsImluaXRXZWxjb21lIiwicHJseE1vbnRhaW5zIiwiaGFuZGxlciIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmbGFnIiwiYmdtb3ZlIiwiZSIsIngiLCJwYWdlWCIsInRhcmdldCIsIm9mZnNldExlZnQiLCJ5IiwicGFnZVkiLCJvZmZzZXRUb3AiLCJzdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsInNldFRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnV0TG9naW4iLCJsb2dpblRhcmdFbCIsInRlbXBsRmFjZSIsInRlbXBsQmFja0ZhY2UiLCJjb250YWluZXJGYWNlIiwiY29udGFpbmVyQmFja2ZhY2UiLCJmbGlwSGFzaCIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJhZGQiLCJ0b2dnbGUiLCJidXRNYWluIiwiaW5uZXJIVE1MIiwib25sb2FkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0I7Ozs7OztBQ3JDQSw0Rjs7Ozs7O0FDQUEsMEY7Ozs7OztBQ0FBLGtGOzs7Ozs7QUNBQSwyRjs7Ozs7O0FDQUEsb0Y7Ozs7OztBQ0FBLDhGOzs7Ozs7QUNBQSxzRjs7Ozs7O0FDQUEseUY7Ozs7OztBQ0FBLGtGOzs7Ozs7QUNBQSxvRjs7Ozs7O0FDQUEscUY7Ozs7OztBQ0FBLG9GOzs7Ozs7QUNBQSwwRjs7Ozs7O0FDQUEsd0Y7Ozs7OztBQ0FBLHFGOzs7Ozs7QUNBQSxnRzs7Ozs7O0FDQUEsOEY7Ozs7OztBQ0FBLGdHOzs7Ozs7QUNBQSxxRjs7Ozs7O0FDQUEsa0Y7Ozs7OztBQ0FBLDRGIiwiZmlsZSI6ImFwcC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNThlNGI1NjI2ODc2NWZjNWQ0MDUiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlxyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXgubWFpbi5zY3NzJztcclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuXHJcbi8vKiBvclxyXG4vL3ZhciBzdmdFdmVyeUJvZHkgPSByZXF1aXJlKCdzdmc0ZXZlcnlib2R5Jyk7XHJcbi8vc3ZnRXZlcnlCb2R5KCk7XHJcblx0XHJcbi8vKiBpbmNsdWRlIHRvIG1ha2UgZXh0ZXJuYWwgc3ZnIHNwcml0ZSBcclxuLy8qKiogZnJvbSBzdmcgZmlsZXMgaW4gJy4uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zb2NpYWwvJ1x0XHJcbi8vKlxyXG5mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfVxyXG5yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS8nLCB0cnVlKSk7XHJcblxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoPT09JyNsb2dpbicpIGZsaXAuYXV0b3JpemF0ZSgpO1xyXG4gIGVsc2UgZmxpcC5pbml0V2VsY29tZSgpO1xyXG4gIHBybHhNb250YWlucy5oYW5kbGVyKCk7XHJcbn07XHJcblxyXG5jb25zdCBwcmx4TW9udGFpbnMgPSAoKCkgPT4ge1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLXBhcmFsbGF4X19jb250YWluZXInKTtcclxuICB2YXIgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAvLy8gcGFyYWxsYXggYmFja2dyb3VuZC1lZmZlY3QgXHJcbiAgY29uc3QgYmdtb3ZlID0gKGUpID0+IHtcclxuICAgIGlmIChmbGFnKSByZXR1cm47XHJcbiAgICBsZXQgeCA9IC0oZS5wYWdlWCArIGUudGFyZ2V0Lm9mZnNldExlZnQpLzIuNSxcclxuICAgICAgeSA9IC0oZS5wYWdlWSArIGUudGFyZ2V0Lm9mZnNldFRvcCkvMi41O1xyXG5cclxuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSBgJHt4fXB4ICR7eX1weGA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IGZsYWc9ZmFsc2UsIDQyMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBiZ21vdmUsIGZhbHNlKTtcclxuICB9OyBcclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgZmxpcCA9ICgoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtd2VsY29tZScpLFxyXG4gICAgYnV0TG9naW4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWJ1dHRvbiN0YXJnZXRMb2dpbicpLFxyXG4gICAgbG9naW5UYXJnRWwgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLWxvZ2luX19idXR0b24nKSxcclxuICAgIHRlbXBsRmFjZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI2ZhY2VCbCcpLFxyXG4gICAgdGVtcGxCYWNrRmFjZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI2JhY2tGYWNlQmwnKSxcclxuICAgIGNvbnRhaW5lckZhY2UgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLWZhY2UtY29udGFpbmVyJyksXHJcbiAgICBjb250YWluZXJCYWNrZmFjZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtYmFja2ZhY2UtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IGZsaXBIYXNoID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsaXAnKSkgXHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XHJcbiAgICBlbHNlIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbG9naW5UYXJnRWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIGlmKCFsb2dpblRhcmdFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKSB7XHJcbiAgICAgICAgYnV0TG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwLCBmYWxzZSk7XHJcbiAgICAgIH0gfVxyXG4gICAgICAsIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmxpcCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwJykpXHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XHJcbiAgICBlbHNlIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbG9naW5UYXJnRWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIGlmKCFsb2dpblRhcmdFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKVxyXG4gICAgICAgIGJ1dExvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcCwgZmFsc2UpO1xyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB2YXIgYnV0TWFpbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtZm9ybV9fbmF2LWxpbmsjdGFyZ2V0TWFpbicpO1xyXG4gICAgICAgIGJ1dE1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwSGFzaCwgZmFsc2UpOyBcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgICAsIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXV0b3JpemF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnRhaW5lckZhY2UuaW5uZXJIVE1MID0gdGVtcGxCYWNrRmFjZS5pbm5lckhUTUw7XHJcbiAgICB0ZW1wbEJhY2tGYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGFpbmVyQmFja2ZhY2UuaW5uZXJIVE1MID0gdGVtcGxGYWNlLmlubmVySFRNTDtcclxuICAgIHRlbXBsRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGxvZ2luVGFyZ0VsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgdmFyIGJ1dE1haW4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWZvcm1fX25hdi1saW5rI3RhcmdldE1haW4nKTtcclxuICAgIGJ1dE1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwSGFzaCwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRXZWxjb21lID0gKCkgPT4geyBcclxuICAgIGNvbnRhaW5lckZhY2UuaW5uZXJIVE1MID0gdGVtcGxGYWNlLmlubmVySFRNTDtcclxuICAgIHRlbXBsRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnRhaW5lckJhY2tmYWNlLmlubmVySFRNTCA9IHRlbXBsQmFja0ZhY2UuaW5uZXJIVE1MO1xyXG4gICAgdGVtcGxCYWNrRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmKCFsb2dpblRhcmdFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKVxyXG4gICAgICBidXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXAsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge2luaXRXZWxjb21lLCBhdXRvcml6YXRlfTtcclxufSkoKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBpbml0KCk7XHJcbmNvbnNvbGUubG9nKCdJdGAgd29yayAlJSUhJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2luZGV4Lm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWJvdXRfaGVhZGVyLnN2Z1wiOiA3LFxuXHRcIi4vYXJyb3dfZG93bi5zdmdcIjogOCxcblx0XCIuL2JnLnN2Z1wiOiA5LFxuXHRcIi4vYmxvZ19oZWFkZXIuc3ZnXCI6IDEwLFxuXHRcIi4vZGFzaC5zdmdcIjogMTEsXG5cdFwiLi9lZGdlX3R3b19jb2xvci5zdmdcIjogMTIsXG5cdFwiLi9naXRodWIuc3ZnXCI6IDEzLFxuXHRcIi4vaGFtYnVyZ2VyLnN2Z1wiOiAxNCxcblx0XCIuL2luLnN2Z1wiOiAxNSxcblx0XCIuL2xpbmsuc3ZnXCI6IDE2LFxuXHRcIi4vbG9naW4uc3ZnXCI6IDE3LFxuXHRcIi4vbWFpbC5zdmdcIjogMTgsXG5cdFwiLi9tYXBfbWFya2VyLnN2Z1wiOiAxOSxcblx0XCIuL3Bhc3N3b3JkLnN2Z1wiOiAyMCxcblx0XCIuL3Bob25lLnN2Z1wiOiAyMSxcblx0XCIuL3BvcnRmX2Fycm93X2Rvd24uc3ZnXCI6IDIyLFxuXHRcIi4vcG9ydGZfYXJyb3dfdXAuc3ZnXCI6IDIzLFxuXHRcIi4vcG9ydGZvbGlvX2hlYWRlci5zdmdcIjogMjQsXG5cdFwiLi9za3lwZS5zdmdcIjogMjUsXG5cdFwiLi92ay5zdmdcIjogMjYsXG5cdFwiLi93b3Jrc19oZWFkZXIuc3ZnXCI6IDI3XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gNjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2Fib3V0X2hlYWRlci5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvYWJvdXRfaGVhZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2Fycm93X2Rvd24uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2Fycm93X2Rvd24uc3ZnXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvYmcuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2JnLnN2Z1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2Jsb2dfaGVhZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9ibG9nX2hlYWRlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvZGFzaC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvZGFzaC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvZWRnZV90d29fY29sb3Iuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2VkZ2VfdHdvX2NvbG9yLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9naXRodWIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2dpdGh1Yi5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvaGFtYnVyZ2VyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9oYW1idXJnZXIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2luLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9pbi5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvbGluay5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvbGluay5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvbG9naW4uc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL2xvZ2luLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9tYWlsLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9tYWlsLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9tYXBfbWFya2VyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9tYXBfbWFya2VyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9wYXNzd29yZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcGFzc3dvcmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL3Bob25lLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9waG9uZS5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcG9ydGZfYXJyb3dfZG93bi5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcG9ydGZfYXJyb3dfZG93bi5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvcG9ydGZfYXJyb3dfdXAuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL3BvcnRmX2Fycm93X3VwLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9wb3J0Zm9saW9faGVhZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9wb3J0Zm9saW9faGVhZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS9za3lwZS5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvc2t5cGUuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlL3ZrLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS92ay5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvd29ya3NfaGVhZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS93b3Jrc19oZWFkZXIuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9