//Edit photos
const editPhotoButton = document.querySelector('.img-upload__input');
const editPhotoOverlay = document.querySelector('.img-upload__overlay');
const downloadPhoto = document.getElementById('download');
const preloadPhoto = document.getElementById('upload-file');
const body = document.querySelector('.body');
const imageUploadForm = document.querySelector('.img-upload__form');
const reduceButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const closePhotoEditButton = document.querySelector('.img-upload__cancel');
const hashTag = document.querySelector('.text__hashtags');
const hashtagSymbols = /^#[a-zа-яё0-9]{1,19}$/i;
const stepValue = 25;
let defaultValue = 100;

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

//Open edit photos
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
closePhotoEditButton.addEventListener('click', () => {
  editPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  editPhotoButton.value = '';
  imageUploadForm.reset();
  pristine.reset();
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

//Scale photos
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

//Validation

/*
hashTag.onchange = () => {
  hashArray = [];
  hashArray.push(hashTag.value);
  newHashArray = hashArray[0].split(' ');
};

function validateHashtagStart () {
  return newHashArray.length <= 2;
}
*/

function validateHashtagFirst (value) {
  return value.startsWith('#');
}

function validateHashtagSymbols (value) {
  return hashtagSymbols.test(value);
}

function validateHashtagLength (value) {
  return value.length <= 19;
}

pristine.addValidator(
  hashTag,
  validateHashtagFirst,
  'Хештег должен начинаться с #'
);

pristine.addValidator(
  hashTag,
  validateHashtagSymbols,
  'Хештег не должен содержать спецсимволов'
);

pristine.addValidator(
  hashTag,
  validateHashtagLength,
  'Не более 20 символов'
);

imageUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});
