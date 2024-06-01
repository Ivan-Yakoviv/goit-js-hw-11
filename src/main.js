import { getPhotos } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';

const searchForm = document.querySelector(".search-form");
const input = document.querySelector("input");

searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) {
        showError();
        return;
    }

    // showLoader();

    getPhotos(query)
        .then(images => {
            if (input.value === "") {
                clearGallery()
                showError();
            } else {
                renderGallery(images);
            }
        })
        .catch(error => {
            showError(message, error);
        })
        .finally(() => {
            hideLoader();
        });
});