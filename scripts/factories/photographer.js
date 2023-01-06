function photographerFactory(data) {
  const { id, name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/Profil/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const nameProfil = document.createElement("h2");
    const localisationProfil = document.createElement("h3");
    const tagProfil = document.createElement("p");
    const priceProfil = document.createElement("span");
    article.setAttribute("tabindex", "1");
    article.addEventListener("click", () => {
      location.href = `photographer.html?id=${id}`;
    });
    article.addEventListener("keydown", (e) => {
      if (e.key == "Enter") {
        location.href = `photographer.html?id=${id}`;
      }
    });
    img.setAttribute("src", picture);
    img.setAttribute("alt", "photo profil");
    nameProfil.textContent = name;
    localisationProfil.textContent = city + ", " + country;
    tagProfil.textContent = tagline;
    priceProfil.textContent = price + "€/jour";
    article.appendChild(img);
    article.appendChild(nameProfil);
    article.appendChild(localisationProfil);
    article.appendChild(tagProfil);
    article.appendChild(priceProfil);
    return article;
  }
  return { getUserCardDOM };
}
