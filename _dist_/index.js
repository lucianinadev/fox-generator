
import { registerImage } from './lazy.js'

const min = 1;
const max = 123;

const app = document.querySelector("#app");

const random = () => {
    return Math.floor(Math.random() * (max - min)) + min;
};

const createImageNode = () => {
    const container = document.createElement("div");
    container.className = "p-4";

    const imagen = document.createElement("img");
    imagen.width = "250";
    imagen.alt = `fox-${random(min, max)}`;
    imagen.className = "mx-auto rounded preloader";
    imagen.dataset.src = `https://randomfox.ca/images/${random(min, max)}.jpg`;

    container.appendChild(imagen);
    return container;
};

const btnLoad = document.querySelector("#btn-load");

const addImage = () => {
    const newImage = createImageNode();
    app.append(newImage);
    registerImage(newImage)
    
};
btnLoad.addEventListener("click", addImage);

const btnClean = document.querySelector("#btn-clean");

const limpiar = () => {
    app.innerHTML = ''
};
btnClean.addEventListener("click", limpiar);
