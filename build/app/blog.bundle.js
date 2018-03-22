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

var _code_prettify = __webpack_require__(9);

var _code_prettify2 = _interopRequireDefault(_code_prettify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

console.log('blog.js');

(0, _svg4everybody2.default)();


window.onload = function () {
  (0, _code_prettify2.default)();
  scrollBlog.handler();
};

var scrollBlog = function () {

  var links = document.body.querySelectorAll('.c-blog__nav-link'),
      sections = document.body.querySelectorAll('.c-blog__article'),
      nodesSections = Array.prototype.slice.call(sections),
      arrOffset = nodesSections.map(function (item) {
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

    var index = getSection(scrollPos - 100),
        dataAttrValue = sections[index].getAttribute('data-section'),
        linkAct = document.body.querySelector('.c-blog__nav-link[href="#' + dataAttrValue + '"');
    window.location.hash = dataAttrValue;
    if (flag) return;
    setActItem(linkAct);
  }

  function showSection(e) {
    var hash = e ? this.getAttribute('href') : window.location.hash,
        dataSect = hash.split('#').join(''),
        linkAct = document.body.querySelector('.c-blog__nav-link[href="' + hash + '"'),
        sectionAct = document.body.querySelector('.c-blog__article[data-section="' + dataSect + '"'),
        index = nodesSections.indexOf(sectionAct);
    setActItem(linkAct);
    var scrollPos = index === 0 ? header.height : arrOffset[index] + header.height + window.innerWidth * 0.04;
    // if(e) animateMove(e, scrollPos);
    // else 
    document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
  }

  var animate = function animate(options) {
    flag = true;
    var start = performance.now();
    requestAnimationFrame(function _animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
        flag = false;
      }
      // текущее состояние анимации
      var progress = options.timing(timeFraction);
      options.move(progress);
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
      move: function move(progress) {
        document.documentElement.scrollTop = document.body.scrollTop = scrollPos * progress;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjQ3MWJkYTY3ZmU0OGRjOGViNDYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzPzYzY2EiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwid2luZG93Iiwib25sb2FkIiwic2Nyb2xsQmxvZyIsImhhbmRsZXIiLCJsaW5rcyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzZWN0aW9ucyIsIm5vZGVzU2VjdGlvbnMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyck9mZnNldCIsIm1hcCIsIml0ZW0iLCJvZmZzZXRUb3AiLCJuYXZCbG9jayIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ1bmJvdW5kRm9yRWFjaCIsImZvckVhY2giLCJGdW5jdGlvbiIsImJpbmQiLCJzaWJsaW5ncyIsIm4iLCJwYXJlbnRFbGVtZW50IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJjIiwiZmxhZyIsImdldFNlY3Rpb24iLCJzY3JvbGxQb3MiLCJpIiwibGVuZ3RoIiwic2V0QWN0SXRlbSIsImxpbmsiLCJhY3RJdGVtIiwiY2xhc3NMaXN0IiwiYWRkIiwiZWwiLCJjb250YWlucyIsInJlbW92ZSIsImNoZWNrU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJpbmRleCIsImRhdGFBdHRyVmFsdWUiLCJnZXRBdHRyaWJ1dGUiLCJsaW5rQWN0IiwibG9jYXRpb24iLCJoYXNoIiwic2hvd1NlY3Rpb24iLCJlIiwiZGF0YVNlY3QiLCJzcGxpdCIsImpvaW4iLCJzZWN0aW9uQWN0IiwiaW5kZXhPZiIsImhlaWdodCIsImlubmVyV2lkdGgiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYW5pbWF0ZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJkdXJhdGlvbiIsInByb2dyZXNzIiwidGltaW5nIiwibW92ZSIsImFuaW1hdGVNb3ZlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwicnVuQ29kZVByZXR0aWZ5IiwicHJlcyIsInNjcmlwdCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUM3REEseUM7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHlCQUF5QjtB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LGlCQUFkO0FBQ0FGLFNBQU9HLEtBQVAsR0FBZSxJQUFmOztBQUVBSCxTQUFPSSxHQUFQLEdBQWEsMkVBQWI7QUFDQSxHQUFDakYsU0FBU2tGLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLEtBQTRDbEYsU0FBU2tGLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQTdDLEVBQXVGQyxXQUF2RixDQUFtR04sTUFBbkc7QUFDRCxDQVpEOztrQkFjZUYsZSIsImZpbGUiOiJhcHAvYmxvZy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZjQ3MWJkYTY3ZmU0OGRjOGViNDYiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImNvbnNvbGUubG9nKCdibG9nLmpzJyk7XHJcbmltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBydW5Db2RlUHJldHRpZnkgZnJvbSAnLi9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge3J1bkNvZGVQcmV0dGlmeSgpO1xyXG4gIHNjcm9sbEJsb2cuaGFuZGxlcigpO307XHJcblxyXG5jb25zdCBzY3JvbGxCbG9nID0gKCgpID0+IHtcclxuXHJcbiAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX25hdi1saW5rJyksXHJcbiAgICBzZWN0aW9ucyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnLmMtYmxvZ19fYXJ0aWNsZScpLFxyXG5cclxuICAgIG5vZGVzU2VjdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWN0aW9ucyksXHJcbiAgICBhcnJPZmZzZXQgPSBub2Rlc1NlY3Rpb25zLm1hcCgoaXRlbSkgPT4gaXRlbS5vZmZzZXRUb3ApLFxyXG5cclxuICAgIG5hdkJsb2NrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1ibG9nX19hc2lkZScpLFxyXG5cclxuICAgIGhlYWRlciA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmwtaGVyb19ibG9nJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcblxyXG4gICAgdW5ib3VuZEZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCxcclxuICAgIGZvckVhY2ggPSBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbC5iaW5kKHVuYm91bmRGb3JFYWNoKSxcclxuICAgIHNpYmxpbmdzID0gbiA9PiBbLi4ubi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXS5maWx0ZXIoYz0+YyE9bik7XHJcbiAgdmFyICBmbGFnID0gZmFsc2U7XHJcblxyXG4gIFxyXG4gIGZ1bmN0aW9uIGdldFNlY3Rpb24oc2Nyb2xsUG9zKSAge1xyXG4gICAgaWYoc2Nyb2xsUG9zPD1hcnJPZmZzZXRbMF0pIHJldHVybiAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJPZmZzZXQubGVuZ3RoLTE7IGkrKykge1xyXG4gICAgICBpZihzY3JvbGxQb3M+YXJyT2Zmc2V0W2ldJiZzY3JvbGxQb3M8YXJyT2Zmc2V0W2krMV0pXHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyT2Zmc2V0Lmxlbmd0aC0xO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0QWN0SXRlbShsaW5rKSB7XHJcbiAgICBjb25zdCBhY3RJdGVtID0gbGluay5wYXJlbnRFbGVtZW50O1xyXG4gICAgYWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgIFtdLmZvckVhY2guY2FsbChzaWJsaW5ncyhhY3RJdGVtKSwgZnVuY3Rpb24oZWwpIHtcclxuICAgICAgaWYoZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSlcclxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2hlY2tTY3JvbGwoKSB7XHJcbiAgICBjb25zdCBzY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKzIwMCYmbmF2QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3MtZml4ZWQnKSlcclxuICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgncG9zLWZpeGVkJyk7XHJcbiAgICBpZihzY3JvbGxQb3M+YXJyT2Zmc2V0WzBdKzMwMCYmIW5hdkJsb2NrLmNsYXNzTGlzdC5jb250YWlucygncG9zLWZpeGVkJykpXHJcbiAgICAgIG5hdkJsb2NrLmNsYXNzTGlzdC5hZGQoJ3Bvcy1maXhlZCcpO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gZ2V0U2VjdGlvbihzY3JvbGxQb3MtMTAwKSxcclxuICAgICAgZGF0YUF0dHJWYWx1ZSA9IHNlY3Rpb25zW2luZGV4XS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2VjdGlvbicpLFxyXG4gICAgICBsaW5rQWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAuYy1ibG9nX19uYXYtbGlua1tocmVmPVwiIyR7ZGF0YUF0dHJWYWx1ZX1cImApO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkYXRhQXR0clZhbHVlO1xyXG4gICAgaWYoZmxhZykgcmV0dXJuOyBcclxuICAgIHNldEFjdEl0ZW0obGlua0FjdCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93U2VjdGlvbihlKSB7XHJcbiAgICBjb25zdCBoYXNoID0gZT90aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpOndpbmRvdy5sb2NhdGlvbi5oYXNoLFxyXG4gICAgICBkYXRhU2VjdCA9IGhhc2guc3BsaXQoJyMnKS5qb2luKCcnKSxcclxuICAgICAgbGlua0FjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLmMtYmxvZ19fbmF2LWxpbmtbaHJlZj1cIiR7aGFzaH1cImApLFxyXG4gICAgICBzZWN0aW9uQWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAuYy1ibG9nX19hcnRpY2xlW2RhdGEtc2VjdGlvbj1cIiR7ZGF0YVNlY3R9XCJgKSxcclxuICAgICAgaW5kZXggPSBub2Rlc1NlY3Rpb25zLmluZGV4T2Yoc2VjdGlvbkFjdCk7XHJcbiAgICBzZXRBY3RJdGVtKGxpbmtBY3QpO1xyXG4gICAgdmFyIHNjcm9sbFBvcyA9IChpbmRleCA9PT0gMCk/aGVhZGVyLmhlaWdodDooYXJyT2Zmc2V0W2luZGV4XSArIGhlYWRlci5oZWlnaHQgKyB3aW5kb3cuaW5uZXJXaWR0aCowLjA0KTtcclxuICAgIC8vIGlmKGUpIGFuaW1hdGVNb3ZlKGUsIHNjcm9sbFBvcyk7XHJcbiAgICAvLyBlbHNlIFxyXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBmbGFnID0gdHJ1ZTtcclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIF9hbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiDQvtGCIDAg0LTQviAxXHJcbiAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB7dGltZUZyYWN0aW9uID0gMTtcclxuICAgICAgICBmbGFnID0gZmFsc2U7fVxyXG4gICAgICAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgICBvcHRpb25zLm1vdmUocHJvZ3Jlc3MpO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVNb3ZlID0gKGUsIHNjcm9sbFBvcykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYW5pbWF0ZSh7XHJcbiAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcclxuICAgICAgfSxcclxuICAgICAgbW92ZTogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzY3JvbGxQb3MqKHByb2dyZXNzKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgc2hvd1NlY3Rpb24oKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCwgZmFsc2UpO1xyXG4gICAgZm9yRWFjaChsaW5rcywgZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1NlY3Rpb24sIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7aGFuZGxlcn07XHJcbn0pKCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2Jsb2cuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJjb25zdCBydW5Db2RlUHJldHRpZnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJlcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcbiAgW10uZm9yRWFjaC5jYWxsKHByZXMsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmV0dHlwcmludCcpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbGluZW51bXMnKTtcclxuICB9KTtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vZ29vZ2xlL2NvZGUtcHJldHRpZnkvbWFzdGVyL2xvYWRlci9ydW5fcHJldHRpZnkuanMnO1xyXG4gIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5Db2RlUHJldHRpZnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=