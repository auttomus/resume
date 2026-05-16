document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".lang-btn");
  const i18nElements = document.querySelectorAll("[data-i18n]");

  const setLanguage = (lang) => {
    // Update active button state
    langButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });

    // Update text content for all i18n elements
    i18nElements.forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Save preference
    localStorage.setItem("preferredLang", lang);
    
    // Update html lang attribute
    document.documentElement.lang = lang;
  };

  // Add click listeners to buttons
  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Initialize language
  const savedLang = localStorage.getItem("preferredLang") || "id";
  setLanguage(savedLang);
});
