import menuStyle from "./menu_styles.css";
import pizzaImg from "./assets/local_pizza.svg";
import drinkImg from "./assets/wine.svg";
import dessertImg from "./assets/icecream.svg";

const menu = (() => {

    const pizza = ["pizza 1", "pizza 2", "pizza 3", "pizza 4", "pizza 5"];
    const drinks = ["drink 1", "drink 2", "drink 3", "drink 4", "drink 5", "drink 6"];
    const dessert = ["dessert 1", "dessert 2"];

    function getPizza(){
        return pizza;
    }

    function getDrinks(){
        return drinks;
    }

    function getDessert(){
        return dessert;
    }

    return {
        getPizza,
        getDrinks,
        getDessert
    }

})();

function menuList(category, menuItems, img) {

    const menuListDiv = document.createElement("div");
    menuListDiv.classList.add(...["menu-list", category]);

    const image = document.createElement("img");
    image.src = img;
    menuListDiv.appendChild(image);

    const p = document.createElement("p");
    p.textContent = category.toUpperCase();
    p.className = "menu-category";
    menuListDiv.appendChild(p);
    
    const ul = document.createElement("ul");

    menuItems.forEach((item) => {
        const li = document.createElement("li");
        li.classList = "menu-item";
        const p = document.createElement("p");
        p.textContent = item;

        li.appendChild(p);
        ul.appendChild(li);
    });

    menuListDiv.appendChild(ul);
    
    // document.getElementById("content").appendChild(menuListDiv);
    return menuListDiv;

}

export default function loadMenu() {

    const menuDiv = document.createElement("div");
    menuDiv.setAttribute("id", "menu-container");

    let listDiv = menuList("pizzas", menu.getPizza(), pizzaImg);
    menuDiv.appendChild(listDiv);

    listDiv = menuList("drinks", menu.getDrinks(), drinkImg);
    menuDiv.appendChild(listDiv);

    listDiv = menuList("desserts", menu.getDessert(), dessertImg);
    menuDiv.appendChild(listDiv);

    document.getElementById("content").appendChild(menuDiv);
}



