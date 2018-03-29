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
    if (tabletMth.matches) {
      tabletButton.addEventListener('click', mobile, false);
    }
  };

  return { init: init };
}();

///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzYzMjc3ODQ4NTgwZTI0ZDNkZTAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYmxvZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzPzYzY2EiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyJdLCJuYW1lcyI6WyJoYW1idXJnZXJOYXYiLCJib2R5IiwiZG9jdW1lbnQiLCJjb21wb25lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnV0dG9uIiwib3ZlcmxheSIsInRlbXBsYXRlIiwiY3JlYXRlT3ZlcmxheSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJpc0VzYyIsImUiLCJ3aGljaCIsImNsb3NlT3ZlcmxheSIsImluc2VydE92ZXJsYXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZSIsInRyYW5zZm9ybSIsInJlbW92ZSIsImNsb3NlIiwiaG9tZUxpbmsiLCJwYXJlbnRFbGVtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW5PdmVybGF5IiwicHJldmVudERlZmF1bHQiLCJyZW1vdmVDbGFzc0FuaW1hdGUiLCJoYW5kbGVyIiwiaW5pdCIsInNjcm9sbEJsb2ciLCJzZWN0aW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJhcnJPZmZzZXQiLCJtYXAiLCJpdGVtIiwib2Zmc2V0VG9wIiwibmF2QmxvY2siLCJsaW5rcyIsInRhYmxldEJ1dHRvbiIsImZpcnN0U2NySGVpZ2h0IiwiaGVhZGVyIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZml4ZWRDbG9uZSIsInRhYmxldE10aCIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJzaWJsaW5ncyIsIm4iLCJjaGlsZHJlbiIsImZpbHRlciIsImMiLCJmckFuaW1hdGVkIiwiY3JlYXRlRml4TmF2IiwiaWQiLCJmb3JFYWNoIiwiZWwiLCJzaG93U2VjdGlvbiIsIm1hdGNoZXMiLCJ0YWJsZXRCdXQiLCJtb2JpbGUiLCJnZXRTZWN0aW9uIiwic2Nyb2xsUG9zIiwiaSIsImxlbmd0aCIsInNldEFjdEl0ZW0iLCJhY3RJdGVtIiwiY2FsbCIsIml0IiwiY29udGFpbnMiLCJjaGVja1Njcm9sbCIsInNjcm9sbFRvcCIsIndpZHRoIiwiZGF0YVNlY3Rpb24iLCJkYXRhc2V0Iiwic2VjdGlvbiIsImxpbmtzQWN0IiwibG9jYXRpb24iLCJoYXNoIiwiZGVsZXRlQW5pbWF0Q2xhc3NlcyIsImdldEF0dHJpYnV0ZSIsInNlY3Rpb25BY3QiLCJyZXBsYWNlIiwiaW5kZXgiLCJpbmRleE9mIiwiYW5pbWF0ZU1vdmUiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGFydFBvcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9hbmltYXRlIiwidGltZSIsInRpbWVGcmFjdGlvbiIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJ0aW1pbmciLCJtb3ZlIiwib25sb2FkIiwiY29uc29sZSIsImxvZyIsInJ1bkNvZGVQcmV0dGlmeSIsInByZXMiLCJzY3JpcHQiLCJ0eXBlIiwiYXN5bmMiLCJzcmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7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QUFDcEJuQixtQkFBYWhCLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDcUMsTUFBdkMsRUFBK0MsS0FBL0M7QUFDRDtBQUNGLEdBVkQ7O0FBWUEsU0FBTyxFQUFDaEMsVUFBRCxFQUFQO0FBQ0QsQ0FuS2tCLEVBQW5COztBQXFLQTtBQUNBO0FBQ0E7QUFDQWlCLE9BQU91RCxNQUFQLEdBQWdCeEUsSUFBaEI7QUFDQXlFLFFBQVFDLEdBQVIsQ0FBWSxlQUFaLEU7Ozs7OztBQzVMQSx5Qzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU1DLE9BQU96RyxTQUFTRCxJQUFULENBQWNpQyxnQkFBZCxDQUErQixLQUEvQixDQUFiO0FBQ0EsS0FBR3dCLE9BQUgsQ0FBV1ksSUFBWCxDQUFnQnFDLElBQWhCLEVBQXNCLFVBQVNoRCxFQUFULEVBQWE7QUFDakNBLE9BQUdqRCxTQUFILENBQWFDLEdBQWIsQ0FBaUIsYUFBakI7QUFDQWdELE9BQUdqRCxTQUFILENBQWFDLEdBQWIsQ0FBaUIsVUFBakI7QUFDRCxHQUhEO0FBSUEsTUFBSWlHLFNBQVMxRyxTQUFTTyxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQW1HLFNBQU9DLElBQVAsR0FBYyxpQkFBZDtBQUNBRCxTQUFPRSxLQUFQLEdBQWUsSUFBZjs7QUFFQUYsU0FBT0csR0FBUCxHQUFhLDJFQUFiO0FBQ0EsR0FBQzdHLFNBQVM4RyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxLQUE0QzlHLFNBQVM4RyxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUE3QyxFQUF1RjdGLFdBQXZGLENBQW1HeUYsTUFBbkc7QUFDRCxDQVpEOztrQkFjZUYsZSIsImZpbGUiOiJhcHAvYmxvZy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc2MzI3Nzg0ODU4MGUyNGQzZGUwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBoYW1idXJnZXJOYXYgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSxcclxuICAgIGNvbXBvbmVudCA9IGJvZHkucXVlcnlTZWxlY3RvcignLmMtaGFtYnVyZ2VyLW5hdicpLFxyXG4gICAgYnV0dG9uID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuT3ZlcmxheScpLFxyXG4gICAgb3ZlcmxheSxcclxuICAgIHRlbXBsYXRlID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXJUZW1wbGF0ZScpO1xyXG5cclxuICBjb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgICBvdmVybGF5LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICB9O1xyXG4gICAgXHJcbiAgY29uc3QgaXNFc2MgPSBlID0+IHtcclxuICAgIHN3aXRjaChlLndoaWNoKSB7XHJcbiAgICBjYXNlIDI3OiBjbG9zZU92ZXJsYXkoZSk7XHJcbiAgICAgIGJyZWFrOyAgICAgICBcclxuICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9OyAgIFxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRPdmVybGF5KCkge1xyXG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGluc2VydE92ZXJsYXksIGZhbHNlKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuMDAxKSc7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5JyksXHJcbiAgICAgIGhvbWVMaW5rID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuYy1oYW1idXJnZXItbmF2X19saW5rW2hyZWY9XCIjXCJdJykucGFyZW50RWxlbWVudDtcclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5LCBmYWxzZSk7ICBcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBpc0VzYywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1x0XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGluc2VydE92ZXJsYXksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzQW5pbWF0ZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgcmVtb3ZlQ2xhc3NBbmltYXRlLCBmYWxzZSk7XHJcbiAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xyXG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk92ZXJsYXksIGZhbHNlKTtcclxuICB9XHJcblx0XHJcbiAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KGUpIHtcclxuICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY2xvc2UgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU92ZXJsYXknKTtcclxuICAgIGNsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBpc0VzYywgZmFsc2UpO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgcmVtb3ZlQ2xhc3NBbmltYXRlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlT3ZlcmxheSgpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk92ZXJsYXksIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFtYnVyZ2VyTmF2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBydW5Db2RlUHJldHRpZnkgZnJvbSAnLi9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMnO1xyXG5pbXBvcnQgaGFtYnVyZ2VyTmF2IGZyb20gJy4vY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyc7XHJcblxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyogaW5pdCBhcHAgd2VsY29tZS1wYWdlXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgcnVuQ29kZVByZXR0aWZ5KCk7XHJcbiAgc2Nyb2xsQmxvZy5pbml0KCk7XHJcbiAgaGFtYnVyZ2VyTmF2LmhhbmRsZXIoKTtcclxufTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBzY3JvbGwgYmxvZy1hcnRpY2xlc1xyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5jb25zdCBzY3JvbGxCbG9nID0gKCgpID0+IHtcclxuXHJcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgc2VjdGlvbnMgPSBbLi4uYm9keS5xdWVyeVNlbGVjdG9yQWxsKCcuYy1ibG9nX19hcnRpY2xlJyldLFxyXG4gICAgY29udGFpbmVyID0gYm9keS5xdWVyeVNlbGVjdG9yKCcubC1zY3JvbGwtcGFyYWxsYXgtY29udGFpbmVyJyksXHJcbiAgICBhcnJPZmZzZXQgPSBzZWN0aW9ucy5tYXAoKGl0ZW0pID0+IGl0ZW0ub2Zmc2V0VG9wKSxcclxuICAgIG5hdkJsb2NrID0gYm9keS5xdWVyeVNlbGVjdG9yKCcjYWJzb2x1dGVOYXYnKSxcclxuICAgIGxpbmtzID0gWy4uLm5hdkJsb2NrLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX25hdi1saW5rJyldLFxyXG4gICAgdGFibGV0QnV0dG9uID0gbmF2QmxvY2sucXVlcnlTZWxlY3RvcignLmMtYmxvZ19fbWVudS1zd2lwZScpLFxyXG4gICAgZmlyc3RTY3JIZWlnaHQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5wYXJhbGxheF9fY29udGVudCcpLm9mZnNldFRvcCxcclxuICAgIGhlYWRlciA9IGJvZHkucXVlcnlTZWxlY3RvcignLmwtaGVyb19ibG9nJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXHJcbiAgICBmaXhlZENsb25lLFxyXG4gICAgdGFibGV0TXRoID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2OHB4KScpLFxyXG4gICAgc2libGluZ3MgPSBuID0+IFsuLi5uLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5dLmZpbHRlcihjPT5jIT1uKTtcclxuICB2YXIgIGZyQW5pbWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlRml4TmF2KCkge1xyXG4gICAgZml4ZWRDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZml4ZWRDbG9uZS5pZCA9ICdmaXhlZE5hdic7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ2MtYmxvZ19fYXNpZGUnKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ3Bvcy1maXhlZCcpO1xyXG4gICAgZml4ZWRDbG9uZS5pbm5lckhUTUwgPSBuYXZCbG9jay5pbm5lckhUTUw7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGZpeGVkQ2xvbmUpO1xyXG4gICAgbGV0IGxpbmtzID0gWy4uLmZpeGVkQ2xvbmUucXVlcnlTZWxlY3RvckFsbCgnLmMtYmxvZ19fbmF2LWxpbmsnKV07XHJcbiAgICBsaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1NlY3Rpb24sIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgLy8qLS0gZm9yIHBvcnRhYmxlIGRldmljZXMtLVxyXG4gICAgaWYodGFibGV0TXRoLm1hdGNoZXMpIHtcclxuICAgICAgbGV0IHRhYmxldEJ1dCA9IGZpeGVkQ2xvbmUucXVlcnlTZWxlY3RvcignLmMtYmxvZ19fbWVudS1zd2lwZScpO1xyXG4gICAgICB0YWJsZXRCdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2JpbGUsIGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFNlY3Rpb24gPSBzY3JvbGxQb3MgPT4gIHtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKSByZXR1cm4gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyT2Zmc2V0Lmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgaWYoc2Nyb2xsUG9zPmFyck9mZnNldFtpXSYmc2Nyb2xsUG9zPGFyck9mZnNldFtpKzFdKVxyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyck9mZnNldC5sZW5ndGgtMTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzZXRBY3RJdGVtID0gbGlua3MgPT4ge1xyXG4gICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBsZXQgYWN0SXRlbSA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgIGFjdEl0ZW0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XHJcbiAgICAgIFtdLmZvckVhY2guY2FsbChzaWJsaW5ncyhhY3RJdGVtKSwgZnVuY3Rpb24oaXQpIHtcclxuICAgICAgICBpZihpdC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKVxyXG4gICAgICAgICAgaXQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hlY2tTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gY29udGFpbmVyLnNjcm9sbFRvcDtcclxuICAgIGlmKGZpeGVkQ2xvbmUmJnNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdK2ZpcnN0U2NySGVpZ2h0JiZuYXZCbG9jay5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKSB7XHJcbiAgICAgIGlmKCF0YWJsZXRNdGgubWF0Y2hlc3x8IWZpeGVkQ2xvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbmltYXRlT3BlbicpKSB7XHJcbiAgICAgICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgICBuYXZCbG9jay5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8qIGhlYWRlci53aWR0aCowLjA0IC0gcGFkZGluZy10b3BcclxuICAgIGlmKGZpeGVkQ2xvbmUmJnNjcm9sbFBvcz5maXJzdFNjckhlaWdodC1oZWFkZXIud2lkdGgqMC4wNCkge1xyXG4gICAgICBuYXZCbG9jay5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgICAgaWYoZml4ZWRDbG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ3Zpc3VhbGx5LWhpZGRlbicpKVxyXG4gICAgICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICB9XHJcbiAgICBsZXQgZGF0YVNlY3Rpb24gPSBzZWN0aW9uc1tnZXRTZWN0aW9uKHNjcm9sbFBvcy1oZWFkZXIud2lkdGgqMC4wNCldLmRhdGFzZXQuc2VjdGlvbixcclxuICAgICAgbGlua3NBY3QgPSBbLi4uYm9keS5xdWVyeVNlbGVjdG9yQWxsKGAuYy1ibG9nX19uYXYtbGlua1tocmVmPVwiIyR7ZGF0YVNlY3Rpb259XCJgKV07XHJcbiAgICAvLyogdGhlbiBhZnRlciBhbmltYXRpb246IGZyQW5pbWF0ZWQgPSB0cnVlIFxyXG4gICAgaWYoIWZyQW5pbWF0ZWQpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBkYXRhU2VjdGlvbjsgXHJcbiAgICAgIHNldEFjdEl0ZW0obGlua3NBY3QpO1xyXG4gICAgfVxyXG4gICAgLy8qIHNldCBkZWZhdWx0IGZyQW5pbWF0ZWRcclxuICAgIGZyQW5pbWF0ZWQgPSBmYWxzZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkZWxldGVBbmltYXRDbGFzc2VzID0gKCkgPT4ge1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlT3BlbicpO1xyXG4gICAgZml4ZWRDbG9uZS5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkZWxldGVBbmltYXRDbGFzc2VzLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gc2hvd1NlY3Rpb24oZSkge1xyXG4gICAgaWYoIXdpbmRvdy5sb2NhdGlvbi5oYXNoKSByZXR1cm47XHJcbiAgICBsZXQgaGFzaCA9IGU/dGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTp3aW5kb3cubG9jYXRpb24uaGFzaCxcclxuICAgICAgc2VjdGlvbkFjdCA9IGJvZHkucXVlcnlTZWxlY3RvcihgLmMtYmxvZ19fYXJ0aWNsZVtkYXRhLXNlY3Rpb249XCIke2hhc2gucmVwbGFjZSgvIy8sJycpfVwiYCksXHJcbiAgICAgIGxpbmtzQWN0ID0gWy4uLmJvZHkucXVlcnlTZWxlY3RvckFsbChgLmMtYmxvZ19fbmF2LWxpbmtbaHJlZj1cIiR7aGFzaH1cImApXSxcclxuICAgICAgaW5kZXggPSBzZWN0aW9ucy5pbmRleE9mKHNlY3Rpb25BY3QpO1xyXG4gICAgc2V0QWN0SXRlbShsaW5rc0FjdCk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IHNlY3Rpb25BY3QuZGF0YXNldC5zZWN0aW9uO1xyXG4gICAgbGV0IHNjcm9sbFBvcyA9IChpbmRleCA9PT0gMCk/Zmlyc3RTY3JIZWlnaHQ6KGZpcnN0U2NySGVpZ2h0ICsgYXJyT2Zmc2V0W2luZGV4XSArIGhlYWRlci53aWR0aCowLjA1KTtcclxuICAgIGNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCwgZmFsc2UpO1xyXG5cclxuICAgIGlmKGUpIHtcclxuICAgICAgaWYodGFibGV0TXRoLm1hdGNoZXMpIHtcclxuICAgICAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVDbG9zZScpO1xyXG4gICAgICAgIGZpeGVkQ2xvbmUuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGVsZXRlQW5pbWF0Q2xhc3NlcywgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGFuaW1hdGVNb3ZlKGUsIHNjcm9sbFBvcyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIFxyXG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBmckFuaW1hdGVkID0gdHJ1ZTtcclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpLFxyXG4gICAgICBzdGFydFBvcyA9IGNvbnRhaW5lci5zY3JvbGxUb3A7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gX2FuaW1hdGUodGltZSkge1xyXG4gICAgLy8gdGltZUZyYWN0aW9uINC+0YIgMCDQtNC+IDFcclxuICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9ICh0aW1lIC0gc3RhcnQpIC8gb3B0aW9ucy5kdXJhdGlvbjtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHtcclxuICAgICAgICB0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCwgZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vINGC0LXQutGD0YnQtdC1INGB0L7RgdGC0L7Rj9C90LjQtSDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IG9wdGlvbnMudGltaW5nKHRpbWVGcmFjdGlvbik7XHJcbiAgICAgIG9wdGlvbnMubW92ZShwcm9ncmVzcywgc3RhcnRQb3MpO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVNb3ZlID0gKGUsIHNjcm9sbFBvcykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYW5pbWF0ZSh7XHJcbiAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcclxuICAgICAgfSxcclxuICAgICAgbW92ZTogZnVuY3Rpb24ocHJvZ3Jlc3MsIHN0YXJ0UG9zKSB7XHJcbiAgICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHN0YXJ0UG9zICsgKHNjcm9sbFBvcy0gc3RhcnRQb3MpKihwcm9ncmVzcyk7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBtb2JpbGUgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIG5hdkJsb2NrLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZUNsb3NlJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ292ZXJsYXktbW9iaWxlJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGVPcGVuJyk7XHJcbiAgICAgICBcclxuICB9O1xyXG5cclxuICBjb25zdCBpbml0ID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlRml4TmF2KCk7XHJcbiAgICBzaG93U2VjdGlvbigpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICBsaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1NlY3Rpb24sIGZhbHNlKTtcclxuICAgIH0pO1xyXG4gICAgaWYodGFibGV0TXRoLm1hdGNoZXMpIHtcclxuICAgICAgdGFibGV0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9iaWxlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtpbml0fTtcclxufSkoKTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiAtLS0tLS0tLS0tLXJ1biBhcHAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbndpbmRvdy5vbmxvYWQgPSBpbml0O1xyXG5jb25zb2xlLmxvZygnSXRgIHdvcmsgJSUlIScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9ibG9nLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdHlsZXMvYmxvZy5tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImNvbnN0IHJ1bkNvZGVQcmV0dGlmeSA9ICgpID0+IHtcclxuICBjb25zdCBwcmVzID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdwcmUnKTtcclxuICBbXS5mb3JFYWNoLmNhbGwocHJlcywgZnVuY3Rpb24oZWwpIHtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ3ByZXR0eXByaW50Jyk7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdsaW5lbnVtcycpO1xyXG4gIH0pO1xyXG4gIGxldCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcclxuICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gIHNjcmlwdC5hc3luYyA9IHRydWU7XHJcblxyXG4gIHNjcmlwdC5zcmMgPSAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9nb29nbGUvY29kZS1wcmV0dGlmeS9tYXN0ZXIvbG9hZGVyL3J1bl9wcmV0dGlmeS5qcyc7XHJcbiAgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0gfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXSkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJ1bkNvZGVQcmV0dGlmeTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9jb2RlX3ByZXR0aWZ5LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==