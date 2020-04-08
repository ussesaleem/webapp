/* global menu */

"use strict";

var home = (function () {
    var showHome = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lager appen";

        var header = document.createElement("h2");

        header.textContent = "Infinity Warehouses";

        var greeting = document.createElement("p");

        greeting.textContent = "Denna mobilapplikation är skapad för att " +
            "visa Infinity Warehouses lager. Mobilapplikationen består " +
            "två vyer som kan navigeras mellan via menyn i botten." +
            "I lagervyn kan man klicka sig in på respektive produkt för att " +
            "se detaljer om produkten.";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(header);
        window.mainContainer.appendChild(greeting);

        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("home");
    };

    return {
        showHome: showHome
    };
})(home);
