function switchLanguage() {
  const elements = document.querySelectorAll('[data-fr]');
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'fr' ? 'en' : 'fr';
  document.documentElement.lang = newLang;

  elements.forEach(el => {
    el.textContent = el.getAttribute(`data-${newLang}`);
  });
}
