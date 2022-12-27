import pageLoader from "./page_load.js";
import loadMenu from "./menu.js";
import loadHome from "./home.js";

function unloadPage() {
    document.getElementById("content").removeChild(document.getElementById("content").firstChild);
}

pageLoader();
loadHome();

document.querySelectorAll(".selection").forEach((selection) => {
    selection.addEventListener("click", () => {
        let category = selection.classList[1]
        if (category === "home"){
            unloadPage();
            loadHome();
        } else if (category === "menu"){
            unloadPage();
            loadMenu();
        } else if (category === "about-us"){

        }
    });
});



