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

/***/ "./src/js/assets/englishKeys.js":
/*!**************************************!*\
  !*** ./src/js/assets/englishKeys.js ***!
  \**************************************/
/*! exports provided: englishKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "englishKeys", function() { return englishKeys; });
const englishKeys = [
    [
        {
            code: 'Backquote', key: '`', shiftKey: '~'
        },
        {
            code: 'Digit1', key: '1', shiftKey: '!'
        },
        {
            code: 'Digit2', key: '2', shiftKey: '@'
        },
        {
            code: 'Digit3', key: '3', shiftKey: '#'
        },
        {
            code: 'Digit4', key: '4', shiftKey: '$'
        },
        {
            code: 'Digit5', key: '5', shiftKey: '%'
        },
        {
            code: 'Digit6', key: '6', shiftKey: '^'
        },
        {
            code: 'Digit7', key: '7', shiftKey: '&'
        },
        {
            code: 'Digit8', key: '8', shiftKey: '*'
        },
        {
            code: 'Digit9', key: '9', shiftKey: '('
        },
        {
            code: 'Digit0', key: '0', shiftKey: ')'
        },
        {
            code: 'Minus', key: '-', shiftKey: '_'
        },
        {
            code: 'Equal', key: '=', shiftKey: '+'
        },
        {
            code: 'Backspace', key: 'Backspace', class: 'Backspace'
        },
    ],
    [
        {
            code: 'Tab', key: 'Tab'
        },
        {
            code: 'KeyQ', key: 'q', shiftKey: 'Q'
        },
        {
            code: 'KeyW', key: 'w', shiftKey: 'W'
        },
        {
            code: 'KeyE', key: 'e', shiftKey: 'E'
        },
        {
            code: 'KeyR', key: 'r', shiftKey: 'R'
        },
        {
            code: 'KeyT', key: 't', shiftKey: 'T'
        },
        {
            code: 'KeyY', key: 'y', shiftKey: 'Y'
        },
        {
            code: 'KeyU', key: 'u', shiftKey: 'U'
        },
        {
            code: 'KeyI', key: 'i', shiftKey: 'I'
        },
        {
            code: 'KeyO', key: 'o', shiftKey: 'O'
        },
        {
            code: 'KeyP', key: 'p', shiftKey: 'P'
        },
        {
            code: 'BracketLeft', key: '[', shiftKey: '{'
        },
        {
            code: 'BracketRight', key: ']', shiftKey: '}'
        },
        {
            code: 'Backslash', key: '\\', shiftKey: '|'
        },
        {
            code: 'Delete', key: 'Del', class: 'Delete'
        },
    ],
    [
        {
            code: 'CapsLock', key: 'CapsLock', class: 'CapsLock'
        },
        {
            code: 'KeyA', key: 'a', shiftKey: 'A'
        },
        {
            code: 'KeyS', key: 's', shiftKey: 'S'
        },
        {
            code: 'KeyD', key: 'd', shiftKey: 'D'
        },
        {
            code: 'KeyF', key: 'f', shiftKey: 'F'
        },
        {
            code: 'KeyG', key: 'g', shiftKey: 'G'
        },
        {
            code: 'KeyH', key: 'h', shiftKey: 'H'
        },
        {
            code: 'KeyJ', key: 'j', shiftKey: 'J'
        },
        {
            code: 'KeyK', key: 'k', shiftKey: 'K'
        },
        {
            code: 'KeyL', key: 'l', shiftKey: 'L'
        },
        {
            code: 'Semicolon', key: ';', shiftKey: ':'
        },
        {
            code: 'Quote', key: "'", shiftKey: '"',
        },
        {
            code: 'Enter', key: 'Enter', class: 'Enter'
        },
    ],
    [
        {
            code: 'ShiftLeft', key: 'Shift', class: 'Shift'
        },
        {
            code: 'KeyZ', key: 'z', shiftKey: 'Z'
        },
        {
            code: 'KeyX', key: 'x', shiftKey: 'X'
        },
        {
            code: 'KeyC', key: 'c', shiftKey: 'C'
        },
        {
            code: 'KeyV', key: 'v', shiftKey: 'V'
        },
        {
            code: 'KeyB', key: 'b', shiftKey: 'B'
        },
        {
            code: 'KeyN', key: 'n', shiftKey: 'N'
        },
        {
            code: 'KeyM', key: 'm', shiftKey: 'M'
        },
        {
            code: 'Comma', key: ',', shiftKey: '<',
        },
        {
            code: 'Period', key: '.', shiftKey: '>',
        },
        {
            code: 'Slash', key: '/', shiftKey: '?',
        },
        {
            code: 'ArrowUp', key: '▲'
        },
        {
            code: 'ShiftRight', key: 'Shift', class: 'ShiftRight'
        },
    ],
    [
        {
            code: 'ControlLeft', key: 'Ctrl'
        },
        {
            code: 'MetaRight', key: 'Win'
        },
        {
            code: 'AltLeft', key: 'Alt'
        },
        {
            code: 'Space', key: ' ', class: 'Space'
        },
        {
            code: 'AltRight', key: 'Alt'
        },
        {
            code: 'ArrowLeft', key: '◄'
        },
        {
            code: 'ArrowDown', key: '▼'
        },
        {
            code: 'ArrowRight', key: '►'
        },
        {
            code: 'ControlRight', key: 'Ctrl'
        },
    ]
];

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_englishKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/englishKeys */ "./src/js/assets/englishKeys.js");
/* harmony import */ var _modules_createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/createHeader */ "./src/js/modules/createHeader.js");
/* harmony import */ var _modules_createTextarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createTextarea */ "./src/js/modules/createTextarea.js");
/* harmony import */ var _modules_generateKeyboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/generateKeyboard */ "./src/js/modules/generateKeyboard.js");
/* harmony import */ var _modules_createMain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/createMain */ "./src/js/modules/createMain.js");
/* harmony import */ var _modules_createFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/createFooter */ "./src/js/modules/createFooter.js");

// import { russianKeys } from './assets/russianKeys';






window.addEventListener('DOMContentLoaded', () => {
    Object(_modules_createHeader__WEBPACK_IMPORTED_MODULE_1__["createHeader"])();
    Object(_modules_createMain__WEBPACK_IMPORTED_MODULE_4__["createMain"])(Object(_modules_createTextarea__WEBPACK_IMPORTED_MODULE_2__["createTextarea"])(), Object(_modules_generateKeyboard__WEBPACK_IMPORTED_MODULE_3__["generateKeyboard"])(_assets_englishKeys__WEBPACK_IMPORTED_MODULE_0__["englishKeys"]));
    Object(_modules_createFooter__WEBPACK_IMPORTED_MODULE_5__["createFooter"])();
});

/***/ }),

/***/ "./src/js/modules/createFooter.js":
/*!****************************************!*\
  !*** ./src/js/modules/createFooter.js ***!
  \****************************************/
/*! exports provided: createFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFooter", function() { return createFooter; });
const createFooter = () => {
    const footer = document.createElement('footer');
    const description = document.createElement('p');
    const language = document.createElement('p');

    footer.classList.add('footer');
    description.classList.add('description');
    language.classList.add('language');

    description.innerHTML = 'Клавиатура создана в операционной системе Windows';
    language.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

    document.querySelector('body').append(footer);
    footer.append(description);
    footer.append(language);
};

/***/ }),

/***/ "./src/js/modules/createHeader.js":
/*!****************************************!*\
  !*** ./src/js/modules/createHeader.js ***!
  \****************************************/
/*! exports provided: createHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createHeader", function() { return createHeader; });
const createHeader = () => {
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');

    header.classList.add('header');
    headerTitle.classList.add('header__title');

    headerTitle.innerHTML = 'RSS Виртуальная клавиатура';
    document.querySelector('body').append(header);
    header.append(headerTitle);
};

/***/ }),

/***/ "./src/js/modules/createMain.js":
/*!**************************************!*\
  !*** ./src/js/modules/createMain.js ***!
  \**************************************/
/*! exports provided: createMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMain", function() { return createMain; });
function createMain() {
    const main = document.createElement('main');
    const container = document.createElement('div');

    main.classList.add('main');
    container.classList.add('container');

    document.querySelector('body').append(main);
    main.append(container);

    if (arguments.length > 0) {
        for (let item of arguments) {
            container.append(item)
        }
    }
}

/***/ }),

/***/ "./src/js/modules/createTextarea.js":
/*!******************************************!*\
  !*** ./src/js/modules/createTextarea.js ***!
  \******************************************/
/*! exports provided: createTextarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTextarea", function() { return createTextarea; });
const createTextarea = () => {
    const textarea = document.createElement('textarea');

    textarea.classList.add('textarea');
    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('cols', '50');
    textarea.setAttribute('rows', '5');

    return textarea;
}

/***/ }),

/***/ "./src/js/modules/generateKeyboard.js":
/*!********************************************!*\
  !*** ./src/js/modules/generateKeyboard.js ***!
  \********************************************/
/*! exports provided: generateKeyboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateKeyboard", function() { return generateKeyboard; });
const generateKeyboard = (language) => {

    const keyboardContainer = document.createElement('div');

    keyboardContainer.classList.add('keyboard-container');

    for (let i = 0; i < language.length; i++) {
        const row = document.createElement('div');
        row.classList.add('keyboard-row');
        keyboardContainer.append(row);

        for (let j = 0; j < language[i].length; j++) {
            const button = document.createElement('button');
            button.classList.add('keyboard-key');
            button.innerHTML = language[i][j]['key'];
            if (language[i][j]['class']) button.classList.add(language[i][j]['class']);
            row.append(button);
        }

    }

    return keyboardContainer;
}

/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map