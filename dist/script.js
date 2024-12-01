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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animatiom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animatiom */ "./src/js/modules/animatiom.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");


document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_animatiom__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ }),

/***/ "./src/js/modules/animatiom.js":
/*!*************************************!*\
  !*** ./src/js/modules/animatiom.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to('.header__product-img', {
    rotation: 15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
  gsap.to('.header__product-img--second', {
    rotation: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
  gsap.to('.section__cards-img', {
    rotation: 15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
  gsap.to('.section__cards-img--second', {
    rotation: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut'
  });
  const items = document.querySelectorAll('.header__product-item');

  const animateItem = (item, index) => {
    let initialY = window.innerWidth <= 644 ? 0 : -100;
    gsap.fromTo(initialY, {
      start: 'bottom bottom',
      markers: true,
      opacity: 0,
      y: -100
    }, {
      opacity: 1,
      y: 0,
      delay: index * 0.15,
      duration: 1
    });
    gsap.fromTo(item, {
      opacity: 0,
      y: -100
    }, {
      opacity: 1,
      y: 0,
      delay: index * 0.15,
      duration: 1
    });
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        animateItem(entry.target, index);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });
  items.forEach(item => {
    observer.observe(item);
  });
  gsap.fromTo('.header__body-info h1', {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo('.header__body-info p', {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo('.header__body-btns', {
    opacity: 0,
    x: 100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  gsap.fromTo('.header__body-images', {
    opacity: 0,
    y: -100,
    start: 'bottom bottom'
  }, {
    opacity: 1,
    y: 0,
    duration: 1
  });
};

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const burgerMenu = () => {
  const burger = document.querySelectorAll('.burger');
  const header = document.querySelectorAll('.header__top-menu');

  const closeMenu = () => {
    header.forEach(menu => {
      if (menu.classList.contains('header__top--open')) {
        menu.classList.add('header__top--closing');
        setTimeout(() => {
          menu.classList.remove('header__top--open', 'header__top--closing');
        }, 470);
      }
    });
    burger.forEach(item => item.classList.remove('burger__active'));
  };

  burger.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
      const isActive = item.classList.toggle('burger__active');
      header.forEach(menu => {
        if (isActive) {
          menu.classList.add('header__top--open');
        } else {
          closeMenu();
        }
      });
    });
  });
  header.forEach(item => {
    item.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
  document.addEventListener('click', () => {
    closeMenu();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 840) {
      closeMenu();
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map