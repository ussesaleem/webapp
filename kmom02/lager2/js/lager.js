/* global menu */

"use strict";

import { home } from "./home.js";

var lager = {
    showLager: function () {
        window.mainContainer.innerHTML = "";

        var apikey = "5da626b5c5d993195bf07bbe17ec4625";
        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lagerförteckningslista";

        window.mainContainer.className = "container";
        var header = document.createElement("h2");

        header.textContent = "Lager del 1";

        fetch('https://lager.emilfolino.se/v2/products?api_key=' + apikey)
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                result.data.forEach(function(product) {
                    var prodElement = document.createElement("p");

                    prodElement.textContent = product.name + " (" + product.stock + " st i lager)";
                    prodElement.addEventListener("click", function() {
                        var specs = [
                            "ID: " + product.id,
                            "Artikelnummer: " + product.article_number,
                            "Artikelnamn: " + product.name,
                            "Artikelbeskrivning: " + product.description,
                            "Artikelmått: " + product.specifiers,
                            "Antal i lager: " + product.stock + " st",
                            "Lagerplats: " + product.location,
                            "Pris: " + product.price + " SEK"
                        ];

                        showDetails(specs);
                    });
                    prodElement.setAttribute("style", "cursor: pointer;");
                    window.mainContainer.appendChild(prodElement);
                });
            });

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(header);
        window.rootElement.appendChild(window.mainContainer);

        menu.showMenu("folder");
    },

    showDetails: function (products) {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Lagerförteckningslista";

        window.mainContainer.className = "container";

        var back = document.createElement("p");

        back.textContent = "Tillbaka till Lagerförteckningslistan";
        back.addEventListener("click", showLager);
        back.className = "back";
        // back.setAttribute("style", "cursor: pointer; color: #4e75ba;");

        var header = document.createElement("h2");

        header.textContent = "Produktdetaljer";

        window.mainContainer.appendChild(title);
        window.mainContainer.appendChild(back);
        window.mainContainer.appendChild(header);

        products.forEach(myFunction);

        function myFunction(item) {
            var prodElement = document.createElement("p");

            prodElement.textContent = item;
            window.mainContainer.appendChild(prodElement);
        }

        window.rootElement.appendChild(window.mainContainer);
    }
};

export { lager };
