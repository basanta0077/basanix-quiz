/* =========================================
   BASANIX
   FINAL JAVASCRIPT
========================================= */


/* =========================================
   LANGUAGE SYSTEM
========================================= */

let currentLanguage = "en";


const languageButton =
    document.getElementById("languageBtn");


const languageText =
    document.getElementById("languageText");


/*
   सबै data-en / data-ne भएको
   text लाई खोज्ने
*/

const translatedElements =
    document.querySelectorAll(
        "[data-en][data-ne]"
    );


/* =========================================
   CHANGE LANGUAGE
========================================= */

function changeLanguage(language) {

    currentLanguage = language;


    /*
       नेपाली
    */

    if (language === "ne") {

        document.body.classList.add("nepali");

        document.documentElement.lang = "ne";


        translatedElements.forEach(
            function (element) {

                element.textContent =
                    element.getAttribute("data-ne");

            }
        );


        languageText.textContent =
            "English";


        /*
           Browser title
        */

        document.title =
            "BASANIX | डिजिटल ज्ञान तथा क्विज";


    }


    /*
       English
    */

    else {

        document.body.classList.remove("nepali");

        document.documentElement.lang = "en";


        translatedElements.forEach(
            function (element) {

                element.textContent =
                    element.getAttribute("data-en");

            }
        );


        languageText.textContent =
            "नेपाली";


        document.title =
            "BASANIX | Digital Knowledge & Quiz";

    }

}


/* =========================================
   LANGUAGE BUTTON
========================================= */

languageButton.addEventListener(
    "click",
    function () {

        if (currentLanguage === "en") {

            changeLanguage("ne");

        }

        else {

            changeLanguage("en");

        }

    }
);


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    if (currentLanguage === "ne") {

        showMessage(
            "🚀 क्विज प्रणाली छिट्टै उपलब्ध हुनेछ।"
        );

    }

    else {

        showMessage(
            "🚀 Quiz system is coming soon."
        );

    }

}


/* =========================================
   CATEGORY
========================================= */

function category(categoryName) {


    const nepaliNames = {

        "Computer":
            "कम्प्युटर",

        "Nepal":
            "नेपाल",

        "Sports":
            "खेलकुद",

        "General Knowledge":
            "सामान्य ज्ञान"

    };


    if (currentLanguage === "ne") {

        const name =
            nepaliNames[categoryName]
            || categoryName;


        showMessage(
            "📚 " +
            name +
            " क्विज छिट्टै उपलब्ध हुनेछ।"
        );

    }

    else {

        showMessage(
            "📚 " +
            categoryName +
            " Quiz is coming soon."
        );

    }

}


/* =========================================
   COMING SOON
========================================= */

function comingSoon() {

    if (currentLanguage === "ne") {

        showMessage(
            "🚧 यो सुविधा छिट्टै उपलब्ध हुनेछ।"
        );

    }

    else {

        showMessage(
            "🚧 This feature is coming soon."
        );

    }

}


/* =========================================
   NOTIFICATION
========================================= */

let notificationTimer;


function showMessage(message) {

    const notification =
        document.getElementById(
            "notification"
        );


    clearTimeout(
        notificationTimer
    );


    notification.textContent =
        message;


    notification.classList.add(
        "show"
    );


    notificationTimer =
        setTimeout(
            function () {

                notification.classList.remove(
                    "show"
                );

            },
            3000
        );

}


/* =========================================
   NAVIGATION ACTIVE
========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                navLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    }
);


/* =========================================
   SCROLL BASED ACTIVE NAV
========================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "home";


        sections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 160;


                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navLinks.forEach(
            function (link) {

                link.classList.remove(
                    "active"
                );


                const href =
                    link.getAttribute(
                        "href"
                    );


                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================
   INITIAL LANGUAGE
========================================= */

changeLanguage("en");

