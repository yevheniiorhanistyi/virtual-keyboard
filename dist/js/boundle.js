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
            code: 'Backquote', key: '`', 'id': 0, shiftKey: '~'
        },
        {
            code: 'Digit1', key: '1', 'id': 1, shiftKey: '!'
        },
        {
            code: 'Digit2', key: '2', 'id': 2, shiftKey: '@'
        },
        {
            code: 'Digit3', key: '3', 'id': 3, shiftKey: '#'
        },
        {
            code: 'Digit4', key: '4', 'id': 4, shiftKey: '$'
        },
        {
            code: 'Digit5', key: '5', 'id': 5, shiftKey: '%'
        },
        {
            code: 'Digit6', key: '6', 'id': 6, shiftKey: '^'
        },
        {
            code: 'Digit7', key: '7', 'id': 7, shiftKey: '&'
        },
        {
            code: 'Digit8', key: '8', 'id': 8, shiftKey: '*'
        },
        {
            code: 'Digit9', key: '9', 'id': 9, shiftKey: '('
        },
        {
            code: 'Digit0', key: '0', 'id': 10, shiftKey: ')'
        },
        {
            code: 'Minus', key: '-', 'id': 11, shiftKey: '_'
        },
        {
            code: 'Equal', key: '=', 'id': 12, shiftKey: '+'
        },
        {
            code: 'Backspace', key: 'Backspace', 'id': 64, class: 'Backspace'
        },
    ],
    [
        {
            code: 'Tab', key: 'Tab', 'id': 65, class: 'Tab'
        },
        {
            code: 'KeyQ', key: 'q', 'id': 15, shiftKey: 'Q'
        },
        {
            code: 'KeyW', key: 'w', 'id': 16, shiftKey: 'W'
        },
        {
            code: 'KeyE', key: 'e', 'id': 17, shiftKey: 'E'
        },
        {
            code: 'KeyR', key: 'r', 'id': 18, shiftKey: 'R'
        },
        {
            code: 'KeyT', key: 't', 'id': 19, shiftKey: 'T'
        },
        {
            code: 'KeyY', key: 'y', 'id': 20, shiftKey: 'Y'
        },
        {
            code: 'KeyU', key: 'u', 'id': 21, shiftKey: 'U'
        },
        {
            code: 'KeyI', key: 'i', 'id': 22, shiftKey: 'I'
        },
        {
            code: 'KeyO', key: 'o', 'id': 23, shiftKey: 'O'
        },
        {
            code: 'KeyP', key: 'p', 'id': 24, shiftKey: 'P'
        },
        {
            code: 'BracketLeft', key: '[', 'id': 25, shiftKey: '{'
        },
        {
            code: 'BracketRight', key: ']', 'id': 26, shiftKey: '}'
        },
        {
            code: 'Backslash', key: '\\', 'id': 27, shiftKey: '|'
        },
        {
            code: 'Delete', key: 'Del', 'id': 66, class: 'Delete'
        },
    ],
    [
        {
            code: 'CapsLock', key: 'CapsLock', 'id': 67, class: 'CapsLock'
        },
        {
            code: 'KeyA', key: 'a', 'id': 30, shiftKey: 'A'
        },
        {
            code: 'KeyS', key: 's', 'id': 31, shiftKey: 'S'
        },
        {
            code: 'KeyD', key: 'd', 'id': 32, shiftKey: 'D'
        },
        {
            code: 'KeyF', key: 'f', 'id': 33, shiftKey: 'F'
        },
        {
            code: 'KeyG', key: 'g', 'id': 34, shiftKey: 'G'
        },
        {
            code: 'KeyH', key: 'h', 'id': 35, shiftKey: 'H'
        },
        {
            code: 'KeyJ', key: 'j', 'id': 36, shiftKey: 'J'
        },
        {
            code: 'KeyK', key: 'k', 'id': 37, shiftKey: 'K'
        },
        {
            code: 'KeyL', key: 'l', 'id': 38, shiftKey: 'L'
        },
        {
            code: 'Semicolon', key: ';', 'id': 39, shiftKey: ':'
        },
        {
            code: 'Quote', key: "'", 'id': 40, shiftKey: '"',
        },
        {
            code: 'Enter', key: 'Enter', 'id': 68, class: 'Enter'
        },
    ],
    [
        {
            code: 'ShiftLeft', key: 'Shift', 'id': 69, class: 'Shift'
        },
        {
            code: 'KeyZ', key: 'z', 'id': 43, shiftKey: 'Z'
        },
        {
            code: 'KeyX', key: 'x', 'id': 44, shiftKey: 'X'
        },
        {
            code: 'KeyC', key: 'c', 'id': 45, shiftKey: 'C'
        },
        {
            code: 'KeyV', key: 'v', 'id': 46, shiftKey: 'V'
        },
        {
            code: 'KeyB', key: 'b', 'id': 47, shiftKey: 'B'
        },
        {
            code: 'KeyN', key: 'n', 'id': 48, shiftKey: 'N'
        },
        {
            code: 'KeyM', key: 'm', 'id': 49, shiftKey: 'M'
        },
        {
            code: 'Comma', key: ',', 'id': 50, shiftKey: '<',
        },
        {
            code: 'Period', key: '.', 'id': 51, shiftKey: '>',
        },
        {
            code: 'Slash', key: '/', 'id': 52, shiftKey: '?',
        },
        {
            code: 'ArrowUp', key: '▲', 'id': 70, class: 'ArrowUp'
        },
        {
            code: 'ShiftRight', key: 'Shift', 'id': 71, class: 'ShiftRight'
        },
    ],
    [
        {
            code: 'ControlLeft', key: 'Ctrl', 'id': 72, class: 'Ctrl'
        },
        {
            code: 'MetaRight', key: 'Win', 'id': 73, class: 'Win'
        },
        {
            code: 'AltLeft', key: 'Alt', 'id': 74, class: 'Alt'
        },
        {
            code: 'Space', key: ' ', 'id': 75, class: 'Space'
        },
        {
            code: 'AltRight', key: 'Alt', 'id': 76, class: 'Alt'
        },
        {
            code: 'ArrowLeft', key: '◄', 'id': 77, class: 'ArrowLeft'
        },
        {
            code: 'ArrowDown', key: '▼', 'id': 78, class: 'ArrowDown'
        },
        {
            code: 'ArrowRight', key: '►', 'id': 79, class: 'ArrowRight'
        },
        {
            code: 'ControlRight', key: 'Ctrl', 'id': 80, class: 'Ctrl'
        },
    ]
];

/***/ }),

/***/ "./src/js/assets/russianKeys.js":
/*!**************************************!*\
  !*** ./src/js/assets/russianKeys.js ***!
  \**************************************/
/*! exports provided: russianKeys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "russianKeys", function() { return russianKeys; });
const russianKeys = [
    [
        {
            code: 'Backquote', key: 'ё', 'id': 0, shiftKey: 'Ё',
        },
        {
            code: 'Digit1', key: 1, 'id': 1, shiftKey: '!'
        },
        {
            code: 'Digit2', key: 2, 'id': 2, shiftKey: '"',
        },
        {
            code: 'Digit3', key: 3, 'id': 3, shiftKey: '№',
        },
        {
            code: 'Digit4', key: 4, 'id': 4, shiftKey: ';',
        },
        {
            code: 'Digit5', key: 5, 'id': 5, shiftKey: '%'
        },
        {
            code: 'Digit6', key: 6, 'id': 6, shiftKey: ':',
        },
        {
            code: 'Digit7', key: 7, 'id': 7, shiftKey: '?',
        },
        {
            code: 'Digit8', key: 8, 'id': 8, shiftKey: '*'
        },
        {
            code: 'Digit9', key: 9, 'id': 9, shiftKey: '('
        },
        {
            code: 'Digit0', key: 0, 'id': 10, shiftKey: ')'
        },
        {
            code: 'Minus', key: '-', 'id': 11, shiftKey: '_'
        },
        {
            code: 'Equal', key: '=', 'id': 12, shiftKey: '+'
        },
        {
            code: 'Backspace', key: 'Backspace', 'id': 64, class: 'Backspace'
        },
    ],
    [
        {
            code: 'Tab', key: 'Tab', 'id': 65, class: 'Tab'
        },
        {
            code: 'KeyQ', key: 'й', shiftKey: 'Й', 'id': 15,
        },
        {
            code: 'KeyW', key: 'ц', shiftKey: 'Ц', 'id': 16,
        },
        {
            code: 'KeyE', key: 'у', shiftKey: 'У', 'id': 17,
        },
        {
            code: 'KeyR', key: 'к', shiftKey: 'К', 'id': 18,
        },
        {
            code: 'KeyT', key: 'е', shiftKey: 'Е', 'id': 19,
        },
        {
            code: 'KeyY', key: 'н', shiftKey: 'Н', 'id': 20,
        },
        {
            code: 'KeyU', key: 'г', shiftKey: 'Г', 'id': 21,
        },
        {
            code: 'KeyI', key: 'ш', shiftKey: 'Ш', 'id': 22,
        },
        {
            code: 'KeyO', key: 'щ', shiftKey: 'Щ', 'id': 23,
        },
        {
            code: 'KeyP', key: 'з', shiftKey: 'З', 'id': 24,
        },
        {
            code: 'BracketLeft', key: 'х', shiftKey: 'Х', 'id': 25,
        },
        {
            code: 'BracketRight', key: 'ъ', shiftKey: 'Ъ', 'id': 26,
        },
        {
            code: 'Backslash', key: '\\', shiftKey: '/', 'id': 27,
        },
        {
            code: 'Delete', key: 'Del', 'id': 66, class: 'Delete',
        },
    ],
    [
        {
            code: 'CapsLock', key: 'CapsLock', 'id': 67, class: 'CapsLock',
        },
        {
            code: 'KeyA', key: 'ф', shiftKey: 'Ф', 'id': 30,
        },
        {
            code: 'KeyS', key: 'ы', shiftKey: 'Ы', 'id': 31,
        },
        {
            code: 'KeyD', key: 'в', shiftKey: 'В', 'id': 32,
        },
        {
            code: 'KeyF', key: 'а', shiftKey: 'А', 'id': 33,
        },
        {
            code: 'KeyG', key: 'п', shiftKey: 'П', 'id': 34,
        },
        {
            code: 'KeyH', key: 'р', shiftKey: 'Р', 'id': 35,
        },
        {
            code: 'KeyJ', key: 'о', shiftKey: 'О', 'id': 36,
        },
        {
            code: 'KeyK', key: 'л', shiftKey: 'Л', 'id': 37,
        },
        {
            code: 'KeyL', key: 'д', shiftKey: 'Д', 'id': 38,
        },
        {
            code: 'Semicolon', key: 'ж', shiftKey: 'Ж', 'id': 39,
        },
        {
            code: 'Quote', key: 'э', shiftKey: 'Э', 'id': 40,
        },
        {
            code: 'Enter', key: 'Enter', 'id': 68, class: 'Enter',
        },
    ],
    [
        {
            code: 'ShiftLeft', key: 'Shift', 'id': 69, class: 'Shift',
        },
        {
            code: 'KeyZ', key: 'я', shiftKey: 'Я', 'id': 43,
        },
        {
            code: 'KeyX', key: 'ч', shiftKey: 'Ч', 'id': 44,
        },
        {
            code: 'KeyC', key: 'с', shiftKey: 'С', 'id': 45,
        },
        {
            code: 'KeyV', key: 'м', shiftKey: 'М', 'id': 46,
        },
        {
            code: 'KeyB', key: 'и', shiftKey: 'И', 'id': 47,
        },
        {
            code: 'KeyN', key: 'т', shiftKey: 'Т', 'id': 48,
        },
        {
            code: 'KeyM', key: 'ь', shiftKey: 'Ь', 'id': 49,
        },
        {
            code: 'Comma', key: 'б', shiftKey: 'Б', 'id': 50,
        },
        {
            code: 'Period', key: 'ю', shiftKey: 'Ю', 'id': 51,
        },
        {
            code: 'Slash', key: '.', shiftKey: ',', 'id': 52,
        },
        {
            code: 'ArrowUp', key: '▲', 'id': 70, class: 'ArrowUp',
        },
        {
            code: 'ShiftRight', key: 'Shift', 'id': 71, class: 'ShiftRight',
        },
    ],
    [
        {
            code: 'ControlLeft', key: 'Ctrl', 'id': 72, class: 'Ctrl',
        },
        {
            code: 'MetaRight', key: 'Win', 'id': 73, class: 'Win',
        },
        {
            code: 'AltLeft', key: 'Alt', 'id': 74, class: 'Alt',
        },
        {
            code: 'Space', key: ' ', 'id': 75, class: 'Space',
        },
        {
            code: 'AltRight', key: 'Alt', 'id': 76, class: 'Alt',
        },
        {
            code: 'ArrowLeft', key: '◄', 'id': 77, class: 'ArrowLeft',
        },
        {
            code: 'ArrowDown', key: '▼', 'id': 78, class: 'ArrowDown',
        },
        {
            code: 'ArrowRight', key: '►', 'id': 79, class: 'ArrowRight',
        },
        {
            code: 'ControlRight', key: 'Ctrl', 'id': 80, class: 'Ctrl',
        },
    ],
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
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules */ "./src/js/modules/index.js");


window.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('language');

    Object(_modules__WEBPACK_IMPORTED_MODULE_0__["header"])();
    Object(_modules__WEBPACK_IMPORTED_MODULE_0__["main"])();
    Object(_modules__WEBPACK_IMPORTED_MODULE_0__["footer"])();
    Object(_modules__WEBPACK_IMPORTED_MODULE_0__["generateKeyboard"])(lang);
    Object(_modules__WEBPACK_IMPORTED_MODULE_0__["handleClick"])(_modules__WEBPACK_IMPORTED_MODULE_0__["changeLanguage"]);
});

/***/ }),

/***/ "./src/js/modules/changeInputValue.js":
/*!********************************************!*\
  !*** ./src/js/modules/changeInputValue.js ***!
  \********************************************/
/*! exports provided: changeInputValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeInputValue", function() { return changeInputValue; });
const changeInputValue = (value) => {
    const textarea = document.querySelector('#textarea'),
        start = textarea.selectionStart;

    textarea.focus();

    switch (value) {

        case 'Backspace':

            if (start) {
                textarea.value = textarea.value.slice(0, start - 1) + textarea.value.slice(start);
                textarea.selectionStart = start - 1;
                textarea.selectionEnd = start - 1;
            }
            break;

        case 'Tab':
            textarea.value += '    ';
            break;

        case 'Del':
        case 'Delete':
            if (start < textarea.value.length) {
                textarea.value = textarea.value.slice(0, start) + textarea.value.slice(start + 1);
                textarea.selectionStart = start;
                textarea.selectionEnd = start;
            }
            break;

        case 'Enter':
            textarea.value += '\n';
            break;

        case 'Space':
            textarea.value += ' ';
            break;

        case 'ArrowLeft':
            textarea.value += '◄';
            break;

        case 'ArrowRight':
            textarea.value += '►';
            break;

        case 'ArrowUp':
            textarea.value += '▲';
            break;

        case 'ArrowDown':
            textarea.value += '▼';
            break;

        case 'Ctrl':
        case 'Control':
        case 'Meta':
        case 'MetaRight':
        case 'Win':
        case 'Alt':
        case 'AltGraph':
            break;

        default: textarea.value += value;
    }
};

/***/ }),

/***/ "./src/js/modules/changeLanguage.js":
/*!******************************************!*\
  !*** ./src/js/modules/changeLanguage.js ***!
  \******************************************/
/*! exports provided: changeLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return changeLanguage; });
const changeLanguage = () => {
    let lang = localStorage.getItem('language') ? localStorage.getItem('language') : 'eng';
    lang === 'eng' ? lang = 'rus' : lang = 'eng';
    localStorage.setItem('language', lang);
    window.location.reload();
};

/***/ }),

/***/ "./src/js/modules/footer/index.js":
/*!****************************************!*\
  !*** ./src/js/modules/footer/index.js ***!
  \****************************************/
/*! exports provided: footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return footer; });
const footer = () => {
    const footerEl = document.createElement('footer');
    const description = document.createElement('p');
    const language = document.createElement('p');

    footerEl.classList.add('footer');
    description.classList.add('description');
    language.classList.add('language');

    description.innerHTML = 'Клавиатура создана в операционной системе Windows';
    language.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

    document.querySelector('body').append(footerEl);
    footerEl.append(description, language);
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
/* harmony import */ var _assets_englishKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/englishKeys */ "./src/js/assets/englishKeys.js");
/* harmony import */ var _assets_russianKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/russianKeys */ "./src/js/assets/russianKeys.js");



const generateKeyboard = (language) => {
    const container = document.querySelector('.container');
    const lang = language === 'rus' ? _assets_russianKeys__WEBPACK_IMPORTED_MODULE_1__["russianKeys"] : _assets_englishKeys__WEBPACK_IMPORTED_MODULE_0__["englishKeys"];

    const keyboardContainer = document.createElement('div');

    keyboardContainer.classList.add('keyboard-container');

    for (let i = 0; i < lang.length; i++) {
        const row = document.createElement('div');
        row.classList.add('keyboard-row');
        keyboardContainer.append(row);

        for (let j = 0; j < lang[i].length; j++) {
            const button = document.createElement('button');
            const key = document.createElement('span');
            button.classList.add('keyboard-key');
            key.classList.add('key');

            button.setAttribute('code', lang[i][j]['code']);
            button.setAttribute('id', lang[i][j]['id']);
            key.innerHTML = lang[i][j]['key'];
            button.append(key);

            if (lang[i][j]['shiftKey']) {
                const shiftKey = document.createElement('span');
                shiftKey.classList.add('shiftKey', 'hidden');
                shiftKey.innerHTML = lang[i][j]['shiftKey'];
                button.append(shiftKey);
            }

            if (lang[i][j]['class']) button.classList.add(lang[i][j]['class']);
            row.append(button);
        }

    }

    container.append(keyboardContainer);
}

/***/ }),

/***/ "./src/js/modules/handleClick.js":
/*!***************************************!*\
  !*** ./src/js/modules/handleClick.js ***!
  \***************************************/
/*! exports provided: handleClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleClick", function() { return handleClick; });
/* harmony import */ var _changeInputValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeInputValue */ "./src/js/modules/changeInputValue.js");


const handleClick = (changeLanguage) => {

    let allButtons = document.querySelectorAll('.keyboard-key'),
        capsLock = false,
        shift = false;

    const onClickBtn = (code, key) => {

        addClassActive(code);

        if (code === 'ControlLeft') {
            document.onkeyup = (e) => {
                if (e.code == 'AltLeft') {
                    changeLanguage();
                }
            }

        } else if (key === 'CapsLock') {
            capsLock = !capsLock;
            allButtons.forEach(btn => {
                const id = btn.getAttribute('id');
                if (id < 64) {
                    for (let i = 0; i < btn.children.length; i++) {
                        const span = btn.children[i];
                        !span.classList.contains('hidden') ? span.classList.add('hidden') : span.classList.remove('hidden')
                    }
                }
            });
        } else if (key === 'Shift' || key === 'ShiftRight') {

        } else {
            Object(_changeInputValue__WEBPACK_IMPORTED_MODULE_0__["changeInputValue"])(key);
        }

    };

    const addClassActive = (code) => {
        allButtons.forEach(btn => {
            if (btn.getAttribute('code') === code) {
                btn.classList.add('active');
            }
        });
    }

    const removeClassActive = () => {
        allButtons.forEach(btn => {
            btn.classList.contains('CapsLock') && capsLock ? null : btn.classList.remove('active');
        });
    };

    const getCurrentKey = (button) => {
        let key = null;

        for (let i = 0; i < button.children.length; i++) {
            const span = button.children[i];
            if (!span.classList.contains('hidden')) key = span.innerHTML;
        }

        return key;
    }

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        let code = e.code,
            key = null;

        allButtons.forEach(btn => {
            if (btn.getAttribute('code') === code) key = getCurrentKey(btn);
        });

        onClickBtn(code, key);
    });

    document.addEventListener('mousedown', (e) => {
        const button = e.target.closest('.keyboard-key');

        if (button) {
            let code = button.getAttribute('code'),
                key = getCurrentKey(button);

            onClickBtn(code, key);
        }
    });

    document.addEventListener('keyup', removeClassActive);
    document.addEventListener('mouseup', removeClassActive);

}

/***/ }),

/***/ "./src/js/modules/header/index.js":
/*!****************************************!*\
  !*** ./src/js/modules/header/index.js ***!
  \****************************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
const header = () => {
    const headerEl = document.createElement('header');
    const headerTitle = document.createElement('h1');

    headerEl.classList.add('header');
    headerTitle.classList.add('header__title');

    headerTitle.innerHTML = 'RSS Виртуальная клавиатура';
    document.querySelector('body').append(headerEl);
    headerEl.append(headerTitle);
}

/***/ }),

/***/ "./src/js/modules/index.js":
/*!*********************************!*\
  !*** ./src/js/modules/index.js ***!
  \*********************************/
/*! exports provided: header, main, footer, handleClick, generateKeyboard, changeLanguage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/js/modules/header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "header", function() { return _header__WEBPACK_IMPORTED_MODULE_0__["header"]; });

/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/js/modules/main/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "main", function() { return _main__WEBPACK_IMPORTED_MODULE_1__["main"]; });

/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ "./src/js/modules/footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "footer", function() { return _footer__WEBPACK_IMPORTED_MODULE_2__["footer"]; });

/* harmony import */ var _handleClick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleClick */ "./src/js/modules/handleClick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handleClick", function() { return _handleClick__WEBPACK_IMPORTED_MODULE_3__["handleClick"]; });

/* harmony import */ var _generateKeyboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generateKeyboard */ "./src/js/modules/generateKeyboard.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateKeyboard", function() { return _generateKeyboard__WEBPACK_IMPORTED_MODULE_4__["generateKeyboard"]; });

/* harmony import */ var _changeLanguage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeLanguage */ "./src/js/modules/changeLanguage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return _changeLanguage__WEBPACK_IMPORTED_MODULE_5__["changeLanguage"]; });








/***/ }),

/***/ "./src/js/modules/main/index.js":
/*!**************************************!*\
  !*** ./src/js/modules/main/index.js ***!
  \**************************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
const main = () => {
    const mainEl = document.createElement('main');
    const container = document.createElement('div');
    const textarea = document.createElement('textarea');

    textarea.setAttribute('id', 'textarea');
    textarea.setAttribute('cols', '50');
    textarea.setAttribute('rows', '5');


    mainEl.classList.add('main');
    container.classList.add('container');
    textarea.classList.add('textarea');

    document.querySelector('body').append(mainEl);
    mainEl.append(container);

    container.append(textarea);
}

/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map