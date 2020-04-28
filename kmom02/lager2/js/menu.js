/* global home, lager */

"use strict";

import { home } from "./home.js";
import { lager } from "./lager.js";

var menu = {
    showMenu: function (selected) {
        window.navigation.innerHTML = "";

        var navElements = [{name: "Hem", class: "home", nav: home.showHome },
            {name: "Lagerförteckningslista", class: "folder", nav: lager.showLager }];

        navElements.forEach(function (element) {
            var navElement = document.createElement("a");

            if (selected === element.class) {
                navElement.className = "active";
            }

            navElement.addEventListener("click", element.nav);

            var icon = document.createElement("i");

            icon.className = "material-icons";
            icon.textContent = element.class;
            navElement.appendChild(icon);

            var text = document.createElement("span");

            text.className = "icon-text";
            text.textContent = element.name;
            navElement.appendChild(text);

            window.navigation.appendChild(navElement);
        });

        window.rootElement.appendChild(window.navigation);
    }
};

export { menu };
