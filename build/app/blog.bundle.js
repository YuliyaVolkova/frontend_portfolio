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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(17);

var _svg4everybody = __webpack_require__(3);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _code_prettify = __webpack_require__(18);

var _code_prettify2 = _interopRequireDefault(_code_prettify);

var _cHamburger = __webpack_require__(7);

var _cHamburger2 = _interopRequireDefault(_cHamburger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _svg4everybody2.default)();


///*------------------------------------
///* init app welcome-page
///*-------------------------------------
var init = function init() {
  (0, _code_prettify2.default)();
  scrollBlog.init();
  _cHamburger2.default.handler();
};

///*------------------------------------
///* scroll blog-articles
///*-------------------------------------
var scrollBlog = function () {

  var body = document.body,
      sections = [].concat(_toConsumableArray(body.querySelectorAll('.c-blog__article'))),
      container = body.querySelector('.l-scroll-parallax-container'),
      arrOffset = sections.map(function (item) {
    return item.offsetTop;
  }),
      navBlock = body.querySelector('#absoluteNav'),
      links = [].concat(_toConsumableArray(navBlock.querySelectorAll('.c-blog__nav-link'))),
      tabletButton = navBlock.querySelector('.c-blog__menu-swipe'),
      firstScrHeight = body.querySelector('.parallax__content').offsetTop,
      header = body.querySelector('.l-hero_blog').getBoundingClientRect(),
      fixedClone = void 0,
      tabletMth = window.matchMedia('(max-width: 768px)'),
      siblings = function siblings(n) {
    return [].concat(_toConsumableArray(n.parentElement.children)).filter(function (c) {
      return c != n;
    });
  };
  var frAnimated = false;

  function createFixNav() {
    fixedClone = document.createElement('div');
    fixedClone.id = 'fixedNav';
    fixedClone.classList.add('c-blog__aside');
    fixedClone.classList.add('visually-hidden');
    fixedClone.classList.add('pos-fixed');
    fixedClone.innerHTML = navBlock.innerHTML;
    body.appendChild(fixedClone);
    var links = [].concat(_toConsumableArray(fixedClone.querySelectorAll('.c-blog__nav-link')));
    links.forEach(function (el) {
      el.addEventListener('click', showSection, false);
    });
    //*-- for portable devices--
    if (tabletMth.matches) {
      var tabletBut = fixedClone.querySelector('.c-blog__menu-swipe');
      tabletBut.addEventListener('click', mobile, false);
    }
  }

  var getSection = function getSection(scrollPos) {
    if (scrollPos <= arrOffset[0]) return 0;
    for (var i = 0; i < arrOffset.length - 1; i++) {
      if (scrollPos > arrOffset[i] && scrollPos < arrOffset[i + 1]) return i;
    }
    return arrOffset.length - 1;
  };

  var setActItem = function setActItem(links) {
    links.forEach(function (el) {
      var actItem = el.parentElement;
      actItem.classList.add('is-active');
      [].forEach.call(siblings(actItem), function (it) {
        if (it.classList.contains('is-active')) it.classList.remove('is-active');
      });
    });
  };

  var checkScroll = function checkScroll() {
    var scrollPos = container.scrollTop;
    if (fixedClone && scrollPos <= arrOffset[0] + firstScrHeight && navBlock.classList.contains('visually-hidden')) {
      if (!tabletMth.matches || !fixedClone.classList.contains('animateOpen')) {
        fixedClone.classList.add('visually-hidden');
        navBlock.classList.remove('visually-hidden');
      }
    }
    //* header.width*0.04 - padding-top
    if (fixedClone && scrollPos > firstScrHeight - header.width * 0.04) {
      navBlock.classList.add('visually-hidden');
      if (fixedClone.classList.contains('visually-hidden')) fixedClone.classList.remove('visually-hidden');
    }
    var dataSection = sections[getSection(scrollPos - header.width * 0.04)].dataset.section,
        linksAct = [].concat(_toConsumableArray(body.querySelectorAll('.c-blog__nav-link[href="#' + dataSection + '"')));
    //* then after animation: frAnimated = true 
    if (!frAnimated) {
      window.location.hash = dataSection;
      setActItem(linksAct);
    }
    //* set default frAnimated
    frAnimated = false;
  };

  var deleteAnimatClasses = function deleteAnimatClasses() {
    fixedClone.classList.remove('animateOpen');
    fixedClone.removeEventListener('animationend', deleteAnimatClasses, false);
  };

  function showSection(e) {
    if (!window.location.hash) return;
    var hash = e ? this.getAttribute('href') : window.location.hash,
        sectionAct = body.querySelector('.c-blog__article[data-section="' + hash.replace(/#/, '') + '"'),
        linksAct = [].concat(_toConsumableArray(body.querySelectorAll('.c-blog__nav-link[href="' + hash + '"'))),
        index = sections.indexOf(sectionAct);
    setActItem(linksAct);
    window.location.hash = sectionAct.dataset.section;
    var scrollPos = index === 0 ? firstScrHeight : firstScrHeight + arrOffset[index] + header.width * 0.05;
    container.removeEventListener('scroll', checkScroll, false);

    if (e) {
      if (tabletMth.matches) {
        fixedClone.classList.add('animateClose');
        fixedClone.addEventListener('animationend', deleteAnimatClasses, false);
      }
      animateMove(e, scrollPos);
    } else container.scrollTop = scrollPos;
  }

  var animate = function animate(options) {
    frAnimated = true;
    var start = performance.now(),
        startPos = container.scrollTop;
    requestAnimationFrame(function _animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) {
        timeFraction = 1;
        container.addEventListener('scroll', checkScroll, false);
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
        container.scrollTop = startPos + (scrollPos - startPos) * progress;
      }
    });
  };

  var mobile = function mobile(e) {
    e.preventDefault();
    navBlock.classList.add('visually-hidden');
    fixedClone.classList.remove('visually-hidden');
    fixedClone.classList.remove('animateClose');
    fixedClone.classList.add('overlay-mobile');
    fixedClone.classList.add('animateOpen');
  };

  var init = function init() {
    createFixNav();
    showSection();
    container.addEventListener('scroll', checkScroll, false);
    links.forEach(function (el) {
      el.addEventListener('click', showSection, false);
    });
    tabletButton.addEventListener('click', mobile, false);
  };

  return { init: init };
}();

///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjk0M2ZlNjc0ZGNmYmFkMTVmMzEiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzPzYzY2EiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJuYW1lcyI6WyJoYW1idXJnZXJOYXYiLCJib2R5IiwiZG9jdW1lbnQiLCJjb21wb25lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3ZlcmxheSIsInRlbXBsYXRlIiwiY3JlYXRlT3ZlcmxheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpc0VzYyIsImUiLCJ3aGljaCIsImNsb3NlT3ZlcmxheSIsImluc2VydE92ZXJsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsImNsb3NlIiwiaG9tZUxpbmsiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5PdmVybGF5IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzc0FuaW1hdGUiLCJoYW5kbGVyIiwiaW5pdCIsInNjcm9sbEJsb2ciLCJzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJhcnJPZmZzZXQiLCJtYXAiLCJpdGVtIiwib2Zmc2V0VG9wIiwibmF2QmxvY2siLCJsaW5rcyIsInRhYmxldEJ1dHRvbiIsImZpcnN0U2NySGVpZ2h0IiwiaGVhZGVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZml4ZWRDbG9uZSIsInRhYmxldE10aCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJzaWJsaW5ncyIsIm4iLCJjaGlsZHJlbiIsImZpbHRlciIsImMiLCJmckFuaW1hdGVkIiwiY3JlYXRlRml4TmF2IiwiaWQiLCJmb3JFYWNoIiwiZWwiLCJzaG93U2VjdGlvbiIsIm1hdGNoZXMiLCJ0YWJsZXRCdXQiLCJtb2JpbGUiLCJnZXRTZWN0aW9uIiwic2Nyb2xsUG9zIiwiaSIsImxlbmd0aCIsInNldEFjdEl0ZW0iLCJhY3RJdGVtIiwiY2FsbCIsIml0IiwiY29udGFpbnMiLCJjaGVja1Njcm9sbCIsInNjcm9sbFRvcCIsIndpZHRoIiwiZGF0YVNlY3Rpb24iLCJkYXRhc2V0Iiwic2VjdGlvbiIsImxpbmtzQWN0IiwibG9jYXRpb24iLCJoYXNoIiwiZGVsZXRlQW5pbWF0Q2xhc3NlcyIsImdldEF0dHJpYnV0ZSIsInNlY3Rpb25BY3QiLCJyZXBsYWNlIiwiaW5kZXgiLCJpbmRleE9mIiwiYW5pbWF0ZU1vdmUiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGFydFBvcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9hbmltYXRlIiwidGltZSIsInRpbWVGcmFjdGlvbiIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJ0aW1pbmciLCJtb3ZlIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsInJ1bkNvZGVQcmV0dGlmeSIsInByZXMiLCJzY3JpcHQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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QThCLE9BQTlCLEVBQXVDcUMsTUFBdkMsRUFBK0MsS0FBL0M7QUFDRCxHQVJEOztBQVVBLFNBQU8sRUFBQ2hDLFVBQUQsRUFBUDtBQUNELENBaktrQixFQUFuQjs7QUFtS0E7QUFDQTtBQUNBO0FBQ0FpQixPQUFPdUQsTUFBUCxHQUFnQnhFLElBQWhCO0FBQ0F5RSxRQUFRQyxHQUFSLENBQVksZUFBWixFOzs7Ozs7QUMxTEEseUM7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1DLGtCQUFrQixTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFNQyxPQUFPekcsU0FBU0QsSUFBVCxDQUFjaUMsZ0JBQWQsQ0FBK0IsS0FBL0IsQ0FBYjtBQUNBLEtBQUd3QixPQUFILENBQVdZLElBQVgsQ0FBZ0JxQyxJQUFoQixFQUFzQixVQUFTaEQsRUFBVCxFQUFhO0FBQ2pDQSxPQUFHakQsU0FBSCxDQUFhQyxHQUFiLENBQWlCLGFBQWpCO0FBQ0FnRCxPQUFHakQsU0FBSCxDQUFhQyxHQUFiLENBQWlCLFVBQWpCO0FBQ0QsR0FIRDtBQUlBLE1BQUlpRyxTQUFTMUcsU0FBU08sYUFBVCxDQUF1QixRQUF2QixDQUFiO0FBQ0FtRyxTQUFPQyxJQUFQLEdBQWMsaUJBQWQ7QUFDQUQsU0FBT0UsS0FBUCxHQUFlLElBQWY7O0FBRUFGLFNBQU9HLEdBQVAsR0FBYSwyRUFBYjtBQUNBLEdBQUM3RyxTQUFTOEcsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsS0FBNEM5RyxTQUFTOEcsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBN0MsRUFBdUY3RixXQUF2RixDQUFtR3lGLE1BQW5HO0FBQ0QsQ0FaRDs7a0JBY2VGLGUiLCJmaWxlIjoiYXBwL2Jsb2cuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2OTQzZmU2NzRkY2ZiYWQxNWYzMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS9kaXN0L3N2ZzRldmVyeWJvZHkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyTmF2ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBjb21wb25lbnQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWhhbWJ1cmdlci1uYXYnKSxcclxuICAgIGJ1dHRvbiA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbk92ZXJsYXknKSxcclxuICAgIG92ZXJsYXksXHJcbiAgICB0ZW1wbGF0ZSA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyVGVtcGxhdGUnKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcclxuICAgIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgfTtcclxuICAgIFxyXG4gIGNvbnN0IGlzRXNjID0gZSA9PiB7XHJcbiAgICBzd2l0Y2goZS53aGljaCkge1xyXG4gICAgY2FzZSAyNzogY2xvc2VPdmVybGF5KGUpO1xyXG4gICAgICBicmVhazsgICAgICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTsgICBcclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0T3ZlcmxheSgpIHtcclxuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjAwMSknO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIGxldCBjbG9zZSA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignI2Nsb3NlT3ZlcmxheScpLFxyXG4gICAgICBob21lTGluayA9IG92ZXJsYXkucXVlcnlTZWxlY3RvcignLmMtaGFtYnVyZ2VyLW5hdl9fbGlua1tocmVmPVwiI1wiXScpLnBhcmVudEVsZW1lbnQ7XHJcbiAgICBob21lTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpOyAgXHJcbiAgICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5PdmVybGF5KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcdFxyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZW1vdmVDbGFzc0FuaW1hdGUoKSB7XHJcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgIG92ZXJsYXkucmVtb3ZlKCk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfVxyXG5cdFxyXG4gIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheShlKSB7XHJcbiAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNyZWF0ZU92ZXJsYXkoKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbWJ1cmdlck5hdjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvYy1oYW1idXJnZXIuanMiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYmxvZy5tYWluLnNjc3MnO1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5Jztcclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5pbXBvcnQgcnVuQ29kZVByZXR0aWZ5IGZyb20gJy4vY29tcG9uZW50cy9jb2RlX3ByZXR0aWZ5LmpzJztcclxuaW1wb3J0IGhhbWJ1cmdlck5hdiBmcm9tICcuL2NvbXBvbmVudHMvYy1oYW1idXJnZXIuanMnO1xyXG5cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIGluaXQgYXBwIHdlbGNvbWUtcGFnZVxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gIHJ1bkNvZGVQcmV0dGlmeSgpO1xyXG4gIHNjcm9sbEJsb2cuaW5pdCgpO1xyXG4gIGhhbWJ1cmdlck5hdi5oYW5kbGVyKCk7XHJcbn07XHJcblxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyogc2Nyb2xsIGJsb2ctYXJ0aWNsZXNcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3Qgc2Nyb2xsQmxvZyA9ICgoKSA9PiB7XHJcblxyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSxcclxuICAgIHNlY3Rpb25zID0gWy4uLmJvZHkucXVlcnlTZWxlY3RvckFsbCgnLmMtYmxvZ19fYXJ0aWNsZScpXSxcclxuICAgIGNvbnRhaW5lciA9IGJvZHkucXVlcnlTZWxlY3RvcignLmwtc2Nyb2xsLXBhcmFsbGF4LWNvbnRhaW5lcicpLFxyXG4gICAgYXJyT2Zmc2V0ID0gc2VjdGlvbnMubWFwKChpdGVtKSA9PiBpdGVtLm9mZnNldFRvcCksXHJcbiAgICBuYXZCbG9jayA9IGJvZHkucXVlcnlTZWxlY3RvcignI2Fic29sdXRlTmF2JyksXHJcbiAgICBsaW5rcyA9IFsuLi5uYXZCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuYy1ibG9nX19uYXYtbGluaycpXSxcclxuICAgIHRhYmxldEJ1dHRvbiA9IG5hdkJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jLWJsb2dfX21lbnUtc3dpcGUnKSxcclxuICAgIGZpcnN0U2NySGVpZ2h0ID0gYm9keS5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXhfX2NvbnRlbnQnKS5vZmZzZXRUb3AsXHJcbiAgICBoZWFkZXIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLWhlcm9fYmxvZycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgZml4ZWRDbG9uZSxcclxuICAgIHRhYmxldE10aCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKSxcclxuICAgIHNpYmxpbmdzID0gbiA9PiBbLi4ubi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXS5maWx0ZXIoYz0+YyE9bik7XHJcbiAgdmFyICBmckFuaW1hdGVkID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUZpeE5hdigpIHtcclxuICAgIGZpeGVkQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpeGVkQ2xvbmUuaWQgPSAnZml4ZWROYXYnO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdjLWJsb2dfX2FzaWRlJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdwb3MtZml4ZWQnKTtcclxuICAgIGZpeGVkQ2xvbmUuaW5uZXJIVE1MID0gbmF2QmxvY2suaW5uZXJIVE1MO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaXhlZENsb25lKTtcclxuICAgIGxldCBsaW5rcyA9IFsuLi5maXhlZENsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX25hdi1saW5rJyldO1xyXG4gICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0aW9uLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIC8vKi0tIGZvciBwb3J0YWJsZSBkZXZpY2VzLS1cclxuICAgIGlmKHRhYmxldE10aC5tYXRjaGVzKSB7XHJcbiAgICAgIGxldCB0YWJsZXRCdXQgPSBmaXhlZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jLWJsb2dfX21lbnUtc3dpcGUnKTtcclxuICAgICAgdGFibGV0QnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9iaWxlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTZWN0aW9uID0gc2Nyb2xsUG9zID0+ICB7XHJcbiAgICBpZihzY3JvbGxQb3M8PWFyck9mZnNldFswXSkgcmV0dXJuIDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck9mZnNldC5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICAgIGlmKHNjcm9sbFBvcz5hcnJPZmZzZXRbaV0mJnNjcm9sbFBvczxhcnJPZmZzZXRbaSsxXSlcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJPZmZzZXQubGVuZ3RoLTE7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0QWN0SXRlbSA9IGxpbmtzID0+IHtcclxuICAgIGxpbmtzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgbGV0IGFjdEl0ZW0gPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICBbXS5mb3JFYWNoLmNhbGwoc2libGluZ3MoYWN0SXRlbSksIGZ1bmN0aW9uKGl0KSB7XHJcbiAgICAgICAgaWYoaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSlcclxuICAgICAgICAgIGl0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbFBvcyA9IGNvbnRhaW5lci5zY3JvbGxUb3A7XHJcbiAgICBpZihmaXhlZENsb25lJiZzY3JvbGxQb3M8PWFyck9mZnNldFswXStmaXJzdFNjckhlaWdodCYmbmF2QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSkge1xyXG4gICAgICBpZighdGFibGV0TXRoLm1hdGNoZXN8fCFmaXhlZENsb25lLmNsYXNzTGlzdC5jb250YWlucygnYW5pbWF0ZU9wZW4nKSkge1xyXG4gICAgICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vKiBoZWFkZXIud2lkdGgqMC4wNCAtIHBhZGRpbmctdG9wXHJcbiAgICBpZihmaXhlZENsb25lJiZzY3JvbGxQb3M+Zmlyc3RTY3JIZWlnaHQtaGVhZGVyLndpZHRoKjAuMDQpIHtcclxuICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIGlmKGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSlcclxuICAgICAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGFTZWN0aW9uID0gc2VjdGlvbnNbZ2V0U2VjdGlvbihzY3JvbGxQb3MtaGVhZGVyLndpZHRoKjAuMDQpXS5kYXRhc2V0LnNlY3Rpb24sXHJcbiAgICAgIGxpbmtzQWN0ID0gWy4uLmJvZHkucXVlcnlTZWxlY3RvckFsbChgLmMtYmxvZ19fbmF2LWxpbmtbaHJlZj1cIiMke2RhdGFTZWN0aW9ufVwiYCldO1xyXG4gICAgLy8qIHRoZW4gYWZ0ZXIgYW5pbWF0aW9uOiBmckFuaW1hdGVkID0gdHJ1ZSBcclxuICAgIGlmKCFmckFuaW1hdGVkKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZGF0YVNlY3Rpb247IFxyXG4gICAgICBzZXRBY3RJdGVtKGxpbmtzQWN0KTtcclxuICAgIH1cclxuICAgIC8vKiBzZXQgZGVmYXVsdCBmckFuaW1hdGVkXHJcbiAgICBmckFuaW1hdGVkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQW5pbWF0Q2xhc3NlcyA9ICgpID0+IHtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZU9wZW4nKTtcclxuICAgIGZpeGVkQ2xvbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGVsZXRlQW5pbWF0Q2xhc3NlcywgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgcmV0dXJuO1xyXG4gICAgbGV0IGhhc2ggPSBlP3RoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk6d2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIHNlY3Rpb25BY3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC5jLWJsb2dfX2FydGljbGVbZGF0YS1zZWN0aW9uPVwiJHtoYXNoLnJlcGxhY2UoLyMvLCcnKX1cImApLFxyXG4gICAgICBsaW5rc0FjdCA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIke2hhc2h9XCJgKV0sXHJcbiAgICAgIGluZGV4ID0gc2VjdGlvbnMuaW5kZXhPZihzZWN0aW9uQWN0KTtcclxuICAgIHNldEFjdEl0ZW0obGlua3NBY3QpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBzZWN0aW9uQWN0LmRhdGFzZXQuc2VjdGlvbjtcclxuICAgIGxldCBzY3JvbGxQb3MgPSAoaW5kZXggPT09IDApP2ZpcnN0U2NySGVpZ2h0OihmaXJzdFNjckhlaWdodCArIGFyck9mZnNldFtpbmRleF0gKyBoZWFkZXIud2lkdGgqMC4wNSk7XHJcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwsIGZhbHNlKTtcclxuXHJcbiAgICBpZihlKSB7XHJcbiAgICAgIGlmKHRhYmxldE10aC5tYXRjaGVzKSB7XHJcbiAgICAgICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlQ2xvc2UnKTtcclxuICAgICAgICBmaXhlZENsb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGRlbGV0ZUFuaW1hdENsYXNzZXMsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBhbmltYXRlTW92ZShlLCBzY3JvbGxQb3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBcclxuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFBvcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgZnJBbmltYXRlZCA9IHRydWU7XHJcbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgc3RhcnRQb3MgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIF9hbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiDQvtGCIDAg0LTQviAxXHJcbiAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB7XHJcbiAgICAgICAgdGltZUZyYWN0aW9uID0gMTtcclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgICBvcHRpb25zLm1vdmUocHJvZ3Jlc3MsIHN0YXJ0UG9zKTtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8IDEpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2FuaW1hdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlTW92ZSA9IChlLCBzY3JvbGxQb3MpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFuaW1hdGUoe1xyXG4gICAgICBkdXJhdGlvbjogNzAwLFxyXG4gICAgICB0aW1pbmc6IGZ1bmN0aW9uKHRpbWVGcmFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdmU6IGZ1bmN0aW9uKHByb2dyZXNzLCBzdGFydFBvcykge1xyXG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzdGFydFBvcyArIChzY3JvbGxQb3MtIHN0YXJ0UG9zKSoocHJvZ3Jlc3MpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9iaWxlID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBuYXZCbG9jay5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVDbG9zZScpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW1vYmlsZScpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT3BlbicpO1xyXG4gICAgICAgXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNyZWF0ZUZpeE5hdigpO1xyXG4gICAgc2hvd1NlY3Rpb24oKTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCwgZmFsc2UpO1xyXG4gICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0aW9uLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRhYmxldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vYmlsZSwgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7aW5pdH07XHJcbn0pKCk7XHJcblxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyogLS0tLS0tLS0tLS1ydW4gYXBwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG53aW5kb3cub25sb2FkID0gaW5pdDtcclxuY29uc29sZS5sb2coJ0l0YCB3b3JrICUlJSEnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYmxvZy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDMiLCJjb25zdCBydW5Db2RlUHJldHRpZnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJlcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcbiAgW10uZm9yRWFjaC5jYWxsKHByZXMsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmV0dHlwcmludCcpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbGluZW51bXMnKTtcclxuICB9KTtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vZ29vZ2xlL2NvZGUtcHJldHRpZnkvbWFzdGVyL2xvYWRlci9ydW5fcHJldHRpZnkuanMnO1xyXG4gIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5Db2RlUHJldHRpZnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJzb3VyY2VSb290IjoiIn0=