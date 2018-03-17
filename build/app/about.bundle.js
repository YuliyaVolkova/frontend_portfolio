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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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
var scrollNext = function () {

  var nextBut = document.body.querySelector('#next'),
      firstSection = document.body.querySelector('.l-section'),
      scrollPos = firstSection.clientHeight - document.body.clientHeight / 25;

  var animate = function animate(options) {

    var start = performance.now();
    requestAnimationFrame(function _animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      // текущее состояние анимации
      var progress = options.timing(timeFraction);
      options.move(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  };

  var showSect = function showSect(e) {
    e.preventDefault();
    animate({
      duration: 500,
      timing: function timing(timeFraction) {
        return timeFraction;
      },
      move: function move(progress) {
        document.documentElement.scrollTop = document.body.scrollTop = progress * scrollPos;
      }
    });
  };

  var keyDown = function keyDown(e) {
    var tag = e.target.tagName.toLowerCase();
    switch (e.which) {
      case 40:
        if (tag != 'input' && tag != 'textarea') {
          showSect(e);
        }
        break;
      default:
        return;
    }
    return false;
  };

  var handler = function handler() {
    document.addEventListener('keydown', keyDown, false);
    nextBut.addEventListener('click', showSect, false);
  };

  return { handler: handler };
}();

exports.default = scrollNext;

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(11);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _scrollnext = __webpack_require__(2);

var _scrollnext2 = _interopRequireDefault(_scrollnext);

var _diagramm_skills = __webpack_require__(12);

var _diagramm_skills2 = _interopRequireDefault(_diagramm_skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.onload = function () {

  _scrollnext2.default.handler();
  _diagramm_skills2.default.init();
};
console.log('It` work %%%!');

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var diagrammsSkills = function () {
  var data = [{ groupTitle: 'Frontend',
    skills: [{ skillTitle: 'HTML5 &CSS3', percent: '0.92' }, { skillTitle: 'Sass &Pug', percent: '0.85' }, { skillTitle: 'JavaScript &jQuery', percent: '0.85' }] }, { groupTitle: 'Backend',
    skills: [{ skillTitle: 'PHP', percent: '0.3' }, { skillTitle: 'Node.js &npm', percent: '0.5' }, { skillTitle: 'mySQL', percent: '0.4' }, { skillTitle: 'Mongo.db', percent: '0.6' }] }, { groupTitle: 'Workflow',
    skills: [{ skillTitle: 'Git', percent: '0.92' }, { skillTitle: 'Webpack', percent: '0.75' }, { skillTitle: 'Gulp', percent: '0.80' }] }],
      containerSkills = document.querySelector('.c-skills-card__container'),
      skillsSectHeight = document.querySelector('.l-main__wrapper').clientHeight,
      firstSectHeight = document.querySelector('.l-hero').clientHeight,
      arrItems = new Array();

  var Skill = function () {
    function Skill(options) {
      _classCallCheck(this, Skill);

      this.svgns = 'http://www.w3.org/2000/svg';
      this.svg = document.createElementNS(this.svgns, 'svg');
      this.width = options.width || 112;
      this.height = options.height || this.width;
      this.radius = this.width / 3;
      this.percent = options.percent;
      this.strokeDasharray = 2 * Math.PI * this.radius;
      this.svg.setAttribute('width', this.width);
      this.svg.setAttribute('height', this.height);
      this.svg.setAttribute('opacity', options.percent);
      this.svg.classList.add('svg_skill-diagr');
      this.svg.setAttribute('viewBox', '0 0 ' + this.width + ' ' + this.height);
      this.baseCircle = this.createCircle('rgb(0, 191, 165)', true);
      this.bgCircle = this.createCircle('#ccc');
      this.add(options.container, options.title);
    }

    _createClass(Skill, [{
      key: 'createCircle',
      value: function createCircle(color) {
        var isBase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var circle = document.createElementNS(this.svgns, 'circle');
        var cx = this.width / 2;
        var cy = this.height / 2;
        circle.setAttribute('cx', cx);
        circle.setAttribute('cy', cy);
        circle.setAttribute('r', this.radius);
        circle.setAttribute('fill', 'none');
        circle.setAttribute('stroke', color);
        circle.setAttribute('stroke-width', '20');
        if (isBase) {
          circle.setAttribute('transform', 'rotate(-90 ' + cx + ' ' + cy + ')');
          circle.setAttribute('stroke-dasharray', this.strokeDasharray);
          circle.setAttribute('stroke-dashoffset', this.strokeDasharray);
        }
        return circle;
      }
    }, {
      key: 'add',
      value: function add(container, title) {
        var item = document.createElement('div');
        item.classList.add('c-skills-card__skill-item');
        var titleSvg = document.createElement('div');
        titleSvg.classList.add('c-skills-card__skill-title');
        titleSvg.textContent = title;
        this.svg.appendChild(this.bgCircle);
        this.svg.appendChild(this.baseCircle);
        item.appendChild(titleSvg);
        item.appendChild(this.svg);
        container.appendChild(item);
        return this;
      }
    }, {
      key: 'draw',
      value: function draw(progress) {
        this.baseCircle.setAttribute('stroke-dashoffset', (1 - progress * this.percent) * this.strokeDasharray);
      }
    }]);

    return Skill;
  }();

  function animate(options) {
    var start = performance.now();

    requestAnimationFrame(function _animate(time) {
      // timeFraction от 0 до 1
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      // текущее состояние анимации
      var progress = options.timing(timeFraction);
      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(_animate);
      }
    });
  }

  function createExSkills(data) {
    var width = 145;
    for (var i = 0; i <= data.length - 1; i++) {
      arrItems[i] = new Array();
      var group = document.createElement('li');
      var groupTitle = document.createElement('div');
      var skillsContainer = document.createElement('div');
      group.classList.add('c-skills-card__group');
      groupTitle.classList.add('c-skills-card__group-title');
      skillsContainer.classList.add('c-skills-card__group-content');
      groupTitle.textContent = data[i].groupTitle;
      group.appendChild(groupTitle);
      group.appendChild(skillsContainer);
      containerSkills.appendChild(group);
      for (var j = 0; j <= data[i].skills.length - 1; j++) {
        arrItems[i][j] = new Skill({ width: width, container: skillsContainer, title: data[i].skills[j].skillTitle, percent: data[i].skills[j].percent });
      }
    }
  }

  function scrollAnimate(e) {
    var pageYOffset = e.currentTarget.pageYOffset;
    if (pageYOffset > skillsSectHeight || pageYOffset > firstSectHeight - 400 && pageYOffset < skillsSectHeight) return;
    setTimeout(function () {
      animate({
        duration: 1000,
        timing: function timing(timeFraction) {
          return timeFraction;
        },
        draw: function draw(progress) {
          for (var i = 0; i <= arrItems.length - 1; i++) {
            for (var j = 0; j <= arrItems[i].length - 1; j++) {
              arrItems[i][j].draw(progress);
            }
          }
        }
      });
    }, 50);
  }

  function init() {
    createExSkills(data);
    window.addEventListener('scroll', scrollAnimate, false);
  }
  return { init: init };
}();

exports.default = diagrammsSkills;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFhYTgwNjU3NDAyMDE1M2IzN2YiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGxuZXh0LmpzIiwid2VicGFjazovLy8uL2FwcC9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Fib3V0Lm1haW4uc2Nzcz82Yjc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2RpYWdyYW1tX3NraWxscy5qcyJdLCJuYW1lcyI6WyJzY3JvbGxOZXh0IiwibmV4dEJ1dCIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdFNlY3Rpb24iLCJzY3JvbGxQb3MiLCJjbGllbnRIZWlnaHQiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYW5pbWF0ZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJkdXJhdGlvbiIsInByb2dyZXNzIiwidGltaW5nIiwibW92ZSIsInNob3dTZWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwia2V5RG93biIsInRhZyIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIndoaWNoIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRpYWdyYW1tc1NraWxscyIsImRhdGEiLCJncm91cFRpdGxlIiwic2tpbGxzIiwic2tpbGxUaXRsZSIsInBlcmNlbnQiLCJjb250YWluZXJTa2lsbHMiLCJza2lsbHNTZWN0SGVpZ2h0IiwiZmlyc3RTZWN0SGVpZ2h0IiwiYXJySXRlbXMiLCJBcnJheSIsIlNraWxsIiwic3ZnbnMiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsInN0cm9rZURhc2hhcnJheSIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImJhc2VDaXJjbGUiLCJjcmVhdGVDaXJjbGUiLCJiZ0NpcmNsZSIsImNvbnRhaW5lciIsInRpdGxlIiwiY29sb3IiLCJpc0Jhc2UiLCJjaXJjbGUiLCJjeCIsImN5IiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZVN2ZyIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJkcmF3IiwiY3JlYXRlRXhTa2lsbHMiLCJpIiwibGVuZ3RoIiwiZ3JvdXAiLCJza2lsbHNDb250YWluZXIiLCJqIiwic2Nyb2xsQW5pbWF0ZSIsInBhZ2VZT2Zmc2V0IiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQzdEQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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cC9hYm91dC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGFhYTgwNjU3NDAyMDE1M2IzN2YiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiIWZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcbiAgICBkZWZpbmUoW10sIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xuICAgIH0pIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlICYmIG1vZHVsZS5leHBvcnRzID8gLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDogcm9vdC5zdmc0ZXZlcnlib2R5ID0gZmFjdG9yeSgpO1xufSh0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAvKiEgc3ZnNGV2ZXJ5Ym9keSB2Mi4xLjkgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc3ZnNGV2ZXJ5Ym9keSAqL1xuICAgIGZ1bmN0aW9uIGVtYmVkKHBhcmVudCwgc3ZnLCB0YXJnZXQpIHtcbiAgICAgICAgLy8gaWYgdGhlIHRhcmdldCBleGlzdHNcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZG9jdW1lbnQgZnJhZ21lbnQgdG8gaG9sZCB0aGUgY29udGVudHMgb2YgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLCB2aWV3Qm94ID0gIXN2Zy5oYXNBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpICYmIHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIpO1xuICAgICAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzZXQgdGhlIHZpZXdCb3ggb24gdGhlIHN2Z1xuICAgICAgICAgICAgdmlld0JveCAmJiBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCB2aWV3Qm94KTtcbiAgICAgICAgICAgIC8vIGNvcHkgdGhlIGNvbnRlbnRzIG9mIHRoZSBjbG9uZSBpbnRvIHRoZSBmcmFnbWVudFxuICAgICAgICAgICAgZm9yICgvLyBjbG9uZSB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgY2xvbmUgPSB0YXJnZXQuY2xvbmVOb2RlKCEwKTsgY2xvbmUuY2hpbGROb2Rlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGNsb25lLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXBwZW5kIHRoZSBmcmFnbWVudCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKSB7XG4gICAgICAgIC8vIGxpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSByZXF1ZXN0XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0IGlzIHJlYWR5XG4gICAgICAgICAgICBpZiAoNCA9PT0geGhyLnJlYWR5U3RhdGUpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgdmFyIGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudDtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCBodG1sIGRvY3VtZW50IGJhc2VkIG9uIHRoZSB4aHIgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudCB8fCAoY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLCBcbiAgICAgICAgICAgICAgICBjYWNoZWREb2N1bWVudC5ib2R5LmlubmVySFRNTCA9IHhoci5yZXNwb25zZVRleHQsIHhoci5fY2FjaGVkVGFyZ2V0ID0ge30pLCAvLyBjbGVhciB0aGUgeGhyIGVtYmVkcyBsaXN0IGFuZCBlbWJlZCBlYWNoIGl0ZW1cbiAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5zcGxpY2UoMCkubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCB8fCAodGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF0gPSBjYWNoZWREb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLmlkKSksIFxuICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgdGFyZ2V0IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICBlbWJlZChpdGVtLnBhcmVudCwgaXRlbS5zdmcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIC8vIHRlc3QgdGhlIHJlYWR5IHN0YXRlIGNoYW5nZSBpbW1lZGlhdGVseVxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHN2ZzRldmVyeWJvZHkocmF3b3B0cykge1xuICAgICAgICBmdW5jdGlvbiBvbmludGVydmFsKCkge1xuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGluZGV4IGV4aXN0cyBpbiB0aGUgbGl2ZSA8dXNlPiBjb2xsZWN0aW9uXG4gICAgICAgICAgICBmb3IgKC8vIGdldCB0aGUgY2FjaGVkIDx1c2U+IGluZGV4XG4gICAgICAgICAgICB2YXIgaW5kZXggPSAwOyBpbmRleCA8IHVzZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGN1cnJlbnQgPHVzZT5cbiAgICAgICAgICAgICAgICB2YXIgdXNlID0gdXNlc1tpbmRleF0sIHBhcmVudCA9IHVzZS5wYXJlbnROb2RlLCBzdmcgPSBnZXRTVkdBbmNlc3RvcihwYXJlbnQpLCBzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKFwieGxpbms6aHJlZlwiKSB8fCB1c2UuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNyYyAmJiBvcHRzLmF0dHJpYnV0ZU5hbWUgJiYgKHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUob3B0cy5hdHRyaWJ1dGVOYW1lKSksIFxuICAgICAgICAgICAgICAgIHN2ZyAmJiBzcmMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvbHlmaWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdHMudmFsaWRhdGUgfHwgb3B0cy52YWxpZGF0ZShzcmMsIHN2ZywgdXNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgPHVzZT4gZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZCh1c2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhcnNlIHRoZSBzcmMgYW5kIGdldCB0aGUgdXJsIGFuZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcmNTcGxpdCA9IHNyYy5zcGxpdChcIiNcIiksIHVybCA9IHNyY1NwbGl0LnNoaWZ0KCksIGlkID0gc3JjU3BsaXQuam9pbihcIiNcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxpbmsgaXMgZXh0ZXJuYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXJsLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB4aHIgcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgeGhyID0gcmVxdWVzdHNbdXJsXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSB4aHIgcmVxdWVzdCBleGlzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyIHx8ICh4aHIgPSByZXF1ZXN0c1t1cmxdID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCksIHhoci5vcGVuKFwiR0VUXCIsIHVybCksIHhoci5zZW5kKCksIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcyA9IFtdKSwgLy8gYWRkIHRoZSBzdmcgYW5kIGlkIGFzIGFuIGl0ZW0gdG8gdGhlIHhociBlbWJlZHMgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuX2VtYmVkcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnOiBzdmcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIC8vIHByZXBhcmUgdGhlIHhociByZWFkeSBzdGF0ZSBjaGFuZ2UgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZHJlYWR5c3RhdGVjaGFuZ2UoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbWJlZCB0aGUgbG9jYWwgaWQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYmVkKHBhcmVudCwgc3ZnLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKytpbmRleCwgKytudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb250aW51ZSB0aGUgaW50ZXJ2YWxcbiAgICAgICAgICAgICghdXNlcy5sZW5ndGggfHwgdXNlcy5sZW5ndGggLSBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPiAwKSAmJiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUob25pbnRlcnZhbCwgNjcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwb2x5ZmlsbCwgb3B0cyA9IE9iamVjdChyYXdvcHRzKSwgbmV3ZXJJRVVBID0gL1xcYlRyaWRlbnRcXC9bNTY3XVxcYnxcXGJNU0lFICg/Ojl8MTApXFwuMFxcYi8sIHdlYmtpdFVBID0gL1xcYkFwcGxlV2ViS2l0XFwvKFxcZCspXFxiLywgb2xkZXJFZGdlVUEgPSAvXFxiRWRnZVxcLzEyXFwuKFxcZCspXFxiLywgZWRnZVVBID0gL1xcYkVkZ2VcXC8uKFxcZCspXFxiLywgaW5JZnJhbWUgPSB3aW5kb3cudG9wICE9PSB3aW5kb3cuc2VsZjtcbiAgICAgICAgcG9seWZpbGwgPSBcInBvbHlmaWxsXCIgaW4gb3B0cyA/IG9wdHMucG9seWZpbGwgOiBuZXdlcklFVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaChvbGRlckVkZ2VVQSkgfHwgW10pWzFdIDwgMTA1NDcgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2god2Via2l0VUEpIHx8IFtdKVsxXSA8IDUzNyB8fCBlZGdlVUEudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiBpbklmcmFtZTtcbiAgICAgICAgLy8gY3JlYXRlIHhociByZXF1ZXN0cyBvYmplY3RcbiAgICAgICAgdmFyIHJlcXVlc3RzID0ge30sIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCwgdXNlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidXNlXCIpLCBudW1iZXJPZlN2Z1VzZUVsZW1lbnRzVG9CeXBhc3MgPSAwO1xuICAgICAgICAvLyBjb25kaXRpb25hbGx5IHN0YXJ0IHRoZSBpbnRlcnZhbCBpZiB0aGUgcG9seWZpbGwgaXMgYWN0aXZlXG4gICAgICAgIHBvbHlmaWxsICYmIG9uaW50ZXJ2YWwoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2V0U1ZHQW5jZXN0b3Iobm9kZSkge1xuICAgICAgICBmb3IgKHZhciBzdmcgPSBub2RlOyBcInN2Z1wiICE9PSBzdmcubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAmJiAoc3ZnID0gc3ZnLnBhcmVudE5vZGUpOyApIHt9XG4gICAgICAgIHJldHVybiBzdmc7XG4gICAgfVxuICAgIHJldHVybiBzdmc0ZXZlcnlib2R5O1xufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3N2ZzRldmVyeWJvZHkvZGlzdC9zdmc0ZXZlcnlib2R5LmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsImNvbnN0IHNjcm9sbE5leHQgPSAoKCkgPT4ge1xyXG5cclxuICBjb25zdCBuZXh0QnV0ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpLFxyXG4gICAgZmlyc3RTZWN0aW9uID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcubC1zZWN0aW9uJyksXHJcbiAgICBzY3JvbGxQb3MgPSBmaXJzdFNlY3Rpb24uY2xpZW50SGVpZ2h0IC0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQvMjU7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAob3B0aW9ucykgPT4ge1xyXG5cclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIF9hbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiDQvtGCIDAg0LTQviAxXHJcbiAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgICAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgICBvcHRpb25zLm1vdmUocHJvZ3Jlc3MpO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dTZWN0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGFuaW1hdGUoe1xyXG4gICAgICBkdXJhdGlvbjogNTAwLFxyXG4gICAgICB0aW1pbmc6IGZ1bmN0aW9uKHRpbWVGcmFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdmU6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gKHByb2dyZXNzKSpzY3JvbGxQb3M7XHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBrZXlEb3duID0gKGUpID0+IHtcclxuICAgIGxldCB0YWcgPSBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBzd2l0Y2goZS53aGljaCkge1xyXG4gICAgY2FzZSA0MDpcclxuICAgICAgaWYgKHRhZyAhPSAnaW5wdXQnICYmIHRhZyAhPSAndGV4dGFyZWEnKSB7XHJcbiAgICAgICAgc2hvd1NlY3QoZSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICBkZWZhdWx0OiByZXR1cm47XHJcbiAgICB9IFxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5RG93biwgZmFsc2UpO1xyXG4gICAgbmV4dEJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0LCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNjcm9sbE5leHQ7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvc2Nyb2xsbmV4dC5qcyIsImltcG9ydCAnbm9ybWFsaXplLmNzcyc7XHJcbmltcG9ydCAnLi4vYXNzZXRzL3N0eWxlcy9hYm91dC5tYWluLnNjc3MnO1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5Jztcclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuaW1wb3J0IHNjcm9sbE5leHQgZnJvbSAnLi9jb21wb25lbnRzL3Njcm9sbG5leHQuanMnO1xyXG5pbXBvcnQgZGlhZ3JhbW1zU2tpbGxzIGZyb20gJy4vY29tcG9uZW50cy9kaWFncmFtbV9za2lsbHMuanMnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICBzY3JvbGxOZXh0LmhhbmRsZXIoKTtcclxuICBkaWFncmFtbXNTa2lsbHMuaW5pdCgpO1xyXG59O1xyXG5jb25zb2xlLmxvZygnSXRgIHdvcmsgJSUlIScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9hYm91dC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc3R5bGVzL2Fib3V0Lm1haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmNvbnN0IGRpYWdyYW1tc1NraWxscyA9ICgoKSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IFt7Z3JvdXBUaXRsZTogJ0Zyb250ZW5kJyxcclxuICAgICAgc2tpbGxzOiBbe3NraWxsVGl0bGU6ICdIVE1MNSAmQ1NTMycsIHBlcmNlbnQ6ICcwLjkyJ30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdTYXNzICZQdWcnLCBwZXJjZW50OiAnMC44NSd9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnSmF2YVNjcmlwdCAmalF1ZXJ5JywgcGVyY2VudDogJzAuODUnfV19LFxyXG4gICAge2dyb3VwVGl0bGU6ICdCYWNrZW5kJywgXHJcbiAgICAgIHNraWxsczogW3tza2lsbFRpdGxlOiAnUEhQJywgcGVyY2VudDogJzAuMyd9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnTm9kZS5qcyAmbnBtJywgcGVyY2VudDogJzAuNSd9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnbXlTUUwnLCBwZXJjZW50OiAnMC40J30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdNb25nby5kYicsIHBlcmNlbnQ6ICcwLjYnfV19LFxyXG4gICAge2dyb3VwVGl0bGU6ICdXb3JrZmxvdycsIFxyXG4gICAgICBza2lsbHM6IFt7c2tpbGxUaXRsZTogJ0dpdCcsIHBlcmNlbnQ6ICcwLjkyJ30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdXZWJwYWNrJywgcGVyY2VudDogJzAuNzUnfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ0d1bHAnLCBwZXJjZW50OiAnMC44MCd9XX0sXHJcbiAgICBdLFxyXG4gICAgY29udGFpbmVyU2tpbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmMtc2tpbGxzLWNhcmRfX2NvbnRhaW5lcicpLFxyXG4gICAgc2tpbGxzU2VjdEhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLW1haW5fX3dyYXBwZXInKS5jbGllbnRIZWlnaHQsXHJcbiAgICBmaXJzdFNlY3RIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1oZXJvJykuY2xpZW50SGVpZ2h0LFxyXG4gICAgYXJySXRlbXMgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgY2xhc3MgU2tpbGwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICB0aGlzLnN2Z25zID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcclxuICAgICAgdGhpcy5zdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5zdmducywgJ3N2ZycpO1xyXG4gICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aHx8MTEyO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0fHx0aGlzLndpZHRoO1xyXG4gICAgICB0aGlzLnJhZGl1cyA9IHRoaXMud2lkdGggLyAzO1xyXG4gICAgICB0aGlzLnBlcmNlbnQgPSBvcHRpb25zLnBlcmNlbnQ7XHJcbiAgICAgIHRoaXMuc3Ryb2tlRGFzaGFycmF5ID0gMiAqIE1hdGguUEkgKiB0aGlzLnJhZGl1cztcclxuICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHRoaXMud2lkdGgpO1xyXG4gICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCdvcGFjaXR5Jywgb3B0aW9ucy5wZXJjZW50KTtcclxuICAgICAgdGhpcy5zdmcuY2xhc3NMaXN0LmFkZCgnc3ZnX3NraWxsLWRpYWdyJyk7XHJcbiAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt0aGlzLndpZHRofSAke3RoaXMuaGVpZ2h0fWApO1xyXG4gICAgICB0aGlzLmJhc2VDaXJjbGUgPSB0aGlzLmNyZWF0ZUNpcmNsZSgncmdiKDAsIDE5MSwgMTY1KScsIHRydWUpO1xyXG4gICAgICB0aGlzLmJnQ2lyY2xlID0gdGhpcy5jcmVhdGVDaXJjbGUoJyNjY2MnKTtcclxuICAgICAgdGhpcy5hZGQob3B0aW9ucy5jb250YWluZXIsIG9wdGlvbnMudGl0bGUpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNpcmNsZShjb2xvciwgaXNCYXNlID0gZmFsc2UpIHtcclxuICAgICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnbnMsICdjaXJjbGUnKTtcclxuICAgICAgY29uc3QgY3ggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgY29uc3QgY3kgPSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N4JywgY3gpO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeScsIGN5KTtcclxuICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgncicsIHRoaXMucmFkaXVzKTtcclxuICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnZmlsbCcsICdub25lJyk7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZScsIGNvbG9yKTtcclxuICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLXdpZHRoJywgJzIwJyk7XHJcbiAgICAgIGlmIChpc0Jhc2UpIHtcclxuICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCBgcm90YXRlKC05MCAke2N4fSAke2N5fSlgKTtcclxuICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaGFycmF5JywgdGhpcy5zdHJva2VEYXNoYXJyYXkpO1xyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0JywgdGhpcy5zdHJva2VEYXNoYXJyYXkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjaXJjbGU7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKGNvbnRhaW5lciwgdGl0bGUpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2Mtc2tpbGxzLWNhcmRfX3NraWxsLWl0ZW0nKTtcclxuICAgICAgY29uc3QgdGl0bGVTdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGl0bGVTdmcuY2xhc3NMaXN0LmFkZCgnYy1za2lsbHMtY2FyZF9fc2tpbGwtdGl0bGUnKTtcclxuICAgICAgdGl0bGVTdmcudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGhpcy5iZ0NpcmNsZSk7XHJcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMuYmFzZUNpcmNsZSk7XHJcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGl0bGVTdmcpO1xyXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHRoaXMuc3ZnKTtcclxuICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHByb2dyZXNzKSB7XHJcbiAgICAgIHRoaXMuYmFzZUNpcmNsZS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgJ3N0cm9rZS1kYXNob2Zmc2V0JyxcclxuICAgICAgICAoMSAtIHByb2dyZXNzICogdGhpcy5wZXJjZW50KSAqIHRoaXMuc3Ryb2tlRGFzaGFycmF5XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBhbmltYXRlKG9wdGlvbnMpIHtcclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBfYW5pbWF0ZSh0aW1lKSB7XHJcbiAgICAvLyB0aW1lRnJhY3Rpb24g0L7RgiAwINC00L4gMVxyXG4gICAgICBsZXQgdGltZUZyYWN0aW9uID0gKHRpbWUgLSBzdGFydCkgLyBvcHRpb25zLmR1cmF0aW9uO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uID4gMSkgdGltZUZyYWN0aW9uID0gMTtcclxuICAgICAgLy8g0YLQtdC60YPRidC10LUg0YHQvtGB0YLQvtGP0L3QuNC1INCw0L3QuNC80LDRhtC40LhcclxuICAgICAgbGV0IHByb2dyZXNzID0gb3B0aW9ucy50aW1pbmcodGltZUZyYWN0aW9uKTtcclxuICAgICAgb3B0aW9ucy5kcmF3KHByb2dyZXNzKTtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA8IDEpIHtcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX2FuaW1hdGUpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNyZWF0ZUV4U2tpbGxzKGRhdGEpIHtcclxuICAgIGNvbnN0IHdpZHRoID0gMTQ1O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gZGF0YS5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgYXJySXRlbXNbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgY29uc3QgZ3JvdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICBjb25zdCBncm91cFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGNvbnN0IHNraWxsc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBncm91cC5jbGFzc0xpc3QuYWRkKCdjLXNraWxscy1jYXJkX19ncm91cCcpO1xyXG4gICAgICBncm91cFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2Mtc2tpbGxzLWNhcmRfX2dyb3VwLXRpdGxlJyk7XHJcbiAgICAgIHNraWxsc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjLXNraWxscy1jYXJkX19ncm91cC1jb250ZW50Jyk7XHJcbiAgICAgIGdyb3VwVGl0bGUudGV4dENvbnRlbnQgPSBkYXRhW2ldLmdyb3VwVGl0bGU7XHJcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKGdyb3VwVGl0bGUpO1xyXG4gICAgICBncm91cC5hcHBlbmRDaGlsZChza2lsbHNDb250YWluZXIpO1xyXG4gICAgICBjb250YWluZXJTa2lsbHMuYXBwZW5kQ2hpbGQoZ3JvdXApO1xyXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBkYXRhW2ldLnNraWxscy5sZW5ndGggLSAxOyBqKyspIHtcclxuICAgICAgICBhcnJJdGVtc1tpXVtqXSA9IG5ldyBTa2lsbCh7d2lkdGg6IHdpZHRoLCBjb250YWluZXI6IHNraWxsc0NvbnRhaW5lciwgdGl0bGU6IGRhdGFbaV0uc2tpbGxzW2pdLnNraWxsVGl0bGUsIHBlcmNlbnQ6IGRhdGFbaV0uc2tpbGxzW2pdLnBlcmNlbnR9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2Nyb2xsQW5pbWF0ZShlKSB7XHJcbiAgICBjb25zdCBwYWdlWU9mZnNldCA9IGUuY3VycmVudFRhcmdldC5wYWdlWU9mZnNldDtcclxuICAgIGlmKHBhZ2VZT2Zmc2V0PnNraWxsc1NlY3RIZWlnaHR8fHBhZ2VZT2Zmc2V0PmZpcnN0U2VjdEhlaWdodC00MDAmJnBhZ2VZT2Zmc2V0PHNraWxsc1NlY3RIZWlnaHQpIHJldHVybjtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7YW5pbWF0ZSh7XHJcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxyXG4gICAgICB0aW1pbmc6IGZ1bmN0aW9uKHRpbWVGcmFjdGlvbikge1xyXG4gICAgICAgIHJldHVybiB0aW1lRnJhY3Rpb247XHJcbiAgICAgIH0sXHJcbiAgICAgIGRyYXc6IGZ1bmN0aW9uKHByb2dyZXNzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gYXJySXRlbXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8PSBhcnJJdGVtc1tpXS5sZW5ndGggLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgYXJySXRlbXNbaV1bal0uZHJhdyhwcm9ncmVzcyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7fSwgNTApO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNyZWF0ZUV4U2tpbGxzKGRhdGEpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHNjcm9sbEFuaW1hdGUsIGZhbHNlKTtcclxuICB9XHJcbiAgcmV0dXJuIHtpbml0fTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRpYWdyYW1tc1NraWxscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9kaWFncmFtbV9za2lsbHMuanMiXSwic291cmNlUm9vdCI6IiJ9