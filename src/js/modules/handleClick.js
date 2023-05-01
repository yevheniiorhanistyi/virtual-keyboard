import { changeInputValue } from './changeInputValue';

export const handleClick = () => {
    const buttonList = document.querySelectorAll('.keyboard-key');
    let isCapsLock = false,
        isShift = false;

    const onClickBtn = (code, key) => {
        addClassActive(code);
        switch (key) {
            case 'Ctrl':
                document.onkeyup = (e) => {
                    if (e.code == 'AltLeft') {
                        changeLanguage();
                    }
                }
                break;
            case 'CapsLock':
                isCapsLock = !isCapsLock;
                toggleCase();
                break;
            case 'Shift':
                if (!isShift) {
                    toggleCase();
                    isShift = true;
                }
                break;
            default: changeInputValue(key);
        }
    };

    const addClassActive = (code) => {
        buttonList.forEach(btn => {
            if (btn.getAttribute('code') === code) {
                btn.classList.add('active');
            }
        });
    }

    const removeClassActive = () => {
        buttonList.forEach(btn => {
            const isShiftPressed = isShift && (btn.classList.contains('Shift') || btn.classList.contains('ShiftRight'));
            const isCapsLockPressed = isCapsLock && btn.classList.contains('CapsLock');
            isShiftPressed || isCapsLockPressed ? null : btn.classList.remove('active');
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

    const toggleCase = () => {
        buttonList.forEach(btn => {
            if (btn.getAttribute('id') < 64) {
                for (let i = 0; i < btn.children.length; i++) {
                    const span = btn.children[i];
                    span.classList.contains('hidden') ? span.classList.remove('hidden') : span.classList.add('hidden');
                }
            }
        });
    }

    const changeLanguage = () => {
        let lang = localStorage.getItem('language') ? localStorage.getItem('language') : 'eng';
        lang === 'eng' ? lang = 'rus' : lang = 'eng';
        localStorage.setItem('language', lang);
        window.location.reload();
    };

    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        let code = e.code,
            key = null;

        buttonList.forEach(btn => {
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

    document.addEventListener('keyup', (e) => {
        if (e.code === 'ShiftLeft' && isShift || e.code === 'ShiftRight' && isShift) {
            toggleCase();
            isShift = false;
        }
        removeClassActive();
    });

    document.addEventListener('mouseup', (e) => {
        const button = e.target.closest('.keyboard-key');

        if (button) {
            let key = getCurrentKey(button);

            if (key === 'Shift' && isShift) {
                toggleCase();
                isShift = false;
            }
        }
        removeClassActive();
    });

}