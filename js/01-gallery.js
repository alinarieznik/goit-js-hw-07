import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
console.log(galleryContainer);

const gallaryItemMarkup = createGalleryItemMakup(galleryItems);
console.log(gallaryItemMarkup);

galleryContainer.insertAdjacentHTML('afterbegin', gallaryItemMarkup);

function createGalleryItemMakup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
          <li class="gallery__item">
          <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
          </a>
          </li>`;
    })
    .join('');
}

galleryContainer.addEventListener('click', onGalleryContainerClick);

function onGalleryContainerClick(e) {
  e.preventDefault();

  const isGalleryItem = e.target.nodeName;
  console.log(isGalleryItem);

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`
  );
  instance.show();

  galleryContainer.addEventListener('keydown', onEscKeyPress);
  function onEscKeyPress(e) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = e.code === ESC_KEY_CODE;

    if (isEscKey) {
      instance.close();
    }
  }
}
