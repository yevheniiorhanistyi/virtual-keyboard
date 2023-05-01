import { handleClick, generateKeyboard } from './modules';
import { createElement } from './utils/createElement';

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body'),
        headerEl = createElement('header', 'header'),
        headerTitle = createElement('h1', 'header__title', 'RSS Виртуальная клавиатура'),
        mainEl = createElement('main', 'main'),
        container = createElement('div', 'container'),
        textarea = createElement('textarea', 'textarea'),
        footerEl = createElement('footer', 'footer'),
        description = createElement('p', 'description', 'Клавиатура создана в операционной системе Windows'),
        language = createElement('p', 'language', 'Для переключения языка комбинация: левыe ctrl + alt');

    textarea.setAttribute('id', 'textarea');

    headerEl.append(headerTitle);
    mainEl.append(container);
    container.append(textarea);
    footerEl.append(description, language);
    body.append(headerEl, mainEl, footerEl);

    generateKeyboard();
    handleClick();
});