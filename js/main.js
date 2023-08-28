function select(selector) {return document.querySelector(selector)}

function selectAll(selector) {return document.querySelectorAll(selector)}

// language switcher

const languageBtn = select('.language-button');
const languageSwitcher = select('#language-switcher');
const languageOverlay = select('#language-switcher .overlay');

languageBtn.addEventListener('click', () => {
    languageSwitcher.classList.add('visible')
})

languageOverlay.addEventListener('click', () => {
    languageSwitcher.classList.remove('visible')
})