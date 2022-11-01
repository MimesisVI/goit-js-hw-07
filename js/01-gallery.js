import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", showFullSize);

const galleryMarkup = createGalary(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalary(gallery) {
  return gallery
    .map(({ preview, description, original }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `;
    })
    .join("");
}

function showFullSize(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.getAttribute(
      "data-source"
    )}" width="800" height="600">
`);

  instance.show();
}

console.log(galleryItems);
