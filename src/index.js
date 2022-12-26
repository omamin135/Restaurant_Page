import pageLoader from "./page_load.js";
import {loadMenu, unLoadMenu} from "./menu.js";

pageLoader();

document.querySelectorAll(".selection").forEach((selection) => {
    selection.addEventListener("click", () => {
        let category = selection.classList[1]
        if (category === "home"){
            
        } else if (category === "menu"){
            loadMenu();
        } else if (category === "about-us"){

        }
    });
});



