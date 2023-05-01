import { englishKeys } from '../assets/englishKeys';
import { russianKeys } from '../assets/russianKeys';

export const generateKeyboard = () => {
    const container = document.querySelector('.container');
    const language = localStorage.getItem('language') === 'rus' ? russianKeys : englishKeys;

    const keyboardContainer = document.createElement('div');

    keyboardContainer.classList.add('keyboard-container');

    for (let i = 0; i < language.length; i++) {
        const row = document.createElement('div');
        row.classList.add('keyboard-row');
        keyboardContainer.append(row);

        for (let j = 0; j < language[i].length; j++) {
            const button = document.createElement('button');
            const key = document.createElement('span');
            button.classList.add('keyboard-key');
            key.classList.add('key');

            button.setAttribute('code', language[i][j]['code']);
            button.setAttribute('id', language[i][j]['id']);
            key.innerHTML = language[i][j]['key'];
            button.append(key);

            if (language[i][j]['shiftKey']) {
                const shiftKey = document.createElement('span');
                shiftKey.classList.add('shiftKey', 'hidden');
                shiftKey.innerHTML = language[i][j]['shiftKey'];
                button.append(shiftKey);
            }

            if (language[i][j]['class']) button.classList.add(language[i][j]['class']);
            row.append(button);
        }

    }

    container.append(keyboardContainer);
}