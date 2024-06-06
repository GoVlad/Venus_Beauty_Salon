$(document).ready(function () {
    $("#hamburger").click(function () {
        $("nav").toggleClass("mobile");
    });
});

function changeStyle() {
    var icon = document.getElementById("icon");
    var banner = document.getElementById("banner");
    var isNightMode = localStorage.getItem('isNightMode') === 'true';

    if (!isNightMode) {
        banner.src = "img/sase-night.jpg";
        icon.src = "img/demon.png";
        document.body.classList.add('body-night');
        localStorage.setItem('isNightMode', 'true');
        document.getElementById("themeText").textContent = "Dark";
    } else {
        banner.src = "img/sase.jpg";
        icon.src = "img/angel.png";
        document.body.classList.remove('body-night');
        localStorage.setItem('isNightMode', 'false');
        document.getElementById("themeText").textContent = "Light";
    }
}

window.onload = function () {
    var isNightMode = localStorage.getItem('isNightMode') === 'true';
    var themeText = document.getElementById("themeText");
    if (isNightMode) {
        document.body.classList.add('body-night');
        document.getElementById("banner").src = "img/sase-night.jpg";
        document.getElementById("icon").src = "img/demon.png";
        themeText.textContent = "Dark";
    }
}


function changeLanguage() {
    const select = document.getElementById("languageSelect");
    const lang = select.value;
    document.documentElement.lang = lang;

    const headerLinks = document.querySelectorAll("header a");
    const translation = {
        "Despre noi": "About us",
        "Servicii": "Services",
        "Galerie": "Gallery",
        "Contacte": "Contact"
    };

    headerLinks.forEach(link => {
        const text = lang === "en" ? translation[link.textContent] : Object.keys(translation).find(key => translation[key] === link.textContent);
        if (text) link.textContent = text;
    });

    const elementsToUpdate = document.querySelectorAll(".translate");
    elementsToUpdate.forEach(element => {
        const key = element.dataset.langKey;
        const text = languageData[lang][key];
        if (text) element.textContent = text;
    });

    localStorage.setItem("selectedLanguage", lang);
}

document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "ro";
    const select = document.getElementById("languageSelect");
    select.value = savedLanguage;
    changeLanguage();
});

const languageData = {
    "en": {
        "fondatori": "Founders",
        "program-lucru": "Work programme",
        "servicii": "Service",
        "cosmetologie": "Cosmetology",
        "tunsori": "Haircuts",
        "indreptare": "Hair straightening",
        "tratament": "Hair treatment",
        "alungire": "Nail lengthening/straightening",
        "luni": "Monday - 09:00 a.m. - 4:00 p.m.",
        "marti": "Tuesday - 09:00 a.m. - 4:00 p.m.",
        "miercuri": "Wednesday - 09:00 a.m. - 4:00 p.m.",
        "joi": "Thursday - 09:00 a.m. - 4:00 p.m.",
        "vineri": "Friday - 09:00 a.m. - 4:00 p.m.",
        "sambata": "Saturday - Closed",
        "duminica": "Sunday - Closed",
        "setari": "Settings",
        "limba": "Language",
        "tema": "Theme"
    },
    "ro": {
        "fondatori": "Fondatori",
        "program-lucru": "Program de lucru",
        "servicii": "Servicii",
        "cosmetologie": "Cosmetologie",
        "tunsori": "Tunsori",
        "indreptare": "Îndreptarea părului",
        "tratament": "Tratament pentru păr",
        "alungire": "Alungirea/corecția unghiilor",
        "luni": "Luni - 09:00 - 16:00",
        "marti": "Marți - 09:00 - 16:00",
        "miercuri": "Miercuri - 09:00 - 16:00",
        "joi": "Joi - 09:00 - 16:00",
        "vineri": "Vineri - 09:00 - 16:00",
        "sambata": "Sâmbătă - zi de odihnă",
        "duminica": "Duminică - zi de odihnă",
        "setari": "Setări",
        "limba": "Limbă",
        "tema": "Temă"
    },
}

document.addEventListener("DOMContentLoaded", function () {
    changeLanguage();
});