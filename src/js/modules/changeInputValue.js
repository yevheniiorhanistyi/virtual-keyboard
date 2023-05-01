export const changeInputValue = (value) => {
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

        case 'Shift':
        case 'CapsLock':
        case 'Ctrl':
        case 'Control':
        case 'Meta':
        case 'MetaRight':
        case 'Win':
        case 'Alt':
        case 'AltGraph':
        case null:
            break;

        default: textarea.value += value;
    }
};