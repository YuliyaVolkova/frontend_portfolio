webpackJsonp([0],{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @licence MIT
 * @author Sergey Melyukov
 */

var allSettled = __webpack_require__(40);

/**
 * Image preloader
 *
 * @class ImagePreloader
 * @constructor
 *
 * @param {(String|HTMLImageElement)=} fallbackImage
 * @param {function({status:boolean, value:HTMLImageElement})=} onProgress
 */
var ImagePreloader = function(fallbackImage, onProgress) {
    /**
     * @type {?function({status: boolean, value: HTMLImageElement})}
     */
    this.onProgress = typeof onProgress === 'function' ? onProgress : null;
    /**
     * @type {?String|HTMLImageElement}
     */
    this.fallbackImage = typeof fallbackImage === 'string' || fallbackImage instanceof HTMLImageElement ? fallbackImage : null;
};

/**
 * Do simple image preloading.
 *
 * @param {!(String|HTMLImageElement)} imageSource
 *
 * @return {Promise} will be resolved/rejected with HTMLImageElement
 */
ImagePreloader.simplePreload = function(imageSource) {
    return new Promise(function(resolve, reject) {
        var img;

        if (imageSource instanceof HTMLImageElement) {
            img = imageSource;

            if (!img.complete) {
                img.onload = resolve.bind(null, img);
                img.onerror = img.onabort = reject.bind(null, img);
            } else if (img.naturalHeight) {
                resolve(img);
            } else {
                reject(img);
            }
        } else if (typeof imageSource === 'string') {
            img = new Image();
            img.onload = resolve.bind(null, img);
            img.onerror = img.onabort = reject.bind(null, img);
            img.src = imageSource;
        }
    });
};

/**
 * Preload image.
 *
 * If fallbackImage-property is defined and correct, then src-attribute for the broken images will replaced by fallbackImage
 * As well, origin image url will be placed to 'data-fail-src' attribute.
 *
 * If onProgress-method is defined, then this method will be calling for every image loading (fulfilled of rejected).
 *
 * @param {...(String|HTMLImageElement|Array<String|HTMLImageElement>)} args
 *
 * @return {Promise} will be resolved with Array<{status:boolean, value:HTMLImageElement}>
 *
 *     status-property - is the status of image loading
 *     status-property will be true if:
 *      - original image loading is ok
 *      - or original image loading is fail but fallback-image loading is ok
 *     status-property will be false if:
 *      - original image loading is fail
 *      - or original image loading is fail and fallback-image loading is fail
 *
 *     value-property - is the image that was loaded
 */
ImagePreloader.prototype.preload = function(args) {
    var that = this,
        imagesToLoad = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments));

    imagesToLoad = imagesToLoad.map(function(imageSource) {
        return ImagePreloader.simplePreload(imageSource).catch(function(brokenImage) {
            if (that.fallbackImage) {
                return ImagePreloader.simplePreload(that.fallbackImage)
                    .then(function(fallbackImage) {
                        brokenImage.setAttribute('data-fail-src', brokenImage.src);
                        brokenImage.src = fallbackImage.src;

                        return brokenImage;
                    }, function() {
                        return Promise.reject(brokenImage);
                    });
            }

            return Promise.reject(brokenImage);
        });
    });

    return allSettled(imagesToLoad, that.onProgress);
};

module.exports = ImagePreloader;


/***/ }),

/***/ 40:
/***/ (function(module, exports) {

/**
 * @licence
 * @author Sergey Melyukov 2016
 */

/**
 * Waiting while all promises will be settled to onFulfilled or onRejected state
 * Returned promise will be resolved with array with info for every passed promise:
 * Array<{status:boolean, value:*}>
 *
 * onProgress-function will be called (if passed) for every settled promise
 *
 * @param {Array<Promise>} promises
 * @param {function({status:boolean, value:*})=} onProgress
 *
 * @return {Promise}
 */
function allSettled(promises, onProgress) {
    var mapped = promises.map(function(promise) {
        return promise.then(function(value) {
            return {
                value: value,
                status: true
            };
        }, function(e) {
            return {
                value: e,
                status: false
            };
        }).then(function(value) {
            if (typeof onProgress === 'function') {
                onProgress(value);
            }

            return value;
        });
    });

    return Promise.all(mapped);
}

module.exports = allSettled;


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

/**
 * @licence MIT
 * @author Sergey Melyukov
 */

module.exports = __webpack_require__(39);


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2ltYWdlLXByZWxvYWRlci9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb21pc2UtZXh0LXNldHRsZWQvc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW1hZ2UtcHJlbG9hZGVyL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDLFdBQVcsVUFBVSx1Q0FBdUMsR0FBRztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVcseUNBQXlDO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVywyQkFBMkI7QUFDdEM7QUFDQSxZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDREQUE0RDtBQUN2RTtBQUNBLFlBQVksUUFBUSw4QkFBOEIsdUNBQXVDO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7QUFFTDtBQUNBOztBQUVBOzs7Ozs7OztBQ3pHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHdCQUF3QjtBQUNsQztBQUNBO0FBQ0E7QUFDQSxXQUFXLGVBQWU7QUFDMUIsV0FBVyxVQUFVLHdCQUF3QixHQUFHO0FBQ2hEO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoiYXBwLzAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5jZSBNSVRcbiAqIEBhdXRob3IgU2VyZ2V5IE1lbHl1a292XG4gKi9cblxudmFyIGFsbFNldHRsZWQgPSByZXF1aXJlKCdwcm9taXNlLWV4dC1zZXR0bGVkJyk7XG5cbi8qKlxuICogSW1hZ2UgcHJlbG9hZGVyXG4gKlxuICogQGNsYXNzIEltYWdlUHJlbG9hZGVyXG4gKiBAY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0geyhTdHJpbmd8SFRNTEltYWdlRWxlbWVudCk9fSBmYWxsYmFja0ltYWdlXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHtzdGF0dXM6Ym9vbGVhbiwgdmFsdWU6SFRNTEltYWdlRWxlbWVudH0pPX0gb25Qcm9ncmVzc1xuICovXG52YXIgSW1hZ2VQcmVsb2FkZXIgPSBmdW5jdGlvbihmYWxsYmFja0ltYWdlLCBvblByb2dyZXNzKSB7XG4gICAgLyoqXG4gICAgICogQHR5cGUgez9mdW5jdGlvbih7c3RhdHVzOiBib29sZWFuLCB2YWx1ZTogSFRNTEltYWdlRWxlbWVudH0pfVxuICAgICAqL1xuICAgIHRoaXMub25Qcm9ncmVzcyA9IHR5cGVvZiBvblByb2dyZXNzID09PSAnZnVuY3Rpb24nID8gb25Qcm9ncmVzcyA6IG51bGw7XG4gICAgLyoqXG4gICAgICogQHR5cGUgez9TdHJpbmd8SFRNTEltYWdlRWxlbWVudH1cbiAgICAgKi9cbiAgICB0aGlzLmZhbGxiYWNrSW1hZ2UgPSB0eXBlb2YgZmFsbGJhY2tJbWFnZSA9PT0gJ3N0cmluZycgfHwgZmFsbGJhY2tJbWFnZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgPyBmYWxsYmFja0ltYWdlIDogbnVsbDtcbn07XG5cbi8qKlxuICogRG8gc2ltcGxlIGltYWdlIHByZWxvYWRpbmcuXG4gKlxuICogQHBhcmFtIHshKFN0cmluZ3xIVE1MSW1hZ2VFbGVtZW50KX0gaW1hZ2VTb3VyY2VcbiAqXG4gKiBAcmV0dXJuIHtQcm9taXNlfSB3aWxsIGJlIHJlc29sdmVkL3JlamVjdGVkIHdpdGggSFRNTEltYWdlRWxlbWVudFxuICovXG5JbWFnZVByZWxvYWRlci5zaW1wbGVQcmVsb2FkID0gZnVuY3Rpb24oaW1hZ2VTb3VyY2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciBpbWc7XG5cbiAgICAgICAgaWYgKGltYWdlU291cmNlIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICAgICAgaW1nID0gaW1hZ2VTb3VyY2U7XG5cbiAgICAgICAgICAgIGlmICghaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IHJlc29sdmUuYmluZChudWxsLCBpbWcpO1xuICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gaW1nLm9uYWJvcnQgPSByZWplY3QuYmluZChudWxsLCBpbWcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpbWcubmF0dXJhbEhlaWdodCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGltZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGltYWdlU291cmNlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgICBpbWcub25sb2FkID0gcmVzb2x2ZS5iaW5kKG51bGwsIGltZyk7XG4gICAgICAgICAgICBpbWcub25lcnJvciA9IGltZy5vbmFib3J0ID0gcmVqZWN0LmJpbmQobnVsbCwgaW1nKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpbWFnZVNvdXJjZTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuLyoqXG4gKiBQcmVsb2FkIGltYWdlLlxuICpcbiAqIElmIGZhbGxiYWNrSW1hZ2UtcHJvcGVydHkgaXMgZGVmaW5lZCBhbmQgY29ycmVjdCwgdGhlbiBzcmMtYXR0cmlidXRlIGZvciB0aGUgYnJva2VuIGltYWdlcyB3aWxsIHJlcGxhY2VkIGJ5IGZhbGxiYWNrSW1hZ2VcbiAqIEFzIHdlbGwsIG9yaWdpbiBpbWFnZSB1cmwgd2lsbCBiZSBwbGFjZWQgdG8gJ2RhdGEtZmFpbC1zcmMnIGF0dHJpYnV0ZS5cbiAqXG4gKiBJZiBvblByb2dyZXNzLW1ldGhvZCBpcyBkZWZpbmVkLCB0aGVuIHRoaXMgbWV0aG9kIHdpbGwgYmUgY2FsbGluZyBmb3IgZXZlcnkgaW1hZ2UgbG9hZGluZyAoZnVsZmlsbGVkIG9mIHJlamVjdGVkKS5cbiAqXG4gKiBAcGFyYW0gey4uLihTdHJpbmd8SFRNTEltYWdlRWxlbWVudHxBcnJheTxTdHJpbmd8SFRNTEltYWdlRWxlbWVudD4pfSBhcmdzXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX0gd2lsbCBiZSByZXNvbHZlZCB3aXRoIEFycmF5PHtzdGF0dXM6Ym9vbGVhbiwgdmFsdWU6SFRNTEltYWdlRWxlbWVudH0+XG4gKlxuICogICAgIHN0YXR1cy1wcm9wZXJ0eSAtIGlzIHRoZSBzdGF0dXMgb2YgaW1hZ2UgbG9hZGluZ1xuICogICAgIHN0YXR1cy1wcm9wZXJ0eSB3aWxsIGJlIHRydWUgaWY6XG4gKiAgICAgIC0gb3JpZ2luYWwgaW1hZ2UgbG9hZGluZyBpcyBva1xuICogICAgICAtIG9yIG9yaWdpbmFsIGltYWdlIGxvYWRpbmcgaXMgZmFpbCBidXQgZmFsbGJhY2staW1hZ2UgbG9hZGluZyBpcyBva1xuICogICAgIHN0YXR1cy1wcm9wZXJ0eSB3aWxsIGJlIGZhbHNlIGlmOlxuICogICAgICAtIG9yaWdpbmFsIGltYWdlIGxvYWRpbmcgaXMgZmFpbFxuICogICAgICAtIG9yIG9yaWdpbmFsIGltYWdlIGxvYWRpbmcgaXMgZmFpbCBhbmQgZmFsbGJhY2staW1hZ2UgbG9hZGluZyBpcyBmYWlsXG4gKlxuICogICAgIHZhbHVlLXByb3BlcnR5IC0gaXMgdGhlIGltYWdlIHRoYXQgd2FzIGxvYWRlZFxuICovXG5JbWFnZVByZWxvYWRlci5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uKGFyZ3MpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgIGltYWdlc1RvTG9hZCA9IEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuXG4gICAgaW1hZ2VzVG9Mb2FkID0gaW1hZ2VzVG9Mb2FkLm1hcChmdW5jdGlvbihpbWFnZVNvdXJjZSkge1xuICAgICAgICByZXR1cm4gSW1hZ2VQcmVsb2FkZXIuc2ltcGxlUHJlbG9hZChpbWFnZVNvdXJjZSkuY2F0Y2goZnVuY3Rpb24oYnJva2VuSW1hZ2UpIHtcbiAgICAgICAgICAgIGlmICh0aGF0LmZhbGxiYWNrSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gSW1hZ2VQcmVsb2FkZXIuc2ltcGxlUHJlbG9hZCh0aGF0LmZhbGxiYWNrSW1hZ2UpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGZhbGxiYWNrSW1hZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyb2tlbkltYWdlLnNldEF0dHJpYnV0ZSgnZGF0YS1mYWlsLXNyYycsIGJyb2tlbkltYWdlLnNyYyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicm9rZW5JbWFnZS5zcmMgPSBmYWxsYmFja0ltYWdlLnNyYztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJyb2tlbkltYWdlO1xuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChicm9rZW5JbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYnJva2VuSW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBhbGxTZXR0bGVkKGltYWdlc1RvTG9hZCwgdGhhdC5vblByb2dyZXNzKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW1hZ2VQcmVsb2FkZXI7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvaW1hZ2UtcHJlbG9hZGVyL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbmNlXG4gKiBAYXV0aG9yIFNlcmdleSBNZWx5dWtvdiAyMDE2XG4gKi9cblxuLyoqXG4gKiBXYWl0aW5nIHdoaWxlIGFsbCBwcm9taXNlcyB3aWxsIGJlIHNldHRsZWQgdG8gb25GdWxmaWxsZWQgb3Igb25SZWplY3RlZCBzdGF0ZVxuICogUmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGggYXJyYXkgd2l0aCBpbmZvIGZvciBldmVyeSBwYXNzZWQgcHJvbWlzZTpcbiAqIEFycmF5PHtzdGF0dXM6Ym9vbGVhbiwgdmFsdWU6Kn0+XG4gKlxuICogb25Qcm9ncmVzcy1mdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCAoaWYgcGFzc2VkKSBmb3IgZXZlcnkgc2V0dGxlZCBwcm9taXNlXG4gKlxuICogQHBhcmFtIHtBcnJheTxQcm9taXNlPn0gcHJvbWlzZXNcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oe3N0YXR1czpib29sZWFuLCB2YWx1ZToqfSk9fSBvblByb2dyZXNzXG4gKlxuICogQHJldHVybiB7UHJvbWlzZX1cbiAqL1xuZnVuY3Rpb24gYWxsU2V0dGxlZChwcm9taXNlcywgb25Qcm9ncmVzcykge1xuICAgIHZhciBtYXBwZWQgPSBwcm9taXNlcy5tYXAoZnVuY3Rpb24ocHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBzdGF0dXM6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGUsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvblByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzcyh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobWFwcGVkKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhbGxTZXR0bGVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Byb21pc2UtZXh0LXNldHRsZWQvc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIEBsaWNlbmNlIE1JVFxuICogQGF1dGhvciBTZXJnZXkgTWVseXVrb3ZcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbWFpbicpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ltYWdlLXByZWxvYWRlci9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==