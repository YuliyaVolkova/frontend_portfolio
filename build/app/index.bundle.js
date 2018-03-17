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
//function requireAll(r) { r.keys().forEach(r); }
//requireAll(require.context('../assets/images/sprites/to_sprite/', true));

var init = function init() {
  prlxMontains.handler();
  flip.handler();
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
      butMain = document.body.querySelector('.c-form__nav-link#targetMain');

  var flag = false;

  /// flip-effect 
  var openLogin = function openLogin(e) {
    e.preventDefault();
    if (flag) return;
    container.classList.add('flip');
    setTimeout(function () {
      return flag = false;
    }, 50);
    loginTargEl.classList.add('visually-hidden');
    butMain.addEventListener('click', openMain, false);
  };

  var openMain = function openMain(e) {
    e.preventDefault();
    if (flag) return;
    container.classList.remove('flip');
    setTimeout(function () {
      return loginTargEl.classList.remove('visually-hidden');
    }, 500);
    setTimeout(function () {
      return flag = false;
    }, 50);
  };

  var handler = function handler() {
    butLogin.addEventListener('click', openLogin, false);
  };
  return { handler: handler };
}();

window.onload = init();
console.log('It` work %%%!');

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFhYTgwNjU3NDAyMDE1M2IzN2YiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3M/YjFiMiJdLCJuYW1lcyI6WyJpbml0IiwicHJseE1vbnRhaW5zIiwiaGFuZGxlciIsImZsaXAiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZmxhZyIsImJnbW92ZSIsImUiLCJ4IiwicGFnZVgiLCJ0YXJnZXQiLCJvZmZzZXRMZWZ0IiwieSIsInBhZ2VZIiwib2Zmc2V0VG9wIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dExvZ2luIiwibG9naW5UYXJnRWwiLCJidXRNYWluIiwib3BlbkxvZ2luIiwicHJldmVudERlZmF1bHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJvcGVuTWFpbiIsInJlbW92ZSIsIndpbmRvdyIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFp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QixZQUFZLFNBQVpBLFNBQVksQ0FBQ2YsQ0FBRCxFQUFPO0FBQ3ZCQSxNQUFFZ0IsY0FBRjtBQUNBLFFBQUlsQixJQUFKLEVBQVU7QUFDVkosY0FBVXVCLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE1BQXhCO0FBQ0FSLGVBQVc7QUFBQSxhQUFNWixPQUFLLEtBQVg7QUFBQSxLQUFYLEVBQTZCLEVBQTdCO0FBQ0FlLGdCQUFZSSxTQUFaLENBQXNCQyxHQUF0QixDQUEwQixpQkFBMUI7QUFDQUosWUFBUUgsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0NRLFFBQWxDLEVBQTRDLEtBQTVDO0FBQ0QsR0FQRDs7QUFTQSxNQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ25CLENBQUQsRUFBTztBQUN0QkEsTUFBRWdCLGNBQUY7QUFDQSxRQUFJbEIsSUFBSixFQUFVO0FBQ1ZKLGNBQVV1QixTQUFWLENBQW9CRyxNQUFwQixDQUEyQixNQUEzQjtBQUNBVixlQUFXO0FBQUEsYUFBTUcsWUFBWUksU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsaUJBQTdCLENBQU47QUFBQSxLQUFYLEVBQWtFLEdBQWxFO0FBQ0FWLGVBQVc7QUFBQSxhQUFNWixPQUFLLEtBQVg7QUFBQSxLQUFYLEVBQTZCLEVBQTdCO0FBQ0QsR0FORDs7QUFRQSxNQUFNTixVQUFVLFNBQVZBLE9BQVUsR0FBTTtBQUNwQm9CLGFBQVNELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DSSxTQUFuQyxFQUE4QyxLQUE5QztBQUNELEdBRkQ7QUFHQSxTQUFPLEVBQUN2QixnQkFBRCxFQUFQO0FBQ0QsQ0EvQlksRUFBYjs7QUFpQ0E2QixPQUFPQyxNQUFQLEdBQWdCaEMsTUFBaEI7QUFDQWlDLFFBQVFDLEdBQVIsQ0FBWSxlQUFaLEU7Ozs7OztBQzVFQSx5QyIsImZpbGUiOiJhcHAvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGRhYWE4MDY1NzQwMjAxNTNiMzdmIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2luZGV4Lm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcblxyXG4vLyogb3JcclxuLy92YXIgc3ZnRXZlcnlCb2R5ID0gcmVxdWlyZSgnc3ZnNGV2ZXJ5Ym9keScpO1xyXG4vL3N2Z0V2ZXJ5Qm9keSgpO1xyXG5cdFxyXG4vLyogaW5jbHVkZSB0byBtYWtlIGV4dGVybmFsIHN2ZyBzcHJpdGUgXHJcbi8vKioqIGZyb20gc3ZnIGZpbGVzIGluICcuLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc29jaWFsLydcdFxyXG4vLypcclxuLy9mdW5jdGlvbiByZXF1aXJlQWxsKHIpIHsgci5rZXlzKCkuZm9yRWFjaChyKTsgfVxyXG4vL3JlcXVpcmVBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMvaW1hZ2VzL3Nwcml0ZXMvdG9fc3ByaXRlLycsIHRydWUpKTtcclxuXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgcHJseE1vbnRhaW5zLmhhbmRsZXIoKTtcclxuICBmbGlwLmhhbmRsZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHBybHhNb250YWlucyA9ICgoKSA9PiB7XHJcblxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtcGFyYWxsYXhfX2NvbnRhaW5lcicpO1xyXG4gIHZhciBmbGFnID0gZmFsc2U7XHJcblxyXG4gIC8vLyBwYXJhbGxheCBiYWNrZ3JvdW5kLWVmZmVjdCBcclxuICBjb25zdCBiZ21vdmUgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGZsYWcpIHJldHVybjtcclxuICAgIGxldCB4ID0gLShlLnBhZ2VYICsgZS50YXJnZXQub2Zmc2V0TGVmdCkvMi41LFxyXG4gICAgICB5ID0gLShlLnBhZ2VZICsgZS50YXJnZXQub2Zmc2V0VG9wKS8yLjU7XHJcblxyXG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGAke3h9cHggJHt5fXB4YDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gZmxhZz1mYWxzZSwgNDIwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGJnbW92ZSwgZmFsc2UpO1xyXG4gIH07IFxyXG4gIHJldHVybiB7aGFuZGxlcn07XHJcbn0pKCk7XHJcblxyXG5jb25zdCBmbGlwID0gKCgpID0+IHtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC13ZWxjb21lJyksXHJcbiAgICBidXRMb2dpbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtYnV0dG9uI3RhcmdldExvZ2luJyksXHJcbiAgICBsb2dpblRhcmdFbCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtbG9naW5fX2J1dHRvbicpLFxyXG4gICAgYnV0TWFpbiA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtZm9ybV9fbmF2LWxpbmsjdGFyZ2V0TWFpbicpO1xyXG5cclxuICB2YXIgZmxhZyA9IGZhbHNlO1xyXG5cclxuICAvLy8gZmxpcC1lZmZlY3QgXHJcbiAgY29uc3Qgb3BlbkxvZ2luID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChmbGFnKSByZXR1cm47XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBmbGFnPWZhbHNlLCA1MCk7XHJcbiAgICBsb2dpblRhcmdFbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIGJ1dE1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWFpbiwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5NYWluID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChmbGFnKSByZXR1cm47XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBsb2dpblRhcmdFbC5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKSwgNTAwKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gZmxhZz1mYWxzZSwgNTApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBidXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Mb2dpbiwgZmFsc2UpO1xyXG4gIH07IFxyXG4gIHJldHVybiB7aGFuZGxlcn07XHJcbn0pKCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gaW5pdCgpO1xyXG5jb25zb2xlLmxvZygnSXRgIHdvcmsgJSUlIScpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==