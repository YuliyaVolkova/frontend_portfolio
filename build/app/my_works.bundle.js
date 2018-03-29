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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1:
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

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hamburgerNav = function () {

  var body = document.body,
      component = body.querySelector('.c-hamburger-nav'),
      button = component.querySelector('#openOverlay'),
      overlay = void 0,
      template = component.querySelector('#hamburgerTemplate');

  var createOverlay = function createOverlay() {
    overlay = document.createElement('div');
    overlay.classList.add('overlay');
    overlay.innerHTML = template.innerHTML;
  };

  var isEsc = function isEsc(e) {
    switch (e.which) {
      case 27:
        closeOverlay(e);
        break;
      default:
        return;
    }
    return false;
  };

  function insertOverlay() {
    button.removeEventListener('animationend', insertOverlay, false);
    body.appendChild(overlay);
    button.style.transform = 'scale(0.001)';
    button.classList.remove('animate');
    var close = overlay.querySelector('#closeOverlay'),
        homeLink = overlay.querySelector('.c-hamburger-nav__link[href="#"]').parentElement;
    homeLink.addEventListener('click', closeOverlay, false);
    close.addEventListener('click', closeOverlay, false);
    body.addEventListener('keydown', isEsc, false);
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
    body.removeEventListener('keydown', isEsc, false);
    close.classList.add('animate');
    close.addEventListener('animationend', removeClassAnimate, false);
  }

  var handler = function handler() {
    createOverlay();
    button.addEventListener('click', openOverlay, false);
  };

  return { handler: handler };
}();

exports.default = hamburgerNav;

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(32);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _cHamburger = __webpack_require__(2);

var _cHamburger2 = _interopRequireDefault(_cHamburger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _svg4everybody2.default)();


///*------------------------------------
///* init app my_works-page
///*------------------------------------
var init = function init() {
  scrollWorks.handler();
  _cHamburger2.default.handler();
  blurResize.handler();
};

///*------------------------------------
///* move to sections
///*------------------------------------
var scrollWorks = function () {

  var body = document.body,
      sections = [].concat(_toConsumableArray(body.querySelectorAll('.l-section'))),
      toNextBut = body.querySelector('#next'),
      toFirstBut = body.querySelector('#first'),
      arrOffset = sections.map(function (item) {
    return item.offsetTop;
  }),
      container = body.querySelector('.l-scroll-parallax-container');

  function showSection(e) {
    var hash = this.getAttribute('href') || window.location.hash,
        sectionAct = body.querySelector('.l-section[data-section="' + hash.replace(/#/, '') + '"'),
        scrollPos = arrOffset[sections.indexOf(sectionAct)];
    animateMove(e, scrollPos);
  }

  var animate = function animate(options) {
    var start = performance.now(),
        startPos = container.scrollTop;
    requestAnimationFrame(function _animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
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
      duration: 900,
      timing: function timing(timeFraction) {
        return timeFraction;
      },
      move: function move(progress, startPos) {
        container.scrollTop = startPos + (scrollPos - startPos) * progress;
      }
    });
  };

  var handler = function handler() {
    toNextBut.addEventListener('click', showSection, false);
    toFirstBut.addEventListener('click', showSection, false);
  };

  return { handler: handler };
}();
///*------------------------------------
///* blur bg to feeds-form
///*-------------------------------------
var blurResize = function () {
  var body = document.body,
      wrapper = body.querySelector('.c-feeds-form-bg'),
      blurForm = body.querySelector('.c-feeds-blured');

  var setBg = function setBg() {
    var offsetTop = -wrapper.offsetTop - 210; //210 ?
    blurForm.style.backgroundPosition = 'center ' + offsetTop + 'px';
  };

  var handler = function handler() {
    setBg();
    window.addEventListener('resize', setBg, false);
  };

  return { handler: handler };
}();
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzYzMjc3ODQ4NTgwZTI0ZDNkZTAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbXlfd29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9teV93b3Jrcy5tYWluLnNjc3M/YjU2MyJdLCJuYW1lcyI6WyJoYW1idXJnZXJOYXYiLCJib2R5IiwiZG9jdW1lbnQiLCJjb21wb25lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3ZlcmxheSIsInRlbXBsYXRlIiwiY3JlYXRlT3ZlcmxheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpc0VzYyIsImUiLCJ3aGljaCIsImNsb3NlT3ZlcmxheSIsImluc2VydE92ZXJsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsImNsb3NlIiwiaG9tZUxpbmsiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5PdmVybGF5IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzc0FuaW1hdGUiLCJoYW5kbGVyIiwiaW5pdCIsInNjcm9sbFdvcmtzIiwiYmx1clJlc2l6ZSIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsInRvTmV4dEJ1dCIsInRvRmlyc3RCdXQiLCJhcnJPZmZzZXQiLCJtYXAiLCJpdGVtIiwib2Zmc2V0VG9wIiwiY29udGFpbmVyIiwic2hvd1NlY3Rpb24iLCJoYXNoIiwiZ2V0QXR0cmlidXRlIiwid2luZG93IiwibG9jYXRpb24iLCJzZWN0aW9uQWN0IiwicmVwbGFjZSIsInNjcm9sbFBvcyIsImluZGV4T2YiLCJhbmltYXRlTW92ZSIsImFuaW1hdGUiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93Iiwic3RhcnRQb3MiLCJzY3JvbGxUb3AiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYW5pbWF0ZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJvcHRpb25zIiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInRpbWluZyIsIm1vdmUiLCJ3cmFwcGVyIiwiYmx1ckZvcm0iLCJzZXRCZyIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7QUFDQTtBQUNB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QyxJQUFoQjtBQUNBMEMsUUFBUUMsR0FBUixDQUFZLGVBQVosRTs7Ozs7OztBQzlGQSx5QyIsImZpbGUiOiJhcHAvbXlfd29ya3MuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NjMyNzc4NDg1ODBlMjRkM2RlMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS9kaXN0L3N2ZzRldmVyeWJvZHkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyTmF2ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBjb21wb25lbnQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWhhbWJ1cmdlci1uYXYnKSxcclxuICAgIGJ1dHRvbiA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbk92ZXJsYXknKSxcclxuICAgIG92ZXJsYXksXHJcbiAgICB0ZW1wbGF0ZSA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyVGVtcGxhdGUnKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcclxuICAgIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgfTtcclxuICAgIFxyXG4gIGNvbnN0IGlzRXNjID0gZSA9PiB7XHJcbiAgICBzd2l0Y2goZS53aGljaCkge1xyXG4gICAgY2FzZSAyNzogY2xvc2VPdmVybGF5KGUpO1xyXG4gICAgICBicmVhazsgICAgICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTsgICBcclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0T3ZlcmxheSgpIHtcclxuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjAwMSknO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIGxldCBjbG9zZSA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignI2Nsb3NlT3ZlcmxheScpLFxyXG4gICAgICBob21lTGluayA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLmMtaGFtYnVyZ2VyLW5hdl9fbGlua1tocmVmPVwiI1wiXScpLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpOyAgXHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5PdmVybGF5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcdFxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDbGFzc0FuaW1hdGUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cdFxyXG4gIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheShlKSB7XHJcbiAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNyZWF0ZU92ZXJsYXkoKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbWJ1cmdlck5hdjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvYy1oYW1idXJnZXIuanMiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnOyBcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL215X3dvcmtzLm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBoYW1idXJnZXJOYXYgZnJvbSAnLi9jb21wb25lbnRzL2MtaGFtYnVyZ2VyLmpzJztcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBpbml0IGFwcCBteV93b3Jrcy1wYWdlXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBzY3JvbGxXb3Jrcy5oYW5kbGVyKCk7XHJcbiAgaGFtYnVyZ2VyTmF2LmhhbmRsZXIoKTtcclxuICBibHVyUmVzaXplLmhhbmRsZXIoKTtcclxufTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBtb3ZlIHRvIHNlY3Rpb25zXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3Qgc2Nyb2xsV29ya3MgPSAoKCkgPT4ge1xyXG5cclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBzZWN0aW9ucyA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sLXNlY3Rpb24nKV0sXHJcbiAgICB0b05leHRCdXQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0JyksXHJcbiAgICB0b0ZpcnN0QnV0ID0gYm9keS5xdWVyeVNlbGVjdG9yKCcjZmlyc3QnKSxcclxuICAgIGFyck9mZnNldCA9IHNlY3Rpb25zLm1hcCgoaXRlbSkgPT4gaXRlbS5vZmZzZXRUb3ApLFxyXG4gICAgY29udGFpbmVyID0gYm9keS5xdWVyeVNlbGVjdG9yKCcubC1zY3JvbGwtcGFyYWxsYXgtY29udGFpbmVyJyk7XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGUpIHtcclxuICAgIGxldCBoYXNoID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKXx8d2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIHNlY3Rpb25BY3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC5sLXNlY3Rpb25bZGF0YS1zZWN0aW9uPVwiJHtoYXNoLnJlcGxhY2UoLyMvLCcnKX1cImApLFxyXG4gICAgICBzY3JvbGxQb3MgPSBhcnJPZmZzZXRbc2VjdGlvbnMuaW5kZXhPZihzZWN0aW9uQWN0KV07XHJcbiAgICBhbmltYXRlTW92ZShlLCBzY3JvbGxQb3MpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9IG9wdGlvbnMgPT4ge1xyXG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgIHN0YXJ0UG9zID0gY29udGFpbmVyLnNjcm9sbFRvcDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBfYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICAvLyB0aW1lRnJhY3Rpb24g0L7RgiAwINC00L4gMVxyXG4gICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkgdGltZUZyYWN0aW9uID0gMTtcclxuICAgICAgLy8g0YLQtdC60YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INCw0L3QuNC80LDRhtC40LhcclxuICAgICAgbGV0IHByb2dyZXNzID0gb3B0aW9ucy50aW1pbmcodGltZUZyYWN0aW9uKTtcclxuICAgICAgb3B0aW9ucy5tb3ZlKHByb2dyZXNzLCBzdGFydFBvcyk7XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZU1vdmUgPSAoZSwgc2Nyb2xsUG9zKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IDkwMCxcclxuICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xyXG4gICAgICB9LFxyXG4gICAgICBtb3ZlOiBmdW5jdGlvbihwcm9ncmVzcywgc3RhcnRQb3MpIHtcclxuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc3RhcnRQb3MgKyAoc2Nyb2xsUG9zLSBzdGFydFBvcykqKHByb2dyZXNzKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICB0b05leHRCdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gICAgdG9GaXJzdEJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0aW9uLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIGJsdXIgYmcgdG8gZmVlZHMtZm9ybVxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBibHVyUmVzaXplID0gKCgpID0+IHtcclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICB3cmFwcGVyID0gYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1mZWVkcy1mb3JtLWJnJyksXHJcbiAgICBibHVyRm9ybSA9IGJvZHkucXVlcnlTZWxlY3RvcignLmMtZmVlZHMtYmx1cmVkJyk7XHJcbiAgICBcclxuICBjb25zdCBzZXRCZyA9ICgpID0+IHtcclxuICAgIGxldCBvZmZzZXRUb3AgPSAtd3JhcHBlci5vZmZzZXRUb3AgLSAyMTA7IC8vMjEwID9cclxuICAgIGJsdXJGb3JtLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IGBjZW50ZXIgJHtvZmZzZXRUb3B9cHhgO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRCZygpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEJnLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIC0tLS0tLS0tLS0tcnVuIGFwcC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxud2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcbmNvbnNvbGUubG9nKCdJdGAgd29yayAlJSUhJyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9teV93b3Jrcy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL215X3dvcmtzLm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAzIl0sInNvdXJjZVJvb3QiOiIifQ==