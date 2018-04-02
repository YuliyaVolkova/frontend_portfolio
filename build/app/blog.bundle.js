/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "app/" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
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
    overlay.classList.add('to_open');
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
    this.classList.remove('animate');
    overlay.classList.remove('to_close');
    overlay.classList.remove('to_open');
    overlay.remove();
    button.style.transform = 'scale(1.1)';
    button.style.WebkitTransform = 'scale(1.1)';
    button.addEventListener('click', openOverlay, false);
  }

  function closeOverlay(e) {

    e.preventDefault();
    var close = overlay.querySelector('#closeOverlay');
    close.removeEventListener('click', closeOverlay, false);
    body.removeEventListener('keydown', isEsc, false);
    overlay.classList.add('to_close');
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var preloader = function preloader(ImagePreloader) {
  var preloader = new ImagePreloader(),
      body = document.body,
      imgs = [].concat(_toConsumableArray(body.querySelectorAll('img'))),
      imgUrls = imgs.map(function (x) {
    return x.src;
  }),
      bgUrls = ['../assets/images/decor/bg/mountains.jpg'],
      loader = body.querySelector('#loader'),
      textContainer = loader.querySelector('#preloaderText'),
      urls = [].concat(_toConsumableArray(imgUrls), bgUrls),
      circles = [].concat(_toConsumableArray(loader.querySelectorAll('circle'))),
      total = urls.length,
      counter = 0;

  var init = function init() {
    imgs.forEach(function (el) {
      el.style.display = 'block';
    });
    circles.forEach(function (el) {
      var circleLength = (2 * Math.PI * el.getAttributeNode('r').nodeValue).toFixed(4);
      el.setAttribute('stroke-dasharray', '' + circleLength);
      el.setAttribute('stroke-dashoffset', '' + circleLength);
      el.style.opacity = '1';
    });
  };

  preloader.onProgress = function () {
    textContainer.textContent = '' + parseInt(++counter / total * 100);
    circles.forEach(function (el, ind) {
      var d = 2 * Math.PI * el.getAttributeNode('r').nodeValue;
      var c = (d * (1 - (counter - 1) / (total - 1))).toFixed(4);
      el.setAttribute('stroke-dashoffset', '' + c * (ind + 1) * 0.7);
    });
  };
  init();
  preloader.preload(urls).then(function () {
    setTimeout(function () {
      body.classList.add('loaded');
    }, 500);
  });
};
exports.default = preloader;

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(23);

var _svg4everybody = __webpack_require__(3);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _code_prettify = __webpack_require__(24);

var _code_prettify2 = _interopRequireDefault(_code_prettify);

var _cHamburger = __webpack_require__(7);

var _cHamburger2 = _interopRequireDefault(_cHamburger);

var _preloader_pages = __webpack_require__(8);

var _preloader_pages2 = _interopRequireDefault(_preloader_pages);

var _scroll_blog = __webpack_require__(25);

var _scroll_blog2 = _interopRequireDefault(_scroll_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

//* preloader
undefined;

__webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(9)]; ((_preloader_pages2.default).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);


///*------------------------------------
///* init app welcome-page
///*-------------------------------------
var init = function init() {
  (0, _code_prettify2.default)();
  _scroll_blog2.default.init();
  _cHamburger2.default.handler();
};
///*------------------------------------------------
///* -----------run app-----------------------------
///*------------------------------------------------
window.onload = init;
console.log('It` work %%%!');

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

///*------------------------------------
///* scroll blog-articles
///*-------------------------------------

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
exports.default = scrollBlog;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDY1Yjc3MWM1MjI1YjVlZTJmNjciLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcmVsb2FkZXJfcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcz82M2NhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvc2Nyb2xsX2Jsb2cuanMiXSwibmFtZXMiOlsiaGFtYnVyZ2VyTmF2IiwiYm9keSIsImRvY3VtZW50IiwiY29tcG9uZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsIm92ZXJsYXkiLCJ0ZW1wbGF0ZSIsImNyZWF0ZU92ZXJsYXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaXNFc2MiLCJlIiwid2hpY2giLCJjbG9zZU92ZXJsYXkiLCJpbnNlcnRPdmVybGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJjbG9zZSIsImhvbWVMaW5rIiwicGFyZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuT3ZlcmxheSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlQ2xhc3NBbmltYXRlIiwiV2Via2l0VHJhbnNmb3JtIiwiaGFuZGxlciIsInByZWxvYWRlciIsIkltYWdlUHJlbG9hZGVyIiwiaW1ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWdVcmxzIiwibWFwIiwieCIsInNyYyIsImJnVXJscyIsImxvYWRlciIsInRleHRDb250YWluZXIiLCJ1cmxzIiwiY2lyY2xlcyIsInRvdGFsIiwibGVuZ3RoIiwiY291bnRlciIsImluaXQiLCJmb3JFYWNoIiwiZWwiLCJkaXNwbGF5IiwiY2lyY2xlTGVuZ3RoIiwiTWF0aCIsIlBJIiwiZ2V0QXR0cmlidXRlTm9kZSIsIm5vZGVWYWx1ZSIsInRvRml4ZWQiLCJzZXRBdHRyaWJ1dGUiLCJvcGFjaXR5Iiwib25Qcm9ncmVzcyIsInRleHRDb250ZW50IiwicGFyc2VJbnQiLCJpbmQiLCJkIiwiYyIsInByZWxvYWQiLCJ0aGVuIiwic2V0VGltZW91dCIsIndpbmRvdyIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJydW5Db2RlUHJldHRpZnkiLCJwcmVzIiwiY2FsbCIsInNjcmlwdCIsInR5cGUiLCJhc3luYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2Nyb2xsQmxvZyIsInNlY3Rpb25zIiwiY29udGFpbmVyIiwiYXJyT2Zmc2V0IiwiaXRlbSIsIm9mZnNldFRvcCIsIm5hdkJsb2NrIiwibGlua3MiLCJ0YWJsZXRCdXR0b24iLCJmaXJzdFNjckhlaWdodCIsImhlYWRlciIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImZpeGVkQ2xvbmUiLCJ0YWJsZXRNdGgiLCJtYXRjaE1lZGlhIiwic2libGluZ3MiLCJuIiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJmckFuaW1hdGVkIiwiY3JlYXRlRml4TmF2IiwiaWQiLCJzaG93U2VjdGlvbiIsIm1hdGNoZXMiLCJ0YWJsZXRCdXQiLCJtb2JpbGUiLCJnZXRTZWN0aW9uIiwic2Nyb2xsUG9zIiwiaSIsInNldEFjdEl0ZW0iLCJhY3RJdGVtIiwiaXQiLCJjb250YWlucyIsImNoZWNrU2Nyb2xsIiwic2Nyb2xsVG9wIiwid2lkdGgiLCJkYXRhU2VjdGlvbiIsImRhdGFzZXQiLCJzZWN0aW9uIiwibGlua3NBY3QiLCJsb2NhdGlvbiIsImhhc2giLCJkZWxldGVBbmltYXRDbGFzc2VzIiwiZ2V0QXR0cmlidXRlIiwic2VjdGlvbkFjdCIsInJlcGxhY2UiLCJpbmRleCIsImluZGV4T2YiLCJhbmltYXRlTW92ZSIsImFuaW1hdGUiLCJvcHRpb25zIiwic3RhcnQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInN0YXJ0UG9zIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiX2FuaW1hdGUiLCJ0aW1lIiwidGltZUZyYWN0aW9uIiwiZHVyYXRpb24iLCJwcm9ncmVzcyIsInRpbWluZyIsIm1vdmUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFB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TixRQUFuQixFQUE2QjtBQUNqQ3BELGtCQUFVZ0MsU0FBVixHQUFzQm9CLFdBQVcsQ0FBQzNCLFlBQVcyQixRQUFaLElBQXVCTSxRQUF4RDtBQUNEO0FBUEssS0FBUjtBQVNELEdBWEQ7O0FBYUEsTUFBTW5DLFNBQVMsU0FBVEEsTUFBUyxJQUFLO0FBQ2xCM0YsTUFBRWMsY0FBRjtBQUNBMEQsYUFBUzVFLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGlCQUF2QjtBQUNBaUYsZUFBV2xGLFNBQVgsQ0FBcUJZLE1BQXJCLENBQTRCLGlCQUE1QjtBQUNBc0UsZUFBV2xGLFNBQVgsQ0FBcUJZLE1BQXJCLENBQTRCLGNBQTVCO0FBQ0FzRSxlQUFXbEYsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsZ0JBQXpCO0FBQ0FpRixlQUFXbEYsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsYUFBekI7QUFDRCxHQVBEOztBQVNBLE1BQU1xQyxPQUFPLFNBQVBBLElBQU8sR0FBTTtBQUNqQm9EO0FBQ0FFO0FBQ0FwQixjQUFVeEQsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUN1RixXQUFyQyxFQUFrRCxLQUFsRDtBQUNBMUIsVUFBTXRDLE9BQU4sQ0FBYyxVQUFTQyxFQUFULEVBQWE7QUFDekJBLFNBQUd4QixnQkFBSCxDQUFvQixPQUFwQixFQUE2QjRFLFdBQTdCLEVBQTBDLEtBQTFDO0FBQ0QsS0FGRDtBQUdBZCxpQkFBYTlELGdCQUFiLENBQThCLE9BQTlCLEVBQXVDK0UsTUFBdkMsRUFBK0MsS0FBL0M7QUFDRCxHQVJEO0FBU0EsU0FBTyxFQUFDekQsVUFBRCxFQUFQO0FBQ0QsQ0E5SmtCLEVBQW5CO2tCQStKZWdDLFUiLCJmaWxlIjoiYXBwL2Jsb2cuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXTtcbiBcdHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpIHtcbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdLCByZXN1bHQ7XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihjaHVua0lkcywgbW9yZU1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdHMgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0NDogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgPT09IDApIHtcbiBcdFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkgeyByZXNvbHZlKCk7IH0pO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZENodW5rRGF0YVsyXTtcbiBcdFx0fVxuXG4gXHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0fSk7XG4gXHRcdGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2U7XG5cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSBcInRleHQvamF2YXNjcmlwdFwiO1xuIFx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG4gXHRcdHNjcmlwdC5hc3luYyA9IHRydWU7XG4gXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwMDAwO1xuXG4gXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG4gXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHR9XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcImFwcC9cIiArIGNodW5rSWQgKyBcIi5idW5kbGUuanNcIjtcbiBcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUsIDEyMDAwMCk7XG4gXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdGZ1bmN0aW9uIG9uU2NyaXB0Q29tcGxldGUoKSB7XG4gXHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuIFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0aWYoY2h1bmspIHtcbiBcdFx0XHRcdFx0Y2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHJldHVybiBwcm9taXNlO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NjViNzcxYzUyMjViNWVlMmY2NyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS9kaXN0L3N2ZzRldmVyeWJvZHkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyA0IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuY29uc3QgaGFtYnVyZ2VyTmF2ID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBjb21wb25lbnQgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5jLWhhbWJ1cmdlci1uYXYnKSxcclxuICAgIGJ1dHRvbiA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcjb3Blbk92ZXJsYXknKSxcclxuICAgIG92ZXJsYXksXHJcbiAgICB0ZW1wbGF0ZSA9IGNvbXBvbmVudC5xdWVyeVNlbGVjdG9yKCcjaGFtYnVyZ2VyVGVtcGxhdGUnKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlT3ZlcmxheSA9ICgpID0+IHtcclxuICAgIG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheScpO1xyXG4gICAgb3ZlcmxheS5pbm5lckhUTUwgPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XHJcbiAgfTtcclxuICAgIFxyXG4gIGNvbnN0IGlzRXNjID0gZSA9PiB7XHJcbiAgICBzd2l0Y2goZS53aGljaCkge1xyXG4gICAgY2FzZSAyNzogY2xvc2VPdmVybGF5KGUpO1xyXG4gICAgICBicmVhazsgICAgICAgXHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTsgICBcclxuXHJcbiAgZnVuY3Rpb24gaW5zZXJ0T3ZlcmxheSgpIHtcclxuICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBpbnNlcnRPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgwLjAwMSknO1xyXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndG9fb3BlbicpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5JyksXHJcbiAgICAgIGhvbWVMaW5rID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcuYy1oYW1idXJnZXItbmF2X19saW5rW2hyZWY9XCIjXCJdJykucGFyZW50RWxlbWVudDtcclxuICAgIGhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5LCBmYWxzZSk7ICBcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBpc0VzYywgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gb3Blbk92ZXJsYXkoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1x0XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGluc2VydE92ZXJsYXksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlbW92ZUNsYXNzQW5pbWF0ZSgpIHtcclxuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgcmVtb3ZlQ2xhc3NBbmltYXRlLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndG9fY2xvc2UnKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgndG9fb3BlbicpO1xyXG4gICAgb3ZlcmxheS5yZW1vdmUoKTtcclxuICAgIGJ1dHRvbi5zdHlsZS50cmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICBidXR0b24uc3R5bGUuV2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlKDEuMSknO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk92ZXJsYXksIGZhbHNlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlT3ZlcmxheShlKSB7XHJcbiAgIFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGNsb3NlID0gb3ZlcmxheS5xdWVyeVNlbGVjdG9yKCcjY2xvc2VPdmVybGF5Jyk7XHJcbiAgICBjbG9zZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT3ZlcmxheSwgZmFsc2UpO1xyXG4gICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaXNFc2MsIGZhbHNlKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgndG9fY2xvc2UnKTtcclxuICAgIGNsb3NlLmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIHJlbW92ZUNsYXNzQW5pbWF0ZSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGNyZWF0ZU92ZXJsYXkoKTtcclxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5PdmVybGF5LCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbWJ1cmdlck5hdjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvYy1oYW1idXJnZXIuanMiLCIndXNlIHN0cmljdCc7XHJcbmNvbnN0IHByZWxvYWRlciA9IChJbWFnZVByZWxvYWRlcikgPT4ge1xyXG4gIHZhciBwcmVsb2FkZXIgPSBuZXcgSW1hZ2VQcmVsb2FkZXIoKSxcclxuICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgaW1ncyA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXSxcclxuICAgIGltZ1VybHMgPSBpbWdzLm1hcCh4ID0+IHguc3JjKSxcclxuICAgIGJnVXJscyA9IFsnLi4vYXNzZXRzL2ltYWdlcy9kZWNvci9iZy9tb3VudGFpbnMuanBnJ10sXHJcbiAgICBsb2FkZXIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXInKSxcclxuICAgIHRleHRDb250YWluZXIgPSBsb2FkZXIucXVlcnlTZWxlY3RvcignI3ByZWxvYWRlclRleHQnKSxcclxuICAgIHVybHMgPSBbLi4uaW1nVXJscywgLi4uYmdVcmxzXSxcclxuICAgIGNpcmNsZXMgPSBbLi4ubG9hZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2NpcmNsZScpXSxcclxuICAgIHRvdGFsID0gdXJscy5sZW5ndGgsXHJcbiAgICBjb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGltZ3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIGxldCBjaXJjbGVMZW5ndGggPSAoMipNYXRoLlBJKmVsLmdldEF0dHJpYnV0ZU5vZGUoJ3InKS5ub2RlVmFsdWUpLnRvRml4ZWQoNCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGAke2NpcmNsZUxlbmd0aH1gKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIGAke2NpcmNsZUxlbmd0aH1gKTtcclxuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByZWxvYWRlci5vblByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoKytjb3VudGVyL3RvdGFsKjEwMCl9YDtcclxuICAgIGNpcmNsZXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaW5kKSB7XHJcbiAgICAgIGxldCBkID0gMiAqIE1hdGguUEkgKiBlbC5nZXRBdHRyaWJ1dGVOb2RlKCdyJykubm9kZVZhbHVlO1xyXG4gICAgICBsZXQgYyA9IChkKigxLSAoY291bnRlci0xKS8odG90YWwtMSkpKS50b0ZpeGVkKDQpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgYCR7YyAqIChpbmQgKyAxKSAqIDAuN31gKTtcclxuICAgIH0pOyAgICAgXHJcbiAgfTtcclxuICBpbml0KCk7XHJcbiAgcHJlbG9hZGVyLnByZWxvYWQodXJscylcclxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcHJlbG9hZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL3ByZWxvYWRlcl9wYWdlcy5qcyIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBydW5Db2RlUHJldHRpZnkgZnJvbSAnLi9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMnO1xyXG5pbXBvcnQgaGFtYnVyZ2VyTmF2IGZyb20gJy4vY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyc7XHJcbi8vKiBwcmVsb2FkZXJcclxucmVxdWlyZS5jb25maWcoe1xyXG4gIHBhdGhzOiB7XHJcbiAgICAnaW1hZ2UtcHJlbG9hZGVyJzogJy4uL2J1aWxkL2ltYWdlUHJlbG9hZGVyLm1pbicsXHJcbiAgfSxcclxufSk7XHJcbmltcG9ydCBwcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL3ByZWxvYWRlcl9wYWdlcy5qcyc7XHJcbnJlcXVpcmUoWydpbWFnZS1wcmVsb2FkZXInXSwgcHJlbG9hZGVyKTtcclxuaW1wb3J0IHNjcm9sbEJsb2cgZnJvbSAnLi9jb21wb25lbnRzL3Njcm9sbF9ibG9nLmpzJztcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBpbml0IGFwcCB3ZWxjb21lLXBhZ2VcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBydW5Db2RlUHJldHRpZnkoKTtcclxuICBzY3JvbGxCbG9nLmluaXQoKTtcclxuICBoYW1idXJnZXJOYXYuaGFuZGxlcigpO1xyXG59O1xyXG4vLy8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyogLS0tLS0tLS0tLS1ydW4gYXBwLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG53aW5kb3cub25sb2FkID0gaW5pdDtcclxuY29uc29sZS5sb2coJ0l0YCB3b3JrICUlJSEnKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYmxvZy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2Jsb2cubWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJjb25zdCBydW5Db2RlUHJldHRpZnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgcHJlcyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XHJcbiAgW10uZm9yRWFjaC5jYWxsKHByZXMsIGZ1bmN0aW9uKGVsKSB7XHJcbiAgICBlbC5jbGFzc0xpc3QuYWRkKCdwcmV0dHlwcmludCcpO1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgnbGluZW51bXMnKTtcclxuICB9KTtcclxuICBsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xyXG5cclxuICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vZ29vZ2xlL2NvZGUtcHJldHRpZnkvbWFzdGVyL2xvYWRlci9ydW5fcHJldHRpZnkuanMnO1xyXG4gIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF0pLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBydW5Db2RlUHJldHRpZnk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvY29kZV9wcmV0dGlmeS5qcyIsIid1c2Ugc3RyaWN0JztcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIHNjcm9sbCBibG9nLWFydGljbGVzXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHNjcm9sbEJsb2cgPSAoKCkgPT4ge1xyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSxcclxuICAgIHNlY3Rpb25zID0gWy4uLmJvZHkucXVlcnlTZWxlY3RvckFsbCgnLmMtYmxvZ19fYXJ0aWNsZScpXSxcclxuICAgIGNvbnRhaW5lciA9IGJvZHkucXVlcnlTZWxlY3RvcignLmwtc2Nyb2xsLXBhcmFsbGF4LWNvbnRhaW5lcicpLFxyXG4gICAgYXJyT2Zmc2V0ID0gc2VjdGlvbnMubWFwKChpdGVtKSA9PiBpdGVtLm9mZnNldFRvcCksXHJcbiAgICBuYXZCbG9jayA9IGJvZHkucXVlcnlTZWxlY3RvcignI2Fic29sdXRlTmF2JyksXHJcbiAgICBsaW5rcyA9IFsuLi5uYXZCbG9jay5xdWVyeVNlbGVjdG9yQWxsKCcuYy1ibG9nX19uYXYtbGluaycpXSxcclxuICAgIHRhYmxldEJ1dHRvbiA9IG5hdkJsb2NrLnF1ZXJ5U2VsZWN0b3IoJy5jLWJsb2dfX21lbnUtc3dpcGUnKSxcclxuICAgIGZpcnN0U2NySGVpZ2h0ID0gYm9keS5xdWVyeVNlbGVjdG9yKCcucGFyYWxsYXhfX2NvbnRlbnQnKS5vZmZzZXRUb3AsXHJcbiAgICBoZWFkZXIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLWhlcm9fYmxvZycpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxyXG4gICAgZml4ZWRDbG9uZSxcclxuICAgIHRhYmxldE10aCA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjhweCknKSxcclxuICAgIHNpYmxpbmdzID0gbiA9PiBbLi4ubi5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXS5maWx0ZXIoYz0+YyE9bik7XHJcbiAgdmFyICBmckFuaW1hdGVkID0gZmFsc2U7XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUZpeE5hdigpIHtcclxuICAgIGZpeGVkQ2xvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZpeGVkQ2xvbmUuaWQgPSAnZml4ZWROYXYnO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdjLWJsb2dfX2FzaWRlJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdwb3MtZml4ZWQnKTtcclxuICAgIGZpeGVkQ2xvbmUuaW5uZXJIVE1MID0gbmF2QmxvY2suaW5uZXJIVE1MO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChmaXhlZENsb25lKTtcclxuICAgIGxldCBsaW5rcyA9IFsuLi5maXhlZENsb25lLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX25hdi1saW5rJyldO1xyXG4gICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0aW9uLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIC8vKi0tIGZvciBwb3J0YWJsZSBkZXZpY2VzLS1cclxuICAgIGlmKHRhYmxldE10aC5tYXRjaGVzKSB7XHJcbiAgICAgIGxldCB0YWJsZXRCdXQgPSBmaXhlZENsb25lLnF1ZXJ5U2VsZWN0b3IoJy5jLWJsb2dfX21lbnUtc3dpcGUnKTtcclxuICAgICAgdGFibGV0QnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbW9iaWxlLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRTZWN0aW9uID0gc2Nyb2xsUG9zID0+ICB7XHJcbiAgICBpZihzY3JvbGxQb3M8PWFyck9mZnNldFswXSkgcmV0dXJuIDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyck9mZnNldC5sZW5ndGgtMTsgaSsrKSB7XHJcbiAgICAgIGlmKHNjcm9sbFBvcz5hcnJPZmZzZXRbaV0mJnNjcm9sbFBvczxhcnJPZmZzZXRbaSsxXSlcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcnJPZmZzZXQubGVuZ3RoLTE7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2V0QWN0SXRlbSA9IGxpbmtzID0+IHtcclxuICAgIGxpbmtzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgbGV0IGFjdEl0ZW0gPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICBhY3RJdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICBbXS5mb3JFYWNoLmNhbGwoc2libGluZ3MoYWN0SXRlbSksIGZ1bmN0aW9uKGl0KSB7XHJcbiAgICAgICAgaWYoaXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1hY3RpdmUnKSlcclxuICAgICAgICAgIGl0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoZWNrU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgbGV0IHNjcm9sbFBvcyA9IGNvbnRhaW5lci5zY3JvbGxUb3A7XHJcbiAgICBpZihmaXhlZENsb25lJiZzY3JvbGxQb3M8PWFyck9mZnNldFswXStmaXJzdFNjckhlaWdodCYmbmF2QmxvY2suY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSkge1xyXG4gICAgICBpZighdGFibGV0TXRoLm1hdGNoZXN8fCFmaXhlZENsb25lLmNsYXNzTGlzdC5jb250YWlucygnYW5pbWF0ZU9wZW4nKSkge1xyXG4gICAgICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vKiBoZWFkZXIud2lkdGgqMC4wNCAtIHBhZGRpbmctdG9wXHJcbiAgICBpZihmaXhlZENsb25lJiZzY3JvbGxQb3M+Zmlyc3RTY3JIZWlnaHQtaGVhZGVyLndpZHRoKjAuMDQpIHtcclxuICAgICAgbmF2QmxvY2suY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICAgIGlmKGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmNvbnRhaW5zKCd2aXN1YWxseS1oaWRkZW4nKSlcclxuICAgICAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGFTZWN0aW9uID0gc2VjdGlvbnNbZ2V0U2VjdGlvbihzY3JvbGxQb3MtaGVhZGVyLndpZHRoKjAuMDQpXS5kYXRhc2V0LnNlY3Rpb24sXHJcbiAgICAgIGxpbmtzQWN0ID0gWy4uLmJvZHkucXVlcnlTZWxlY3RvckFsbChgLmMtYmxvZ19fbmF2LWxpbmtbaHJlZj1cIiMke2RhdGFTZWN0aW9ufVwiYCldO1xyXG4gICAgLy8qIHRoZW4gYWZ0ZXIgYW5pbWF0aW9uOiBmckFuaW1hdGVkID0gdHJ1ZSBcclxuICAgIGlmKCFmckFuaW1hdGVkKSB7XHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gZGF0YVNlY3Rpb247IFxyXG4gICAgICBzZXRBY3RJdGVtKGxpbmtzQWN0KTtcclxuICAgIH1cclxuICAgIC8vKiBzZXQgZGVmYXVsdCBmckFuaW1hdGVkXHJcbiAgICBmckFuaW1hdGVkID0gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQW5pbWF0Q2xhc3NlcyA9ICgpID0+IHtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZU9wZW4nKTtcclxuICAgIGZpeGVkQ2xvbmUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZGVsZXRlQW5pbWF0Q2xhc3NlcywgZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dTZWN0aW9uKGUpIHtcclxuICAgIGlmKCF3aW5kb3cubG9jYXRpb24uaGFzaCkgcmV0dXJuO1xyXG4gICAgbGV0IGhhc2ggPSBlP3RoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk6d2luZG93LmxvY2F0aW9uLmhhc2gsXHJcbiAgICAgIHNlY3Rpb25BY3QgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoYC5jLWJsb2dfX2FydGljbGVbZGF0YS1zZWN0aW9uPVwiJHtoYXNoLnJlcGxhY2UoLyMvLCcnKX1cImApLFxyXG4gICAgICBsaW5rc0FjdCA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIke2hhc2h9XCJgKV0sXHJcbiAgICAgIGluZGV4ID0gc2VjdGlvbnMuaW5kZXhPZihzZWN0aW9uQWN0KTtcclxuICAgIHNldEFjdEl0ZW0obGlua3NBY3QpO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBzZWN0aW9uQWN0LmRhdGFzZXQuc2VjdGlvbjtcclxuICAgIGxldCBzY3JvbGxQb3MgPSAoaW5kZXggPT09IDApP2ZpcnN0U2NySGVpZ2h0OihmaXJzdFNjckhlaWdodCArIGFyck9mZnNldFtpbmRleF0gKyBoZWFkZXIud2lkdGgqMC4wNSk7XHJcbiAgICBjb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwsIGZhbHNlKTtcclxuXHJcbiAgICBpZihlKSB7XHJcbiAgICAgIGlmKHRhYmxldE10aC5tYXRjaGVzKSB7XHJcbiAgICAgICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlQ2xvc2UnKTtcclxuICAgICAgICBmaXhlZENsb25lLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGRlbGV0ZUFuaW1hdENsYXNzZXMsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBhbmltYXRlTW92ZShlLCBzY3JvbGxQb3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBcclxuICAgICAgY29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFBvcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAob3B0aW9ucykgPT4ge1xyXG4gICAgZnJBbmltYXRlZCA9IHRydWU7XHJcbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKSxcclxuICAgICAgc3RhcnRQb3MgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIF9hbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiDQvtGCIDAg0LTQviAxXHJcbiAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB7XHJcbiAgICAgICAgdGltZUZyYWN0aW9uID0gMTtcclxuICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwsIGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgICBvcHRpb25zLm1vdmUocHJvZ3Jlc3MsIHN0YXJ0UG9zKTtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8IDEpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2FuaW1hdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhbmltYXRlTW92ZSA9IChlLCBzY3JvbGxQb3MpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFuaW1hdGUoe1xyXG4gICAgICBkdXJhdGlvbjogNzAwLFxyXG4gICAgICB0aW1pbmc6IGZ1bmN0aW9uKHRpbWVGcmFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdmU6IGZ1bmN0aW9uKHByb2dyZXNzLCBzdGFydFBvcykge1xyXG4gICAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzdGFydFBvcyArIChzY3JvbGxQb3MtIHN0YXJ0UG9zKSoocHJvZ3Jlc3MpO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbW9iaWxlID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBuYXZCbG9jay5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LnJlbW92ZSgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVDbG9zZScpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5LW1vYmlsZScpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCdhbmltYXRlT3BlbicpOyAgICAgXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGNyZWF0ZUZpeE5hdigpO1xyXG4gICAgc2hvd1NlY3Rpb24oKTtcclxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCwgZmFsc2UpO1xyXG4gICAgbGlua3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0aW9uLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICAgIHRhYmxldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vYmlsZSwgZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIHtpbml0fTtcclxufSkoKTtcclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsQmxvZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9zY3JvbGxfYmxvZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=