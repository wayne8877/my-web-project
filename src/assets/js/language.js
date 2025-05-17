import translations from './translations.js';

let currentLang = localStorage.getItem('lang') || 'zh';

function updateContent() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        const keys = key.split('.');
        let translation = translations[currentLang];
        
        keys.forEach(k => {
            translation = translation[k];
        });
        
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    document.getElementById('languageToggle').textContent = 
        currentLang === 'zh' ? 'EN | 中文' : '中文 | EN';
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
    updateContent();
});