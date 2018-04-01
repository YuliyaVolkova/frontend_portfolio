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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(20);

var _svg4everybody = __webpack_require__(3);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _code_prettify = __webpack_require__(21);

var _code_prettify2 = _interopRequireDefault(_code_prettify);

var _cHamburger = __webpack_require__(7);

var _cHamburger2 = _interopRequireDefault(_cHamburger);

var _preloader_pages = __webpack_require__(8);

var _preloader_pages2 = _interopRequireDefault(_preloader_pages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(0, _svg4everybody2.default)();

//* preloader
undefined;

__webpack_require__.e/* require */(0/* duplicate */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(9)]; ((_preloader_pages2.default).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe);

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
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODYzNjZhYTRkZjhlOGMwODNhOGIiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wcmVsb2FkZXJfcGFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcz82M2NhIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMiXSwibmFtZXMiOlsiaGFtYnVyZ2VyTmF2IiwiYm9keSIsImRvY3VtZW50IiwiY29tcG9uZW50IiwicXVlcnlTZWxlY3RvciIsImJ1dHRvbiIsIm92ZXJsYXkiLCJ0ZW1wbGF0ZSIsImNyZWF0ZU92ZXJsYXkiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaXNFc2MiLCJlIiwid2hpY2giLCJjbG9zZU92ZXJsYXkiLCJpbnNlcnRPdmVybGF5IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJjbG9zZSIsImhvbWVMaW5rIiwicGFyZW50RWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuT3ZlcmxheSIsInByZXZlbnREZWZhdWx0IiwicmVtb3ZlQ2xhc3NBbmltYXRlIiwiV2Via2l0VHJhbnNmb3JtIiwiaGFuZGxlciIsInByZWxvYWRlciIsIkltYWdlUHJlbG9hZGVyIiwiaW1ncyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbWdVcmxzIiwibWFwIiwieCIsInNyYyIsImJnVXJscyIsImxvYWRlciIsInRleHRDb250YWluZXIiLCJ1cmxzIiwiY2lyY2xlcyIsInRvdGFsIiwibGVuZ3RoIiwiY291bnRlciIsImluaXQiLCJmb3JFYWNoIiwiZWwiLCJkaXNwbGF5IiwiY2lyY2xlTGVuZ3RoIiwiTWF0aCIsIlBJIiwiZ2V0QXR0cmlidXRlTm9kZSIsIm5vZGVWYWx1ZSIsInRvRml4ZWQiLCJzZXRBdHRyaWJ1dGUiLCJvcGFjaXR5Iiwib25Qcm9ncmVzcyIsInRleHRDb250ZW50IiwicGFyc2VJbnQiLCJpbmQiLCJkIiwiYyIsInByZWxvYWQiLCJ0aGVuIiwic2V0VGltZW91dCIsInNjcm9sbEJsb2ciLCJzZWN0aW9ucyIsImNvbnRhaW5lciIsImFyck9mZnNldCIsIml0ZW0iLCJvZmZzZXRUb3AiLCJuYXZCbG9jayIsImxpbmtzIiwidGFibGV0QnV0dG9uIiwiZmlyc3RTY3JIZWlnaHQiLCJoZWFkZXIiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJmaXhlZENsb25lIiwidGFibGV0TXRoIiwid2luZG93IiwibWF0Y2hNZWRpYSIsInNpYmxpbmdzIiwibiIsImNoaWxkcmVuIiwiZmlsdGVyIiwiZnJBbmltYXRlZCIsImNyZWF0ZUZpeE5hdiIsImlkIiwic2hvd1NlY3Rpb24iLCJtYXRjaGVzIiwidGFibGV0QnV0IiwibW9iaWxlIiwiZ2V0U2VjdGlvbiIsInNjcm9sbFBvcyIsImkiLCJzZXRBY3RJdGVtIiwiYWN0SXRlbSIsImNhbGwiLCJpdCIsImNvbnRhaW5zIiwiY2hlY2tTY3JvbGwiLCJzY3JvbGxUb3AiLCJ3aWR0aCIsImRhdGFTZWN0aW9uIiwiZGF0YXNldCIsInNlY3Rpb24iLCJsaW5rc0FjdCIsImxvY2F0aW9uIiwiaGFzaCIsImRlbGV0ZUFuaW1hdENsYXNzZXMiLCJnZXRBdHRyaWJ1dGUiLCJzZWN0aW9uQWN0IiwicmVwbGFjZSIsImluZGV4IiwiaW5kZXhPZiIsImFuaW1hdGVNb3ZlIiwiYW5pbWF0ZSIsIm9wdGlvbnMiLCJzdGFydCIsInBlcmZvcm1hbmNlIiwibm93Iiwic3RhcnRQb3MiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYW5pbWF0ZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJkdXJhdGlvbiIsInByb2dyZXNzIiwidGltaW5nIiwibW92ZSIsIm9ubG9hZCIsImNvbnNvbGUiLCJsb2ciLCJydW5Db2RlUHJldHRpZnkiLCJwcmVzIiwic2NyaXB0IiwidHlwZSIsImFzeW5jIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsV0FBVyxFQUFFO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FB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RCxDQWpLa0IsRUFBbkI7O0FBbUtBO0FBQ0E7QUFDQTtBQUNBbUMsT0FBT21ELE1BQVAsR0FBZ0J0RixJQUFoQjtBQUNBdUYsUUFBUUMsR0FBUixDQUFZLGVBQVosRTs7Ozs7O0FDbE1BLHlDOzs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQyxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsTUFBTUMsT0FBT3hJLFNBQVNELElBQVQsQ0FBY2tDLGdCQUFkLENBQStCLEtBQS9CLENBQWI7QUFDQSxLQUFHYyxPQUFILENBQVdvRCxJQUFYLENBQWdCcUMsSUFBaEIsRUFBc0IsVUFBU3hGLEVBQVQsRUFBYTtBQUNqQ0EsT0FBR3hDLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixhQUFqQjtBQUNBdUMsT0FBR3hDLFNBQUgsQ0FBYUMsR0FBYixDQUFpQixVQUFqQjtBQUNELEdBSEQ7QUFJQSxNQUFJZ0ksU0FBU3pJLFNBQVNPLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBa0ksU0FBT0MsSUFBUCxHQUFjLGlCQUFkO0FBQ0FELFNBQU9FLEtBQVAsR0FBZSxJQUFmOztBQUVBRixTQUFPcEcsR0FBUCxHQUFhLDJFQUFiO0FBQ0EsR0FBQ3JDLFNBQVM0SSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxLQUE0QzVJLFNBQVM0SSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUE3QyxFQUF1RjNILFdBQXZGLENBQW1Hd0gsTUFBbkc7QUFDRCxDQVpEOztrQkFjZUYsZSIsImZpbGUiOiJhcHAvYmxvZy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0cyB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQ0OiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSA9PT0gMCkge1xuIFx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUoKTsgfSk7XG4gXHRcdH1cblxuIFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtEYXRhWzJdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gc2V0dXAgUHJvbWlzZSBpbiBjaHVuayBjYWNoZVxuIFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHR9KTtcbiBcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZTtcblxuIFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiBcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRzY3JpcHQudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0c2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiBcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjAwMDA7XG5cbiBcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdH1cbiBcdFx0c2NyaXB0LnNyYyA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiYXBwL1wiICsgY2h1bmtJZCArIFwiLmJ1bmRsZS5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRjaHVua1sxXShuZXcgRXJyb3IoJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC4nKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG4gXHRcdFx0fVxuIFx0XHR9O1xuIFx0XHRoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cbiBcdFx0cmV0dXJuIHByb21pc2U7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDg2MzY2YWE0ZGY4ZThjMDgzYThiIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgNCIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDQiLCIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBoYW1idXJnZXJOYXYgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuYm9keSxcclxuICAgIGNvbXBvbmVudCA9IGJvZHkucXVlcnlTZWxlY3RvcignLmMtaGFtYnVyZ2VyLW5hdicpLFxyXG4gICAgYnV0dG9uID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNvcGVuT3ZlcmxheScpLFxyXG4gICAgb3ZlcmxheSxcclxuICAgIHRlbXBsYXRlID0gY29tcG9uZW50LnF1ZXJ5U2VsZWN0b3IoJyNoYW1idXJnZXJUZW1wbGF0ZScpO1xyXG5cclxuICBjb25zdCBjcmVhdGVPdmVybGF5ID0gKCkgPT4ge1xyXG4gICAgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdvdmVybGF5Jyk7XHJcbiAgICBvdmVybGF5LmlubmVySFRNTCA9IHRlbXBsYXRlLmlubmVySFRNTDtcclxuICB9O1xyXG4gICAgXHJcbiAgY29uc3QgaXNFc2MgPSBlID0+IHtcclxuICAgIHN3aXRjaChlLndoaWNoKSB7XHJcbiAgICBjYXNlIDI3OiBjbG9zZU92ZXJsYXkoZSk7XHJcbiAgICAgIGJyZWFrOyAgICAgICBcclxuICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9OyAgIFxyXG5cclxuICBmdW5jdGlvbiBpbnNlcnRPdmVybGF5KCkge1xyXG4gICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGluc2VydE92ZXJsYXksIGZhbHNlKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XHJcbiAgICBidXR0b24uc3R5bGUudHJhbnNmb3JtID0gJ3NjYWxlKDAuMDAxKSc7XHJcbiAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd0b19vcGVuJyk7XHJcbiAgICBsZXQgY2xvc2UgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU92ZXJsYXknKSxcclxuICAgICAgaG9tZUxpbmsgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJy5jLWhhbWJ1cmdlci1uYXZfX2xpbmtbaHJlZj1cIiNcIl0nKS5wYXJlbnRFbGVtZW50O1xyXG4gICAgaG9tZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXksIGZhbHNlKTsgIFxyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU92ZXJsYXksIGZhbHNlKTtcclxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGlzRXNjLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvcGVuT3ZlcmxheShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHRcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgaW5zZXJ0T3ZlcmxheSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NBbmltYXRlKCkge1xyXG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCByZW1vdmVDbGFzc0FuaW1hdGUsIGZhbHNlKTtcclxuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd0b19jbG9zZScpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCd0b19vcGVuJyk7XHJcbiAgICBvdmVybGF5LnJlbW92ZSgpO1xyXG4gICAgYnV0dG9uLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcclxuICAgIGJ1dHRvbi5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuT3ZlcmxheSwgZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VPdmVybGF5KGUpIHtcclxuICAgXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgY2xvc2UgPSBvdmVybGF5LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZU92ZXJsYXknKTtcclxuICAgIGNsb3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPdmVybGF5LCBmYWxzZSk7XHJcbiAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBpc0VzYywgZmFsc2UpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCd0b19jbG9zZScpO1xyXG4gICAgY2xvc2UuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xyXG4gICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgcmVtb3ZlQ2xhc3NBbmltYXRlLCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgY3JlYXRlT3ZlcmxheSgpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk92ZXJsYXksIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFtYnVyZ2VyTmF2O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyIsIid1c2Ugc3RyaWN0JztcclxuY29uc3QgcHJlbG9hZGVyID0gKEltYWdlUHJlbG9hZGVyKSA9PiB7XHJcblxyXG4gIHZhciBwcmVsb2FkZXIgPSBuZXcgSW1hZ2VQcmVsb2FkZXIoKSxcclxuICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxyXG4gICAgaW1ncyA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXSxcclxuICAgIGltZ1VybHMgPSBpbWdzLm1hcCh4ID0+IHguc3JjKSxcclxuICAgIGJnVXJscyA9IFsnLi4vYXNzZXRzL2ltYWdlcy9kZWNvci9iZy9tb3VudGFpbnMuanBnJ10sXHJcbiAgICBsb2FkZXIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkZXInKSxcclxuICAgIHRleHRDb250YWluZXIgPSBsb2FkZXIucXVlcnlTZWxlY3RvcignI3ByZWxvYWRlclRleHQnKSxcclxuICAgIHVybHMgPSBbLi4uaW1nVXJscywgLi4uYmdVcmxzXSxcclxuICAgIGNpcmNsZXMgPSBbLi4ubG9hZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2NpcmNsZScpXSxcclxuICAgIHRvdGFsID0gdXJscy5sZW5ndGgsXHJcbiAgICBjb3VudGVyID0gMDtcclxuXHJcbiAgY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICAgIGltZ3MuZm9yRWFjaChmdW5jdGlvbihlbCkge1xyXG4gICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0pO1xyXG4gICAgY2lyY2xlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIGxldCBjaXJjbGVMZW5ndGggPSAoMipNYXRoLlBJKmVsLmdldEF0dHJpYnV0ZU5vZGUoJ3InKS5ub2RlVmFsdWUpLnRvRml4ZWQoNCk7XHJcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIGAke2NpcmNsZUxlbmd0aH1gKTtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIGAke2NpcmNsZUxlbmd0aH1gKTtcclxuICAgICAgZWwuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHByZWxvYWRlci5vblByb2dyZXNzID0gZnVuY3Rpb24oKSB7XHJcbiAgICB0ZXh0Q29udGFpbmVyLnRleHRDb250ZW50ID0gYCR7cGFyc2VJbnQoKytjb3VudGVyL3RvdGFsKjEwMCl9YDtcclxuICAgIGNpcmNsZXMuZm9yRWFjaChmdW5jdGlvbihlbCwgaW5kKSB7XHJcbiAgICAgIGxldCBkID0gMiAqIE1hdGguUEkgKiBlbC5nZXRBdHRyaWJ1dGVOb2RlKCdyJykubm9kZVZhbHVlO1xyXG4gICAgICBsZXQgYyA9IChkKigxLSAoY291bnRlci0xKS8odG90YWwtMSkpKS50b0ZpeGVkKDQpO1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgYCR7YyAqIChpbmQgKyAxKSAqIDAuN31gKTtcclxuICAgIH0pOyAgICAgXHJcbiAgfTtcclxuICBpbml0KCk7XHJcbiAgcHJlbG9hZGVyLnByZWxvYWQodXJscylcclxuICAgIC50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGJvZHkuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgcHJlbG9hZGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL3ByZWxvYWRlcl9wYWdlcy5qcyIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcbmltcG9ydCBydW5Db2RlUHJldHRpZnkgZnJvbSAnLi9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMnO1xyXG5pbXBvcnQgaGFtYnVyZ2VyTmF2IGZyb20gJy4vY29tcG9uZW50cy9jLWhhbWJ1cmdlci5qcyc7XHJcbi8vKiBwcmVsb2FkZXJcclxucmVxdWlyZS5jb25maWcoe1xyXG4gIHBhdGhzOiB7XHJcbiAgICAnaW1hZ2UtcHJlbG9hZGVyJzogJy4uL2J1aWxkL2ltYWdlUHJlbG9hZGVyLm1pbicsXHJcbiAgfSxcclxufSk7XHJcbmltcG9ydCBwcmVsb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL3ByZWxvYWRlcl9wYWdlcy5qcyc7XHJcbnJlcXVpcmUoWydpbWFnZS1wcmVsb2FkZXInXSwgcHJlbG9hZGVyKTtcclxuXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8vKiBpbml0IGFwcCB3ZWxjb21lLXBhZ2VcclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuY29uc3QgaW5pdCA9ICgpID0+IHtcclxuICBydW5Db2RlUHJldHRpZnkoKTtcclxuICBzY3JvbGxCbG9nLmluaXQoKTtcclxuICBoYW1idXJnZXJOYXYuaGFuZGxlcigpO1xyXG59O1xyXG5cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIHNjcm9sbCBibG9nLWFydGljbGVzXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmNvbnN0IHNjcm9sbEJsb2cgPSAoKCkgPT4ge1xyXG5cclxuICBsZXQgYm9keSA9IGRvY3VtZW50LmJvZHksXHJcbiAgICBzZWN0aW9ucyA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jLWJsb2dfX2FydGljbGUnKV0sXHJcbiAgICBjb250YWluZXIgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLXNjcm9sbC1wYXJhbGxheC1jb250YWluZXInKSxcclxuICAgIGFyck9mZnNldCA9IHNlY3Rpb25zLm1hcCgoaXRlbSkgPT4gaXRlbS5vZmZzZXRUb3ApLFxyXG4gICAgbmF2QmxvY2sgPSBib2R5LnF1ZXJ5U2VsZWN0b3IoJyNhYnNvbHV0ZU5hdicpLFxyXG4gICAgbGlua3MgPSBbLi4ubmF2QmxvY2sucXVlcnlTZWxlY3RvckFsbCgnLmMtYmxvZ19fbmF2LWxpbmsnKV0sXHJcbiAgICB0YWJsZXRCdXR0b24gPSBuYXZCbG9jay5xdWVyeVNlbGVjdG9yKCcuYy1ibG9nX19tZW51LXN3aXBlJyksXHJcbiAgICBmaXJzdFNjckhlaWdodCA9IGJvZHkucXVlcnlTZWxlY3RvcignLnBhcmFsbGF4X19jb250ZW50Jykub2Zmc2V0VG9wLFxyXG4gICAgaGVhZGVyID0gYm9keS5xdWVyeVNlbGVjdG9yKCcubC1oZXJvX2Jsb2cnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcclxuICAgIGZpeGVkQ2xvbmUsXHJcbiAgICB0YWJsZXRNdGggPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY4cHgpJyksXHJcbiAgICBzaWJsaW5ncyA9IG4gPT4gWy4uLm4ucGFyZW50RWxlbWVudC5jaGlsZHJlbl0uZmlsdGVyKGM9PmMhPW4pO1xyXG4gIHZhciAgZnJBbmltYXRlZCA9IGZhbHNlO1xyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVGaXhOYXYoKSB7XHJcbiAgICBmaXhlZENsb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmaXhlZENsb25lLmlkID0gJ2ZpeGVkTmF2JztcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgnYy1ibG9nX19hc2lkZScpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QuYWRkKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgncG9zLWZpeGVkJyk7XHJcbiAgICBmaXhlZENsb25lLmlubmVySFRNTCA9IG5hdkJsb2NrLmlubmVySFRNTDtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZml4ZWRDbG9uZSk7XHJcbiAgICBsZXQgbGlua3MgPSBbLi4uZml4ZWRDbG9uZS5xdWVyeVNlbGVjdG9yQWxsKCcuYy1ibG9nX19uYXYtbGluaycpXTtcclxuICAgIGxpbmtzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICAvLyotLSBmb3IgcG9ydGFibGUgZGV2aWNlcy0tXHJcbiAgICBpZih0YWJsZXRNdGgubWF0Y2hlcykge1xyXG4gICAgICBsZXQgdGFibGV0QnV0ID0gZml4ZWRDbG9uZS5xdWVyeVNlbGVjdG9yKCcuYy1ibG9nX19tZW51LXN3aXBlJyk7XHJcbiAgICAgIHRhYmxldEJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vYmlsZSwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0U2VjdGlvbiA9IHNjcm9sbFBvcyA9PiAge1xyXG4gICAgaWYoc2Nyb2xsUG9zPD1hcnJPZmZzZXRbMF0pIHJldHVybiAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJPZmZzZXQubGVuZ3RoLTE7IGkrKykge1xyXG4gICAgICBpZihzY3JvbGxQb3M+YXJyT2Zmc2V0W2ldJiZzY3JvbGxQb3M8YXJyT2Zmc2V0W2krMV0pXHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyT2Zmc2V0Lmxlbmd0aC0xO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNldEFjdEl0ZW0gPSBsaW5rcyA9PiB7XHJcbiAgICBsaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XHJcbiAgICAgIGxldCBhY3RJdGVtID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgYWN0SXRlbS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcclxuICAgICAgW10uZm9yRWFjaC5jYWxsKHNpYmxpbmdzKGFjdEl0ZW0pLCBmdW5jdGlvbihpdCkge1xyXG4gICAgICAgIGlmKGl0LmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpXHJcbiAgICAgICAgICBpdC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGVja1Njcm9sbCA9ICgpID0+IHtcclxuICAgIGxldCBzY3JvbGxQb3MgPSBjb250YWluZXIuc2Nyb2xsVG9wO1xyXG4gICAgaWYoZml4ZWRDbG9uZSYmc2Nyb2xsUG9zPD1hcnJPZmZzZXRbMF0rZmlyc3RTY3JIZWlnaHQmJm5hdkJsb2NrLmNsYXNzTGlzdC5jb250YWlucygndmlzdWFsbHktaGlkZGVuJykpIHtcclxuICAgICAgaWYoIXRhYmxldE10aC5tYXRjaGVzfHwhZml4ZWRDbG9uZS5jbGFzc0xpc3QuY29udGFpbnMoJ2FuaW1hdGVPcGVuJykpIHtcclxuICAgICAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICAgIG5hdkJsb2NrLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyogaGVhZGVyLndpZHRoKjAuMDQgLSBwYWRkaW5nLXRvcFxyXG4gICAgaWYoZml4ZWRDbG9uZSYmc2Nyb2xsUG9zPmZpcnN0U2NySGVpZ2h0LWhlYWRlci53aWR0aCowLjA0KSB7XHJcbiAgICAgIG5hdkJsb2NrLmNsYXNzTGlzdC5hZGQoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgICBpZihmaXhlZENsb25lLmNsYXNzTGlzdC5jb250YWlucygndmlzdWFsbHktaGlkZGVuJykpXHJcbiAgICAgICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCd2aXN1YWxseS1oaWRkZW4nKTtcclxuICAgIH1cclxuICAgIGxldCBkYXRhU2VjdGlvbiA9IHNlY3Rpb25zW2dldFNlY3Rpb24oc2Nyb2xsUG9zLWhlYWRlci53aWR0aCowLjA0KV0uZGF0YXNldC5zZWN0aW9uLFxyXG4gICAgICBsaW5rc0FjdCA9IFsuLi5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoYC5jLWJsb2dfX25hdi1saW5rW2hyZWY9XCIjJHtkYXRhU2VjdGlvbn1cImApXTtcclxuICAgIC8vKiB0aGVuIGFmdGVyIGFuaW1hdGlvbjogZnJBbmltYXRlZCA9IHRydWUgXHJcbiAgICBpZighZnJBbmltYXRlZCkge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IGRhdGFTZWN0aW9uOyBcclxuICAgICAgc2V0QWN0SXRlbShsaW5rc0FjdCk7XHJcbiAgICB9XHJcbiAgICAvLyogc2V0IGRlZmF1bHQgZnJBbmltYXRlZFxyXG4gICAgZnJBbmltYXRlZCA9IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUFuaW1hdENsYXNzZXMgPSAoKSA9PiB7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGVPcGVuJyk7XHJcbiAgICBmaXhlZENsb25lLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGRlbGV0ZUFuaW1hdENsYXNzZXMsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzaG93U2VjdGlvbihlKSB7XHJcbiAgICBpZighd2luZG93LmxvY2F0aW9uLmhhc2gpIHJldHVybjtcclxuICAgIGxldCBoYXNoID0gZT90aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpOndpbmRvdy5sb2NhdGlvbi5oYXNoLFxyXG4gICAgICBzZWN0aW9uQWN0ID0gYm9keS5xdWVyeVNlbGVjdG9yKGAuYy1ibG9nX19hcnRpY2xlW2RhdGEtc2VjdGlvbj1cIiR7aGFzaC5yZXBsYWNlKC8jLywnJyl9XCJgKSxcclxuICAgICAgbGlua3NBY3QgPSBbLi4uYm9keS5xdWVyeVNlbGVjdG9yQWxsKGAuYy1ibG9nX19uYXYtbGlua1tocmVmPVwiJHtoYXNofVwiYCldLFxyXG4gICAgICBpbmRleCA9IHNlY3Rpb25zLmluZGV4T2Yoc2VjdGlvbkFjdCk7XHJcbiAgICBzZXRBY3RJdGVtKGxpbmtzQWN0KTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gc2VjdGlvbkFjdC5kYXRhc2V0LnNlY3Rpb247XHJcbiAgICBsZXQgc2Nyb2xsUG9zID0gKGluZGV4ID09PSAwKT9maXJzdFNjckhlaWdodDooZmlyc3RTY3JIZWlnaHQgKyBhcnJPZmZzZXRbaW5kZXhdICsgaGVhZGVyLndpZHRoKjAuMDUpO1xyXG4gICAgY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsLCBmYWxzZSk7XHJcblxyXG4gICAgaWYoZSkge1xyXG4gICAgICBpZih0YWJsZXRNdGgubWF0Y2hlcykge1xyXG4gICAgICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZUNsb3NlJyk7XHJcbiAgICAgICAgZml4ZWRDbG9uZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBkZWxldGVBbmltYXRDbGFzc2VzLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgYW5pbWF0ZU1vdmUoZSwgc2Nyb2xsUG9zKTtcclxuICAgIH1cclxuICAgIGVsc2UgXHJcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSBzY3JvbGxQb3M7XHJcbiAgfVxyXG5cclxuICBjb25zdCBhbmltYXRlID0gKG9wdGlvbnMpID0+IHtcclxuICAgIGZyQW5pbWF0ZWQgPSB0cnVlO1xyXG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCksXHJcbiAgICAgIHN0YXJ0UG9zID0gY29udGFpbmVyLnNjcm9sbFRvcDtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBfYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICAvLyB0aW1lRnJhY3Rpb24g0L7RgiAwINC00L4gMVxyXG4gICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkge1xyXG4gICAgICAgIHRpbWVGcmFjdGlvbiA9IDE7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGNoZWNrU2Nyb2xsLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgLy8g0YLQtdC60YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INCw0L3QuNC80LDRhtC40LhcclxuICAgICAgbGV0IHByb2dyZXNzID0gb3B0aW9ucy50aW1pbmcodGltZUZyYWN0aW9uKTtcclxuICAgICAgb3B0aW9ucy5tb3ZlKHByb2dyZXNzLCBzdGFydFBvcyk7XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZU1vdmUgPSAoZSwgc2Nyb2xsUG9zKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IDcwMCxcclxuICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xyXG4gICAgICB9LFxyXG4gICAgICBtb3ZlOiBmdW5jdGlvbihwcm9ncmVzcywgc3RhcnRQb3MpIHtcclxuICAgICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gc3RhcnRQb3MgKyAoc2Nyb2xsUG9zLSBzdGFydFBvcykqKHByb2dyZXNzKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG1vYmlsZSA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbmF2QmxvY2suY2xhc3NMaXN0LmFkZCgndmlzdWFsbHktaGlkZGVuJyk7XHJcbiAgICBmaXhlZENsb25lLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc3VhbGx5LWhpZGRlbicpO1xyXG4gICAgZml4ZWRDbG9uZS5jbGFzc0xpc3QucmVtb3ZlKCdhbmltYXRlQ2xvc2UnKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgnb3ZlcmxheS1tb2JpbGUnKTtcclxuICAgIGZpeGVkQ2xvbmUuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZU9wZW4nKTtcclxuICAgICAgIFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGluaXQgPSAoKSA9PiB7XHJcbiAgICBjcmVhdGVGaXhOYXYoKTtcclxuICAgIHNob3dTZWN0aW9uKCk7XHJcbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgY2hlY2tTY3JvbGwsIGZhbHNlKTtcclxuICAgIGxpbmtzLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcclxuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93U2VjdGlvbiwgZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICB0YWJsZXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtb2JpbGUsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge2luaXR9O1xyXG59KSgpO1xyXG5cclxuLy8vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLy8qIC0tLS0tLS0tLS0tcnVuIGFwcC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxud2luZG93Lm9ubG9hZCA9IGluaXQ7XHJcbmNvbnNvbGUubG9nKCdJdGAgd29yayAlJSUhJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2Jsb2cuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlcy9ibG9nLm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSA0IiwiY29uc3QgcnVuQ29kZVByZXR0aWZ5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHByZXMgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xyXG4gIFtdLmZvckVhY2guY2FsbChwcmVzLCBmdW5jdGlvbihlbCkge1xyXG4gICAgZWwuY2xhc3NMaXN0LmFkZCgncHJldHR5cHJpbnQnKTtcclxuICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2xpbmVudW1zJyk7XHJcbiAgfSk7XHJcbiAgbGV0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XHJcbiAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuXHJcbiAgc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5yYXdnaXQuY29tL2dvb2dsZS9jb2RlLXByZXR0aWZ5L21hc3Rlci9sb2FkZXIvcnVuX3ByZXR0aWZ5LmpzJztcclxuICAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdKS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcnVuQ29kZVByZXR0aWZ5O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2NvZGVfcHJldHRpZnkuanMiXSwic291cmNlUm9vdCI6IiJ9