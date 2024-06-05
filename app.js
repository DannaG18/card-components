
import "./src/App/components/cards/cardComponents.js";


const divCards = document.querySelector('#container-cards');
const personajes = [
    {
        photo: "img/Ahri.png",
        nombre: 'Ahri',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Ashe.png",
        nombre: 'Ashe',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Teemo.webp",
        nombre: 'Teemo',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Garen.png",
        nombre: 'Garen',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Akali.png",
        nombre: 'Akali',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Vex.webp",
        nombre: 'Vex',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Zed.png",
        nombre: 'Zed',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Sett.webp",
        nombre: 'Sett',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Graves.png",
        nombre: 'Graves',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Sylas.webp",
        nombre: 'Sylas',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Doc World.png",
        nombre: 'Doc World',
        apellido: 'League of Legends'
    },
    {
        photo: "img/Maestro Yi.webp",
        nombre: 'Maestro Yi',
        apellido: 'League of Legends'
    }

]


document.addEventListener('DOMContentLoaded', (e) => {
    personajes.forEach((item) => {
        let img = `<img class = "card-img-top" src = "${item.photo}" id = "card-photo" alt = "personaje">`
        divCards.insertAdjacentHTML('beforeend',
        `<card-component class="g-3 col-3">
        <span slot = "imagen">${img}</span>
        <span slot = "numero">${item.nombre}</span>
        <span slot = "contenido">${item.apellido}</span>
        </card-component>`);
    })
})