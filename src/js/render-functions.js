// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";
import simpleLightbox from "simplelightbox";
// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
let lightbox;

export function renderGallery(images) {
    gallery.innerHTML = images.map(image => createMarkup(image)).join("");
    if (lightbox) {
        lightbox.refresh();
    } else {
        lightbox = new simpleLightbox(".gallery a", {});
    }
}

function createMarkup(image) {
    return `
    <div class="gallery-item">
                <a href="${image.largeImageURL}" class="gallery-link">
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                </a>
                <ul>
                <li><p>Likes: ${image.likes}</p></li>
                <li><p>Views: ${image.views}</p></li>
                <li><p>Comments: ${image.comments}</p></li>
                <li><p>Downloads: ${image.downloads}</p></li>
                </ul>
            </div>
            `;
}