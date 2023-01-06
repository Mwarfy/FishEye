import { openLightbox } from "../utils/lightBox.js";

let likesTotal = 0;

export function getDOMImage(media, photographe, arrayMedia, index, price) {
  const { title, image, likes } = media;
  const article = document.createElement("article");
  article.setAttribute("class", "articleDom");
  const link = document.createElement("a");
  const img = document.createElement("img");
  const div = document.createElement("div");
  const divHeart = document.createElement("div");
  const titre = document.createElement("h2");
  const flexBox = document.createElement("span");
  const like = document.createElement("p");
  const icon = document.createElement("i");
  link.setAttribute("href", "#");
  img.setAttribute("alt", title);
  img.setAttribute(
    "src",
    "./assets/photographers/" + photographe + "/" + image
  );
  like.textContent = likes;
  icon.setAttribute("tabindex", "2");
  icon.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      if (icon.classList.contains("fa-regular")) {
        like.textContent = likes + 1;
        likesTotal += 1;
        icon.removeAttribute("");
        icon.setAttribute("class", "fa-solid fa-heart fa-lg iconHeart");
        priceSection(price, arrayMedia);
      } else {
        icon.removeAttribute("");
        icon.setAttribute("class", "fa-regular fa-heart fa-lg iconHeart");
        like.textContent = likes;
        likesTotal -= 1;
        priceSection(price, arrayMedia);
      }
    }
  });
  icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-regular")) {
      like.textContent = likes + 1;
      likesTotal += 1;
      icon.removeAttribute("");
      icon.setAttribute("class", "fa-solid fa-heart fa-lg iconHeart");
      priceSection(price, arrayMedia);
    } else {
      icon.removeAttribute("");
      icon.setAttribute("class", "fa-regular fa-heart fa-lg iconHeart");
      like.textContent = likes;
      likesTotal -= 1;
      priceSection(price, arrayMedia);
    }
  });
  titre.textContent = title;
  icon.setAttribute("class", "fa-regular fa-heart fa-lg iconHeart");
  divHeart.setAttribute("class", "divHeart");
  article.appendChild(link);
  link.appendChild(img);
  article.appendChild(div);
  div.appendChild(titre);
  divHeart.appendChild(icon);
  flexBox.appendChild(like);
  flexBox.appendChild(divHeart);
  div.appendChild(flexBox);
  img.addEventListener("click", () => {
    openLightbox(photographe, arrayMedia, index);
  });
  img.setAttribute("tabindex", "2");
  img.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      openLightbox(photographe, arrayMedia, index);
    }
  });
  return article;
}

export function getDOMVideo(media, photographe, arrayMedia, index, price) {
  const { title, video, likes } = media;
  const article = document.createElement("article");
  article.setAttribute("class", "articleDom");
  const link = document.createElement("a");
  const videos = document.createElement("video");
  const div = document.createElement("div");
  const divHeart = document.createElement("div");
  const titre = document.createElement("h2");
  const flexBox = document.createElement("span");
  const like = document.createElement("p");
  const icon = document.createElement("i");
  const srcVideo = document.createElement("source");
  link.setAttribute("href", "#");
  videos.setAttribute("aria-labels", title);
  videos.setAttribute("controls", "");
  srcVideo.setAttribute(
    "src",
    "./assets/photographers/" + photographe + "/" + video
  );
  titre.textContent = title;
  like.textContent = likes;
  icon.setAttribute("tabindex", "2");
  icon.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      if (icon.classList.contains("fa-regular")) {
        like.textContent = likes + 1;
        likesTotal += 1;
        icon.removeAttribute("");
        icon.setAttribute("class", "fa-solid fa-heart fa-lg iconHeart");
        priceSection(price, arrayMedia);
      } else {
        icon.removeAttribute("");
        icon.setAttribute("class", "fa-regular fa-heart fa-lg iconHeart");
        like.textContent = likes;
        likesTotal -= 1;
        priceSection(price, arrayMedia);
      }
    }
  });
  icon.addEventListener("click", function () {
    if (icon.classList.contains("fa-regular")) {
      like.textContent = likes + 1;
      likesTotal += 1;
      icon.removeAttribute("");
      icon.setAttribute("class", "fa-solid fa-heart fa-lg iconHeart");
      priceSection(price, arrayMedia);
    } else {
      icon.removeAttribute("");
      icon.setAttribute("class", "fa-regular fa-heart fa-lg iconHeart");
      like.textContent = likes;
      likesTotal -= 1;
      priceSection(price, arrayMedia);
    }
  });
  icon.setAttribute("class", "fa-regular fa-heart fa-lg iconHeart");
  divHeart.setAttribute("class", "divHeart");
  videos.appendChild(srcVideo);
  article.appendChild(link);
  link.appendChild(videos);
  article.appendChild(div);
  divHeart.appendChild(icon);
  div.appendChild(titre);
  flexBox.appendChild(like);
  flexBox.appendChild(divHeart);
  div.appendChild(flexBox);
  videos.addEventListener("click", () => {
    openLightbox(photographe, arrayMedia, index);
  });
  return article;
}

export function priceSection(price, arrayMedia) {
  const priceSection = document.querySelector(".price_section");
  priceSection.innerHTML = "";
  const div = document.createElement("div");
  const span = document.createElement("span");
  const icon = document.createElement("i");
  const priceProfil = document.createElement("span");
  let totalLikes = 0;
  arrayMedia.map(({ likes }) => (totalLikes += likes));
  totalLikes += likesTotal;
  span.textContent = totalLikes;
  priceProfil.textContent = price + "€/jour";
  icon.setAttribute("class", "fa-solid fa-heart fa-lg iconHeart");
  div.appendChild(span);
  div.appendChild(icon);
  priceSection.appendChild(div);
  priceSection.appendChild(priceProfil);
}
