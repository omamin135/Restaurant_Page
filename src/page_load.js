import img from "./assets/pizza.jpg";
import githubImage from "./assets/github-mark.svg";
import pageStyles from "./page_load_styles.css";

function loadHeader() {
    const header = document.createElement("header");

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-container");

    /* load the main img */
    const mainImg = document.createElement("img");
    mainImg.setAttribute("src", img);
    mainImg.setAttribute("id", "header-img");
    imgContainer.appendChild(mainImg);

    /* load the restuarant name overlay */
    let div = document.createElement("div");
    div.setAttribute("id", "res-name");

    let p = document.createElement("p");
    p.textContent = "LePizza";
    div.appendChild(p);

    imgContainer.appendChild(div);

    document.querySelector("body").insertBefore(imgContainer, document.getElementById("content"));

    /* create the selection options */
    const headingDiv = document.createElement("div");
    headingDiv.setAttribute("id", "heading");

    const selectionDiv = document.createElement("div");
    selectionDiv.setAttribute("id", "selection");

    const ul = document.createElement("ul");
    

    /* create home */
    let li = document.createElement("li");
    li.classList.add("selection");
    li.classList.add("home"); 
    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "HOME";

    div.appendChild(p);
    let lineDiv = document.createElement("div");
    lineDiv.className = "selection-line";
    div.appendChild(lineDiv);
    li.appendChild(div);
    ul.appendChild(li);

    /* create menu */
    li = document.createElement("li");
    li.classList.add("selection");
    li.classList.add("menu"); 
    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "MENU";

    div.appendChild(p);
    lineDiv = document.createElement("div");
    lineDiv.className = "selection-line";
    div.appendChild(lineDiv);
    li.appendChild(div);
    ul.appendChild(li);
    
    /* create about us */
    li = document.createElement("li");
    li.classList.add("selection");
    li.classList.add("about-us"); 
    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "ABOUT US";

    div.appendChild(p);
    lineDiv = document.createElement("div");
    lineDiv.className = "selection-line";
    div.appendChild(lineDiv);
    li.appendChild(div);
    ul.appendChild(li);

    selectionDiv.appendChild(ul);
    headingDiv.appendChild(selectionDiv);


    header.appendChild(headingDiv);

    // document.querySelector("body").appendChild(header);
    document.querySelector("body").insertBefore(header, document.getElementById("content"));
    
}

function loadFooter() {

    const footer = document.createElement("footer");

    const p = document.createElement("p");
    p.textContent = "Made By Om Amin";

    footer.appendChild(p);

    
    const a = document.createElement("a");
    a.href = "https://github.com/omamin135/Restaurant_Page";
    a.setAttribute("target", "_blank");

    const githubImg = document.createElement("img");
    githubImg.setAttribute("src", githubImage);

    a.appendChild(githubImg);

    footer.appendChild(a);

    document.querySelector("body").appendChild(footer);

}

export default function loadPage() {
    loadHeader();
    loadFooter();
} 