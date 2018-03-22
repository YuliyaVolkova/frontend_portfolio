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
/* 2 */,
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

var _diagramm_skills = __webpack_require__(12);

var _diagramm_skills2 = _interopRequireDefault(_diagramm_skills);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _svg4everybody2.default)();

window.onload = function () {

  scrollAbout.handler();
  _diagramm_skills2.default.init();
};
console.log('It` work %%%!');

var scrollAbout = function () {

  var sections = document.body.querySelectorAll('.l-section'),
      nextBut = document.body.querySelector('#next'),
      nodesSections = Array.prototype.slice.call(sections),
      arrOffset = nodesSections.map(function (item) {
    return item.offsetTop;
  });
  var flag = false;

  function getSection(scrollPos) {
    if (scrollPos <= arrOffset[0]) return 0;
    for (var i = 0; i < arrOffset.length - 1; i++) {
      if (scrollPos > arrOffset[i] && scrollPos < arrOffset[i + 1]) return i;
    }
    return arrOffset.length - 1;
  }

  function checkScroll() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var index = getSection(scrollPos + 50);
    window.location.hash = sections[index].getAttribute('data-section');
  }

  function showSection(e) {
    if (!window.location.hash && !e) return;
    var hash = e ? this.getAttribute('href') : window.location.hash,
        dataSect = hash.split('#').join(''),
        sectionAct = document.body.querySelector('.l-section[data-section="' + dataSect + '"'),
        index = nodesSections.indexOf(sectionAct);
    var scrollPos = arrOffset[index] - 25;
    if (e) animateMove(e, scrollPos);else document.documentElement.scrollTop = document.body.scrollTop = scrollPos;
  }

  var animate = function animate(options) {
    flag = true;
    var start = performance.now();
    var startPos = window.pageYOffset || document.documentElement.scrollTop;
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
    nextBut.addEventListener('click', showSection, false);
  };

  return { handler: handler };
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjJiZjQwM2I2NmVkOTIxNWZiNTUiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hYm91dC5tYWluLnNjc3M/NmI3NyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9kaWFncmFtbV9za2lsbHMuanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwic2Nyb2xsQWJvdXQiLCJoYW5kbGVyIiwiaW5pdCIsImNvbnNvbGUiLCJsb2ciLCJzZWN0aW9ucyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJuZXh0QnV0IiwicXVlcnlTZWxlY3RvciIsIm5vZGVzU2VjdGlvbnMiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImFyck9mZnNldCIsIm1hcCIsIml0ZW0iLCJvZmZzZXRUb3AiLCJmbGFnIiwiZ2V0U2VjdGlvbiIsInNjcm9sbFBvcyIsImkiLCJsZW5ndGgiLCJjaGVja1Njcm9sbCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiaW5kZXgiLCJsb2NhdGlvbiIsImhhc2giLCJnZXRBdHRyaWJ1dGUiLCJzaG93U2VjdGlvbiIsImUiLCJkYXRhU2VjdCIsInNwbGl0Iiwiam9pbiIsInNlY3Rpb25BY3QiLCJpbmRleE9mIiwiYW5pbWF0ZU1vdmUiLCJhbmltYXRlIiwib3B0aW9ucyIsInN0YXJ0IiwicGVyZm9ybWFuY2UiLCJub3ciLCJzdGFydFBvcyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIl9hbmltYXRlIiwidGltZSIsInRpbWVGcmFjdGlvbiIsImR1cmF0aW9uIiwicHJvZ3Jlc3MiLCJ0aW1pbmciLCJtb3ZlIiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlhZ3JhbW1zU2tpbGxzIiwiZGF0YSIsImdyb3VwVGl0bGUiLCJza2lsbHMiLCJza2lsbFRpdGxlIiwicGVyY2VudCIsImNvbnRhaW5lclNraWxscyIsInNraWxsc1NlY3RIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJmaXJzdFNlY3RIZWlnaHQiLCJhcnJJdGVtcyIsIlNraWxsIiwic3ZnbnMiLCJzdmciLCJjcmVhdGVFbGVtZW50TlMiLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsInN0cm9rZURhc2hhcnJheSIsIk1hdGgiLCJQSSIsInNldEF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsImJhc2VDaXJjbGUiLCJjcmVhdGVDaXJjbGUiLCJiZ0NpcmNsZSIsImNvbnRhaW5lciIsInRpdGxlIiwiY29sb3IiLCJpc0Jhc2UiLCJjaXJjbGUiLCJjeCIsImN5IiwiY3JlYXRlRWxlbWVudCIsInRpdGxlU3ZnIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImRyYXciLCJjcmVhdGVFeFNraWxscyIsImdyb3VwIiwic2tpbGxzQ29udGFpbmVyIiwiaiIsInNjcm9sbEFuaW1hdGUiLCJjdXJyZW50VGFyZ2V0Iiwic2V0VGltZW91dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNE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QyxFQUE2QzJFLEdBQTdDLEVBQWtEO0FBQ2hEaEMsdUJBQVM1QyxDQUFULEVBQVk0RSxDQUFaLEVBQWVKLElBQWYsQ0FBb0IzQyxRQUFwQjtBQUNEO0FBQ0Y7QUFDRjtBQVg0QixPQUFSO0FBWW5CLEtBWkosRUFZTSxFQVpOO0FBYUQ7O0FBRUQsV0FBU2xELElBQVQsR0FBZ0I7QUFDZDhGLG1CQUFldEMsSUFBZjtBQUNBNUQsV0FBTzBELGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDNEMsYUFBbEMsRUFBaUQsS0FBakQ7QUFDRDtBQUNELFNBQU8sRUFBQ2xHLFVBQUQsRUFBUDtBQUNELENBMUl1QixFQUF4Qjs7a0JBNElldUQsZSIsImZpbGUiOiJhcHAvYWJvdXQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGYyYmY0MDNiNjZlZDkyMTVmYjU1IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMyIsIiFmdW5jdGlvbihyb290LCBmYWN0b3J5KSB7XG4gICAgXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XG4gICAgZGVmaW5lKFtdLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbiAgICB9KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSAmJiBtb2R1bGUuZXhwb3J0cyA/IC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxuICAgIC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxuICAgIC8vIGxpa2UgTm9kZS5cbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6IHJvb3Quc3ZnNGV2ZXJ5Ym9keSA9IGZhY3RvcnkoKTtcbn0odGhpcywgZnVuY3Rpb24oKSB7XG4gICAgLyohIHN2ZzRldmVyeWJvZHkgdjIuMS45IHwgZ2l0aHViLmNvbS9qb25hdGhhbnRuZWFsL3N2ZzRldmVyeWJvZHkgKi9cbiAgICBmdW5jdGlvbiBlbWJlZChwYXJlbnQsIHN2ZywgdGFyZ2V0KSB7XG4gICAgICAgIC8vIGlmIHRoZSB0YXJnZXQgZXhpc3RzXG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRvY3VtZW50IGZyYWdtZW50IHRvIGhvbGQgdGhlIGNvbnRlbnRzIG9mIHRoZSB0YXJnZXRcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSwgdmlld0JveCA9ICFzdmcuaGFzQXR0cmlidXRlKFwidmlld0JveFwiKSAmJiB0YXJnZXQuZ2V0QXR0cmlidXRlKFwidmlld0JveFwiKTtcbiAgICAgICAgICAgIC8vIGNvbmRpdGlvbmFsbHkgc2V0IHRoZSB2aWV3Qm94IG9uIHRoZSBzdmdcbiAgICAgICAgICAgIHZpZXdCb3ggJiYgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgdmlld0JveCk7XG4gICAgICAgICAgICAvLyBjb3B5IHRoZSBjb250ZW50cyBvZiB0aGUgY2xvbmUgaW50byB0aGUgZnJhZ21lbnRcbiAgICAgICAgICAgIGZvciAoLy8gY2xvbmUgdGhlIHRhcmdldFxuICAgICAgICAgICAgdmFyIGNsb25lID0gdGFyZ2V0LmNsb25lTm9kZSghMCk7IGNsb25lLmNoaWxkTm9kZXMubGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjbG9uZS5maXJzdENoaWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFwcGVuZCB0aGUgZnJhZ21lbnQgaW50byB0aGUgc3ZnXG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocikge1xuICAgICAgICAvLyBsaXN0ZW4gdG8gY2hhbmdlcyBpbiB0aGUgcmVxdWVzdFxuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdCBpcyByZWFkeVxuICAgICAgICAgICAgaWYgKDQgPT09IHhoci5yZWFkeVN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudFxuICAgICAgICAgICAgICAgIHZhciBjYWNoZWREb2N1bWVudCA9IHhoci5fY2FjaGVkRG9jdW1lbnQ7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHRoZSBjYWNoZWQgaHRtbCBkb2N1bWVudCBiYXNlZCBvbiB0aGUgeGhyIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQgfHwgKGNhY2hlZERvY3VtZW50ID0geGhyLl9jYWNoZWREb2N1bWVudCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudChcIlwiKSwgXG4gICAgICAgICAgICAgICAgY2FjaGVkRG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSB4aHIucmVzcG9uc2VUZXh0LCB4aHIuX2NhY2hlZFRhcmdldCA9IHt9KSwgLy8gY2xlYXIgdGhlIHhociBlbWJlZHMgbGlzdCBhbmQgZW1iZWQgZWFjaCBpdGVtXG4gICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMuc3BsaWNlKDApLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldCB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0geGhyLl9jYWNoZWRUYXJnZXRbaXRlbS5pZF07XG4gICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgY2FjaGVkIHRhcmdldFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgfHwgKHRhcmdldCA9IHhoci5fY2FjaGVkVGFyZ2V0W2l0ZW0uaWRdID0gY2FjaGVkRG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbS5pZCkpLCBcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIHRhcmdldCBpbnRvIHRoZSBzdmdcbiAgICAgICAgICAgICAgICAgICAgZW1iZWQoaXRlbS5wYXJlbnQsIGl0ZW0uc3ZnLCB0YXJnZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAvLyB0ZXN0IHRoZSByZWFkeSBzdGF0ZSBjaGFuZ2UgaW1tZWRpYXRlbHlcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdmc0ZXZlcnlib2R5KHJhd29wdHMpIHtcbiAgICAgICAgZnVuY3Rpb24gb25pbnRlcnZhbCgpIHtcbiAgICAgICAgICAgIC8vIHdoaWxlIHRoZSBpbmRleCBleGlzdHMgaW4gdGhlIGxpdmUgPHVzZT4gY29sbGVjdGlvblxuICAgICAgICAgICAgZm9yICgvLyBnZXQgdGhlIGNhY2hlZCA8dXNlPiBpbmRleFxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMDsgaW5kZXggPCB1c2VzLmxlbmd0aDsgKSB7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjdXJyZW50IDx1c2U+XG4gICAgICAgICAgICAgICAgdmFyIHVzZSA9IHVzZXNbaW5kZXhdLCBwYXJlbnQgPSB1c2UucGFyZW50Tm9kZSwgc3ZnID0gZ2V0U1ZHQW5jZXN0b3IocGFyZW50KSwgc3JjID0gdXNlLmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikgfHwgdXNlLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgaWYgKCFzcmMgJiYgb3B0cy5hdHRyaWJ1dGVOYW1lICYmIChzcmMgPSB1c2UuZ2V0QXR0cmlidXRlKG9wdHMuYXR0cmlidXRlTmFtZSkpLCBcbiAgICAgICAgICAgICAgICBzdmcgJiYgc3JjKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwb2x5ZmlsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRzLnZhbGlkYXRlIHx8IG9wdHMudmFsaWRhdGUoc3JjLCBzdmcsIHVzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIDx1c2U+IGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQodXNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBwYXJzZSB0aGUgc3JjIGFuZCBnZXQgdGhlIHVybCBhbmQgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3JjU3BsaXQgPSBzcmMuc3BsaXQoXCIjXCIpLCB1cmwgPSBzcmNTcGxpdC5zaGlmdCgpLCBpZCA9IHNyY1NwbGl0LmpvaW4oXCIjXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsaW5rIGlzIGV4dGVybmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBjYWNoZWQgeGhyIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHhociA9IHJlcXVlc3RzW3VybF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVuc3VyZSB0aGUgeGhyIHJlcXVlc3QgZXhpc3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhociB8fCAoeGhyID0gcmVxdWVzdHNbdXJsXSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLCB4aHIub3BlbihcIkdFVFwiLCB1cmwpLCB4aHIuc2VuZCgpLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMgPSBbXSksIC8vIGFkZCB0aGUgc3ZnIGFuZCBpZCBhcyBhbiBpdGVtIHRvIHRoZSB4aHIgZW1iZWRzIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeGhyLl9lbWJlZHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2Zzogc3ZnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCAvLyBwcmVwYXJlIHRoZSB4aHIgcmVhZHkgc3RhdGUgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRyZWFkeXN0YXRlY2hhbmdlKHhocik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgdGhlIGxvY2FsIGlkIGludG8gdGhlIHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbWJlZChwYXJlbnQsIHN2ZywgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIHRoZSBpbmRleCB3aGVuIHRoZSBwcmV2aW91cyB2YWx1ZSB3YXMgbm90IFwidmFsaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsraW5kZXgsICsrbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgdGhlIGluZGV4IHdoZW4gdGhlIHByZXZpb3VzIHZhbHVlIHdhcyBub3QgXCJ2YWxpZFwiXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29udGludWUgdGhlIGludGVydmFsXG4gICAgICAgICAgICAoIXVzZXMubGVuZ3RoIHx8IHVzZXMubGVuZ3RoIC0gbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID4gMCkgJiYgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKG9uaW50ZXJ2YWwsIDY3KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcG9seWZpbGwsIG9wdHMgPSBPYmplY3QocmF3b3B0cyksIG5ld2VySUVVQSA9IC9cXGJUcmlkZW50XFwvWzU2N11cXGJ8XFxiTVNJRSAoPzo5fDEwKVxcLjBcXGIvLCB3ZWJraXRVQSA9IC9cXGJBcHBsZVdlYktpdFxcLyhcXGQrKVxcYi8sIG9sZGVyRWRnZVVBID0gL1xcYkVkZ2VcXC8xMlxcLihcXGQrKVxcYi8sIGVkZ2VVQSA9IC9cXGJFZGdlXFwvLihcXGQrKVxcYi8sIGluSWZyYW1lID0gd2luZG93LnRvcCAhPT0gd2luZG93LnNlbGY7XG4gICAgICAgIHBvbHlmaWxsID0gXCJwb2x5ZmlsbFwiIGluIG9wdHMgPyBvcHRzLnBvbHlmaWxsIDogbmV3ZXJJRVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHwgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2gob2xkZXJFZGdlVUEpIHx8IFtdKVsxXSA8IDEwNTQ3IHx8IChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKHdlYmtpdFVBKSB8fCBbXSlbMV0gPCA1MzcgfHwgZWRnZVVBLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgaW5JZnJhbWU7XG4gICAgICAgIC8vIGNyZWF0ZSB4aHIgcmVxdWVzdHMgb2JqZWN0XG4gICAgICAgIHZhciByZXF1ZXN0cyA9IHt9LCByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQsIHVzZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInVzZVwiKSwgbnVtYmVyT2ZTdmdVc2VFbGVtZW50c1RvQnlwYXNzID0gMDtcbiAgICAgICAgLy8gY29uZGl0aW9uYWxseSBzdGFydCB0aGUgaW50ZXJ2YWwgaWYgdGhlIHBvbHlmaWxsIGlzIGFjdGl2ZVxuICAgICAgICBwb2x5ZmlsbCAmJiBvbmludGVydmFsKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdldFNWR0FuY2VzdG9yKG5vZGUpIHtcbiAgICAgICAgZm9yICh2YXIgc3ZnID0gbm9kZTsgXCJzdmdcIiAhPT0gc3ZnLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgJiYgKHN2ZyA9IHN2Zy5wYXJlbnROb2RlKTsgKSB7fVxuICAgICAgICByZXR1cm4gc3ZnO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnNGV2ZXJ5Ym9keTtcbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9zdmc0ZXZlcnlib2R5L2Rpc3Qvc3ZnNGV2ZXJ5Ym9keS5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDMiLCJpbXBvcnQgJ25vcm1hbGl6ZS5jc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9zdHlsZXMvYWJvdXQubWFpbi5zY3NzJztcclxuaW1wb3J0IHN2ZzRldmVyeWJvZHkgZnJvbSAnc3ZnNGV2ZXJ5Ym9keSc7XHJcbnN2ZzRldmVyeWJvZHkoKTtcclxuXHJcbmltcG9ydCBkaWFncmFtbXNTa2lsbHMgZnJvbSAnLi9jb21wb25lbnRzL2RpYWdyYW1tX3NraWxscy5qcyc7XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gIHNjcm9sbEFib3V0LmhhbmRsZXIoKTtcclxuICBkaWFncmFtbXNTa2lsbHMuaW5pdCgpO1xyXG59O1xyXG5jb25zb2xlLmxvZygnSXRgIHdvcmsgJSUlIScpO1xyXG5cclxuY29uc3Qgc2Nyb2xsQWJvdXQgPSAoKCkgPT4ge1xyXG5cclxuICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvckFsbCgnLmwtc2VjdGlvbicpLFxyXG4gICAgbmV4dEJ1dCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignI25leHQnKSxcclxuICAgIG5vZGVzU2VjdGlvbnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzZWN0aW9ucyksXHJcbiAgICBhcnJPZmZzZXQgPSBub2Rlc1NlY3Rpb25zLm1hcCgoaXRlbSkgPT4gaXRlbS5vZmZzZXRUb3ApO1xyXG4gIHZhciAgZmxhZyA9IGZhbHNlO1xyXG5cclxuICBcclxuICBmdW5jdGlvbiBnZXRTZWN0aW9uKHNjcm9sbFBvcykgIHtcclxuICAgIGlmKHNjcm9sbFBvczw9YXJyT2Zmc2V0WzBdKSByZXR1cm4gMDtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyT2Zmc2V0Lmxlbmd0aC0xOyBpKyspIHtcclxuICAgICAgaWYoc2Nyb2xsUG9zPmFyck9mZnNldFtpXSYmc2Nyb2xsUG9zPGFyck9mZnNldFtpKzFdKVxyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyck9mZnNldC5sZW5ndGgtMTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNoZWNrU2Nyb2xsKCkge1xyXG4gICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICBjb25zdCBpbmRleCA9IGdldFNlY3Rpb24oc2Nyb2xsUG9zKzUwKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gc2VjdGlvbnNbaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS1zZWN0aW9uJyk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93U2VjdGlvbihlKSB7XHJcbiAgICBpZighd2luZG93LmxvY2F0aW9uLmhhc2gmJiFlKSByZXR1cm47XHJcbiAgICBjb25zdCBoYXNoID0gZT90aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpOndpbmRvdy5sb2NhdGlvbi5oYXNoLFxyXG4gICAgICBkYXRhU2VjdCA9IGhhc2guc3BsaXQoJyMnKS5qb2luKCcnKSxcclxuICAgICAgc2VjdGlvbkFjdCA9IGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihgLmwtc2VjdGlvbltkYXRhLXNlY3Rpb249XCIke2RhdGFTZWN0fVwiYCksXHJcbiAgICAgIGluZGV4ID0gbm9kZXNTZWN0aW9ucy5pbmRleE9mKHNlY3Rpb25BY3QpO1xyXG4gICAgdmFyIHNjcm9sbFBvcyA9IGFyck9mZnNldFtpbmRleF0tMjU7XHJcbiAgICBpZihlKSBhbmltYXRlTW92ZShlLCBzY3JvbGxQb3MpO1xyXG4gICAgZWxzZSBcclxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYW5pbWF0ZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgICBmbGFnID0gdHJ1ZTtcclxuICAgIGxldCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgdmFyIHN0YXJ0UG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gX2FuaW1hdGUodGltZSkge1xyXG4gICAgLy8gdGltZUZyYWN0aW9uINC+0YIgMCDQtNC+IDFcclxuICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9ICh0aW1lIC0gc3RhcnQpIC8gb3B0aW9ucy5kdXJhdGlvbjtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHt0aW1lRnJhY3Rpb24gPSAxO1xyXG4gICAgICAgIGZsYWcgPSBmYWxzZTt9XHJcbiAgICAgIC8vINGC0LXQutGD0YnQtdC1INGB0L7RgdGC0L7Rj9C90LjQtSDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IG9wdGlvbnMudGltaW5nKHRpbWVGcmFjdGlvbik7XHJcbiAgICAgIG9wdGlvbnMubW92ZShwcm9ncmVzcywgc3RhcnRQb3MpO1xyXG4gICAgICBpZiAodGltZUZyYWN0aW9uIDwgMSkge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShfYW5pbWF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGFuaW1hdGVNb3ZlID0gKGUsIHNjcm9sbFBvcykgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgYW5pbWF0ZSh7XHJcbiAgICAgIGR1cmF0aW9uOiA3MDAsXHJcbiAgICAgIHRpbWluZzogZnVuY3Rpb24odGltZUZyYWN0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHRpbWVGcmFjdGlvbjtcclxuICAgICAgfSxcclxuICAgICAgbW92ZTogZnVuY3Rpb24ocHJvZ3Jlc3MsIHN0YXJ0UG9zKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wID0gc3RhcnRQb3MgKyAoc2Nyb2xsUG9zLSBzdGFydFBvcykqKHByb2dyZXNzKTtcclxuICAgICAgfSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiB7XHJcblxyXG4gICAgc2hvd1NlY3Rpb24oKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBjaGVja1Njcm9sbCwgZmFsc2UpO1xyXG4gICAgbmV4dEJ1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWN0aW9uLCBmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtoYW5kbGVyfTtcclxufSkoKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvYWJvdXQuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3N0eWxlcy9hYm91dC5tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxyXG5jb25zdCBkaWFncmFtbXNTa2lsbHMgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSBbe2dyb3VwVGl0bGU6ICdGcm9udGVuZCcsXHJcbiAgICAgIHNraWxsczogW3tza2lsbFRpdGxlOiAnSFRNTDUgJkNTUzMnLCBwZXJjZW50OiAnMC45Mid9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnU2FzcyAmUHVnJywgcGVyY2VudDogJzAuODUnfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ0phdmFTY3JpcHQgJmpRdWVyeScsIHBlcmNlbnQ6ICcwLjg1J31dfSxcclxuICAgIHtncm91cFRpdGxlOiAnQmFja2VuZCcsIFxyXG4gICAgICBza2lsbHM6IFt7c2tpbGxUaXRsZTogJ1BIUCcsIHBlcmNlbnQ6ICcwLjMnfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ05vZGUuanMgJm5wbScsIHBlcmNlbnQ6ICcwLjUnfSxcclxuICAgICAgICB7c2tpbGxUaXRsZTogJ215U1FMJywgcGVyY2VudDogJzAuNCd9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnTW9uZ28uZGInLCBwZXJjZW50OiAnMC42J31dfSxcclxuICAgIHtncm91cFRpdGxlOiAnV29ya2Zsb3cnLCBcclxuICAgICAgc2tpbGxzOiBbe3NraWxsVGl0bGU6ICdHaXQnLCBwZXJjZW50OiAnMC45Mid9LFxyXG4gICAgICAgIHtza2lsbFRpdGxlOiAnV2VicGFjaycsIHBlcmNlbnQ6ICcwLjc1J30sXHJcbiAgICAgICAge3NraWxsVGl0bGU6ICdHdWxwJywgcGVyY2VudDogJzAuODAnfV19LFxyXG4gICAgXSxcclxuICAgIGNvbnRhaW5lclNraWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jLXNraWxscy1jYXJkX19jb250YWluZXInKSxcclxuICAgIHNraWxsc1NlY3RIZWlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubC1tYWluX193cmFwcGVyJykuY2xpZW50SGVpZ2h0LFxyXG4gICAgZmlyc3RTZWN0SGVpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmwtaGVybycpLmNsaWVudEhlaWdodCxcclxuICAgIGFyckl0ZW1zID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIGNsYXNzIFNraWxsIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgdGhpcy5zdmducyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XHJcbiAgICAgIHRoaXMuc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHRoaXMuc3ZnbnMsICdzdmcnKTtcclxuICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGh8fDExMjtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodHx8dGhpcy53aWR0aDtcclxuICAgICAgdGhpcy5yYWRpdXMgPSB0aGlzLndpZHRoIC8gMztcclxuICAgICAgdGhpcy5wZXJjZW50ID0gb3B0aW9ucy5wZXJjZW50O1xyXG4gICAgICB0aGlzLnN0cm9rZURhc2hhcnJheSA9IDIgKiBNYXRoLlBJICogdGhpcy5yYWRpdXM7XHJcbiAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB0aGlzLndpZHRoKTtcclxuICAgICAgdGhpcy5zdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgIHRoaXMuc3ZnLnNldEF0dHJpYnV0ZSgnb3BhY2l0eScsIG9wdGlvbnMucGVyY2VudCk7XHJcbiAgICAgIHRoaXMuc3ZnLmNsYXNzTGlzdC5hZGQoJ3N2Z19za2lsbC1kaWFncicpO1xyXG4gICAgICB0aGlzLnN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7dGhpcy53aWR0aH0gJHt0aGlzLmhlaWdodH1gKTtcclxuICAgICAgdGhpcy5iYXNlQ2lyY2xlID0gdGhpcy5jcmVhdGVDaXJjbGUoJ3JnYigwLCAxOTEsIDE2NSknLCB0cnVlKTtcclxuICAgICAgdGhpcy5iZ0NpcmNsZSA9IHRoaXMuY3JlYXRlQ2lyY2xlKCcjY2NjJyk7XHJcbiAgICAgIHRoaXMuYWRkKG9wdGlvbnMuY29udGFpbmVyLCBvcHRpb25zLnRpdGxlKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDaXJjbGUoY29sb3IsIGlzQmFzZSA9IGZhbHNlKSB7XHJcbiAgICAgIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyh0aGlzLnN2Z25zLCAnY2lyY2xlJyk7XHJcbiAgICAgIGNvbnN0IGN4ID0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IGN5ID0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeCcsIGN4KTtcclxuICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3knLCBjeSk7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3InLCB0aGlzLnJhZGl1cyk7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ2ZpbGwnLCAnbm9uZScpO1xyXG4gICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBjb2xvcik7XHJcbiAgICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS13aWR0aCcsICcyMCcpO1xyXG4gICAgICBpZiAoaXNCYXNlKSB7XHJcbiAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgYHJvdGF0ZSgtOTAgJHtjeH0gJHtjeX0pYCk7XHJcbiAgICAgICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnc3Ryb2tlLWRhc2hhcnJheScsIHRoaXMuc3Ryb2tlRGFzaGFycmF5KTtcclxuICAgICAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIHRoaXMuc3Ryb2tlRGFzaGFycmF5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2lyY2xlO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZChjb250YWluZXIsIHRpdGxlKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjLXNraWxscy1jYXJkX19za2lsbC1pdGVtJyk7XHJcbiAgICAgIGNvbnN0IHRpdGxlU3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIHRpdGxlU3ZnLmNsYXNzTGlzdC5hZGQoJ2Mtc2tpbGxzLWNhcmRfX3NraWxsLXRpdGxlJyk7XHJcbiAgICAgIHRpdGxlU3ZnLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbiAgICAgIHRoaXMuc3ZnLmFwcGVuZENoaWxkKHRoaXMuYmdDaXJjbGUpO1xyXG4gICAgICB0aGlzLnN2Zy5hcHBlbmRDaGlsZCh0aGlzLmJhc2VDaXJjbGUpO1xyXG4gICAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlU3ZnKTtcclxuICAgICAgaXRlbS5hcHBlbmRDaGlsZCh0aGlzLnN2Zyk7XHJcbiAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhwcm9ncmVzcykge1xyXG4gICAgICB0aGlzLmJhc2VDaXJjbGUuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICdzdHJva2UtZGFzaG9mZnNldCcsXHJcbiAgICAgICAgKDEgLSBwcm9ncmVzcyAqIHRoaXMucGVyY2VudCkgKiB0aGlzLnN0cm9rZURhc2hhcnJheVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYW5pbWF0ZShvcHRpb25zKSB7XHJcbiAgICBsZXQgc3RhcnQgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gX2FuaW1hdGUodGltZSkge1xyXG4gICAgLy8gdGltZUZyYWN0aW9uINC+0YIgMCDQtNC+IDFcclxuICAgICAgbGV0IHRpbWVGcmFjdGlvbiA9ICh0aW1lIC0gc3RhcnQpIC8gb3B0aW9ucy5kdXJhdGlvbjtcclxuICAgICAgaWYgKHRpbWVGcmFjdGlvbiA+IDEpIHRpbWVGcmFjdGlvbiA9IDE7XHJcbiAgICAgIC8vINGC0LXQutGD0YnQtdC1INGB0L7RgdGC0L7Rj9C90LjQtSDQsNC90LjQvNCw0YbQuNC4XHJcbiAgICAgIGxldCBwcm9ncmVzcyA9IG9wdGlvbnMudGltaW5nKHRpbWVGcmFjdGlvbik7XHJcbiAgICAgIG9wdGlvbnMuZHJhdyhwcm9ncmVzcyk7XHJcbiAgICAgIGlmICh0aW1lRnJhY3Rpb24gPCAxKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKF9hbmltYXRlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVFeFNraWxscyhkYXRhKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IDE0NTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGRhdGEubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIGFyckl0ZW1zW2ldID0gbmV3IEFycmF5KCk7XHJcbiAgICAgIGNvbnN0IGdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgY29uc3QgZ3JvdXBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCBza2lsbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgZ3JvdXAuY2xhc3NMaXN0LmFkZCgnYy1za2lsbHMtY2FyZF9fZ3JvdXAnKTtcclxuICAgICAgZ3JvdXBUaXRsZS5jbGFzc0xpc3QuYWRkKCdjLXNraWxscy1jYXJkX19ncm91cC10aXRsZScpO1xyXG4gICAgICBza2lsbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYy1za2lsbHMtY2FyZF9fZ3JvdXAtY29udGVudCcpO1xyXG4gICAgICBncm91cFRpdGxlLnRleHRDb250ZW50ID0gZGF0YVtpXS5ncm91cFRpdGxlO1xyXG4gICAgICBncm91cC5hcHBlbmRDaGlsZChncm91cFRpdGxlKTtcclxuICAgICAgZ3JvdXAuYXBwZW5kQ2hpbGQoc2tpbGxzQ29udGFpbmVyKTtcclxuICAgICAgY29udGFpbmVyU2tpbGxzLmFwcGVuZENoaWxkKGdyb3VwKTtcclxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gZGF0YVtpXS5za2lsbHMubGVuZ3RoIC0gMTsgaisrKSB7XHJcbiAgICAgICAgYXJySXRlbXNbaV1bal0gPSBuZXcgU2tpbGwoe3dpZHRoOiB3aWR0aCwgY29udGFpbmVyOiBza2lsbHNDb250YWluZXIsIHRpdGxlOiBkYXRhW2ldLnNraWxsc1tqXS5za2lsbFRpdGxlLCBwZXJjZW50OiBkYXRhW2ldLnNraWxsc1tqXS5wZXJjZW50fSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbEFuaW1hdGUoZSkge1xyXG4gICAgY29uc3QgcGFnZVlPZmZzZXQgPSBlLmN1cnJlbnRUYXJnZXQucGFnZVlPZmZzZXQ7XHJcbiAgICBpZihwYWdlWU9mZnNldD5za2lsbHNTZWN0SGVpZ2h0fHxwYWdlWU9mZnNldD5maXJzdFNlY3RIZWlnaHQtNDAwJiZwYWdlWU9mZnNldDxza2lsbHNTZWN0SGVpZ2h0KSByZXR1cm47XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge2FuaW1hdGUoe1xyXG4gICAgICBkdXJhdGlvbjogMTAwMCxcclxuICAgICAgdGltaW5nOiBmdW5jdGlvbih0aW1lRnJhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGltZUZyYWN0aW9uO1xyXG4gICAgICB9LFxyXG4gICAgICBkcmF3OiBmdW5jdGlvbihwcm9ncmVzcykge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGFyckl0ZW1zLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gYXJySXRlbXNbaV0ubGVuZ3RoIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgIGFyckl0ZW1zW2ldW2pdLmRyYXcocHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pO30sIDUwKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjcmVhdGVFeFNraWxscyhkYXRhKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzY3JvbGxBbmltYXRlLCBmYWxzZSk7XHJcbiAgfVxyXG4gIHJldHVybiB7aW5pdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkaWFncmFtbXNTa2lsbHM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvZGlhZ3JhbW1fc2tpbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==