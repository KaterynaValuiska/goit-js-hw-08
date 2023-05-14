// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";  
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
const list = document.querySelector(".gallery");


const imgUp = galleryItems
  .map((element) => `<li class="gallery__item">
   <a class="gallery__link" href=${element.original}>
      <img class="gallery__image" src=${element.preview} alt=${element.description} />
   </a>
</li>`)
   .join("");
      
   
  
list.insertAdjacentHTML("afterbegin", imgUp);

list.style.listStyleType = "none";

const images = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
   captionDelay: 250,
    disableScroll: false,
});