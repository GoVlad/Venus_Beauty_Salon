$(document).ready(function () {
    $("#hamburger").click(function () {
        $("nav").toggleClass("mobile");
    });
});

function changeStyle() {
    var icon = document.getElementById("icon");
    var isNightMode = localStorage.getItem('isNightMode') === 'true';

    if (!isNightMode) {
        icon.src = "../img/demon.png";
        document.body.classList.add('body-night');
        localStorage.setItem('isNightMode', 'true');
        document.getElementById("themeText").textContent = "Dark";
    } else {
        icon.src = "../img/angel.png";
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
        document.getElementById("icon").src = "../img/demon.png";
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

document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "ro";
    const select = document.getElementById("languageSelect");
    select.value = savedLanguage;
    changeLanguage();
});

const languageData = {
    "en": {
        "servicii": "Services",
        "cosmetologie": "Cosmetology",
        "cercei": "ear holes with medicinal earrings in children and adults;",
        "bijuterii": "medicinal gold jewellery: Xuping;",
        "femei": "women - from 90 lei;",
        "barbati": "men - 80 lei;",
        "copii": "children - 80 lei.",
        "indreptare": "Straightening hair with keratin:",
        "p-1": "Keratin hair straightening is a procedure that not only promotes hair straightening, but also contributes to health, to the generation of every hair, including damaged and bleached hair (it is a temporary modification of the hair structure with special formulas with a high content of keratin protein fibres). As a rule, keratin for hair straightening is synthetic, and not of animal origin.",
        "procedura": "This salon procedure fits the bill:",
        "imblanzire": "to tame unruly and frizzy hair;",
        "ingrosare": "for thickening and increasing the volume of the chuvites thin;",
        "aspect": "to create a well-groomed look for any hair.",
        "tratament": "Botox hair treatment:",
        "p-2": "Like any other treatment, Botox hair treatment aims to maintain hair health by reducing the amount of sweat produced by the scalp. Following treatment reduces the amount of fat and loss of hair volume, linked to excess sebum.",
        "manichiura": "Manicure:",
        "alungire": "nail lengthening - from 300 lei;",
        "corectie": "correction - from 250 lei;",
        "tunsori": "Haircuts",
        "coafuri": "Hairstyles",
        "manichiura-2": "Manicure",
        "despre": "About us",
        "p1-1": "In our presentation, I want to focus on the idea of opening a beauty salon in Iargara and how we can differentiate ourselves by offering quality service and a unique customer experience. The name of our salon is Beauty Salon which represents us and reflects our passion for beauty and hair care.",
        "p1-2": "For starters, I opened my individual business in a space that is located in a good location in Iargara that is easily accessible to customers. In order to be competitive in the market, we need to ensure that we offer quality services. For this, we can provide our services and good communication skills. We will also invest in high-quality equipment and products to achieve impeccable results.",
        "p1-3": "Another important aspect is creating a pleasant atmosphere and relaxing atmosphere in the salon. We have chosen a theme and modern theme for the decor, with colour accents and comfortable furniture.  We should also promote our services effectively. And we chose to create the website or a social media page for our salon, where we can display photos of our haircuts made and  offer hair care services. A key factor in our success will be the close relationship and trust-based framework with our clients. We will strive to build a solid base of loyal customers, giving them the attention and impeccable service.",
        "p1-4": "Finally, the opening of a Beauty Salon in Iargara represents a fantastic opportunity to bring our passion for haircutting to a new level and succeed in a business of our own. With commitment, dedication and attention to detail, we're sure our salon will become a destination beauty destination in Iargara. We wish you success in your endeavor and to fulfill your dreams of having your own Beauty Salon!",
        "contacte": "Contact",
        "date-contact": "Date of contact",
        "mobil": "Mobile no:",
        "adresa": "Address:",
        "program": "Program yourself!",
        "setari": "Settings",
        "limba": "Language",
        "tema": "Theme"
    },

    "ro": {
        "servicii": "Servicii",
        "cosmetologie": "Cosmetologie:",
        "cercei": "găuri în urechi cu cercei medicinali la copii și adulți;",
        "bijuterii": "bijuterii din aur medicinal: Xuping;",
        "femei": "femei - de la 90 lei;",
        "barbati": "bărbați - 80 lei;",
        "copii": "copii - 80 lei.",
        "indreptare": "Îndreptarea părului cu keratină:",
        "p-1": "Îndreptarea părului cu keratină este o procedură care nu numai că favorizează îndreptarea părului, dar contribuie și la sănătate, la regenerarea fiecărui fir de păr, inclusiv a celui deteriorat și decolorat(este o modificare temporară a structurii părului cu formule speciale cu un conținut ridicat de fibre proteice keratinice).De regulă, keratina pentru îndreptarea părului este sintetică, și nu de origine animală.",
        "procedura": "Acestă procedură de salon se potrivește:",
        "imblanzire": "pentru a îmblânzi părul indisciplinat și încrețit;",
        "ingrosare": "pentru îngroșarea și sporirea volumului șuvitelor subțiri;",
        "aspect": "pentru a crea un aspect bine îngrijit oricărui păr.",
        "tratament": "Tratament cu botox pentru păr:",
        "p-2": "Ca și orice alt tratament, tratamentul părului cu botox are ca scop menținerea sănătații părului prin reducerea cantității de transpirație produsă de scalp. În urma tratamentului se micșorează îngrășarea rapidă a părului și pierderea volumului părului, legată de excesul de sebum.",
        "manichiura": "Manichiură:",
        "alungire": "alungirea unghiilor - de la 300 lei;",
        "corectie": "corecția - de la 250 lei;",
        "coafuri": "Coafuri",
        "manichiura-2": "Manichiură",
        "tunsori": "Tunsori:",
        "despre": "Despre noi",
        "p1-1": "În prezentarea noastră, vreau să ne concentrăm pe ideea deschiderii beauty salon în Iargara și modul în care ne putem diferenția prin oferirea serviciilor de calitate și o experiență unică pentru clienți. Numele salonului nostru este Beauty Salon care ne reprezintă și reflectă pasiunea noastră pentru frumusețe și îngrijirea podoabei capilare.",
        "p1-2": "Pentru început, am deschis afacerea individuală într-un spațiu ce se află într-o zonă bine poziționată în Iargara, care să fie ușor accesibil pentru clienți. Pentru a fi competitive pe piață, trebuie să ne asigurăm că oferim servicii de calitate. Pentru aceasta, putem asigura serviciile noastre și bunele abilități de comunicare. De asemenea, vom investi în echipament și produse de înaltă calitate pentru a obține rezultate impecabile.",
        "p1-3": "Un alt aspect important este crearea unei atmosfere plăcute și relaxante în salon. Am ales o tematică elegantă și modernă pentru decor, cu accente de culoare și mobilier confortabil. De asemenea, ar trebui să promovăm serviciile noastre în mod eficient. Și am ales să creăm site-ul sau o pagină de social media pentru salonul nostru, unde putem expune fotografii cu tunsorile realizate și să oferim servicii de îngrijire a părului. Un factor cheie în succesul nostru va fi relația strânsă și cadrul de lucru bazat pe încredere cu clienții noștri. Vom încerca să ne construim o bază solidă de clienți fideli, oferindu-le o atenție personalizată și servicii impecabile.",
        "p1-4": "În final, deschiderea unui Beauty Salon în Iargara reprezintă o oportunitate fantastică de a aduce pasiunea noastră pentru tuns până la un alt nivel și de a avea succes într-o afacere proprie. Cu angajament, dedicație și o atenție deosebită la detalii, suntem sigure că salonul nostru va deveni o destinație de frumusețe preferată în Iargara. Ne dorim succes în inițiativa noastră și să ne îndeplinim visele de a avea propriul Beauty Salon!",
        "contacte": "Contacte",
        "date-contact": "Date de contact",
        "mobil": "Nr. de mobil:",
        "adresa": "Adresa:",
        "program": "Programează-te!",
        "setari": "Setări",
        "limba": "Limbă",
        "tema": "Temă"
    }
}

var elementsToUpdate = document.querySelectorAll(".translate");
elementsToUpdate.forEach(function (element) {
    var key = element.dataset.langKey;
    var text = languageData[lang][key];
    if (text) {
        element.textContent = text;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var savedLanguage = localStorage.getItem("selectedLanguage") || "ro";
    var select = document.getElementById("languageSelect");
    select.value = savedLanguage;
    changeLanguage();
});


document.addEventListener('DOMContentLoaded', () => {
    let images = document.querySelectorAll(".galery-photo");
    let wrapper = document.getElementById("wrapper");
    let imgWrapper = document.getElementById("fullImg");
    let close = document.getElementById("closeBtn");

    images.forEach((img, index) => {
        img.addEventListener('click', () => {
            openModal(img.src);
        });
    });

    close.addEventListener('click', () => {
        wrapper.style.display = 'none';
    });

    function openModal(pic) {
        wrapper.style.display = 'flex';
        imgWrapper.src = pic;
    }
});

function validateEmail() {
    var emailInput = document.getElementsByName('email')[0];
    var emailValue = emailInput.value;
    var isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    
    if (isValidEmail) {
        emailInput.parentElement.classList.add('valid-email');
        emailInput.parentElement.classList.remove('invalid-email');
    } else {
        emailInput.parentElement.classList.remove('valid-email');
        emailInput.parentElement.classList.add('invalid-email');
    }
}