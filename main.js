var imageUrls = [];

var $imageUrlInput = document.querySelector('input');
var $addImageButton = document.querySelector('button');
var $gallery = document.querySelector('main');

$addImageButton.addEventListener('click', e => {
  if ($imageUrlInput.value !== ' ') {
  imageUrls.push($imageUrlInput.value);
  $imageUrlInput.value = ' '
  updatedGallery();
  }
});

function updatedGallery () {
  for (var i = 0; i < imageUrls.length; i++){
    const $imageElement = document.createElement ('img');
    $imageElement.className = 'gallery-image';
    $imageElement.src = imageUrls[i];
    $gallery.appendChild($imageElement);
  }
}

updatedGallery();
