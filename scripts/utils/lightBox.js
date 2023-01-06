const lightbox = document.getElementById("lightbox_modal");
const container = document.querySelector(".lightbox");
const main = document.getElementById("main");
const body = document.getElementById("body");
const header = document.getElementById("header");
const iconLeft = document.createElement("i");
const iconRight = document.createElement("i");
const iconClose = document.createElement("i");
const divImage = document.createElement("div");
const div = document.createElement("div");
const div2 = document.createElement("div");
const span = document.createElement("span");
const videos = document.createElement("video");
const img = document.createElement("img");
const srcVideo = document.createElement("source");

let y = 0;
export function openLightbox(photographe, media, i) {
  main.style.display = "none";
  header.style.display = "none";
  lightbox.style.display = "flex";
  videos.setAttribute("aria-labels", media[i].title);
  videos.setAttribute("controls", "");
  divImage.setAttribute("class", "div_image");
  if (media[i].image) {
    img.setAttribute(
      "src",
      "./assets/photographers/" + photographe + "/" + media[i].image
    );
    img.setAttribute("alt", "photo");
    divImage.appendChild(img);
  } else {
    srcVideo.setAttribute(
      "src",
      "./assets/photographers/" + photographe + "/" + media[i].video
    );
    srcVideo.setAttribute("alt", "video");
    videos.appendChild(srcVideo);
    divImage.appendChild(videos);
  }
  div2.setAttribute("class", "right_lightbox");
  div.setAttribute("class", "container");
  iconLeft.setAttribute("class", "fa-solid fa-angle-left fa-2xl");
  iconRight.setAttribute("class", "fa-solid fa-angle-right fa-2xl");
  iconClose.setAttribute("class", "fa-solid fa-xmark fa-2xl iconClose");
  span.textContent = media[i].title;
  container.appendChild(iconLeft);
  div.appendChild(divImage);
  div.appendChild(span);
  container.appendChild(div);
  div2.appendChild(iconClose);
  div2.appendChild(iconRight);
  container.appendChild(div2);
  iconLeft.addEventListener("click", () => {
    i = eventIconLeft(photographe, media, i);
  });
  iconRight.addEventListener("click", () => {
    i = eventIconRight(photographe, media, i);
  });
  iconClose.addEventListener("click", () => {
    eventIconClose();
  });
  body.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      eventIconClose();
    }
    if (e.key == "ArrowLeft") {
      i = eventIconLeft(photographe, media, i);
    }
    if (e.key == "ArrowRight") {
      i = eventIconRight(photographe, media, i);
    }
  });
  iconLeft.setAttribute("tabindex", "1");
  iconRight.setAttribute("tabindex", "2");
  iconClose.setAttribute("tabindex", "3");
  iconClose.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      eventIconClose();
    }
  });
  iconLeft.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      i = eventIconLeft(photographe, media, i);
    }
  });
  iconRight.addEventListener("keydown", (e) => {
    if (e.key == "Enter") {
      i = eventIconRight(photographe, media, i);
    }
  });
}

function eventIconRight(photographe, media, i) {
  if (i === media.length - 1) {
    i = -1;
  }
  i = i + 1;
  if (media[i].image) {
    span.textContent = media[i].title;
    img.setAttribute(
      "src",
      "./assets/photographers/" + photographe + "/" + media[i].image
    );
    img.setAttribute("alt", "photo");
    divImage.innerHTML = "";
    divImage.appendChild(img);
  } else {
    srcVideo.setAttribute(
      "src",
      "./assets/photographers/" + photographe + "/" + media[i].video
    );
    srcVideo.setAttribute("alt", "video");
    divImage.innerHTML = "";
    videos.appendChild(srcVideo);
    divImage.appendChild(videos);
    span.textContent = media[i].title;
  }
  return i;
}
function eventIconLeft(photographe, media, i) {
  if (i == 0 || i == -1) {
    i = media.length;
  }
  i = i - 1;
  if (media[i].image) {
    span.textContent = media[i].title;
    img.setAttribute(
      "src",
      "./assets/photographers/" + photographe + "/" + media[i].image
    );
    img.setAttribute("alt", "photo");
    divImage.innerHTML = "";
    divImage.appendChild(img);
  } else {
    srcVideo.setAttribute(
      "src",
      "./assets/photographers/" + photographe + "/" + media[i].video
    );
    srcVideo.setAttribute("alt", "video");
    divImage.innerHTML = "";
    videos.appendChild(srcVideo);
    divImage.appendChild(videos);
    span.textContent = media[i].title;
  }
  return i;
}
function eventIconClose() {
  container.innerHTML = " ";
  main.style.display = "block";
  header.style.display = "block";
  lightbox.style.display = "none";
}
