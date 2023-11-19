//Edit photos
const editPhotoButton = document.querySelector('.img-upload__input');
const editPhotoOverlay = document.querySelector('.img-upload__overlay');
const downloadPhoto = document.getElementById('download');
const preloadPhoto = document.getElementById('upload-file');
const body = document.querySelector('.body');

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

//Scale photos
const reduceButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const stepValue = 25;
let defaultValue = 100;

reduceButton.addEventListener('click', () => {
  if (defaultValue <= 25) {
    return;
  }
  defaultValue -= stepValue;
  if (defaultValue === 100) {
    downloadPhoto.style.transform = 'scale(1)';
  } if (defaultValue === 75) {
    downloadPhoto.style.transform = 'scale(0.75)';
  } if (defaultValue === 50) {
    downloadPhoto.style.transform = 'scale(0.5)';
  } if (defaultValue === 25) {
    downloadPhoto.style.transform = 'scale(0.25)';
  }
  scaleValue.value = `${defaultValue}%`;
});

increaseButton.addEventListener('click', () => {
  if (defaultValue >= 100) {
    return;
  }
  defaultValue += stepValue;
  if (defaultValue === 100) {
    downloadPhoto.style.transform = 'scale(1)';
  } if (defaultValue === 75) {
    downloadPhoto.style.transform = 'scale(0.75)';
  } if (defaultValue === 50) {
    downloadPhoto.style.transform = 'scale(0.5)';
  } if (defaultValue === 25) {
    downloadPhoto.style.transform = 'scale(0.25)';
  }
  scaleValue.value = `${defaultValue}%`;
});

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
