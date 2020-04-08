/* global menu */

"use strict";

var github = (function () {
    var showGithub = function () {
        window.mainContainer.innerHTML = "";

        var title = document.createElement("h1");

        title.className = "title";
        title.textContent = "Github";

        window.mainContainer.appendChild(title);

        fetch("https://api.github.com/users/ussesaleem/repos").then(function (response) {
            return response.json();
        }).then(function(data) {
            data.forEach(function(repo) {
                var repoElement = document.createElement("p");

                repoElement.addEventListener("click", function(event) {
                    document.location.href = 'https://github.com/ussesaleem/' +
                                             event.srcElement.innerText;
                });
                repoElement.setAttribute("style", "cursor: pointer;");
                repoElement.textContent = repo.name;
                window.mainContainer.appendChild(repoElement);
            });

            window.rootElement.appendChild(window.mainContainer);

            menu.showMenu("folder");
        }).catch(function(error) {
            console.log("The fetch operation failed due to the following errors: ", error.message);
        });

        // var githubRequest = new XMLHttpRequest();
        // githubRequest.addEventListener("load", renderGithubRepos);
        // githubRequest.open("GET", "https://api.github.com/users/ussesaleem/repos");
        // githubRequest.send();
    };

    // var renderGithubRepos = function () {
    //     var repos = JSON.parse(this.responseText);
    //
    //     repos.forEach(function(repo) {
    //         var repoElement = document.createElement("p");
    //         repoElement.textContent = repo.name;
    //         window.mainContainer.appendChild(repoElement);
    //     });
    //
    //     window.rootElement.appendChild(mainContainer);
    //
    //     showMenu("folder");
    // }

    return {
        showGithub: showGithub
    };
})(github);
