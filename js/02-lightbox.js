import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const galleryMarkup = createGalary(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalary(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250
});


console.log(galleryItems);
