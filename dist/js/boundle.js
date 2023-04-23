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
            code: 'Backquote', key: '`', keyCode: 192, shiftKey: '~'
        },
        {
            code: 'Digit1', key: '1', keyCode: 49, shiftKey: '!'
        },
        {
            code: 'Digit2', key: '2', keyCode: 50, shiftKey: '@'
        },
        {
            code: 'Digit3', key: '3', keyCode: 51, shiftKey: '#'
        },
        {
            code: 'Digit4', key: '4', keyCode: 52, shiftKey: '$'
        },
        {
            code: 'Digit5', key: '5', keyCode: 53, shiftKey: '%'
        },
        {
            code: 'Digit6', key: '6', keyCode: 54, shiftKey: '^'
        },
        {
            code: 'Digit7', key: '7', keyCode: 55, shiftKey: '&'
        },
        {
            code: 'Digit8', key: '8', keyCode: 56, shiftKey: '*'
        },
        {
            code: 'Digit9', key: '9', keyCode: 57, shiftKey: '('
        },
        {
            code: 'Digit0', key: '0', keyCode: 48, shiftKey: ')'
        },
        {
            code: 'Minus', key: '-', keyCode: 189, shiftKey: '_'
        },
        {
            code: 'Equal', key: '=', keyCode: 187, shiftKey: '+'
        },
        {
            code: 'Backspace', key: 'Backspace', keyCode: 8, class: 'Backspace'
        },
    ],
    [
        {
            code: 'Tab', key: 'Tab', keyCode: 9,
        },
        {
            code: 'KeyQ', key: 'q', keyCode: 81, shiftKey: 'Q'
        },
        {
            code: 'KeyW', key: 'w', keyCode: 87, shiftKey: 'W'
        },
        {
            code: 'KeyE', key: 'e', keyCode: 69, shiftKey: 'E'
        },
        {
            code: 'KeyR', key: 'r', keyCode: 82, shiftKey: 'R'
        },
        {
            code: 'KeyT', key: 't', keyCode: 84, shiftKey: 'T'
        },
        {
            code: 'KeyY', key: 'y', keyCode: 89, shiftKey: 'Y'
        },
        {
            code: 'KeyU', key: 'u', keyCode: 85, shiftKey: 'U'
        },
        {
            code: 'KeyI', key: 'i', keyCode: 73, shiftKey: 'I'
        },
        {
            code: 'KeyO', key: 'o', keyCode: 79, shiftKey: 'O'
        },
        {
            code: 'KeyP', key: 'p', keyCode: 80, shiftKey: 'P'
        },
        {
            code: 'BracketLeft', key: '[', keyCode: 219, shiftKey: '{'
        },
        {
            code: 'BracketRight', key: ']', keyCode: 221, shiftKey: '}'
        },
        {
            code: 'Backslash', key: '\\', keyCode: 220, shiftKey: '|'
        },
        {
            code: 'Delete', key: 'Del', keyCode: 46, class: 'Delete'
        },
    ],
    [
        {
            code: 'CapsLock', key: 'CapsLock', keyCode: 20, class: 'CapsLock'
        },
        {
            code: 'KeyA', key: 'a', keyCode: 65, shiftKey: 'A'
        },
        {
            code: 'KeyS', key: 's', keyCode: 83, shiftKey: 'S'
        },
        {
            code: 'KeyD', key: 'd', keyCode: 68, shiftKey: 'D'
        },
        {
            code: 'KeyF', key: 'f', keyCode: 70, shiftKey: 'F'
        },
        {
            code: 'KeyG', key: 'g', keyCode: 71, shiftKey: 'G'
        },
        {
            code: 'KeyH', key: 'h', keyCode: 72, shiftKey: 'H'
        },
        {
            code: 'KeyJ', key: 'j', keyCode: 74, shiftKey: 'J'
        },
        {
            code: 'KeyK', key: 'k', keyCode: 75, shiftKey: 'K'
        },
        {
            code: 'KeyL', key: 'l', keyCode: 76, shiftKey: 'L'
        },
        {
            code: 'Semicolon', key: ';', keyCode: 186, shiftKey: ':'
        },
        {
            code: 'Quote', key: "'", keyCode: 222, shiftKey: '"',
        },
        {
            code: 'Enter', key: 'Enter', keyCode: 13, class: 'Enter'
        },
    ],
    [
        {
            code: 'ShiftLeft', key: 'Shift', keyCode: 13, class: 'Shift'
        },
        {
            code: 'KeyZ', key: 'z', keyCode: 90, shiftKey: 'Z'
        },
        {
            code: 'KeyX', key: 'x', keyCode: 88, shiftKey: 'X'
        },
        {
            code: 'KeyC', key: 'c', keyCode: 67, shiftKey: 'C'
        },
        {
            code: 'KeyV', key: 'v', keyCode: 86, shiftKey: 'V'
        },
        {
            code: 'KeyB', key: 'b', keyCode: 66, shiftKey: 'B'
        },
        {
            code: 'KeyN', key: 'n', keyCode: 78, shiftKey: 'N'
        },
        {
            code: 'KeyM', key: 'm', keyCode: 77, shiftKey: 'M'
        },
        {
            code: 'Comma', key: ',', keyCode: 188, shiftKey: '<',
        },
        {
            code: 'Period', key: '.', keyCode: 190, shiftKey: '>',
        },
        {
            code: 'Slash', key: '/', keyCode: 191, shiftKey: '?',
        },
        {
            code: 'ArrowUp', key: '▲', keyCode: 38,
        },
        {
            code: 'ShiftRight', key: 'Shift', keyCode: 16, class: 'ShiftRight'
        },
    ],
    [
        {
            code: 'ControlLeft', key: 'Ctrl', keyCode: 17,
        },
        {
            code: 'MetaRight', key: 'Win', keyCode: 91,
        },
        {
            code: 'AltLeft', key: 'Alt', keyCode: 18,
        },
        {
            code: 'Space', key: ' ', keyCode: 32, class: 'Space'
        },
        {
            code: 'AltRight', key: 'Alt', keyCode: 18,
        },
        {
            code: 'ArrowLeft', key: '◄', keyCode: 37,
        },
        {
            code: 'ArrowDown', key: '▼', keyCode: 40,
        },
        {
            code: 'ArrowRight', key: '►', keyCode: 39,
        },
        {
            code: 'ControlRight', key: 'Ctrl', keyCode: 17,
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
            code: 'Backquote', key: 'ё', keyCode: 192, shiftKey: 'Ё',
        },
        {
            code: 'Digit1', key: 1, keyCode: 49, shiftKey: '!'
        },
        {
            code: 'Digit2', key: 2, keyCode: 50, shiftKey: '"',
        },
        {
            code: 'Digit3', key: 3, keyCode: 51, shiftKey: '№',
        },
        {
            code: 'Digit4', key: 4, keyCode: 52, shiftKey: ';',
        },
        {
            code: 'Digit5', key: 5, keyCode: 53, shiftKey: '%'
        },
        {
            code: 'Digit6', key: 6, keyCode: 54, shiftKey: ':',
        },
        {
            code: 'Digit7', key: 7, keyCode: 55, shiftKey: '?',
        },
        {
            code: 'Digit8', key: 8, keyCode: 56, shiftKey: '*'
        },
        {
            code: 'Digit9', key: 9, keyCode: 57, shiftKey: '('
        },
        {
            code: 'Digit0', key: 0, keyCode: 48, shiftKey: ')'
        },
        {
            code: 'Minus', key: '-', keyCode: 189, shiftKey: '_'
        },
        {
            code: 'Equal', key: '=', keyCode: 187, shiftKey: '+'
        },
        {
            code: 'Backspace', key: 'Backspace', keyCode: 8, class: 'Backspace'
        },
    ],
    [
        {
            code: 'Tab', key: 'Tab', keyCode: 9,
        },
        {
            code: 'KeyQ', key: 'й', keyCode: 81, shiftKey: 'Й',
        },
        {
            code: 'KeyW', key: 'ц', keyCode: 87, shiftKey: 'Ц',
        },
        {
            code: 'KeyE', key: 'у', keyCode: 69, shiftKey: 'У',
        },
        {
            code: 'KeyR', key: 'к', keyCode: 82, shiftKey: 'К',
        },
        {
            code: 'KeyT', key: 'е', keyCode: 84, shiftKey: 'Е',
        },
        {
            code: 'KeyY', key: 'н', keyCode: 89, shiftKey: 'Н',
        },
        {
            code: 'KeyU', key: 'г', keyCode: 85, shiftKey: 'Г',
        },
        {
            code: 'KeyI', key: 'ш', keyCode: 73, shiftKey: 'Ш',
        },
        {
            code: 'KeyO', key: 'щ', keyCode: 79, shiftKey: 'Щ',
        },
        {
            code: 'KeyP', key: 'з', keyCode: 80, shiftKey: 'З',
        },
        {
            code: 'BracketLeft', key: 'х', keyCode: 219, shiftKey: 'Х',
        },
        {
            code: 'BracketRight', key: 'ъ', keyCode: 221, shiftKey: 'Ъ',
        },
        {
            code: 'Backslash', key: '\\', keyCode: 220, shiftKey: '/',
        },
        {
            code: 'Delete', key: 'Del', keyCode: 46, class: 'Delete'
        },
    ],
    [
        {
            code: 'CapsLock', key: 'CapsLock', keyCode: 20, class: 'CapsLock'
        },
        {
            code: 'KeyA', key: 'ф', keyCode: 65, shiftKey: 'Ф',
        },
        {
            code: 'KeyS', key: 'ы', keyCode: 83, shiftKey: 'Ы',
        },
        {
            code: 'KeyD', key: 'в', keyCode: 68, shiftKey: 'В',
        },
        {
            code: 'KeyF', key: 'а', keyCode: 70, shiftKey: 'А',
        },
        {
            code: 'KeyG', key: 'п', keyCode: 71, shiftKey: 'П',
        },
        {
            code: 'KeyH', key: 'р', keyCode: 72, shiftKey: 'Р',
        },
        {
            code: 'KeyJ', key: 'о', keyCode: 74, shiftKey: 'О',
        },
        {
            code: 'KeyK', key: 'л', keyCode: 75, shiftKey: 'Л',
        },
        {
            code: 'KeyL', key: 'д', keyCode: 76, shiftKey: 'Д',
        },
        {
            code: 'Semicolon', key: 'ж', keyCode: 186, shiftKey: 'Ж',
        },
        {
            code: 'Quote', key: 'э', keyCode: 222, shiftKey: 'Э',
        },
        {
            code: 'Enter', key: 'Enter', keyCode: 13, class: 'Enter'
        },
    ],
    [
        {
            code: 'ShiftLeft', key: 'Shift', keyCode: 13, class: 'Shift'
        },
        {
            code: 'KeyZ', key: 'я', keyCode: 90, shiftKey: 'Я',
        },
        {
            code: 'KeyX', key: 'ч', keyCode: 88, shiftKey: 'Ч',
        },
        {
            code: 'KeyC', key: 'с', keyCode: 67, shiftKey: 'С',
        },
        {
            code: 'KeyV', key: 'м', keyCode: 86, shiftKey: 'М',
        },
        {
            code: 'KeyB', key: 'и', keyCode: 66, shiftKey: 'И',
        },
        {
            code: 'KeyN', key: 'т', keyCode: 78, shiftKey: 'Т',
        },
        {
            code: 'KeyM', key: 'ь', keyCode: 77, shiftKey: 'Ь',
        },
        {
            code: 'Comma', key: 'б', keyCode: 188, shiftKey: 'Б',
        },
        {
            code: 'Period', key: 'ю', keyCode: 190, shiftKey: 'Ю',
        },
        {
            code: 'Slash', key: '.', keyCode: 191, shiftKey: ',',
        },
        {
            code: 'ArrowUp', key: '▲', keyCode: 38,
        },
        {
            code: 'ShiftRight', key: 'Shift', keyCode: 16, class: 'ShiftRight'
        },
    ],
    [
        {
            code: 'ControlLeft', key: 'Ctrl', keyCode: 17,
        },
        {
            code: 'MetaRight', key: 'Win', keyCode: 91,
        },
        {
            code: 'AltLeft', key: 'Alt', keyCode: 18,
        },
        {
            code: 'Space', key: ' ', keyCode: 32, class: 'Space'
        },
        {
            code: 'AltRight', key: 'Alt', keyCode: 18,
        },
        {
            code: 'ArrowLeft', key: '◄', keyCode: 37,
        },
        {
            code: 'ArrowDown', key: '▼', keyCode: 40,
        },
        {
            code: 'ArrowRight', key: '►', keyCode: 39,
        },
        {
            code: 'ControlRight', key: 'Ctrl', keyCode: 17,
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
/* harmony import */ var _modules_createTextarea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/createTextarea */ "./src/js/modules/createTextarea.js");
/* harmony import */ var _modules_generateKeyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/generateKeyboard */ "./src/js/modules/generateKeyboard.js");



window.addEventListener('DOMContentLoaded', () => {
    // Header
    const header = document.createElement('header');
    const headerTitle = document.createElement('h1');

    header.classList.add('header');
    headerTitle.classList.add('header__title');

    headerTitle.innerHTML = 'RSS Виртуальная клавиатура';
    document.querySelector('body').append(header);
    header.append(headerTitle);

    // Main
    const main = document.createElement('main');
    const container = document.createElement('div');

    main.classList.add('main');
    container.classList.add('container');

    document.querySelector('body').append(main);
    main.append(container);

    container.append(Object(_modules_createTextarea__WEBPACK_IMPORTED_MODULE_0__["createTextarea"])(), Object(_modules_generateKeyboard__WEBPACK_IMPORTED_MODULE_1__["generateKeyboard"])());

    // Footer
    const footer = document.createElement('footer');
    const description = document.createElement('p');
    const language = document.createElement('p');

    footer.classList.add('footer');
    description.classList.add('description');
    language.classList.add('language');

    description.innerHTML = 'Клавиатура создана в операционной системе Windows';
    language.innerHTML = 'Для переключения языка комбинация: левыe ctrl + alt';

    document.querySelector('body').append(footer);
    footer.append(description, language);
});

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
/* harmony import */ var _assets_englishKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/englishKeys */ "./src/js/assets/englishKeys.js");
/* harmony import */ var _assets_russianKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/russianKeys */ "./src/js/assets/russianKeys.js");



const generateKeyboard = () => {
    const lang = localStorage.getItem('language');
    const currentLang = lang === 'rus' ? _assets_russianKeys__WEBPACK_IMPORTED_MODULE_1__["russianKeys"] : _assets_englishKeys__WEBPACK_IMPORTED_MODULE_0__["englishKeys"];

    const keyboardContainer = document.createElement('div');

    keyboardContainer.classList.add('keyboard-container');

    for (let i = 0; i < currentLang.length; i++) {
        const row = document.createElement('div');
        row.classList.add('keyboard-row');
        keyboardContainer.append(row);

        for (let j = 0; j < currentLang[i].length; j++) {
            const button = document.createElement('button');
            const key = document.createElement('span');
            button.classList.add('keyboard-key');
            key.classList.add('key');

            button.setAttribute('keyCode', currentLang[i][j]['keyCode']);
            key.innerHTML = currentLang[i][j]['key'];
            button.append(key);

            if (currentLang[i][j]['shiftKey']) {
                const shiftKey = document.createElement('span');
                shiftKey.classList.add('shiftKey', 'hidden');
                shiftKey.innerHTML = currentLang[i][j]['shiftKey'];
                button.append(shiftKey);
            }

            if (currentLang[i][j]['class']) button.classList.add(currentLang[i][j]['class']);
            row.append(button);
        }

    }

    return keyboardContainer;
}

/***/ })

/******/ });
//# sourceMappingURL=boundle.js.map