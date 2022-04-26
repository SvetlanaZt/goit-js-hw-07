import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const createList = document.querySelector('.gallery')

const createEl = galleryItems.map(value => {
const imagEl = (`<div class="gallery__item">
  <a class="gallery__link" href="${value.original}">
    <img
      class="gallery__image"
      src="${value.preview}"
      data-source="${value.original}"
      alt="${value.description}"
    />
  </a>
</div>`)
  return imagEl
}).join('')

createList.insertAdjacentHTML('afterbegin', createEl)

console.log(createEl)



createList.addEventListener('click', onContainer)

function onContainer(evt) { 
  evt.preventDefault();
    // if (!evt.target.classList.contains('gallery_img')) 
  if (!evt.target.tagName === 'IMG') {
    return 
  }
  const imgLarge = evt.target.dataset.source;
console.log(imgLarge)
 
  const instance = basicLightbox.create(
    `<img src='${imgLarge}'/>`
      );
instance.show()
}



// function createEl(img) {
//   const markup = galleryItems.map((value) => {
//     return '      
//       <div class = 'gallery__item' >
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>';
//   });
// }
