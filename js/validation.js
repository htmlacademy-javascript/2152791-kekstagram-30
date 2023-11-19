//Edit photos
const editPhotoButton = document.querySelector('.img-upload__input');
const editPhotoOverlay = document.querySelector('.img-upload__overlay');
const downloadPhoto = document.getElementById('download');
const preloadPhoto = document.getElementById('upload-file');
const body = document.querySelector('body');

editPhotoButton.addEventListener('click', () => {
  editPhotoOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
});

preloadPhoto.onchange = () => {
  const preloadPhotoFile = preloadPhoto.files[0];
  if (preloadPhotoFile) {
    downloadPhoto.src = URL.createObjectURL(preloadPhotoFile);
  }
};

//Close edit photos
const closePhotoEditButton = document.querySelector('.img-upload__cancel');

closePhotoEditButton.addEventListener('click', () => {
  editPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  downloadPhoto.src = '';
  editPhotoButton.reset();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    editPhotoOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    downloadPhoto.src = '';
    editPhotoButton.reset();
  }
});
