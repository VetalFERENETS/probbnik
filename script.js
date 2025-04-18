async function loadTranslations(language) {
    const response = await fetch("translations.json");
    const translations = await response.json();
    return translations[language];
}

async function changeLanguage() {
    const language = document.getElementById("language").value;
    const translations = await loadTranslations(language);
    
    const elements = document.querySelectorAll("[data-key]");
    elements.forEach(element => {
        const key = element.getAttribute("data-key");
        element.innerText = translations[key];
    });
}

// Ініціалізація початкової мови
changeLanguage();
