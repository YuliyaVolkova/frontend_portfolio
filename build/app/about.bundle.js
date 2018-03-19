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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(32);


/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

__webpack_require__(33);

var _svg4everybody = __webpack_require__(1);

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

var _scrollnext = __webpack_require__(2);

var _scrollnext2 = _interopRequireDefault(_scrollnext);

var _diagramm_skills = __webpack_require__(34);

var _diagramm_skills2 = _interopRequireDefault(_diagramm_skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.onload = function () {

  _scrollnext2.default.handler();
  _diagramm_skills2.default.init();
};
console.log('It` work %%%!');

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 34:
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGYyMjJlNjcwMDhkY2YyODE1YzEiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9zY3JvbGxuZXh0LmpzIiwid2VicGFjazovLy8uL2FwcC9hYm91dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2Fib3V0Lm1haW4uc2Nzcz82Yjc3Iiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL2RpYWdyYW1tX3NraWxscy5qcyJdLCJuYW1lcyI6WyJzY3JvbGxOZXh0IiwibmV4dEJ1dCIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJmaXJzdFNlY3Rpb24iLCJzY3JvbGxQb3MiLCJjbGllbnRIZWlnaHQiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfYW5pbWF0ZSIsInRpbWUiLCJ0aW1lRnJhY3Rpb24iLCJkdXJhdGlvbiIsInByb2dyZXNzIiwidGltaW5nIiwibW92ZSIsInNob3dTZWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwia2V5RG93biIsInRhZyIsInRhcmdldCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIndoaWNoIiwiaGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJvbmxvYWQiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImRpYWdyYW1tc1NraWxscyIsImRhdGEiLCJncm91cFRpdGxlIiwic2tpbGxzIiwic2tpbGxUaXRsZSIsInBlcmNlbnQiLCJjb250YWluZXJTa2lsbHMiLCJza2lsbHNTZWN0SGVpZ2h0IiwiZmlyc3RTZWN0SGVpZ2h0IiwiYXJySXRlbXMiLCJBcnJheSIsIlNraWxsIiwic3ZnbnMiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsInN0cm9rZURhc2hhcnJheSIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImJhc2VDaXJjbGUiLCJjcmVhdGVDaXJjbGUiLCJiZ0NpcmNsZSIsImNvbnRhaW5lciIsInRpdGxlIiwiY29sb3IiLCJpc0Jhc2UiLCJjaXJjbGUiLCJjeCIsImN5IiwiaXRlbSIsImNyZWF0ZUVsZW1lbnQiLCJ0aXRsZVN2ZyIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJkcmF3IiwiY3JlYXRlRXhTa2lsbHMiLCJpIiwibGVuZ3RoIiwiZ3JvdXAiLCJza2lsbHNDb250YWluZXIiLCJqIiwic2Nyb2xsQW5pbWF0ZSIsInBhZ2VZT2Zmc2V0IiwiY3VycmVudFRhcmdldCIsInNldFRpbWVvdXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REEseUM7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFBQTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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cHAvYWJvdXQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMxKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkZjIyMmU2NzAwOGRjZjI4MTVjMSIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCIhZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICAgIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxuICAgIGRlZmluZShbXSwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG4gICAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgJiYgbW9kdWxlLmV4cG9ydHMgPyAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOiByb290LnN2ZzRldmVyeWJvZHkgPSBmYWN0b3J5KCk7XG59KHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgIC8qISBzdmc0ZXZlcnlib2R5IHYyLjEuOSB8IGdpdGh1Yi5jb20vam9uYXRoYW50bmVhbC9zdmc0ZXZlcnlib2R5ICovXG4gICAgZnVuY3Rpb24gZW1iZWQocGFyZW50LCBzdmcsIHRhcmdldCkge1xuICAgICAgICAvLyBpZiB0aGUgdGFyZ2V0IGV4aXN0c1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkb2N1bWVudCBmcmFnbWVudCB0byBob2xkIHRoZSBjb250ZW50cyBvZiB0aGUgdGFyZ2V0XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksIHZpZXdCb3ggPSAhc3ZnLmhhc0F0dHJpYnV0ZShcInZpZXdCb3hcIikgJiYgdGFyZ2V0LmdldEF0dHJpYnV0ZShcInZpZXdCb3hcIik7XG4gICAgICAgICAgICAvLyBjb25kaXRpb25hbGx5IHNldCB0aGUgdmlld0JveCBvbiB0aGUgc3ZnXG4gICAgICAgICAgICB2aWV3Qm94ICYmIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIHZpZXdCb3gpO1xuICAgICAgICAgICAgLy8gY29weSB0aGUgY29udGVudHMgb2YgdGhlIGNsb25lIGludG8gdGhlIGZyYWdtZW50XG4gICAgICAgICAgICBmb3IgKC8vIGNsb25lIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBjbG9uZSA9IHRhcmdldC5jbG9uZU5vZGUoITApOyBjbG9uZS5jaGlsZE5vZGVzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY2xvbmUuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhcHBlbmQgdGhlIGZyYWdtZW50IGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpIHtcbiAgICAgICAgLy8gbGlzdGVuIHRvIGNoYW5nZXMgaW4gdGhlIHJlcXVlc3RcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3QgaXMgcmVhZHlcbiAgICAgICAgICAgIGlmICg0ID09PSB4aHIucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICB2YXIgY2FjaGVkRG9jdW1lbnQgPSB4aHIuX2NhY2hlZERvY3VtZW50O1xuICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIGh0bWwgZG9jdW1lbnQgYmFzZWQgb24gdGhlIHhociByZXNwb25zZVxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50IHx8IChjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIiksIFxuICAgICAgICAgICAgICAgIGNhY2hlZERvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0geGhyLnJlc3BvbnNlVGV4dCwgeGhyLl9jYWNoZWRUYXJnZXQgPSB7fSksIC8vIGNsZWFyIHRoZSB4aHIgZW1iZWRzIGxpc3QgYW5kIGVtYmVkIGVhY2ggaXRlbVxuICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnNwbGljZSgwKS5tYXAoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBnZXQgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdO1xuICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIGNhY2hlZCB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0IHx8ICh0YXJnZXQgPSB4aHIuX2NhY2hlZFRhcmdldFtpdGVtLmlkXSA9IGNhY2hlZERvY3VtZW50LmdldEVsZW1lbnRCeUlkKGl0ZW0uaWQpKSwgXG4gICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSB0YXJnZXQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkKGl0ZW0ucGFyZW50LCBpdGVtLnN2ZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgLy8gdGVzdCB0aGUgcmVhZHkgc3RhdGUgY2hhbmdlIGltbWVkaWF0ZWx5XG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3ZnNGV2ZXJ5Ym9keShyYXdvcHRzKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uaW50ZXJ2YWwoKSB7XG4gICAgICAgICAgICAvLyB3aGlsZSB0aGUgaW5kZXggZXhpc3RzIGluIHRoZSBsaXZlIDx1c2U+IGNvbGxlY3Rpb25cbiAgICAgICAgICAgIGZvciAoLy8gZ2V0IHRoZSBjYWNoZWQgPHVzZT4gaW5kZXhcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDA7IGluZGV4IDwgdXNlcy5sZW5ndGg7ICkge1xuICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY3VycmVudCA8dXNlPlxuICAgICAgICAgICAgICAgIHZhciB1c2UgPSB1c2VzW2luZGV4XSwgcGFyZW50ID0gdXNlLnBhcmVudE5vZGUsIHN2ZyA9IGdldFNWR0FuY2VzdG9yKHBhcmVudCksIHNyYyA9IHVzZS5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpIHx8IHVzZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICAgICAgICAgIGlmICghc3JjICYmIG9wdHMuYXR0cmlidXRlTmFtZSAmJiAoc3JjID0gdXNlLmdldEF0dHJpYnV0ZShvcHRzLmF0dHJpYnV0ZU5hbWUpKSwgXG4gICAgICAgICAgICAgICAgc3ZnICYmIHNyYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9seWZpbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0cy52YWxpZGF0ZSB8fCBvcHRzLnZhbGlkYXRlKHNyYywgc3ZnLCB1c2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSA8dXNlPiBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHVzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyc2UgdGhlIHNyYyBhbmQgZ2V0IHRoZSB1cmwgYW5kIGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNyY1NwbGl0ID0gc3JjLnNwbGl0KFwiI1wiKSwgdXJsID0gc3JjU3BsaXQuc2hpZnQoKSwgaWQgPSBzcmNTcGxpdC5qb2luKFwiI1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgbGluayBpcyBleHRlcm5hbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHhociByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB4aHIgPSByZXF1ZXN0c1t1cmxdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGhlIHhociByZXF1ZXN0IGV4aXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIgfHwgKHhociA9IHJlcXVlc3RzW3VybF0gPSBuZXcgWE1MSHR0cFJlcXVlc3QoKSwgeGhyLm9wZW4oXCJHRVRcIiwgdXJsKSwgeGhyLnNlbmQoKSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzID0gW10pLCAvLyBhZGQgdGhlIHN2ZyBhbmQgaWQgYXMgYW4gaXRlbSB0byB0aGUgeGhyIGVtYmVkcyBsaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5fZW1iZWRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmc6IHN2ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgLy8gcHJlcGFyZSB0aGUgeGhyIHJlYWR5IHN0YXRlIGNoYW5nZSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkcmVhZHlzdGF0ZWNoYW5nZSh4aHIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVtYmVkIHRoZSBsb2NhbCBpZCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1iZWQocGFyZW50LCBzdmcsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgaW5kZXggd2hlbiB0aGUgcHJldmlvdXMgdmFsdWUgd2FzIG5vdCBcInZhbGlkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICArK2luZGV4LCArK251bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICArK2luZGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnRpbnVlIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKCF1c2VzLmxlbmd0aCB8fCB1c2VzLmxlbmd0aCAtIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA+IDApICYmIHJlcXVlc3RBbmltYXRpb25GcmFtZShvbmludGVydmFsLCA2Nyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBvbHlmaWxsLCBvcHRzID0gT2JqZWN0KHJhd29wdHMpLCBuZXdlcklFVUEgPSAvXFxiVHJpZGVudFxcL1s1NjddXFxifFxcYk1TSUUgKD86OXwxMClcXC4wXFxiLywgd2Via2l0VUEgPSAvXFxiQXBwbGVXZWJLaXRcXC8oXFxkKylcXGIvLCBvbGRlckVkZ2VVQSA9IC9cXGJFZGdlXFwvMTJcXC4oXFxkKylcXGIvLCBlZGdlVUEgPSAvXFxiRWRnZVxcLy4oXFxkKylcXGIvLCBpbklmcmFtZSA9IHdpbmRvdy50b3AgIT09IHdpbmRvdy5zZWxmO1xuICAgICAgICBwb2x5ZmlsbCA9IFwicG9seWZpbGxcIiBpbiBvcHRzID8gb3B0cy5wb2x5ZmlsbCA6IG5ld2VySUVVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKG9sZGVyRWRnZVVBKSB8fCBbXSlbMV0gPCAxMDU0NyB8fCAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh3ZWJraXRVQSkgfHwgW10pWzFdIDwgNTM3IHx8IGVkZ2VVQS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIGluSWZyYW1lO1xuICAgICAgICAvLyBjcmVhdGUgeGhyIHJlcXVlc3RzIG9iamVjdFxuICAgICAgICB2YXIgcmVxdWVzdHMgPSB7fSwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBzZXRUaW1lb3V0LCB1c2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ1c2VcIiksIG51bWJlck9mU3ZnVXNlRWxlbWVudHNUb0J5cGFzcyA9IDA7XG4gICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc3RhcnQgdGhlIGludGVydmFsIGlmIHRoZSBwb2x5ZmlsbCBpcyBhY3RpdmVcbiAgICAgICAgcG9seWZpbGwgJiYgb25pbnRlcnZhbCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZXRTVkdBbmNlc3Rvcihub2RlKSB7XG4gICAgICAgIGZvciAodmFyIHN2ZyA9IG5vZGU7IFwic3ZnXCIgIT09IHN2Zy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICYmIChzdmcgPSBzdmcucGFyZW50Tm9kZSk7ICkge31cbiAgICAgICAgcmV0dXJuIHN2ZztcbiAgICB9XG4gICAgcmV0dXJuIHN2ZzRldmVyeWJvZHk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ZnNGV2ZXJ5Ym9keS9kaXN0L3N2ZzRldmVyeWJvZHkuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIiwiY29uc3Qgc2Nyb2xsTmV4dCA9ICgoKSA9PiB7XHJcblxyXG4gIGNvbnN0IG5leHRCdXQgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0JyksXHJcbiAgICBmaXJzdFNlY3Rpb24gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5sLXNlY3Rpb24nKSxcclxuICAgIHNjcm9sbFBvcyA9IGZpcnN0U2VjdGlvbi5jbGllbnRIZWlnaHQgLSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodC8yNTtcclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9IChvcHRpb25zKSA9PiB7XHJcblxyXG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gX2FuaW1hdGUodGltZSkge1xyXG4gICAgLy8gdGltZUZyYWN0aW9uINC+0YIgMCDQtNC+IDFcclxuICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9ICh0aW1lIC0gc3RhcnQpIC8gb3B0aW9ucy5kdXJhdGlvbjtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHRpbWVGcmFjdGlvbiA9IDE7XHJcbiAgICAgIC8vINGC0LXQutGD0YnQtdC1INGB0L7RgdGC0L7Rj9C90LjQtSDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IG9wdGlvbnMudGltaW5nKHRpbWVGcmFjdGlvbik7XHJcbiAgICAgIG9wdGlvbnMubW92ZShwcm9ncmVzcyk7XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1NlY3QgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYW5pbWF0ZSh7XHJcbiAgICAgIGR1cmF0aW9uOiA1MDAsXHJcbiAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcclxuICAgICAgfSxcclxuICAgICAgbW92ZTogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSAocHJvZ3Jlc3MpKnNjcm9sbFBvcztcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGtleURvd24gPSAoZSkgPT4ge1xyXG4gICAgbGV0IHRhZyA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgIHN3aXRjaChlLndoaWNoKSB7XHJcbiAgICBjYXNlIDQwOlxyXG4gICAgICBpZiAodGFnICE9ICdpbnB1dCcgJiYgdGFnICE9ICd0ZXh0YXJlYScpIHtcclxuICAgICAgICBzaG93U2VjdChlKTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIGRlZmF1bHQ6IHJldHVybjtcclxuICAgIH0gXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBrZXlEb3duLCBmYWxzZSk7XHJcbiAgICBuZXh0QnV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1NlY3QsIGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge2hhbmRsZXJ9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsTmV4dDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9zY3JvbGxuZXh0LmpzIiwiaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuaW1wb3J0ICcuLi9hc3NldHMvc3R5bGVzL2Fib3V0Lm1haW4uc2Nzcyc7XHJcbmltcG9ydCBzdmc0ZXZlcnlib2R5IGZyb20gJ3N2ZzRldmVyeWJvZHknO1xyXG5zdmc0ZXZlcnlib2R5KCk7XHJcblxyXG5pbXBvcnQgc2Nyb2xsTmV4dCBmcm9tICcuL2NvbXBvbmVudHMvc2Nyb2xsbmV4dC5qcyc7XHJcbmltcG9ydCBkaWFncmFtbXNTa2lsbHMgZnJvbSAnLi9jb21wb25lbnRzL2RpYWdyYW1tX3NraWxscy5qcyc7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHNjcm9sbE5leHQuaGFuZGxlcigpO1xyXG4gIGRpYWdyYW1tc1NraWxscy5pbml0KCk7XHJcbn07XHJcbmNvbnNvbGUubG9nKCdJdGAgd29yayAlJSUhJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2Fib3V0LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zdHlsZXMvYWJvdXQubWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcclxuY29uc3QgZGlhZ3JhbW1zU2tpbGxzID0gKCgpID0+IHtcclxuICBjb25zdCBkYXRhID0gW3tncm91cFRpdGxlOiAnRnJvbnRlbmQnLFxyXG4gICAgICBza2lsbHM6IFt7c2tpbGxUaXRsZTogJ0hUTUw1ICZDU1MzJywgcGVyY2VudDogJzAuOTInfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ1Nhc3MgJlB1ZycsIHBlcmNlbnQ6ICcwLjg1J30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdKYXZhU2NyaXB0ICZqUXVlcnknLCBwZXJjZW50OiAnMC44NSd9XX0sXHJcbiAgICB7Z3JvdXBUaXRsZTogJ0JhY2tlbmQnLCBcclxuICAgICAgc2tpbGxzOiBbe3NraWxsVGl0bGU6ICdQSFAnLCBwZXJjZW50OiAnMC4zJ30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdOb2RlLmpzICZucG0nLCBwZXJjZW50OiAnMC41J30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdteVNRTCcsIHBlcmNlbnQ6ICcwLjQnfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ01vbmdvLmRiJywgcGVyY2VudDogJzAuNid9XX0sXHJcbiAgICB7Z3JvdXBUaXRsZTogJ1dvcmtmbG93JywgXHJcbiAgICAgIHNraWxsczogW3tza2lsbFRpdGxlOiAnR2l0JywgcGVyY2VudDogJzAuOTInfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ1dlYnBhY2snLCBwZXJjZW50OiAnMC43NSd9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnR3VscCcsIHBlcmNlbnQ6ICcwLjgwJ31dfSxcclxuICAgIF0sXHJcbiAgICBjb250YWluZXJTa2lsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYy1za2lsbHMtY2FyZF9fY29udGFpbmVyJyksXHJcbiAgICBza2lsbHNTZWN0SGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtbWFpbl9fd3JhcHBlcicpLmNsaWVudEhlaWdodCxcclxuICAgIGZpcnN0U2VjdEhlaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sLWhlcm8nKS5jbGllbnRIZWlnaHQsXHJcbiAgICBhcnJJdGVtcyA9IG5ldyBBcnJheSgpO1xyXG5cclxuICBjbGFzcyBTa2lsbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgIHRoaXMuc3ZnbnMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG4gICAgICB0aGlzLnN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLnN2Z25zLCAnc3ZnJyk7XHJcbiAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRofHwxMTI7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHR8fHRoaXMud2lkdGg7XHJcbiAgICAgIHRoaXMucmFkaXVzID0gdGhpcy53aWR0aCAvIDM7XHJcbiAgICAgIHRoaXMucGVyY2VudCA9IG9wdGlvbnMucGVyY2VudDtcclxuICAgICAgdGhpcy5zdHJva2VEYXNoYXJyYXkgPSAyICogTWF0aC5QSSAqIHRoaXMucmFkaXVzO1xyXG4gICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgdGhpcy53aWR0aCk7XHJcbiAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgdGhpcy5oZWlnaHQpO1xyXG4gICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoJ29wYWNpdHknLCBvcHRpb25zLnBlcmNlbnQpO1xyXG4gICAgICB0aGlzLnN2Zy5jbGFzc0xpc3QuYWRkKCdzdmdfc2tpbGwtZGlhZ3InKTtcclxuICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCd2aWV3Qm94JywgYDAgMCAke3RoaXMud2lkdGh9ICR7dGhpcy5oZWlnaHR9YCk7XHJcbiAgICAgIHRoaXMuYmFzZUNpcmNsZSA9IHRoaXMuY3JlYXRlQ2lyY2xlKCdyZ2IoMCwgMTkxLCAxNjUpJywgdHJ1ZSk7XHJcbiAgICAgIHRoaXMuYmdDaXJjbGUgPSB0aGlzLmNyZWF0ZUNpcmNsZSgnI2NjYycpO1xyXG4gICAgICB0aGlzLmFkZChvcHRpb25zLmNvbnRhaW5lciwgb3B0aW9ucy50aXRsZSk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2lyY2xlKGNvbG9yLCBpc0Jhc2UgPSBmYWxzZSkge1xyXG4gICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlModGhpcy5zdmducywgJ2NpcmNsZScpO1xyXG4gICAgICBjb25zdCBjeCA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICBjb25zdCBjeSA9IHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3gnLCBjeCk7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2N5JywgY3kpO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdyJywgdGhpcy5yYWRpdXMpO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdmaWxsJywgJ25vbmUnKTtcclxuICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgY29sb3IpO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2Utd2lkdGgnLCAnMjAnKTtcclxuICAgICAgaWYgKGlzQmFzZSkge1xyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsIGByb3RhdGUoLTkwICR7Y3h9ICR7Y3l9KWApO1xyXG4gICAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNoYXJyYXknLCB0aGlzLnN0cm9rZURhc2hhcnJheSk7XHJcbiAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hvZmZzZXQnLCB0aGlzLnN0cm9rZURhc2hhcnJheSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNpcmNsZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoY29udGFpbmVyLCB0aXRsZSkge1xyXG4gICAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYy1za2lsbHMtY2FyZF9fc2tpbGwtaXRlbScpO1xyXG4gICAgICBjb25zdCB0aXRsZVN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICB0aXRsZVN2Zy5jbGFzc0xpc3QuYWRkKCdjLXNraWxscy1jYXJkX19za2lsbC10aXRsZScpO1xyXG4gICAgICB0aXRsZVN2Zy50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLmJnQ2lyY2xlKTtcclxuICAgICAgdGhpcy5zdmcuYXBwZW5kQ2hpbGQodGhpcy5iYXNlQ2lyY2xlKTtcclxuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0aXRsZVN2Zyk7XHJcbiAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5zdmcpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocHJvZ3Jlc3MpIHtcclxuICAgICAgdGhpcy5iYXNlQ2lyY2xlLnNldEF0dHJpYnV0ZShcclxuICAgICAgICAnc3Ryb2tlLWRhc2hvZmZzZXQnLFxyXG4gICAgICAgICgxIC0gcHJvZ3Jlc3MgKiB0aGlzLnBlcmNlbnQpICogdGhpcy5zdHJva2VEYXNoYXJyYXlcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFuaW1hdGUob3B0aW9ucykge1xyXG4gICAgbGV0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIF9hbmltYXRlKHRpbWUpIHtcclxuICAgIC8vIHRpbWVGcmFjdGlvbiDQvtGCIDAg0LTQviAxXHJcbiAgICAgIGxldCB0aW1lRnJhY3Rpb24gPSAodGltZSAtIHN0YXJ0KSAvIG9wdGlvbnMuZHVyYXRpb247XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPiAxKSB0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgICAvLyDRgtC10LrRg9GJ0LXQtSDRgdC+0YHRgtC+0Y/QvdC40LUg0LDQvdC40LzQsNGG0LjQuFxyXG4gICAgICBsZXQgcHJvZ3Jlc3MgPSBvcHRpb25zLnRpbWluZyh0aW1lRnJhY3Rpb24pO1xyXG4gICAgICBvcHRpb25zLmRyYXcocHJvZ3Jlc3MpO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY3JlYXRlRXhTa2lsbHMoZGF0YSkge1xyXG4gICAgY29uc3Qgd2lkdGggPSAxNDU7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBkYXRhLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICBhcnJJdGVtc1tpXSA9IG5ldyBBcnJheSgpO1xyXG4gICAgICBjb25zdCBncm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgIGNvbnN0IGdyb3VwVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGdyb3VwLmNsYXNzTGlzdC5hZGQoJ2Mtc2tpbGxzLWNhcmRfX2dyb3VwJyk7XHJcbiAgICAgIGdyb3VwVGl0bGUuY2xhc3NMaXN0LmFkZCgnYy1za2lsbHMtY2FyZF9fZ3JvdXAtdGl0bGUnKTtcclxuICAgICAgc2tpbGxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Mtc2tpbGxzLWNhcmRfX2dyb3VwLWNvbnRlbnQnKTtcclxuICAgICAgZ3JvdXBUaXRsZS50ZXh0Q29udGVudCA9IGRhdGFbaV0uZ3JvdXBUaXRsZTtcclxuICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoZ3JvdXBUaXRsZSk7XHJcbiAgICAgIGdyb3VwLmFwcGVuZENoaWxkKHNraWxsc0NvbnRhaW5lcik7XHJcbiAgICAgIGNvbnRhaW5lclNraWxscy5hcHBlbmRDaGlsZChncm91cCk7XHJcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDw9IGRhdGFbaV0uc2tpbGxzLmxlbmd0aCAtIDE7IGorKykge1xyXG4gICAgICAgIGFyckl0ZW1zW2ldW2pdID0gbmV3IFNraWxsKHt3aWR0aDogd2lkdGgsIGNvbnRhaW5lcjogc2tpbGxzQ29udGFpbmVyLCB0aXRsZTogZGF0YVtpXS5za2lsbHNbal0uc2tpbGxUaXRsZSwgcGVyY2VudDogZGF0YVtpXS5za2lsbHNbal0ucGVyY2VudH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzY3JvbGxBbmltYXRlKGUpIHtcclxuICAgIGNvbnN0IHBhZ2VZT2Zmc2V0ID0gZS5jdXJyZW50VGFyZ2V0LnBhZ2VZT2Zmc2V0O1xyXG4gICAgaWYocGFnZVlPZmZzZXQ+c2tpbGxzU2VjdEhlaWdodHx8cGFnZVlPZmZzZXQ+Zmlyc3RTZWN0SGVpZ2h0LTQwMCYmcGFnZVlPZmZzZXQ8c2tpbGxzU2VjdEhlaWdodCkgcmV0dXJuO1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHthbmltYXRlKHtcclxuICAgICAgZHVyYXRpb246IDEwMDAsXHJcbiAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcclxuICAgICAgfSxcclxuICAgICAgZHJhdzogZnVuY3Rpb24ocHJvZ3Jlc3MpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBhcnJJdGVtcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDw9IGFyckl0ZW1zW2ldLmxlbmd0aCAtIDE7IGorKykge1xyXG4gICAgICAgICAgICBhcnJJdGVtc1tpXVtqXS5kcmF3KHByb2dyZXNzKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KTt9LCA1MCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY3JlYXRlRXhTa2lsbHMoZGF0YSk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc2Nyb2xsQW5pbWF0ZSwgZmFsc2UpO1xyXG4gIH1cclxuICByZXR1cm4ge2luaXR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGlhZ3JhbW1zU2tpbGxzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9jb21wb25lbnRzL2RpYWdyYW1tX3NraWxscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=