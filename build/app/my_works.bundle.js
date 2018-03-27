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


console.log('It` work %%%!');

window.onload = function () {
  // scrollWorks.handler();
  _cHamburger2.default.handler();
  blurResize.handler();
};

var scrollWorks = function () {

  var sections = [].concat(_toConsumableArray(document.body.querySelectorAll('.l-section'))),
      nextBut = document.body.querySelector('#next'),
      firstBut = document.body.querySelector('#first'),
      arrOffset = sections.map(function (item) {
    return item.offsetTop;
  });

  function getSection(scrollPos) {
    if (scrollPos <= arrOffset[0]) return 0;
    for (var i = 0; i < arrOffset.length - 1; i++) {
      if (scrollPos > arrOffset[i] && scrollPos < arrOffset[i + 1]) return i;
    }
    return arrOffset.length - 1;
  }

  function checkScroll() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    window.location.hash = sections[getSection(scrollPos + 100)].getAttribute('data-section');
  }

  function showSection(e) {
    if (!window.location.hash && !e) return;
    var hash = e ? this.getAttribute('href') : window.location.hash,
        sectionAct = document.body.querySelector('.l-section[data-section="' + hash.split('#').join('') + '"'),
        scrollPos = arrOffset[sections.indexOf(sectionAct)] - 25;
    if (e) animateMove(e, scrollPos);else document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
  }

  var animate = function animate(options) {
    var start = performance.now(),
        startPos = window.pageYOffset || document.documentElement.scrollTop;
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
        document.documentElement.scrollTop = document.body.scrollTop = startPos + (scrollPos - startPos) * progress;
      }
    });
  };

  var handler = function handler() {

    showSection();
    window.addEventListener('scroll', checkScroll, false);
    nextBut.addEventListener('click', showSection, false);
    firstBut.addEventListener('click', showSection, false);
  };

  return { handler: handler };
}();
//------------------------------------
//------blured bg of form-------------
//------------------------------------
var blurResize = function () {
  var wrapper = document.body.querySelector('.c-feeds-form-bg'),
      blurForm = document.body.querySelector('.c-feeds-blured');

  var setBg = function setBg() {
    var offsetTop = -wrapper.offsetTop - 210,
        //210 ?
    blurStyle = blurForm.style;
    blurStyle.backgroundPosition = 'center ' + offsetTop + 'px';
  };

  var handler = function handler() {
    setBg();
    window.addEventListener('resize', setBg, false);
  };

  return { handler: handler };
}();

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTA3MzNiYzlkM2E5YzE2ZmZkZmYiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbXlfd29ya3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9teV93b3Jrcy5tYWluLnNjc3M/YjU2MyJdLCJuYW1lcyI6WyJoYW1idXJnZXJOYXYiLCJjb21wb25lbnQiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3ZlcmxheSIsInRlbXBsYXRlIiwiY3JlYXRlT3ZlcmxheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpc0VzYyIsImUiLCJ3aGljaCIsImNsb3NlT3ZlcmxheSIsImluc2VydE92ZXJsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsImNsb3NlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5PdmVybGF5IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzc0FuaW1hdGUiLCJoYW5kbGVyIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsIm9ubG9hZCIsImJsdXJSZXNpemUiLCJzY3JvbGxXb3JrcyIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsIm5leHRCdXQiLCJmaXJzdEJ1dCIsImFyck9mZnNldCIsIm1hcCIsIml0ZW0iLCJvZmZzZXRUb3AiLCJnZXRTZWN0aW9uIiwic2Nyb2xsUG9zIiwiaSIsImxlbmd0aCIsImNoZWNrU2Nyb2xsIiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJsb2NhdGlvbiIsImhhc2giLCJnZXRBdHRyaWJ1dGUiLCJzaG93U2VjdGlvbiIsInNlY3Rpb25BY3QiLCJzcGxpdCIsImpvaW4iLCJpbmRleE9mIiwiYW5pbWF0ZU1vdmUiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGFydFBvcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9hbmltYXRlIiwidGltZSIsInRpbWVGcmFjdGlvbiIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJ0aW1pbmciLCJtb3ZlIiwid3JhcHBlciIsImJsdXJGb3JtIiwic2V0QmciLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFrQ3VCLFdBQWxDLEVBQStDLEtBQS9DO0FBQ0FWLFlBQVFiLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDOEIsV0FBbEMsRUFBK0MsS0FBL0M7QUFDQWhCLGFBQVNkLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DOEIsV0FBbkMsRUFBZ0QsS0FBaEQ7QUFDRCxHQU5EOztBQVFBLFNBQU8sRUFBQzFCLGdCQUFELEVBQVA7QUFDRCxDQXRFbUIsRUFBcEI7QUF1RUE7QUFDQTtBQUNBO0FBQ0EsSUFBTUssYUFBYyxZQUFNO0FBQ3hCLE1BQUl5QyxVQUFVeEUsU0FBU0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLGtCQUE1QixDQUFkO0FBQUEsTUFDRXVFLFdBQVd6RSxTQUFTQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsaUJBQTVCLENBRGI7O0FBR0EsTUFBTXdFLFFBQVEsU0FBUkEsS0FBUSxHQUFNO0FBQ2xCLFFBQUlsQyxZQUFZLENBQUNnQyxRQUFRaEMsU0FBVCxHQUFxQixHQUFyQztBQUFBLFFBQTBDO0FBQ3hDbUMsZ0JBQVlGLFNBQVN2RCxLQUR2QjtBQUVBeUQsY0FBVUMsa0JBQVYsZUFBeUNwQyxTQUF6QztBQUNELEdBSkQ7O0FBT0EsTUFBTWQsVUFBVSxTQUFWQSxPQUFVLEdBQU07QUFDcEJnRDtBQUNBN0MsV0FBT1AsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NvRCxLQUFsQyxFQUF5QyxLQUF6QztBQUNELEdBSEQ7O0FBS0EsU0FBTyxFQUFDaEQsZ0JBQUQsRUFBUDtBQUNELENBakJrQixFQUFuQixDOzs7Ozs7O0FDeEZBLHlDIiwiZmlsZSI6ImFwcC9teV93b3Jrcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDUwNzMzYmM5ZDNhOWMxNmZmZGZmIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBoYW1idXJnZXJOYXYgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCBjb21wb25lbnQgPWRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtaGFtYnVyZ2VyLW5hdicpLFxyXG4gICAgYnV0dG9uID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuT3ZlcmxheScpLFxyXG4gICAgb3ZlcmxheSxcclxuICAgIHRlbXBsYXRlID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXJUZW1wbGF0ZScpO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVPdmVybGF5KCkge1xyXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgICBvdmVybGF5LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICB9XHJcbiAgICBcclxuICBmdW5jdGlvbiBpc0VzYyhlKSB7XHJcbiAgICBzd2l0Y2goZS53aGljaCkge1xyXG4gICAgY2FzZSAyNzogY2xvc2VPdmVybGF5KGUpO1xyXG4gICAgICBicmVhazsgICAgICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfSAgIFxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRPdmVybGF5KCkge1xyXG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGluc2VydE92ZXJsYXksIGZhbHNlKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuMDAxKSc7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgbGV0IGNsb3NlID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5PdmVybGF5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcdFxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDbGFzc0FuaW1hdGUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cdFxyXG4gIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheShlKSB7XHJcbiAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlcigpIHtcclxuICAgIGNyZWF0ZU92ZXJsYXkoKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFtYnVyZ2VyTmF2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7IFxyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvbXlfd29ya3MubWFpbi5zY3NzJztcclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuaW1wb3J0IGhhbWJ1cmdlck5hdiBmcm9tICcuL2NvbXBvbmVudHMvYy1oYW1idXJnZXIuanMnO1xyXG5cclxuY29uc29sZS5sb2coJ0l0YCB3b3JrICUlJSEnKTtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAvLyBzY3JvbGxXb3Jrcy5oYW5kbGVyKCk7XHJcbiAgaGFtYnVyZ2VyTmF2LmhhbmRsZXIoKTtcclxuICBibHVyUmVzaXplLmhhbmRsZXIoKTtcclxufTtcclxuXHJcbmNvbnN0IHNjcm9sbFdvcmtzID0gKCgpID0+IHtcclxuXHJcbiAgbGV0IHNlY3Rpb25zID0gWy4uLmRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnLmwtc2VjdGlvbicpXSxcclxuICAgIG5leHRCdXQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0JyksXHJcbiAgICBmaXJzdEJ1dCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI2ZpcnN0JyksXHJcbiAgICBhcnJPZmZzZXQgPSBzZWN0aW9ucy5tYXAoKGl0ZW0pID0+IGl0ZW0ub2Zmc2V0VG9wKTtcclxuXHJcbiAgXHJcbiAgZnVuY3Rpb24gZ2V0U2VjdGlvbihzY3JvbGxQb3MpICB7XHJcbiAgICBpZihzY3JvbGxQb3M8PWFyck9mZnNldFswXSkgcmV0dXJuIDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck9mZnNldC5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICAgIGlmKHNjcm9sbFBvcz5hcnJPZmZzZXRbaV0mJnNjcm9sbFBvczxhcnJPZmZzZXRbaSsxXSlcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJPZmZzZXQubGVuZ3RoLTE7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja1Njcm9sbCgpIHtcclxuICAgIGxldCBzY3JvbGxQb3MgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gc2VjdGlvbnNbZ2V0U2VjdGlvbihzY3JvbGxQb3MrMTAwKV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNlY3Rpb24nKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaGFzaCYmIWUpIHJldHVybjtcclxuICAgIGxldCBoYXNoID0gZT90aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpOndpbmRvdy5sb2NhdGlvbi5oYXNoLFxyXG4gICAgICBzZWN0aW9uQWN0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKGAubC1zZWN0aW9uW2RhdGEtc2VjdGlvbj1cIiR7aGFzaC5zcGxpdCgnIycpLmpvaW4oJycpfVwiYCksXHJcbiAgICAgIHNjcm9sbFBvcyA9IGFyck9mZnNldFtzZWN0aW9ucy5pbmRleE9mKHNlY3Rpb25BY3QpXS0yNTtcclxuICAgIGlmKGUpIGFuaW1hdGVNb3ZlKGUsIHNjcm9sbFBvcyk7XHJcbiAgICBlbHNlIFxyXG4gICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBzY3JvbGxQb3M7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhbmltYXRlID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICBzdGFydFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIF9hbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiDQvtGCIDAg0LTQviAxXHJcbiAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgICAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgICBvcHRpb25zLm1vdmUocHJvZ3Jlc3MsIHN0YXJ0UG9zKTtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8IDEpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2FuaW1hdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlTW92ZSA9IChlLCBzY3JvbGxQb3MpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFuaW1hdGUoe1xyXG4gICAgICBkdXJhdGlvbjogOTAwLFxyXG4gICAgICB0aW1pbmc6IGZ1bmN0aW9uKHRpbWVGcmFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdmU6IGZ1bmN0aW9uKHByb2dyZXNzLCBzdGFydFBvcykge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IHN0YXJ0UG9zICsgKHNjcm9sbFBvcy0gc3RhcnRQb3MpKihwcm9ncmVzcyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xyXG5cclxuICAgIHNob3dTZWN0aW9uKCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwsIGZhbHNlKTtcclxuICAgIG5leHRCdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gICAgZmlyc3RCdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7aGFuZGxlcn07XHJcbn0pKCk7XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tYmx1cmVkIGJnIG9mIGZvcm0tLS0tLS0tLS0tLS0tXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGJsdXJSZXNpemUgPSAoKCkgPT4ge1xyXG4gIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuYy1mZWVkcy1mb3JtLWJnJyksXHJcbiAgICBibHVyRm9ybSA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLmMtZmVlZHMtYmx1cmVkJyk7XHJcbiAgICBcclxuICBjb25zdCBzZXRCZyA9ICgpID0+IHtcclxuICAgIGxldCBvZmZzZXRUb3AgPSAtd3JhcHBlci5vZmZzZXRUb3AgLSAyMTAsIC8vMjEwID9cclxuICAgICAgYmx1clN0eWxlID0gYmx1ckZvcm0uc3R5bGU7XHJcbiAgICBibHVyU3R5bGUuYmFja2dyb3VuZFBvc2l0aW9uID0gYGNlbnRlciAke29mZnNldFRvcH1weGA7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBzZXRCZygpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEJnLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbXlfd29ya3MuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlcy9teV93b3Jrcy5tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMyJdLCJzb3VyY2VSb290IjoiIn0=