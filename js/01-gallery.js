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

  if (isGalleryItem !== 'IMG') {
    return;
  }

  onModal(e);
}

function onModal(e) {
  const instance = basicLightbox.create(
    `<img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener('keydown', onEscKeyPress);
      },

      onClose: () => {
        document.removeEventListener('keydown', onEscKeyPress);
      },
    }
  );

  instance.show();

  function onEscKeyPress(e) {
    if (e.code === 'Escape') {
    }
    instance.close();
  }
}
