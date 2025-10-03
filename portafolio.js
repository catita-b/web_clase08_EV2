// Gallery
const trabajos = [
    {
        titulo: "Mundo Tattoo",
        categoria: "Álbum Colexionable",
        imagen: "img/p-tattoo.png",
        alt: "Proyecto 1"
    },
    {
        titulo: "Kolumna Oczu",
        categoria: "Mobiliario-Luminaria",
        imagen: "img/p-oczu.png",
        alt: "Proyecto 2"
    },
    {
        titulo: "Edición Especial <br> Pisco Doña Josefa",
        categoria: "Experiencia de Maridaje",
        imagen: "img/p-pisco.png",
        alt: "Proyecto 3"
    },
    {
        titulo: "¡Yo soy Chef <br> Nestlé Saludable!",
        categoria: "Diseño de Experiencias",
        imagen: "img/p-chef.png",
        alt: "Proyecto 4"
    },
    {
        titulo: "¡Marcianos en Apuros!",
        categoria: "Juego de Mesa",
        imagen: "img/p-marcianos1.png",
        alt: "Proyecto 5"
    },
    {
        titulo: "Afiche Open Day",
        categoria: "Ilustración",
        imagen: "img/p-open.png",
        alt: "Proyecto 6"
    },
    {
        titulo: "Comalú",
        categoria: "Producto de Mascotas",
        imagen: "img/p-perro.png",
        alt: "Proyecto 7"
    },
    {
        titulo: "Moleta",
        categoria: "Moledor de Cannabis",
        imagen: "img/p-moleta.png",
        alt: "Proyecto 8"
    },
    {
        titulo: "Caja de Marca <br> Viñamar",
        categoria: "Packaging",
        imagen: "img/p-caja.png",
        alt: "Proyecto 9"
    }
];

const galleryGrid = document.querySelector(".gallery-grid");

trabajos.forEach((trabajo) => {
    const item = document.createElement("div");
    item.classList.add("gallery-item");
    
    item.innerHTML = `
        <img src="${trabajo.imagen}" alt="${trabajo.alt}">
        <div class="gallery-overlay">
            <h3>${trabajo.titulo}</h3>
            <p>${trabajo.categoria}</p>
        </div>
    `;
    
    galleryGrid.appendChild(item);
});