import getPhotographers from "../factories/data.js";
import { getDOMImage } from "../factories/mediaDOM.js";
import { getDOMVideo } from "../factories/mediaDOM.js";
import { priceSection } from "../factories/mediaDOM.js";



function displayMedia(arrayMedia, photographe, price) {
    const mediaSection = document.querySelector(".media_section");
    mediaSection.innerHTML = "";
    arrayMedia.forEach((media, index) => {
        let userCardDOM;
        if(media.image){
            userCardDOM = getDOMImage(media, photographe, arrayMedia, index, price);
        }
        else{
            userCardDOM = getDOMVideo(media, photographe, arrayMedia, index, price);
        }
        mediaSection.appendChild(userCardDOM);
    })
};
function displayDescription(media) {
    const logo = document.querySelector(".logo");
    logo.setAttribute("tabindex", "1");
    logo.addEventListener("keydown", (e) => {
        if (e.key == "Enter") {
          location.href = `index.html`;
        }
      });
    const description = document.querySelector(".description");
    const nameModal = document.querySelector(".namePhotographe");
    const photo = document.querySelector(".photo");
    const article = document.createElement('article');
    const nameProfil = document.createElement( 'h2' );
    const localisationProfil = document.createElement( 'h3' );
    const tagProfil = document.createElement( 'p');
    const img = document.createElement("img");
    img.setAttribute("alt", media.title);
    img.setAttribute("src", "./assets/photographers/Profil/"+media.portrait);
    nameProfil.textContent = media.name;
    nameModal.textContent = media.name
    localisationProfil.textContent = media.city+ ', '+media.country;
    tagProfil.textContent = media.tagline;
    photo.appendChild(img);
    article.appendChild(nameProfil);
    article.appendChild(localisationProfil);
    article.appendChild(tagProfil);
    description.appendChild(article);
}

function filterMedia(value, medias){
    switch(value){
        case "Popularity":
            medias.sort((a, b) => {
                return b.likes - a.likes; 
            })
            break;
        case "Date":
            medias.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            })
            break;
        case "Title":
            medias.sort((a, b) => {
                return a.title.localeCompare(b.title);
            })
            break;
        default:
            break;
    }
    return medias;
}

async function init() {
    // Récupère les datas des photographes
    const searchParams = new URLSearchParams(document.location.search);
    const id = parseInt(searchParams.get('id'));
    const photographe = await getPhotographers().then(data => data.photographers.filter(photographe => { 
        return photographe.id === id
    })[0]);
    let arrayMedia = await getPhotographers().then(data => data.media.filter(media => { 
        return media.photographerId === id
    }));
    const lightbox = document.querySelector(".lightbox_select");
    arrayMedia = filterMedia("Popularity", arrayMedia);
    displayMedia(arrayMedia, photographe.name, photographe.price);
    lightbox.addEventListener("change", (e) => { 
        const value = e.target.value;
        arrayMedia = filterMedia(value, arrayMedia);
        displayMedia(arrayMedia, photographe.name, photographe.price);
    });
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => {location.href= "index.html"});
    displayDescription(photographe);
    priceSection(photographe.price, arrayMedia);
            
};
init();