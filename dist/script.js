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
/* harmony import */ var _modules_slide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slide */ "./src/js/modules/slide.js");



document.addEventListener('DOMContentLoaded', () => {
  Object(_modules_burger__WEBPACK_IMPORTED_MODULE_1__["default"])();
  Object(_modules_animatiom__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_slide__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const animation = () => {
  gsap.registerPlugin(ScrollTrigger); // Универсальная функция для бесконечных анимаций

  const createInfiniteAnimation = (selector, rotation) => {
    gsap.to(selector, {
      rotation,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }; // Запуск бесконечных анимаций


  createInfiniteAnimation('.header__product-img', 15);
  createInfiniteAnimation('.header__product-img--second', -15);
  createInfiniteAnimation('.section__cards-img', 15);
  createInfiniteAnimation('.section__cards-img--second', -15);
  createInfiniteAnimation('.advertising__item-img > img', 0); // Увеличение масштаба
  // Универсальная функция для анимаций появления

  const animateAppearance = (selector, fromProps, toProps) => {
    gsap.fromTo(selector, fromProps, toProps);
  }; // Анимации появления элементов


  animateAppearance('.header__body-info h1', {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  animateAppearance('.header__body-info p', {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  animateAppearance('.header__body-btns', {
    opacity: 0,
    x: 100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  });
  animateAppearance('.header__body-images', {
    opacity: 0,
    y: -100
  }, {
    opacity: 1,
    y: 0,
    duration: 1
  }); // Универсальная функция для анимации с IntersectionObserver

  const setupObserver = (items, fromProps, toProps) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, fromProps, _objectSpread({}, toProps, {
            delay: index * 0.15
          }));
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    items.forEach(item => observer.observe(item));
  }; // Применение анимаций через Observer


  const productItems = document.querySelectorAll('.header__product-item');
  setupObserver(productItems, {
    opacity: 0,
    y: -100
  }, {
    opacity: 1,
    y: 0,
    duration: 1
  });
  const imgItems = document.querySelectorAll('.ready__img-box');
  setupObserver(imgItems, {
    opacity: 0,
    x: -100
  }, {
    opacity: 1,
    x: 0,
    duration: 1
  }); // Анимация карточек `.section__products-item` при скролле

  const sectionProductsItems = document.querySelectorAll('.section__products-item');
  sectionProductsItems.forEach((card, index) => {
    gsap.fromTo(card, {
      opacity: 0,
      y: -70 // Начальная позиция сверху

    }, {
      opacity: 1,
      y: 0,
      // Конечная позиция
      duration: 1.2,
      delay: index * 0.3,
      // Последовательность появления
      ease: 'power2.out',
      scrollTrigger: {
        trigger: card,
        start: 'top bottom',
        // Анимация начнётся, когда верх карточки появится внизу экрана
        toggleActions: 'play none none reverse' // Поведение при скролле

      }
    });
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
  const burger = document.querySelectorAll('.burger'),
        header = document.querySelectorAll('.header__top-menu'),
        listItem = document.querySelectorAll('.header__top-item'),
        buttons = document.querySelectorAll('.button--close');

  const closeMenu = () => {
    header.forEach(menu => {
      if (menu.classList.contains('header__top--open')) {
        menu.classList.add('header__top--closing');
        setTimeout(() => {
          menu.classList.remove('header__top--open', 'header__top--closing');
        }, 450);
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
  listItem.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      closeMenu();
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
  header.forEach(menu => {
    menu.addEventListener('click', e => {
      e.stopPropagation();
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (burgerMenu);

/***/ }),

/***/ "./src/js/modules/slide.js":
/*!*********************************!*\
  !*** ./src/js/modules/slide.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const slide = () => {
  const collapsibles = document.querySelectorAll('.faq__button');
  collapsibles.forEach(coll => {
    coll.addEventListener('click', function () {
      this.classList.toggle('active');
      const plusIcon = this.querySelector('.plus');

      if (plusIcon) {
        plusIcon.classList.toggle('faq__active');
      }

      const content = this.nextElementSibling;

      if (content) {
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (slide);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map