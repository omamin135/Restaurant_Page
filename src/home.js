import homeStyles from "./home_styles.css";
import pin from "./assets/location.svg";
import clock from "./assets/clock.svg";

export default function loadHome() {

    const homeDiv = document.createElement("div");
    homeDiv.setAttribute("id", "home-container");

    let p = document.createElement("p");
    p.textContent = "Eat - Dine - Enjoy";
    p.className = "moto";
    homeDiv.appendChild(p);

    p = document.createElement("p");
    p.innerHTML = "Made with passion since <span>1983</span>";
    homeDiv.appendChild(p);

    let dividerDiv = document.createElement("div");
    dividerDiv.className = "divider";
    homeDiv.appendChild(dividerDiv);

    const locationPin = document.createElement("img");
    locationPin.src = pin;

    const addressDiv = document.createElement("div");
    addressDiv.className = "address";
    addressDiv.appendChild(locationPin);
    p = document.createElement("p");
    p.textContent = "3685 Main St."
    addressDiv.appendChild(p);

    p = document.createElement("p");
    p.textContent = "Hilliard, OH 43026"
    addressDiv.appendChild(p);

    homeDiv.appendChild(addressDiv);

    dividerDiv = document.createElement("div");
    dividerDiv.className = "divider";
    homeDiv.appendChild(dividerDiv);

    const clockimg = document.createElement("img");
    clockimg.src = clock;

    const hoursDiv = document.createElement("div");
    hoursDiv.className = "address";
    hoursDiv.appendChild(clockimg);
    p = document.createElement("p");
    p.textContent = "3685 Main St."
    hoursDiv.appendChild(p);

    p = document.createElement("p");
    p.textContent = "Hilliard, OH 43026"
    hoursDiv.appendChild(p);

    homeDiv.appendChild(hoursDiv);

    document.getElementById("content").appendChild(homeDiv);
}