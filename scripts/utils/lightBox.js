export function openLightbox(photographe, media, i){
    const lightbox = document.getElementById("lightbox_modal");
    const container = document.querySelector(".lightbox")
    const main = document.getElementById("main");
    const header = document.getElementById("header");
    main.style.display="none";
    header.style.display="none";
    lightbox.style.display="flex";
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
    videos.setAttribute("aria-labels", media[i].title);
    videos.setAttribute("controls", "");
    divImage.setAttribute("class", "div_image");
    if(media[i].image){
        img.setAttribute("src", "./assets/photographers/"+photographe+"/"+media[i].image);
        divImage.appendChild(img);
    }
    else{
        srcVideo.setAttribute("src", "./assets/photographers/"+photographe+"/"+media[i].video);
        videos.appendChild(srcVideo);
        divImage.appendChild(videos);
    }
    div2.setAttribute("class", "right_lightbox");
    div.setAttribute("class", "container")
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
    iconLeft.addEventListener("click", ()=>{
        if(i == 0 || i == -1){
            i = media.length;
        }
        i = i - 1;
        if(media[i].image){
            span.textContent = media[i].title;
            img.setAttribute("src", "./assets/photographers/"+photographe+"/"+media[i].image);
            divImage.innerHTML="";
            divImage.appendChild(img);
        } else{
            srcVideo.setAttribute("src", "./assets/photographers/"+photographe+"/"+media[i].video);
            divImage.innerHTML=""
            videos.appendChild(srcVideo);
            divImage.appendChild(videos);
            span.textContent = media[i].title;
        }

    })
    iconRight.addEventListener("click", ()=>{
        if(i === media.length - 1){
            i = -1;
        }
        i = i + 1;
        if(media[i].image){
            span.textContent = media[i].title;
            img.setAttribute("src", "./assets/photographers/"+photographe+"/"+media[i].image);
            divImage.innerHTML="";
            divImage.appendChild(img);
        } else{
            srcVideo.setAttribute("src", "./assets/photographers/"+photographe+"/"+media[i].video);
            divImage.innerHTML=""
            videos.appendChild(srcVideo);
            divImage.appendChild(videos);
            span.textContent = media[i].title;
        }
    })
    iconClose.addEventListener("click", ()=>{
        container.innerHTML= " ";
        main.style.display="block";
        header.style.display="block";
        lightbox.style.display="none";
    })
}