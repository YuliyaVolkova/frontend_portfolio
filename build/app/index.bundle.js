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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(8);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _detect_mobile = __webpack_require__(9);

var _detect_mobile2 = _interopRequireDefault(_detect_mobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _svg4everybody2.default)();


//* include to make external svg sprite 
//*** from svg files in '../assets/images/sprites/to_social/'	
//*
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_sprite/', true));

var init = function init() {
  var tabletMth = window.matchMedia('(max-width: 768px)');
  if (window.location.hash === '#login') flip.autorizate();else flip.initWelcome();
  if (!(0, _detect_mobile2.default)() && !tabletMth.matches) parallax.handler();
};
///*------------------------------------
///* parallax background-effect- 1 layer
///*--------------------------------------

var prlxMontains = function () {
  var container = document.body.querySelector('.l-parallax__container');
  var flag = false;

  var bgmove = function bgmove(e) {
    if (flag) return;
    var x = -(e.pageX + e.target.offsetLeft) / 2.5,
        y = -(e.pageY + e.target.offsetTop) / 2.5;

    container.style.backgroundPosition = x + 'px ' + y + 'px';
    setTimeout(function () {
      return flag = false;
    }, 420);
  };

  var init = function init() {
    container.addEventListener('mousemove', bgmove, false);
  };
  return { init: init };
}();
///*------------------------------------------------
///* parallax background-effect - to multiple layers
///*------------------------------------------------
var parallax = function () {
  var container = document.body.querySelector('#parallax'),
      layers = [].concat(_toConsumableArray(container.children));

  var containerPos = function containerPos() {
    //last layer faster move
    var positionTop = window.innerHeight / 2 * layers[layers.length - 1].dataset.speed,
        positionLeft = window.innerWidth / 2 * layers[layers.length - 1].dataset.speed;

    container.style.top = '-' + positionTop + 'px';
    container.style.bottom = '-' + positionTop + 'px';
    container.style.left = '-' + positionLeft + 'px';
    container.style.right = '-' + positionLeft + 'px';
  };

  var move = function move(e) {
    var initialX = window.innerWidth / 2 - e.pageX,
        initialY = window.innerHeight / 2 - e.pageY;
    layers.forEach(function (item) {
      var divider = item.dataset.speed,
          moveX = initialX * divider,
          moveY = initialY * divider;
      item.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    });
  };

  var handler = function handler() {
    containerPos();
    window.addEventListener('resize', containerPos, false);
    window.addEventListener('mousemove', move, false);
  };
  return { handler: handler };
}();
//-----------------
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

window.onload = init;
console.log('It` work %%%!');

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



Object.defineProperty(exports, "__esModule", {
             value: true
});
var isMobileDevice = function isMobileDevice() {
             var testExp = new RegExp('Android|webOS|iPhone|iPad|' + 'BlackBerry|Windows Phone|' + 'Opera Mini|IEMobile|Mobile', 'i'); //The /expression/i makes the search case insensitive
             return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1 || testExp.test(navigator.userAgent);
};

exports.default = isMobileDevice;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA3MzNiYzlkM2E5YzE2ZmZkZmYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3M/YjFiMiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kZXRlY3RfbW9iaWxlLmpzIl0sIm5hbWVzIjpbImluaXQiLCJ0YWJsZXRNdGgiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibG9jYXRpb24iLCJoYXNoIiwiZmxpcCIsImF1dG9yaXphdGUiLCJpbml0V2VsY29tZSIsIm1hdGNoZXMiLCJwYXJhbGxheCIsImhhbmRsZXIiLCJwcmx4TW9udGFpbnMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZmxhZyIsImJnbW92ZSIsImUiLCJ4IiwicGFnZVgiLCJ0YXJnZXQiLCJvZmZzZXRMZWZ0IiwieSIsInBhZ2VZIiwib2Zmc2V0VG9wIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImxheWVycyIsImNoaWxkcmVuIiwiY29udGFpbmVyUG9zIiwicG9zaXRpb25Ub3AiLCJpbm5lckhlaWdodCIsImxlbmd0aCIsImRhdGFzZXQiLCJzcGVlZCIsInBvc2l0aW9uTGVmdCIsImlubmVyV2lkdGgiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJtb3ZlIiwiaW5pdGlhbFgiLCJpbml0aWFsWSIsImZvckVhY2giLCJpdGVtIiwiZGl2aWRlciIsIm1vdmVYIiwibW92ZVkiLCJ0cmFuc2Zvcm0iLCJidXRMb2dpbiIsImxvZ2luVGFyZ0VsIiwidGVtcGxGYWNlIiwidGVtcGxCYWNrRmFjZSIsImNvbnRhaW5lckZhY2UiLCJjb250YWluZXJCYWNrZmFjZSIsImZsaXBIYXNoIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInRvZ2dsZSIsImJ1dE1haW4iLCJpbm5lckhUTUwiLCJvbmxvYWQiLCJjb25zb2xlIiwibG9nIiwiaXNNb2JpbGVEZXZpY2UiLCJ0ZXN0RXhwIiwiUmVnRXhwIiwib3JpZW50YXRpb24iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwidGVzdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDN0RBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxQkFBcUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnRUFBZ0U7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hHRDs7QUFDQTs7QUFDQTs7OztBQUVBOzs7Ozs7OztBQURBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTyxHQUFNO0FBQ2pCLE1BQUlDLFlBQVlDLE9BQU9DLFVBQVAsQ0FBa0Isb0JBQWxCLENBQWhCO0FBQ0EsTUFBR0QsT0FBT0UsUUFBUCxDQUFnQkMsSUFBaEIsS0FBdUIsUUFBMUIsRUFBb0NDLEtBQUtDLFVBQUwsR0FBcEMsS0FDS0QsS0FBS0UsV0FBTDtBQUNMLE1BQUcsQ0FBQyw4QkFBRCxJQUFtQixDQUFDUCxVQUFVUSxPQUFqQyxFQUEwQ0MsU0FBU0MsT0FBVDtBQUMzQyxDQUxEO0FBTUE7QUFDQTtBQUNBOztBQUVBLElBQU1DLGVBQWdCLFlBQU07QUFDMUIsTUFBTUMsWUFBWUMsU0FBU0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLHdCQUE1QixDQUFsQjtBQUNBLE1BQUlDLE9BQU8sS0FBWDs7QUFFQSxNQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3BCLFFBQUlGLElBQUosRUFBVTtBQUNWLFFBQUlHLElBQUksRUFBRUQsRUFBRUUsS0FBRixHQUFVRixFQUFFRyxNQUFGLENBQVNDLFVBQXJCLElBQWlDLEdBQXpDO0FBQUEsUUFDRUMsSUFBSSxFQUFFTCxFQUFFTSxLQUFGLEdBQVVOLEVBQUVHLE1BQUYsQ0FBU0ksU0FBckIsSUFBZ0MsR0FEdEM7O0FBR0FiLGNBQVVjLEtBQVYsQ0FBZ0JDLGtCQUFoQixHQUF3Q1IsQ0FBeEMsV0FBK0NJLENBQS9DO0FBQ0FLLGVBQVc7QUFBQSxhQUFNWixPQUFLLEtBQVg7QUFBQSxLQUFYLEVBQTZCLEdBQTdCO0FBQ0QsR0FQRDs7QUFTQSxNQUFNakIsT0FBTyxTQUFQQSxJQUFPLEdBQU07QUFDakJhLGNBQVVpQixnQkFBVixDQUEyQixXQUEzQixFQUF3Q1osTUFBeEMsRUFBZ0QsS0FBaEQ7QUFDRCxHQUZEO0FBR0EsU0FBTyxFQUFDbEIsVUFBRCxFQUFQO0FBQ0QsQ0FqQm9CLEVBQXJCO0FBa0JBO0FBQ0E7QUFDQTtBQUNBLElBQU1VLFdBQVksWUFBTTtBQUN0QixNQUFJRyxZQUFZQyxTQUFTQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsV0FBNUIsQ0FBaEI7QUFBQSxNQUNFZSxzQ0FBYWxCLFVBQVVtQixRQUF2QixFQURGOztBQUdBLE1BQU1DLGVBQWUsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCO0FBQ0EsUUFBSUMsY0FBY2hDLE9BQU9pQyxXQUFQLEdBQW1CLENBQW5CLEdBQXFCSixPQUFPQSxPQUFPSyxNQUFQLEdBQWMsQ0FBckIsRUFBd0JDLE9BQXhCLENBQWdDQyxLQUF2RTtBQUFBLFFBQ0VDLGVBQWVyQyxPQUFPc0MsVUFBUCxHQUFrQixDQUFsQixHQUFvQlQsT0FBT0EsT0FBT0ssTUFBUCxHQUFjLENBQXJCLEVBQXdCQyxPQUF4QixDQUFnQ0MsS0FEckU7O0FBR0F6QixjQUFVYyxLQUFWLENBQWdCYyxHQUFoQixTQUEwQlAsV0FBMUI7QUFDQXJCLGNBQVVjLEtBQVYsQ0FBZ0JlLE1BQWhCLFNBQTZCUixXQUE3QjtBQUNBckIsY0FBVWMsS0FBVixDQUFnQmdCLElBQWhCLFNBQTJCSixZQUEzQjtBQUNBMUIsY0FBVWMsS0FBVixDQUFnQmlCLEtBQWhCLFNBQTRCTCxZQUE1QjtBQUNELEdBVEQ7O0FBV0EsTUFBTU0sT0FBTyxTQUFQQSxJQUFPLENBQUMxQixDQUFELEVBQU87QUFDbEIsUUFBSTJCLFdBQVc1QyxPQUFPc0MsVUFBUCxHQUFrQixDQUFsQixHQUFzQnJCLEVBQUVFLEtBQXZDO0FBQUEsUUFDRTBCLFdBQVc3QyxPQUFPaUMsV0FBUCxHQUFtQixDQUFuQixHQUF1QmhCLEVBQUVNLEtBRHRDO0FBRUFNLFdBQU9pQixPQUFQLENBQWUsVUFBQ0MsSUFBRCxFQUFVO0FBQ3ZCLFVBQUlDLFVBQVVELEtBQUtaLE9BQUwsQ0FBYUMsS0FBM0I7QUFBQSxVQUNFYSxRQUFRTCxXQUFXSSxPQURyQjtBQUFBLFVBRUVFLFFBQVFMLFdBQVdHLE9BRnJCO0FBR0FELFdBQUt0QixLQUFMLENBQVcwQixTQUFYLGtCQUFvQ0YsS0FBcEMsWUFBZ0RDLEtBQWhEO0FBQ0QsS0FMRDtBQU1ELEdBVEQ7O0FBV0EsTUFBTXpDLFVBQVUsU0FBVkEsT0FBVSxHQUFNO0FBQ3BCc0I7QUFDQS9CLFdBQU80QixnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0csWUFBbEMsRUFBZ0QsS0FBaEQ7QUFDQS9CLFdBQU80QixnQkFBUCxDQUF3QixXQUF4QixFQUFxQ2UsSUFBckMsRUFBMkMsS0FBM0M7QUFDRCxHQUpEO0FBS0EsU0FBTyxFQUFDbEMsZ0JBQUQsRUFBUDtBQUNELENBaENnQixFQUFqQjtBQWlDQTtBQUNBLElBQU1MLE9BQVEsWUFBTTs7QUFFbEIsTUFBTU8sWUFBWUMsU0FBU0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLFlBQTVCLENBQWxCO0FBQUEsTUFDRXNDLFdBQVd4QyxTQUFTQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsdUJBQTVCLENBRGI7QUFBQSxNQUVFdUMsY0FBY3pDLFNBQVNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0QixrQkFBNUIsQ0FGaEI7QUFBQSxNQUdFd0MsWUFBWTFDLFNBQVNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0QixTQUE1QixDQUhkO0FBQUEsTUFJRXlDLGdCQUFnQjNDLFNBQVNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0QixhQUE1QixDQUpsQjtBQUFBLE1BS0UwQyxnQkFBZ0I1QyxTQUFTQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsbUJBQTVCLENBTGxCO0FBQUEsTUFNRTJDLG9CQUFvQjdDLFNBQVNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0Qix1QkFBNUIsQ0FOdEI7O0FBUUEsTUFBTTRDLFdBQVcsU0FBWEEsUUFBVyxDQUFDekMsQ0FBRCxFQUFPO0FBQ3RCQSxNQUFFMEMsY0FBRjtBQUNBLFFBQUdoRCxVQUFVaUQsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsTUFBN0IsQ0FBSCxFQUNFbEQsVUFBVWlELFNBQVYsQ0FBb0JFLE1BQXBCLENBQTJCLE1BQTNCLEVBREYsS0FFS25ELFVBQVVpRCxTQUFWLENBQW9CRyxHQUFwQixDQUF3QixNQUF4QjtBQUNMcEMsZUFBVyxZQUFNO0FBQ2YwQixrQkFBWU8sU0FBWixDQUFzQkksTUFBdEIsQ0FBNkIsaUJBQTdCO0FBQ0EsVUFBRyxDQUFDWCxZQUFZTyxTQUFaLENBQXNCQyxRQUF0QixDQUErQixpQkFBL0IsQ0FBSixFQUF1RDtBQUNyRFQsaUJBQVN4QixnQkFBVCxDQUEwQixPQUExQixFQUFtQ3hCLElBQW5DLEVBQXlDLEtBQXpDO0FBQ0Q7QUFBRSxLQUpMLEVBS0ksR0FMSjtBQU1ELEdBWEQ7O0FBYUEsTUFBTUEsT0FBTyxTQUFQQSxJQUFPLENBQUNhLENBQUQsRUFBTztBQUNsQkEsTUFBRTBDLGNBQUY7QUFDQSxRQUFHaEQsVUFBVWlELFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLE1BQTdCLENBQUgsRUFDRWxELFVBQVVpRCxTQUFWLENBQW9CRSxNQUFwQixDQUEyQixNQUEzQixFQURGLEtBRUtuRCxVQUFVaUQsU0FBVixDQUFvQkcsR0FBcEIsQ0FBd0IsTUFBeEI7QUFDTHBDLGVBQVcsWUFBTTtBQUNmMEIsa0JBQVlPLFNBQVosQ0FBc0JJLE1BQXRCLENBQTZCLGlCQUE3QjtBQUNBLFVBQUcsQ0FBQ1gsWUFBWU8sU0FBWixDQUFzQkMsUUFBdEIsQ0FBK0IsaUJBQS9CLENBQUosRUFDRVQsU0FBU3hCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DeEIsSUFBbkMsRUFBeUMsS0FBekMsRUFERixLQUVLO0FBQ0gsWUFBSTZELFVBQVVyRCxTQUFTQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsOEJBQTVCLENBQWQ7QUFDQW1ELGdCQUFRckMsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0M4QixRQUFsQyxFQUE0QyxLQUE1QztBQUNEO0FBQ0YsS0FSRCxFQVNJLEdBVEo7QUFVRCxHQWZEOztBQWlCQSxNQUFNckQsYUFBYSxTQUFiQSxVQUFhLEdBQU07QUFDdkJtRCxrQkFBY1UsU0FBZCxHQUEwQlgsY0FBY1csU0FBeEM7QUFDQVgsa0JBQWNXLFNBQWQsR0FBMEIsRUFBMUI7QUFDQVQsc0JBQWtCUyxTQUFsQixHQUE4QlosVUFBVVksU0FBeEM7QUFDQVosY0FBVVksU0FBVixHQUFzQixFQUF0QjtBQUNBYixnQkFBWU8sU0FBWixDQUFzQkcsR0FBdEIsQ0FBMEIsaUJBQTFCO0FBQ0EsUUFBSUUsVUFBVXJELFNBQVNDLElBQVQsQ0FBY0MsYUFBZCxDQUE0Qiw4QkFBNUIsQ0FBZDtBQUNBbUQsWUFBUXJDLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDOEIsUUFBbEMsRUFBNEMsS0FBNUM7QUFDRCxHQVJEOztBQVVBLE1BQU1wRCxjQUFjLFNBQWRBLFdBQWMsR0FBTTtBQUN4QmtELGtCQUFjVSxTQUFkLEdBQTBCWixVQUFVWSxTQUFwQztBQUNBWixjQUFVWSxTQUFWLEdBQXNCLEVBQXRCO0FBQ0FULHNCQUFrQlMsU0FBbEIsR0FBOEJYLGNBQWNXLFNBQTVDO0FBQ0FYLGtCQUFjVyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0EsUUFBRyxDQUFDYixZQUFZTyxTQUFaLENBQXNCQyxRQUF0QixDQUErQixpQkFBL0IsQ0FBSixFQUNFVCxTQUFTeEIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUN4QixJQUFuQyxFQUF5QyxLQUF6QztBQUNILEdBUEQ7O0FBU0EsU0FBTyxFQUFDRSx3QkFBRCxFQUFjRCxzQkFBZCxFQUFQO0FBQ0QsQ0E1RFksRUFBYjs7QUE4REFMLE9BQU9tRSxNQUFQLEdBQWdCckUsSUFBaEI7QUFDQXNFLFFBQVFDLEdBQVIsQ0FBWSxlQUFaLEU7Ozs7OztBQzdJQSx5Qzs7Ozs7Ozs7QUNDQTs7Ozs7QUFDQSxJQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQUs7QUFDeEIsaUJBQU1DLFVBQVUsSUFBSUMsTUFBSixDQUFXLCtCQUNkLDJCQURjLEdBRWQsNEJBRkcsRUFHaEIsR0FIZ0IsQ0FBaEIsQ0FEd0IsQ0FJaEI7QUFDUixvQkFBUSxPQUFPeEUsT0FBT3lFLFdBQWQsS0FBOEIsV0FBL0IsSUFBZ0RDLFVBQVVDLFNBQVYsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLE1BQTRDLENBQUMsQ0FBN0YsSUFBbUdMLFFBQVFNLElBQVIsQ0FBYUgsVUFBVUMsU0FBdkIsQ0FBMUc7QUFDRCxDQU5EOztrQkFRZUwsYyIsImZpbGUiOiJhcHAvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwNzMzYmM5ZDNhOWMxNmZmZGZmIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2luZGV4Lm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBpc01vYmlsZURldmljZSBmcm9tICcuL2NvbXBvbmVudHMvZGV0ZWN0X21vYmlsZS5qcyc7XHJcblx0XHJcbi8vKiBpbmNsdWRlIHRvIG1ha2UgZXh0ZXJuYWwgc3ZnIHNwcml0ZSBcclxuLy8qKiogZnJvbSBzdmcgZmlsZXMgaW4gJy4uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zb2NpYWwvJ1x0XHJcbi8vKlxyXG4vL2Z1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XHJcbi8vcmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvJywgdHJ1ZSkpO1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBsZXQgdGFibGV0TXRoID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpO1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoPT09JyNsb2dpbicpIGZsaXAuYXV0b3JpemF0ZSgpO1xyXG4gIGVsc2UgZmxpcC5pbml0V2VsY29tZSgpO1xyXG4gIGlmKCFpc01vYmlsZURldmljZSgpJiYhdGFibGV0TXRoLm1hdGNoZXMpIHBhcmFsbGF4LmhhbmRsZXIoKTtcclxufTtcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIHBhcmFsbGF4IGJhY2tncm91bmQtZWZmZWN0LSAxIGxheWVyXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuY29uc3QgcHJseE1vbnRhaW5zID0gKCgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLXBhcmFsbGF4X19jb250YWluZXInKTtcclxuICB2YXIgZmxhZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBiZ21vdmUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGZsYWcpIHJldHVybjtcclxuICAgIGxldCB4ID0gLShlLnBhZ2VYICsgZS50YXJnZXQub2Zmc2V0TGVmdCkvMi41LFxyXG4gICAgICB5ID0gLShlLnBhZ2VZICsgZS50YXJnZXQub2Zmc2V0VG9wKS8yLjU7XHJcblxyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3h9cHggJHt5fXB4YDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gZmxhZz1mYWxzZSwgNDIwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGJnbW92ZSwgZmFsc2UpO1xyXG4gIH07IFxyXG4gIHJldHVybiB7aW5pdH07XHJcbn0pKCk7XHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBwYXJhbGxheCBiYWNrZ3JvdW5kLWVmZmVjdCAtIHRvIG11bHRpcGxlIGxheWVyc1xyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHBhcmFsbGF4ID0gKCgpID0+IHtcclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjcGFyYWxsYXgnKSxcclxuICAgIGxheWVycyA9IFsuLi5jb250YWluZXIuY2hpbGRyZW5dO1xyXG5cclxuICBjb25zdCBjb250YWluZXJQb3MgPSAoKSA9PiB7XHJcbiAgICAvL2xhc3QgbGF5ZXIgZmFzdGVyIG1vdmVcclxuICAgIGxldCBwb3NpdGlvblRvcCA9IHdpbmRvdy5pbm5lckhlaWdodC8yKmxheWVyc1tsYXllcnMubGVuZ3RoLTFdLmRhdGFzZXQuc3BlZWQsXHJcbiAgICAgIHBvc2l0aW9uTGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoLzIqbGF5ZXJzW2xheWVycy5sZW5ndGgtMV0uZGF0YXNldC5zcGVlZDtcclxuXHJcbiAgICBjb250YWluZXIuc3R5bGUudG9wID0gYC0ke3Bvc2l0aW9uVG9wfXB4YDtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBgLSR7cG9zaXRpb25Ub3B9cHhgO1xyXG4gICAgY29udGFpbmVyLnN0eWxlLmxlZnQgPSBgLSR7cG9zaXRpb25MZWZ0fXB4YDtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5yaWdodCA9IGAtJHtwb3NpdGlvbkxlZnR9cHhgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vdmUgPSAoZSkgPT4ge1xyXG4gICAgbGV0IGluaXRpYWxYID0gd2luZG93LmlubmVyV2lkdGgvMiAtIGUucGFnZVgsXHJcbiAgICAgIGluaXRpYWxZID0gd2luZG93LmlubmVySGVpZ2h0LzIgLSBlLnBhZ2VZO1xyXG4gICAgbGF5ZXJzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgbGV0IGRpdmlkZXIgPSBpdGVtLmRhdGFzZXQuc3BlZWQsXHJcbiAgICAgICAgbW92ZVggPSBpbml0aWFsWCAqIGRpdmlkZXIsXHJcbiAgICAgICAgbW92ZVkgPSBpbml0aWFsWSAqIGRpdmlkZXI7XHJcbiAgICAgIGl0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke21vdmVYfXB4LCAke21vdmVZfXB4KWA7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29udGFpbmVyUG9zKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgY29udGFpbmVyUG9zLCBmYWxzZSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW92ZSwgZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuLy8tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC13ZWxjb21lJyksXHJcbiAgICBidXRMb2dpbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtYnV0dG9uI3RhcmdldExvZ2luJyksXHJcbiAgICBsb2dpblRhcmdFbCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtbG9naW5fX2J1dHRvbicpLFxyXG4gICAgdGVtcGxGYWNlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjZmFjZUJsJyksXHJcbiAgICB0ZW1wbEJhY2tGYWNlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjYmFja0ZhY2VCbCcpLFxyXG4gICAgY29udGFpbmVyRmFjZSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtZmFjZS1jb250YWluZXInKSxcclxuICAgIGNvbnRhaW5lckJhY2tmYWNlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1iYWNrZmFjZS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZmxpcEhhc2ggPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxpcCcpKSBcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcclxuICAgIGVsc2UgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsb2dpblRhcmdFbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgaWYoIWxvZ2luVGFyZ0VsLmNsYXNzTGlzdC5jb250YWlucygndmlzdWFsbHktaGlkZGVuJykpIHtcclxuICAgICAgICBidXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXAsIGZhbHNlKTtcclxuICAgICAgfSB9XHJcbiAgICAgICwgNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBmbGlwID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsaXAnKSlcclxuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsaXAnKTtcclxuICAgIGVsc2UgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZsaXAnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBsb2dpblRhcmdFbC5jbGFzc0xpc3QudG9nZ2xlKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgaWYoIWxvZ2luVGFyZ0VsLmNsYXNzTGlzdC5jb250YWlucygndmlzdWFsbHktaGlkZGVuJykpXHJcbiAgICAgICAgYnV0TG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwLCBmYWxzZSk7XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHZhciBidXRNYWluID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1mb3JtX19uYXYtbGluayN0YXJnZXRNYWluJyk7XHJcbiAgICAgICAgYnV0TWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBIYXNoLCBmYWxzZSk7IFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAgICwgNTAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhdXRvcml6YXRlID0gKCkgPT4ge1xyXG4gICAgY29udGFpbmVyRmFjZS5pbm5lckhUTUwgPSB0ZW1wbEJhY2tGYWNlLmlubmVySFRNTDtcclxuICAgIHRlbXBsQmFja0ZhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb250YWluZXJCYWNrZmFjZS5pbm5lckhUTUwgPSB0ZW1wbEZhY2UuaW5uZXJIVE1MO1xyXG4gICAgdGVtcGxGYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgbG9naW5UYXJnRWwuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICB2YXIgYnV0TWFpbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtZm9ybV9fbmF2LWxpbmsjdGFyZ2V0TWFpbicpO1xyXG4gICAgYnV0TWFpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXBIYXNoLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdFdlbGNvbWUgPSAoKSA9PiB7IFxyXG4gICAgY29udGFpbmVyRmFjZS5pbm5lckhUTUwgPSB0ZW1wbEZhY2UuaW5uZXJIVE1MO1xyXG4gICAgdGVtcGxGYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGFpbmVyQmFja2ZhY2UuaW5uZXJIVE1MID0gdGVtcGxCYWNrRmFjZS5pbm5lckhUTUw7XHJcbiAgICB0ZW1wbEJhY2tGYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgaWYoIWxvZ2luVGFyZ0VsLmNsYXNzTGlzdC5jb250YWlucygndmlzdWFsbHktaGlkZGVuJykpXHJcbiAgICAgIGJ1dExvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcCwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7aW5pdFdlbGNvbWUsIGF1dG9yaXphdGV9O1xyXG59KSgpO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcbmNvbnNvbGUubG9nKCdJdGAgd29yayAlJSUhJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2luZGV4Lm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgaXNNb2JpbGVEZXZpY2UgPSAoKT0+IHtcclxuICBjb25zdCB0ZXN0RXhwID0gbmV3IFJlZ0V4cCgnQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHwnICtcclxuICAgICAgICAgICAgICAgJ0JsYWNrQmVycnl8V2luZG93cyBQaG9uZXwnICArXHJcbiAgICAgICAgICAgICAgICdPcGVyYSBNaW5pfElFTW9iaWxlfE1vYmlsZScgLCBcclxuICAnaScpOyAgIC8vVGhlIC9leHByZXNzaW9uL2kgbWFrZXMgdGhlIHNlYXJjaCBjYXNlIGluc2Vuc2l0aXZlXHJcbiAgcmV0dXJuICh0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSAndW5kZWZpbmVkJykgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpIHx8IHRlc3RFeHAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTW9iaWxlRGV2aWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2RldGVjdF9tb2JpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9