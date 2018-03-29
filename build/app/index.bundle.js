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
//----return array----
//--------------------
//var c = require.context('../assets/images/sprites/to_sprite/', true).keys();

///*------------------------------------
///* init app welcome-page
///*-------------------------------------
var init = function init() {
  var tabletMth = window.matchMedia('(max-width: 768px)');
  if (window.location.hash === '#login') flip.autorizate();else flip.initWelcome();
  if (!(0, _detect_mobile2.default)() && !tabletMth.matches) parallax.handler();
};

///*------------------------------------------------
///* parallax background-effect - to multiple layers
///*------------------------------------------------
var parallax = function () {
  var container = document.body.querySelector('#parallax'),
      layers = [].concat(_toConsumableArray(container.children));

  var containerPos = function containerPos() {
    //last layer faster move
    var speedLast = layers[layers.length - 1].dataset.speed,
        positionTop = window.innerHeight / 2 * speedLast,
        positionLeft = window.innerWidth / 2 * speedLast,
        containerStyle = container.style;

    containerStyle.top = '-' + positionTop + 'px';
    containerStyle.bottom = '-' + positionTop + 'px';
    containerStyle.left = '-' + positionLeft + 'px';
    containerStyle.right = '-' + positionLeft + 'px';
  };

  var move = function move(e) {
    var initialX = window.innerWidth / 2 - e.pageX,
        initialY = window.innerHeight / 2 - e.pageY;
    layers.forEach(function (item) {
      var divider = item.dataset.speed,
          moveX = initialX * divider,
          moveY = initialY * divider,
          itemStyle = item.style;
      itemStyle.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
      itemStyle.WebkitTransform = 'translate(' + moveX + 'px, ' + moveY + 'px)';
    });
  };

  var handler = function handler() {
    containerPos();
    window.addEventListener('resize', containerPos, false);
    window.addEventListener('mousemove', move, false);
  };
  return { handler: handler };
}();

///*------------------------------------------------
///* flip-effect - welcome screen
///*------------------------------------------------
var flip = function () {

  var body = document.body,
      container = body.querySelector('.l-welcome'),
      butLogin = body.querySelector('.c-button#targetLogin'),
      loginTargEl = body.querySelector('.l-login__button'),
      templFace = body.querySelector('#faceBl'),
      templBackFace = body.querySelector('#backFaceBl'),
      containerFace = body.querySelector('.l-face-container'),
      containerBackface = body.querySelector('.l-backface-container');

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
        var butMain = body.querySelector('.c-form__nav-link#targetMain');
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
    var butMain = body.querySelector('.c-form__nav-link#targetMain');
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

///*------------------------------------
///* parallax background-effect- 1 layer
///*-------------------------------------
/*const prlxMontains = (() => {
  const container = document.body.querySelector('.l-parallax__container');
  var flag = false;

  const bgmove = e => {
    if (flag) return;
    let x = -(e.pageX + e.target.offsetLeft)/2.5,
      y = -(e.pageY + e.target.offsetTop)/2.5;

    container.style.backgroundPosition = `${x}px ${y}px`;
    setTimeout(() => flag=false, 420);
  };

  const init = () => {
    container.addEventListener('mousemove', bgmove, false);
  }; 
  return {init};
})();*/

///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzYzMjc3ODQ4NTgwZTI0ZDNkZTAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3M/YjFiMiIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kZXRlY3RfbW9iaWxlLmpzIl0sIm5hbWVzIjpbImluaXQiLCJ0YWJsZXRNdGgiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwibG9jYXRpb24iLCJoYXNoIiwiZmxpcCIsImF1dG9yaXphdGUiLCJpbml0V2VsY29tZSIsIm1hdGNoZXMiLCJwYXJhbGxheCIsImhhbmRsZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwibGF5ZXJzIiwiY2hpbGRyZW4iLCJjb250YWluZXJQb3MiLCJzcGVlZExhc3QiLCJsZW5ndGgiLCJkYXRhc2V0Iiwic3BlZWQiLCJwb3NpdGlvblRvcCIsImlubmVySGVpZ2h0IiwicG9zaXRpb25MZWZ0IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5lclN0eWxlIiwic3R5bGUiLCJ0b3AiLCJib3R0b20iLCJsZWZ0IiwicmlnaHQiLCJtb3ZlIiwiaW5pdGlhbFgiLCJlIiwicGFnZVgiLCJpbml0aWFsWSIsInBhZ2VZIiwiZm9yRWFjaCIsIml0ZW0iLCJkaXZpZGVyIiwibW92ZVgiLCJtb3ZlWSIsIml0ZW1TdHlsZSIsInRyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsImFkZEV2ZW50TGlzdGVuZXIiLCJidXRMb2dpbiIsImxvZ2luVGFyZ0VsIiwidGVtcGxGYWNlIiwidGVtcGxCYWNrRmFjZSIsImNvbnRhaW5lckZhY2UiLCJjb250YWluZXJCYWNrZmFjZSIsImZsaXBIYXNoIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImFkZCIsInNldFRpbWVvdXQiLCJ0b2dnbGUiLCJidXRNYWluIiwiaW5uZXJIVE1MIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsImlzTW9iaWxlRGV2aWNlIiwidGVzdEV4cCIsIlJlZ0V4cCIsIm9yaWVudGF0aW9uIiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiaW5kZXhPZiIsInRlc3QiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdGQUF3RjtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFD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eEI0QyxrQkFBY1csU0FBZCxHQUEwQmIsVUFBVWEsU0FBcEM7QUFDQWIsY0FBVWEsU0FBVixHQUFzQixFQUF0QjtBQUNBVixzQkFBa0JVLFNBQWxCLEdBQThCWixjQUFjWSxTQUE1QztBQUNBWixrQkFBY1ksU0FBZCxHQUEwQixFQUExQjtBQUNBLFFBQUcsQ0FBQ2QsWUFBWU8sU0FBWixDQUFzQkMsUUFBdEIsQ0FBK0IsaUJBQS9CLENBQUosRUFDRVQsU0FBU0QsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUN6QyxJQUFuQyxFQUF5QyxLQUF6QztBQUNILEdBUEQ7O0FBU0EsU0FBTyxFQUFDRSx3QkFBRCxFQUFjRCxzQkFBZCxFQUFQO0FBQ0QsQ0E1RFksRUFBYjs7QUE4REE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTtBQUNBO0FBQ0FMLE9BQU84RCxNQUFQLEdBQWdCaEUsSUFBaEI7QUFDQWlFLFFBQVFDLEdBQVIsQ0FBWSxlQUFaLEU7Ozs7OztBQzdKQSx5Qzs7Ozs7Ozs7QUNDQTs7Ozs7QUFDQSxJQUFJQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQUs7QUFDeEIsaUJBQU1DLFVBQVUsSUFBSUMsTUFBSixDQUFXLCtCQUNkLDJCQURjLEdBRWQsNEJBRkcsRUFHaEIsR0FIZ0IsQ0FBaEIsQ0FEd0IsQ0FJaEI7QUFDUixvQkFBUSxPQUFPbkUsT0FBT29FLFdBQWQsS0FBOEIsV0FBL0IsSUFBZ0RDLFVBQVVDLFNBQVYsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLE1BQTRDLENBQUMsQ0FBN0YsSUFBbUdMLFFBQVFNLElBQVIsQ0FBYUgsVUFBVUMsU0FBdkIsQ0FBMUc7QUFDRCxDQU5EOztrQkFRZUwsYyIsImZpbGUiOiJhcHAvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc2MzI3Nzg0ODU4MGUyNGQzZGUwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXgubWFpbi5zY3NzJztcclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuaW1wb3J0IGlzTW9iaWxlRGV2aWNlIGZyb20gJy4vY29tcG9uZW50cy9kZXRlY3RfbW9iaWxlLmpzJztcclxuXHRcclxuLy8qIGluY2x1ZGUgdG8gbWFrZSBleHRlcm5hbCBzdmcgc3ByaXRlIFxyXG4vLyoqKiBmcm9tIHN2ZyBmaWxlcyBpbiAnLi4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3NvY2lhbC8nXHRcclxuLy8qXHJcbi8vZnVuY3Rpb24gcmVxdWlyZUFsbChyKSB7IHIua2V5cygpLmZvckVhY2gocik7IH1cclxuLy9yZXF1aXJlQWxsKHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzL2ltYWdlcy9zcHJpdGVzL3RvX3Nwcml0ZS8nLCB0cnVlKSk7XHJcbi8vLS0tLXJldHVybiBhcnJheS0tLS1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vL3ZhciBjID0gcmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlLycsIHRydWUpLmtleXMoKTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBpbml0IGFwcCB3ZWxjb21lLXBhZ2VcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBsZXQgdGFibGV0TXRoID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpO1xyXG4gIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoPT09JyNsb2dpbicpIGZsaXAuYXV0b3JpemF0ZSgpO1xyXG4gIGVsc2UgZmxpcC5pbml0V2VsY29tZSgpO1xyXG4gIGlmKCFpc01vYmlsZURldmljZSgpJiYhdGFibGV0TXRoLm1hdGNoZXMpIHBhcmFsbGF4LmhhbmRsZXIoKTtcclxufTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBwYXJhbGxheCBiYWNrZ3JvdW5kLWVmZmVjdCAtIHRvIG11bHRpcGxlIGxheWVyc1xyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHBhcmFsbGF4ID0gKCgpID0+IHtcclxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjcGFyYWxsYXgnKSxcclxuICAgIGxheWVycyA9IFsuLi5jb250YWluZXIuY2hpbGRyZW5dO1xyXG5cclxuICBjb25zdCBjb250YWluZXJQb3MgPSAoKSA9PiB7XHJcbiAgICAvL2xhc3QgbGF5ZXIgZmFzdGVyIG1vdmVcclxuICAgIGxldCBzcGVlZExhc3QgPSBsYXllcnNbbGF5ZXJzLmxlbmd0aC0xXS5kYXRhc2V0LnNwZWVkLFxyXG4gICAgICBwb3NpdGlvblRvcCA9IHdpbmRvdy5pbm5lckhlaWdodC8yKnNwZWVkTGFzdCxcclxuICAgICAgcG9zaXRpb25MZWZ0ID0gd2luZG93LmlubmVyV2lkdGgvMipzcGVlZExhc3QsXHJcbiAgICAgIGNvbnRhaW5lclN0eWxlID0gY29udGFpbmVyLnN0eWxlO1xyXG5cclxuICAgIGNvbnRhaW5lclN0eWxlLnRvcCA9IGAtJHtwb3NpdGlvblRvcH1weGA7XHJcbiAgICBjb250YWluZXJTdHlsZS5ib3R0b20gPSBgLSR7cG9zaXRpb25Ub3B9cHhgO1xyXG4gICAgY29udGFpbmVyU3R5bGUubGVmdCA9IGAtJHtwb3NpdGlvbkxlZnR9cHhgO1xyXG4gICAgY29udGFpbmVyU3R5bGUucmlnaHQgPSBgLSR7cG9zaXRpb25MZWZ0fXB4YDtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb3ZlID0gZSA9PiB7XHJcbiAgICBsZXQgaW5pdGlhbFggPSB3aW5kb3cuaW5uZXJXaWR0aC8yIC0gZS5wYWdlWCxcclxuICAgICAgaW5pdGlhbFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQvMiAtIGUucGFnZVk7XHJcbiAgICBsYXllcnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBsZXQgZGl2aWRlciA9IGl0ZW0uZGF0YXNldC5zcGVlZCxcclxuICAgICAgICBtb3ZlWCA9IGluaXRpYWxYICogZGl2aWRlcixcclxuICAgICAgICBtb3ZlWSA9IGluaXRpYWxZICogZGl2aWRlcixcclxuICAgICAgICBpdGVtU3R5bGUgPSBpdGVtLnN0eWxlO1xyXG4gICAgICBpdGVtU3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZSgke21vdmVYfXB4LCAke21vdmVZfXB4KWA7XHJcbiAgICAgIGl0ZW1TdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bW92ZVh9cHgsICR7bW92ZVl9cHgpYDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb250YWluZXJQb3MoKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBjb250YWluZXJQb3MsIGZhbHNlKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlLCBmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIGZsaXAtZWZmZWN0IC0gd2VsY29tZSBzY3JlZW5cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuXHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgY29udGFpbmVyID0gYm9keS5xdWVyeVNlbGVjdG9yKCcubC13ZWxjb21lJyksXHJcbiAgICBidXRMb2dpbiA9IGJvZHkucXVlcnlTZWxlY3RvcignLmMtYnV0dG9uI3RhcmdldExvZ2luJyksXHJcbiAgICBsb2dpblRhcmdFbCA9IGJvZHkucXVlcnlTZWxlY3RvcignLmwtbG9naW5fX2J1dHRvbicpLFxyXG4gICAgdGVtcGxGYWNlID0gYm9keS5xdWVyeVNlbGVjdG9yKCcjZmFjZUJsJyksXHJcbiAgICB0ZW1wbEJhY2tGYWNlID0gYm9keS5xdWVyeVNlbGVjdG9yKCcjYmFja0ZhY2VCbCcpLFxyXG4gICAgY29udGFpbmVyRmFjZSA9IGJvZHkucXVlcnlTZWxlY3RvcignLmwtZmFjZS1jb250YWluZXInKSxcclxuICAgIGNvbnRhaW5lckJhY2tmYWNlID0gYm9keS5xdWVyeVNlbGVjdG9yKCcubC1iYWNrZmFjZS1jb250YWluZXInKTtcclxuXHJcbiAgY29uc3QgZmxpcEhhc2ggPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2ZsaXAnKSkgXHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdmbGlwJyk7XHJcbiAgICBlbHNlIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGlwJyk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgbG9naW5UYXJnRWwuY2xhc3NMaXN0LnRvZ2dsZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIGlmKCFsb2dpblRhcmdFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKSB7XHJcbiAgICAgICAgYnV0TG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmxpcCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxpcCcpKVxyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xyXG4gICAgZWxzZSBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxvZ2luVGFyZ0VsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICBpZighbG9naW5UYXJnRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSlcclxuICAgICAgICBidXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXAsIGZhbHNlKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IGJ1dE1haW4gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWZvcm1fX25hdi1saW5rI3RhcmdldE1haW4nKTtcclxuICAgICAgICBidXRNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcEhhc2gsIGZhbHNlKTsgXHJcbiAgICAgIH1cclxuICAgIH0sIDUwMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYXV0b3JpemF0ZSA9ICgpID0+IHtcclxuICAgIGNvbnRhaW5lckZhY2UuaW5uZXJIVE1MID0gdGVtcGxCYWNrRmFjZS5pbm5lckhUTUw7XHJcbiAgICB0ZW1wbEJhY2tGYWNlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgY29udGFpbmVyQmFja2ZhY2UuaW5uZXJIVE1MID0gdGVtcGxGYWNlLmlubmVySFRNTDtcclxuICAgIHRlbXBsRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGxvZ2luVGFyZ0VsLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgbGV0IGJ1dE1haW4gPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWZvcm1fX25hdi1saW5rI3RhcmdldE1haW4nKTtcclxuICAgIGJ1dE1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwSGFzaCwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXRXZWxjb21lID0gKCkgPT4geyBcclxuICAgIGNvbnRhaW5lckZhY2UuaW5uZXJIVE1MID0gdGVtcGxGYWNlLmlubmVySFRNTDtcclxuICAgIHRlbXBsRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnRhaW5lckJhY2tmYWNlLmlubmVySFRNTCA9IHRlbXBsQmFja0ZhY2UuaW5uZXJIVE1MO1xyXG4gICAgdGVtcGxCYWNrRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmKCFsb2dpblRhcmdFbC5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKVxyXG4gICAgICBidXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXAsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge2luaXRXZWxjb21lLCBhdXRvcml6YXRlfTtcclxufSkoKTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBwYXJhbGxheCBiYWNrZ3JvdW5kLWVmZmVjdC0gMSBsYXllclxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKmNvbnN0IHBybHhNb250YWlucyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1wYXJhbGxheF9fY29udGFpbmVyJyk7XHJcbiAgdmFyIGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgY29uc3QgYmdtb3ZlID0gZSA9PiB7XHJcbiAgICBpZiAoZmxhZykgcmV0dXJuO1xyXG4gICAgbGV0IHggPSAtKGUucGFnZVggKyBlLnRhcmdldC5vZmZzZXRMZWZ0KS8yLjUsXHJcbiAgICAgIHkgPSAtKGUucGFnZVkgKyBlLnRhcmdldC5vZmZzZXRUb3ApLzIuNTtcclxuXHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7eH1weCAke3l9cHhgO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBmbGFnPWZhbHNlLCA0MjApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgYmdtb3ZlLCBmYWxzZSk7XHJcbiAgfTsgXHJcbiAgcmV0dXJuIHtpbml0fTtcclxufSkoKTsqL1xyXG5cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIC0tLS0tLS0tLS0tcnVuIGFwcC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxud2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcbmNvbnNvbGUubG9nKCdJdGAgd29yayAlJSUhJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2luZGV4Lm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJcclxuJ3VzZSBzdHJpY3QnO1xyXG52YXIgaXNNb2JpbGVEZXZpY2UgPSAoKT0+IHtcclxuICBjb25zdCB0ZXN0RXhwID0gbmV3IFJlZ0V4cCgnQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHwnICtcclxuICAgICAgICAgICAgICAgJ0JsYWNrQmVycnl8V2luZG93cyBQaG9uZXwnICArXHJcbiAgICAgICAgICAgICAgICdPcGVyYSBNaW5pfElFTW9iaWxlfE1vYmlsZScgLCBcclxuICAnaScpOyAgIC8vVGhlIC9leHByZXNzaW9uL2kgbWFrZXMgdGhlIHNlYXJjaCBjYXNlIGluc2Vuc2l0aXZlXHJcbiAgcmV0dXJuICh0eXBlb2Ygd2luZG93Lm9yaWVudGF0aW9uICE9PSAndW5kZWZpbmVkJykgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignSUVNb2JpbGUnKSAhPT0gLTEpIHx8IHRlc3RFeHAudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTW9iaWxlRGV2aWNlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2RldGVjdF9tb2JpbGUuanMiXSwic291cmNlUm9vdCI6IiJ9