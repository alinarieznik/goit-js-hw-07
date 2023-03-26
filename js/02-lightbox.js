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
      <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
      </li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
