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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(10);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _code_prettify = __webpack_require__(11);

var _code_prettify2 = _interopRequireDefault(_code_prettify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _svg4everybody2.default)();


window.onload = function () {
  (0, _code_prettify2.default)();
  scrollBlog.handler();
};

var scrollBlog = function () {

  var links = document.body.querySelectorAll('.c-blog__nav-link'),
      sections = [].concat(_toConsumableArray(document.body.querySelectorAll('.c-blog__article'))),
      arrOffset = sections.map(function (item) {
    return item.offsetTop;
  }),
      navBlock = document.body.querySelector('.c-blog__aside'),
      header = document.body.querySelector('.l-hero_blog').getBoundingClientRect(),
      unboundForEach = Array.prototype.forEach,
      forEach = Function.prototype.call.bind(unboundForEach),
      siblings = function siblings(n) {
    return [].concat(_toConsumableArray(n.parentElement.children)).filter(function (c) {
      return c != n;
    });
  };
  var flag = false;

  function getSection(scrollPos) {
    if (scrollPos <= arrOffset[0]) return 0;
    for (var i = 0; i < arrOffset.length - 1; i++) {
      if (scrollPos > arrOffset[i] && scrollPos < arrOffset[i + 1]) return i;
    }
    return arrOffset.length - 1;
  }

  function setActItem(link) {
    var actItem = link.parentElement;
    actItem.classList.add('is-active');
    [].forEach.call(siblings(actItem), function (el) {
      if (el.classList.contains('is-active')) el.classList.remove('is-active');
    });
  }

  function checkScroll() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPos <= arrOffset[0] + 200 && navBlock.classList.contains('pos-fixed')) navBlock.classList.remove('pos-fixed');
    if (scrollPos > arrOffset[0] + 300 && !navBlock.classList.contains('pos-fixed')) navBlock.classList.add('pos-fixed');

    var dataAttrValue = sections[getSection(scrollPos - 100)].getAttribute('data-section'),
        linkAct = document.body.querySelector('.c-blog__nav-link[href="#' + dataAttrValue + '"');
    window.location.hash = dataAttrValue;
    if (flag) return;
    setActItem(linkAct);
  }

  function showSection(e) {
    if (!window.location.hash) return;
    var hash = e ? this.getAttribute('href') : window.location.hash,
        linkAct = document.body.querySelector('.c-blog__nav-link[href="' + hash + '"'),
        sectionAct = document.body.querySelector('.c-blog__article[data-section="' + hash.split('#').join('') + '"'),
        index = sections.indexOf(sectionAct);
    setActItem(linkAct);
    // window.innerWidth*0.04 - padding top 4%
    var scrollPos = index === 0 ? header.height : arrOffset[index] + header.height + window.innerWidth * 0.04;
    if (e) animateMove(e, scrollPos);else document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
  }

  var animate = function animate(options) {
    flag = true;
    var start = performance.now(),
        startPos = window.pageYOffset || document.documentElement.scrollTop;
    requestAnimationFrame(function _animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
        flag = false;
      }
      // текущее состояние анимации
      var progress = options.timing(timeFraction);
      options.move(progress, startPos);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  };

  var animateMove = function animateMove(e, scrollPos) {
    e.preventDefault();
    animate({
      duration: 700,
      timing: function timing(timeFraction) {
        return timeFraction;
      },
      move: function move(progress, startPos) {
        document.documentElement.scrollTop = document.body.scrollTop = startPos + (scrollPos - startPos) * progress;
      }
    });
  };

  var handler = function handler() {

    showSection();
    window.addEventListener('scroll', checkScroll, false);
    forEach(links, function (el) {
      el.addEventListener('click', showSection, false);
    });
  };

  return { handler: handler };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var runCodePrettify = function runCodePrettify() {
  var pres = document.body.querySelectorAll('pre');
  [].forEach.call(pres, function (el) {
    el.classList.add('prettyprint');
    el.classList.add('linenums');
  });
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;

  script.src = 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
};

exports.default = runCodePrettify;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZiNDA3NDNiODkyNTMyYWIyZmQiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzPzYzY2EiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJvbmxvYWQiLCJzY3JvbGxCbG9nIiwiaGFuZGxlciIsImxpbmtzIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb25zIiwiYXJyT2Zmc2V0IiwibWFwIiwiaXRlbSIsIm9mZnNldFRvcCIsIm5hdkJsb2NrIiwicXVlcnlTZWxlY3RvciIsImhlYWRlciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInVuYm91bmRGb3JFYWNoIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJmb3JFYWNoIiwiRnVuY3Rpb24iLCJjYWxsIiwiYmluZCIsInNpYmxpbmdzIiwibiIsInBhcmVudEVsZW1lbnQiLCJjaGlsZHJlbiIsImZpbHRlciIsImMiLCJmbGFnIiwiZ2V0U2VjdGlvbiIsInNjcm9sbFBvcyIsImkiLCJsZW5ndGgiLCJzZXRBY3RJdGVtIiwibGluayIsImFjdEl0ZW0iLCJjbGFzc0xpc3QiLCJhZGQiLCJlbCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiY2hlY2tTY3JvbGwiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImRhdGFBdHRyVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJsaW5rQWN0IiwibG9jYXRpb24iLCJoYXNoIiwic2hvd1NlY3Rpb24iLCJlIiwic2VjdGlvbkFjdCIsInNwbGl0Iiwiam9pbiIsImluZGV4IiwiaW5kZXhPZiIsImhlaWdodCIsImlubmVyV2lkdGgiLCJhbmltYXRlTW92ZSIsImFuaW1hdGUiLCJvcHRpb25zIiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0YXJ0UG9zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX2FuaW1hdGUiLCJ0aW1lIiwidGltZUZyYWN0aW9uIiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInRpbWluZyIsIm1vdmUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJydW5Db2RlUHJldHRpZnkiLCJwcmVzIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJhc3luYyIsInNyYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFiO0FBQ0FELFNBQU9FLElBQVAsR0FBYyxpQkFBZDtBQUNBRixTQUFPRyxLQUFQLEdBQWUsSUFBZjs7QUFFQUgsU0FBT0ksR0FBUCxHQUFhLDJFQUFiO0FBQ0EsR0FBQy9FLFNBQVNnRixvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxLQUE0Q2hGLFNBQVNnRixvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUE3QyxFQUF1RkMsV0FBdkYsQ0FBbUdOLE1BQW5HO0FBQ0QsQ0FaRDs7a0JBY2VGLGUiLCJmaWxlIjoiYXBwL2Jsb2cuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGVmYjQwNzQzYjg5MjUzMmFiMmZkIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYmxvZy5tYWluLnNjc3MnO1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5Jztcclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5pbXBvcnQgcnVuQ29kZVByZXR0aWZ5IGZyb20gJy4vY29tcG9uZW50cy9jb2RlX3ByZXR0aWZ5LmpzJztcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBydW5Db2RlUHJldHRpZnkoKTtcclxuICBzY3JvbGxCbG9nLmhhbmRsZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHNjcm9sbEJsb2cgPSAoKCkgPT4ge1xyXG5cclxuICBsZXQgbGlua3MgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX25hdi1saW5rJyksXHJcbiAgICBzZWN0aW9ucyA9IFsuLi5kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX2FydGljbGUnKV0sXHJcbiAgICBhcnJPZmZzZXQgPSBzZWN0aW9ucy5tYXAoKGl0ZW0pID0+IGl0ZW0ub2Zmc2V0VG9wKSxcclxuICAgIG5hdkJsb2NrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1ibG9nX19hc2lkZScpLFxyXG4gICAgaGVhZGVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1oZXJvX2Jsb2cnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgIHVuYm91bmRGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXHJcbiAgICBmb3JFYWNoID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwuYmluZCh1bmJvdW5kRm9yRWFjaCksXHJcbiAgICBzaWJsaW5ncyA9IG4gPT4gWy4uLm4ucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uZmlsdGVyKGM9PmMhPW4pO1xyXG4gIHZhciAgZmxhZyA9IGZhbHNlO1xyXG5cclxuICBcclxuICBmdW5jdGlvbiBnZXRTZWN0aW9uKHNjcm9sbFBvcykgIHtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKSByZXR1cm4gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyT2Zmc2V0Lmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgaWYoc2Nyb2xsUG9zPmFyck9mZnNldFtpXSYmc2Nyb2xsUG9zPGFyck9mZnNldFtpKzFdKVxyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyck9mZnNldC5sZW5ndGgtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEFjdEl0ZW0obGluaykge1xyXG4gICAgbGV0IGFjdEl0ZW0gPSBsaW5rLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKHNpYmxpbmdzKGFjdEl0ZW0pLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKVxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcclxuICAgIGxldCBzY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKzIwMCYmbmF2QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3MtZml4ZWQnKSlcclxuICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgncG9zLWZpeGVkJyk7XHJcbiAgICBpZihzY3JvbGxQb3M+YXJyT2Zmc2V0WzBdKzMwMCYmIW5hdkJsb2NrLmNsYXNzTGlzdC5jb250YWlucygncG9zLWZpeGVkJykpIFxyXG4gICAgICBuYXZCbG9jay5jbGFzc0xpc3QuYWRkKCdwb3MtZml4ZWQnKTtcclxuXHJcbiAgICBsZXQgZGF0YUF0dHJWYWx1ZSA9IHNlY3Rpb25zW2dldFNlY3Rpb24oc2Nyb2xsUG9zLTEwMCldLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJyksXHJcbiAgICAgIGxpbmtBY3QgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIjJHtkYXRhQXR0clZhbHVlfVwiYCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGRhdGFBdHRyVmFsdWU7XHJcbiAgICBpZihmbGFnKSByZXR1cm47IFxyXG4gICAgc2V0QWN0SXRlbShsaW5rQWN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgcmV0dXJuO1xyXG4gICAgbGV0IGhhc2ggPSBlP3RoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk6d2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIGxpbmtBY3QgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIke2hhc2h9XCJgKSxcclxuICAgICAgc2VjdGlvbkFjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLmMtYmxvZ19fYXJ0aWNsZVtkYXRhLXNlY3Rpb249XCIke2hhc2guc3BsaXQoJyMnKS5qb2luKCcnKX1cImApLFxyXG4gICAgICBpbmRleCA9IHNlY3Rpb25zLmluZGV4T2Yoc2VjdGlvbkFjdCk7XHJcbiAgICBzZXRBY3RJdGVtKGxpbmtBY3QpO1xyXG4gICAgLy8gd2luZG93LmlubmVyV2lkdGgqMC4wNCAtIHBhZGRpbmcgdG9wIDQlXHJcbiAgICB2YXIgc2Nyb2xsUG9zID0gKGluZGV4ID09PSAwKT9oZWFkZXIuaGVpZ2h0OihhcnJPZmZzZXRbaW5kZXhdICsgaGVhZGVyLmhlaWdodCArIHdpbmRvdy5pbm5lcldpZHRoKjAuMDQpO1xyXG4gICAgaWYoZSkgYW5pbWF0ZU1vdmUoZSwgc2Nyb2xsUG9zKTtcclxuICAgIGVsc2UgXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFBvcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgZmxhZyA9IHRydWU7XHJcbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgc3RhcnRQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBfYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICAvLyB0aW1lRnJhY3Rpb24g0L7RgiAwINC00L4gMVxyXG4gICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkge1xyXG4gICAgICAgIHRpbWVGcmFjdGlvbiA9IDE7XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO31cclxuICAgICAgLy8g0YLQtdC60YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INCw0L3QuNC80LDRhtC40LhcclxuICAgICAgbGV0IHByb2dyZXNzID0gb3B0aW9ucy50aW1pbmcodGltZUZyYWN0aW9uKTtcclxuICAgICAgb3B0aW9ucy5tb3ZlKHByb2dyZXNzLCBzdGFydFBvcyk7XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZU1vdmUgPSAoZSwgc2Nyb2xsUG9zKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IDcwMCxcclxuICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xyXG4gICAgICB9LFxyXG4gICAgICBtb3ZlOiBmdW5jdGlvbihwcm9ncmVzcywgc3RhcnRQb3MpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzdGFydFBvcyArIChzY3JvbGxQb3MtIHN0YXJ0UG9zKSoocHJvZ3Jlc3MpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuXHJcbiAgICBzaG93U2VjdGlvbigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICBmb3JFYWNoKGxpbmtzLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYmxvZy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBydW5Db2RlUHJldHRpZnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJlcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcbiAgW10uZm9yRWFjaC5jYWxsKHByZXMsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmV0dHlwcmludCcpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbGluZW51bXMnKTtcclxuICB9KTtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vZ29vZ2xlL2NvZGUtcHJldHRpZnkvbWFzdGVyL2xvYWRlci9ydW5fcHJldHRpZnkuanMnO1xyXG4gIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5Db2RlUHJldHRpZnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=