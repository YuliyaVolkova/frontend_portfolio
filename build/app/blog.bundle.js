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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hamburgerNav = function () {

  var component = document.body.querySelector('.c-hamburger-nav'),
      button = component.querySelector('#openOverlay'),
      overlay = void 0,
      template = component.querySelector('#hamburgerTemplate');

  function createOverlay() {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = template.innerHTML;
  }

  function isEsc(e) {
    switch (e.which) {
      case 27:
        closeOverlay(e);
        break;
      default:
        return;
    }
    return false;
  }

  function insertOverlay() {
    button.removeEventListener('animationend', insertOverlay, false);
    document.body.appendChild(overlay);
    button.style.transform = 'scale(0.001)';
    button.classList.remove('animate');
    var close = document.body.querySelector('#closeOverlay');
    close.addEventListener('click', closeOverlay, false);
    document.body.addEventListener('keydown', isEsc, false);
  }

  function openOverlay(e) {
    e.preventDefault();
    button.classList.add('animate');
    button.addEventListener('animationend', insertOverlay, false);
  }

  function removeClassAnimate() {
    this.removeEventListener('animationend', removeClassAnimate, false);
    button.style.transform = 'scale(1.1)';
    overlay.remove();
    this.classList.remove('animate');
    button.addEventListener('click', openOverlay, false);
  }

  function closeOverlay(e) {

    e.preventDefault();
    var close = overlay.querySelector('#closeOverlay');
    close.removeEventListener('click', closeOverlay, false);
    document.body.removeEventListener('keydown', isEsc, false);
    close.classList.add('animate');
    close.addEventListener('animationend', removeClassAnimate, false);
  }

  function handler() {
    createOverlay();
    button.addEventListener('click', openOverlay, false);
  }

  return { handler: handler };
}();

exports.default = hamburgerNav;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(11);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(12);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _code_prettify = __webpack_require__(13);

var _code_prettify2 = _interopRequireDefault(_code_prettify);

var _cHamburger = __webpack_require__(2);

var _cHamburger2 = _interopRequireDefault(_cHamburger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _svg4everybody2.default)();


window.onload = function () {
  (0, _code_prettify2.default)();
  scrollBlog.handler();
  _cHamburger2.default.handler();
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
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 13 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDZiNGVjOTkzNjgzMTI1NTg0MDYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzPzYzY2EiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJuYW1lcyI6WyJoYW1idXJnZXJOYXYiLCJjb21wb25lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3ZlcmxheSIsInRlbXBsYXRlIiwiY3JlYXRlT3ZlcmxheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpc0VzYyIsImUiLCJ3aGljaCIsImNsb3NlT3ZlcmxheSIsImluc2VydE92ZXJsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsImNsb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5PdmVybGF5IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzc0FuaW1hdGUiLCJoYW5kbGVyIiwid2luZG93Iiwib25sb2FkIiwic2Nyb2xsQmxvZyIsImxpbmtzIiwicXVlcnlTZWxlY3RvckFsbCIsInNlY3Rpb25zIiwiYXJyT2Zmc2V0IiwibWFwIiwiaXRlbSIsIm9mZnNldFRvcCIsIm5hdkJsb2NrIiwiaGVhZGVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidW5ib3VuZEZvckVhY2giLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJGdW5jdGlvbiIsImNhbGwiLCJiaW5kIiwic2libGluZ3MiLCJuIiwicGFyZW50RWxlbWVudCIsImNoaWxkcmVuIiwiZmlsdGVyIiwiYyIsImZsYWciLCJnZXRTZWN0aW9uIiwic2Nyb2xsUG9zIiwiaSIsImxlbmd0aCIsInNldEFjdEl0ZW0iLCJsaW5rIiwiYWN0SXRlbSIsImVsIiwiY29udGFpbnMiLCJjaGVja1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiZGF0YUF0dHJWYWx1ZSIsImdldEF0dHJpYnV0ZSIsImxpbmtBY3QiLCJsb2NhdGlvbiIsImhhc2giLCJzaG93U2VjdGlvbiIsInNlY3Rpb25BY3QiLCJzcGxpdCIsImpvaW4iLCJpbmRleCIsImluZGV4T2YiLCJoZWlnaHQiLCJpbm5lcldpZHRoIiwiYW5pbWF0ZU1vdmUiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGFydFBvcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9hbmltYXRlIiwidGltZSIsInRpbWVGcmFjdGlvbiIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJ0aW1pbmciLCJtb3ZlIiwicnVuQ29kZVByZXR0aWZ5IiwicHJlcyIsInNjcmlwdCIsInR5cGUiLCJhc3luYyIsInNyYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FB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QUFNQyxPQUFPaEcsU0FBU0MsSUFBVCxDQUFjOEIsZ0JBQWQsQ0FBK0IsS0FBL0IsQ0FBYjtBQUNBLEtBQUdZLE9BQUgsQ0FBV0UsSUFBWCxDQUFnQm1ELElBQWhCLEVBQXNCLFVBQVNuQyxFQUFULEVBQWE7QUFDakNBLE9BQUdyRCxTQUFILENBQWFDLEdBQWIsQ0FBaUIsYUFBakI7QUFDQW9ELE9BQUdyRCxTQUFILENBQWFDLEdBQWIsQ0FBaUIsVUFBakI7QUFDRCxHQUhEO0FBSUEsTUFBSXdGLFNBQVNqRyxTQUFTTyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQTBGLFNBQU9DLElBQVAsR0FBYyxpQkFBZDtBQUNBRCxTQUFPRSxLQUFQLEdBQWUsSUFBZjs7QUFFQUYsU0FBT0csR0FBUCxHQUFhLDJFQUFiO0FBQ0EsR0FBQ3BHLFNBQVNxRyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxLQUE0Q3JHLFNBQVNxRyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUE3QyxFQUF1RnBGLFdBQXZGLENBQW1HZ0YsTUFBbkc7QUFDRCxDQVpEOztrQkFjZUYsZSIsImZpbGUiOiJhcHAvYmxvZy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQ2YjRlYzk5MzY4MzEyNTU4NDA2IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBoYW1idXJnZXJOYXYgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPWRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtaGFtYnVyZ2VyLW5hdicpLFxyXG4gICAgYnV0dG9uID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuT3ZlcmxheScpLFxyXG4gICAgb3ZlcmxheSxcclxuICAgIHRlbXBsYXRlID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXJUZW1wbGF0ZScpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xyXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgICBvdmVybGF5LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICB9XHJcbiAgICBcclxuICBmdW5jdGlvbiBpc0VzYyhlKSB7XHJcbiAgICBzd2l0Y2goZS53aGljaCkge1xyXG4gICAgY2FzZSAyNzogY2xvc2VPdmVybGF5KGUpO1xyXG4gICAgICBicmVhazsgICAgICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSAgIFxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRPdmVybGF5KCkge1xyXG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGluc2VydE92ZXJsYXksIGZhbHNlKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuMDAxKSc7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5PdmVybGF5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcdFxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDbGFzc0FuaW1hdGUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cdFxyXG4gIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheShlKSB7XHJcbiAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlcigpIHtcclxuICAgIGNyZWF0ZU92ZXJsYXkoKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFtYnVyZ2VyTmF2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBydW5Db2RlUHJldHRpZnkgZnJvbSAnLi9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMnO1xyXG5pbXBvcnQgaGFtYnVyZ2VyTmF2IGZyb20gJy4vY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyc7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgcnVuQ29kZVByZXR0aWZ5KCk7XHJcbiAgc2Nyb2xsQmxvZy5oYW5kbGVyKCk7XHJcbiAgaGFtYnVyZ2VyTmF2LmhhbmRsZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHNjcm9sbEJsb2cgPSAoKCkgPT4ge1xyXG5cclxuICBsZXQgbGlua3MgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX25hdi1saW5rJyksXHJcbiAgICBzZWN0aW9ucyA9IFsuLi5kb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX2FydGljbGUnKV0sXHJcbiAgICBhcnJPZmZzZXQgPSBzZWN0aW9ucy5tYXAoKGl0ZW0pID0+IGl0ZW0ub2Zmc2V0VG9wKSxcclxuICAgIG5hdkJsb2NrID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1ibG9nX19hc2lkZScpLFxyXG4gICAgaGVhZGVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1oZXJvX2Jsb2cnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgIHVuYm91bmRGb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2gsXHJcbiAgICBmb3JFYWNoID0gRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwuYmluZCh1bmJvdW5kRm9yRWFjaCksXHJcbiAgICBzaWJsaW5ncyA9IG4gPT4gWy4uLm4ucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uZmlsdGVyKGM9PmMhPW4pO1xyXG4gIHZhciAgZmxhZyA9IGZhbHNlO1xyXG5cclxuICBcclxuICBmdW5jdGlvbiBnZXRTZWN0aW9uKHNjcm9sbFBvcykgIHtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKSByZXR1cm4gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyT2Zmc2V0Lmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgaWYoc2Nyb2xsUG9zPmFyck9mZnNldFtpXSYmc2Nyb2xsUG9zPGFyck9mZnNldFtpKzFdKVxyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyck9mZnNldC5sZW5ndGgtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldEFjdEl0ZW0obGluaykge1xyXG4gICAgbGV0IGFjdEl0ZW0gPSBsaW5rLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKHNpYmxpbmdzKGFjdEl0ZW0pLCBmdW5jdGlvbihlbCkge1xyXG4gICAgICBpZihlbC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKVxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcclxuICAgIGxldCBzY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKzIwMCYmbmF2QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3MtZml4ZWQnKSlcclxuICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgncG9zLWZpeGVkJyk7XHJcbiAgICBpZihzY3JvbGxQb3M+YXJyT2Zmc2V0WzBdKzMwMCYmIW5hdkJsb2NrLmNsYXNzTGlzdC5jb250YWlucygncG9zLWZpeGVkJykpIFxyXG4gICAgICBuYXZCbG9jay5jbGFzc0xpc3QuYWRkKCdwb3MtZml4ZWQnKTtcclxuXHJcbiAgICBsZXQgZGF0YUF0dHJWYWx1ZSA9IHNlY3Rpb25zW2dldFNlY3Rpb24oc2Nyb2xsUG9zLTEwMCldLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJyksXHJcbiAgICAgIGxpbmtBY3QgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIjJHtkYXRhQXR0clZhbHVlfVwiYCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGRhdGFBdHRyVmFsdWU7XHJcbiAgICBpZihmbGFnKSByZXR1cm47IFxyXG4gICAgc2V0QWN0SXRlbShsaW5rQWN0KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgcmV0dXJuO1xyXG4gICAgbGV0IGhhc2ggPSBlP3RoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk6d2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIGxpbmtBY3QgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIke2hhc2h9XCJgKSxcclxuICAgICAgc2VjdGlvbkFjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLmMtYmxvZ19fYXJ0aWNsZVtkYXRhLXNlY3Rpb249XCIke2hhc2guc3BsaXQoJyMnKS5qb2luKCcnKX1cImApLFxyXG4gICAgICBpbmRleCA9IHNlY3Rpb25zLmluZGV4T2Yoc2VjdGlvbkFjdCk7XHJcbiAgICBzZXRBY3RJdGVtKGxpbmtBY3QpO1xyXG4gICAgLy8gd2luZG93LmlubmVyV2lkdGgqMC4wNCAtIHBhZGRpbmcgdG9wIDQlXHJcbiAgICB2YXIgc2Nyb2xsUG9zID0gKGluZGV4ID09PSAwKT9oZWFkZXIuaGVpZ2h0OihhcnJPZmZzZXRbaW5kZXhdICsgaGVhZGVyLmhlaWdodCArIHdpbmRvdy5pbm5lcldpZHRoKjAuMDQpO1xyXG4gICAgaWYoZSkgYW5pbWF0ZU1vdmUoZSwgc2Nyb2xsUG9zKTtcclxuICAgIGVsc2UgXHJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHNjcm9sbFBvcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgZmxhZyA9IHRydWU7XHJcbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgc3RhcnRQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBfYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICAvLyB0aW1lRnJhY3Rpb24g0L7RgiAwINC00L4gMVxyXG4gICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkge1xyXG4gICAgICAgIHRpbWVGcmFjdGlvbiA9IDE7XHJcbiAgICAgICAgZmxhZyA9IGZhbHNlO31cclxuICAgICAgLy8g0YLQtdC60YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INCw0L3QuNC80LDRhtC40LhcclxuICAgICAgbGV0IHByb2dyZXNzID0gb3B0aW9ucy50aW1pbmcodGltZUZyYWN0aW9uKTtcclxuICAgICAgb3B0aW9ucy5tb3ZlKHByb2dyZXNzLCBzdGFydFBvcyk7XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZU1vdmUgPSAoZSwgc2Nyb2xsUG9zKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IDcwMCxcclxuICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xyXG4gICAgICB9LFxyXG4gICAgICBtb3ZlOiBmdW5jdGlvbihwcm9ncmVzcywgc3RhcnRQb3MpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzdGFydFBvcyArIChzY3JvbGxQb3MtIHN0YXJ0UG9zKSoocHJvZ3Jlc3MpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuXHJcbiAgICBzaG93U2VjdGlvbigpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICBmb3JFYWNoKGxpbmtzLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYmxvZy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJjb25zdCBydW5Db2RlUHJldHRpZnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJlcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcbiAgW10uZm9yRWFjaC5jYWxsKHByZXMsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmV0dHlwcmludCcpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbGluZW51bXMnKTtcclxuICB9KTtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vZ29vZ2xlL2NvZGUtcHJldHRpZnkvbWFzdGVyL2xvYWRlci9ydW5fcHJldHRpZnkuanMnO1xyXG4gIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5Db2RlUHJldHRpZnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=