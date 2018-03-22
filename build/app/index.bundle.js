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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjQ3MWJkYTY3ZmU0OGRjOGViNDYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3M/YjFiMiJdLCJuYW1lcyI6WyJpbml0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiZmxpcCIsImF1dG9yaXphdGUiLCJpbml0V2VsY29tZSIsInBybHhNb250YWlucyIsImhhbmRsZXIiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiZmxhZyIsImJnbW92ZSIsImUiLCJ4IiwicGFnZVgiLCJ0YXJnZXQiLCJvZmZzZXRMZWZ0IiwieSIsInBhZ2VZIiwib2Zmc2V0VG9wIiwic3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImJ1dExvZ2luIiwibG9naW5UYXJnRWwiLCJ0ZW1wbEZhY2UiLCJ0ZW1wbEJhY2tGYWNlIiwiY29udGFpbmVyRmFjZSIsImNvbnRhaW5lckJhY2tmYWNlIiwiZmxpcEhhc2giLCJwcmV2ZW50RGVmYXVsdCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidG9nZ2xlIiwiYnV0TWFpbiIsImlubmVySFRNTCIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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O0FBQ0FYLGtCQUFjVyxTQUFkLEdBQTBCLEVBQTFCO0FBQ0EsUUFBRyxDQUFDYixZQUFZTyxTQUFaLENBQXNCQyxRQUF0QixDQUErQixpQkFBL0IsQ0FBSixFQUNFVCxTQUFTRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQ3RCLElBQW5DLEVBQXlDLEtBQXpDO0FBQ0gsR0FQRDs7QUFTQSxTQUFPLEVBQUNFLHdCQUFELEVBQWNELHNCQUFkLEVBQVA7QUFDRCxDQTVEWSxFQUFiOztBQThEQUosT0FBT3lDLE1BQVAsR0FBZ0IxQyxNQUFoQjtBQUNBMkMsUUFBUUMsR0FBUixDQUFZLGVBQVosRTs7Ozs7O0FDMUdBLHlDIiwiZmlsZSI6ImFwcC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjQ3MWJkYTY3ZmU0OGRjOGViNDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIlxyXG5pbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvaW5kZXgubWFpbi5zY3NzJztcclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuXHJcbi8vKiBvclxyXG4vL3ZhciBzdmdFdmVyeUJvZHkgPSByZXF1aXJlKCdzdmc0ZXZlcnlib2R5Jyk7XHJcbi8vc3ZnRXZlcnlCb2R5KCk7XHJcblx0XHJcbi8vKiBpbmNsdWRlIHRvIG1ha2UgZXh0ZXJuYWwgc3ZnIHNwcml0ZSBcclxuLy8qKiogZnJvbSBzdmcgZmlsZXMgaW4gJy4uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zb2NpYWwvJ1x0XHJcbi8vKlxyXG4vL2Z1bmN0aW9uIHJlcXVpcmVBbGwocikgeyByLmtleXMoKS5mb3JFYWNoKHIpOyB9XHJcbi8vcmVxdWlyZUFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cy9pbWFnZXMvc3ByaXRlcy90b19zcHJpdGUvJywgdHJ1ZSkpO1xyXG5cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBpZih3aW5kb3cubG9jYXRpb24uaGFzaD09PScjbG9naW4nKSBmbGlwLmF1dG9yaXphdGUoKTtcclxuICBlbHNlIGZsaXAuaW5pdFdlbGNvbWUoKTtcclxuICBwcmx4TW9udGFpbnMuaGFuZGxlcigpO1xyXG59O1xyXG5cclxuY29uc3QgcHJseE1vbnRhaW5zID0gKCgpID0+IHtcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1wYXJhbGxheF9fY29udGFpbmVyJyk7XHJcbiAgdmFyIGZsYWcgPSBmYWxzZTtcclxuXHJcbiAgLy8vIHBhcmFsbGF4IGJhY2tncm91bmQtZWZmZWN0IFxyXG4gIGNvbnN0IGJnbW92ZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZmxhZykgcmV0dXJuO1xyXG4gICAgbGV0IHggPSAtKGUucGFnZVggKyBlLnRhcmdldC5vZmZzZXRMZWZ0KS8yLjUsXHJcbiAgICAgIHkgPSAtKGUucGFnZVkgKyBlLnRhcmdldC5vZmZzZXRUb3ApLzIuNTtcclxuXHJcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYCR7eH1weCAke3l9cHhgO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiBmbGFnPWZhbHNlLCA0MjApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgYmdtb3ZlLCBmYWxzZSk7XHJcbiAgfTsgXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGZsaXAgPSAoKCkgPT4ge1xyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLXdlbGNvbWUnKSxcclxuICAgIGJ1dExvZ2luID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1idXR0b24jdGFyZ2V0TG9naW4nKSxcclxuICAgIGxvZ2luVGFyZ0VsID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1sb2dpbl9fYnV0dG9uJyksXHJcbiAgICB0ZW1wbEZhY2UgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNmYWNlQmwnKSxcclxuICAgIHRlbXBsQmFja0ZhY2UgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrRmFjZUJsJyksXHJcbiAgICBjb250YWluZXJGYWNlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1mYWNlLWNvbnRhaW5lcicpLFxyXG4gICAgY29udGFpbmVyQmFja2ZhY2UgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLWJhY2tmYWNlLWNvbnRhaW5lcicpO1xyXG5cclxuICBjb25zdCBmbGlwSGFzaCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdmbGlwJykpIFxyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xyXG4gICAgZWxzZSBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxvZ2luVGFyZ0VsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICBpZighbG9naW5UYXJnRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSkge1xyXG4gICAgICAgIGJ1dExvZ2luLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcCwgZmFsc2UpO1xyXG4gICAgICB9IH1cclxuICAgICAgLCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZsaXAgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZmxpcCcpKVxyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmxpcCcpO1xyXG4gICAgZWxzZSBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZmxpcCcpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGxvZ2luVGFyZ0VsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICBpZighbG9naW5UYXJnRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSlcclxuICAgICAgICBidXRMb2dpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZsaXAsIGZhbHNlKTtcclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdmFyIGJ1dE1haW4gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWZvcm1fX25hdi1saW5rI3RhcmdldE1haW4nKTtcclxuICAgICAgICBidXRNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcEhhc2gsIGZhbHNlKTsgXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICAgLCA1MDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGF1dG9yaXphdGUgPSAoKSA9PiB7XHJcbiAgICBjb250YWluZXJGYWNlLmlubmVySFRNTCA9IHRlbXBsQmFja0ZhY2UuaW5uZXJIVE1MO1xyXG4gICAgdGVtcGxCYWNrRmFjZS5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnRhaW5lckJhY2tmYWNlLmlubmVySFRNTCA9IHRlbXBsRmFjZS5pbm5lckhUTUw7XHJcbiAgICB0ZW1wbEZhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBsb2dpblRhcmdFbC5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIHZhciBidXRNYWluID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1mb3JtX19uYXYtbGluayN0YXJnZXRNYWluJyk7XHJcbiAgICBidXRNYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZmxpcEhhc2gsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0V2VsY29tZSA9ICgpID0+IHsgXHJcbiAgICBjb250YWluZXJGYWNlLmlubmVySFRNTCA9IHRlbXBsRmFjZS5pbm5lckhUTUw7XHJcbiAgICB0ZW1wbEZhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb250YWluZXJCYWNrZmFjZS5pbm5lckhUTUwgPSB0ZW1wbEJhY2tGYWNlLmlubmVySFRNTDtcclxuICAgIHRlbXBsQmFja0ZhY2UuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBpZighbG9naW5UYXJnRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSlcclxuICAgICAgYnV0TG9naW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmbGlwLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtpbml0V2VsY29tZSwgYXV0b3JpemF0ZX07XHJcbn0pKCk7XHJcblxyXG53aW5kb3cub25sb2FkID0gaW5pdCgpO1xyXG5jb25zb2xlLmxvZygnSXRgIHdvcmsgJSUlIScpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvaW5kZXguanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlcy9pbmRleC5tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==