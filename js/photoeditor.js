//EDIT PHOTOS
const editPhotoButton = document.querySelector('.img-upload__input');
const editPhotoOverlay = document.querySelector('.img-upload__overlay');
const downloadPhoto = document.getElementById('download');
const preloadPhoto = document.getElementById('upload-file');
const body = document.querySelector('body');
const imageUploadForm = document.querySelector('.img-upload__form');
const reduceButton = document.querySelector('.scale__control--smaller');
const increaseButton = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const closePhotoEditButton = document.querySelector('.img-upload__cancel');
const effectStyle = document.querySelector('.img-upload__preview');
const effectPreviews = document.querySelectorAll('.effects__preview');
const hashtagSymbols = /^#[a-zа-яё0-9]{1,19}$/i;
const stepValue = 25;
let defaultValue = 100;

const pristine = new Pristine(imageUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

//Open modal
preloadPhoto.onchange = () => {
  const preloadPhotoFile = preloadPhoto.files[0];

  editPhotoOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  if (preloadPhotoFile) {
    const preloadPhotoUrl = URL.createObjectURL(preloadPhotoFile);
    downloadPhoto.src = preloadPhotoUrl;
    effectPreviews.forEach((preview) => {
      preview.style.backgroundImage = 'url(preloadPhotoUrl)';
    });
  }
};

//Close modal
const closeModal = () => {
  editPhotoOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imageUploadForm.reset();
  pristine.reset();
  editPhotoButton.value = '';
};

closePhotoEditButton.addEventListener('click', () => {
  closeModal();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    closeModal();
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
const hashTag = document.querySelector('.text__hashtags');
const commentArea = document.querySelector('.text__description');

const isValidSymbols = (value) => hashtagSymbols.test(value);
function hashtagValidateSymbols(value) {
  const hashtags = value.toLowerCase().split(' ');

  if (hashtags.every(isValidSymbols) || hashTag.value === '') {
    return true;
  }
}

function hashtagValidateLength(value) {
  const hashtags = value.toLowerCase().split(' ');

  if (hashtags.length <= 5) {
    return true;
  }
}

function hashtagValidateDifference(value) {
  const hashtags = value.toLowerCase().split(' ');
  const countHashtags = {};

  for (const hashtag of hashtags) {
    countHashtags[hashtag] = countHashtags[hashtag] ? countHashtags[hashtag] + 1 : 1;
  }

  const result = Object.keys(countHashtags).filter((hashtag) => countHashtags[hashtag] > 1);
  if (result.length === 0) {
    return true;
  }
}

pristine.addValidator(
  hashTag,
  hashtagValidateSymbols,
  'Введите корректный хештег'
);

pristine.addValidator(
  hashTag,
  hashtagValidateLength,
  'Превышено количество хэш-тегов'
);

pristine.addValidator(
  hashTag,
  hashtagValidateDifference,
  'Хэш-теги повторяются'
);

hashTag.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

function validateCommentLength(value) {
  return value.length <= 140;
}

pristine.addValidator(
  commentArea,
  validateCommentLength,
  'Длина комментария больше 140 символов'
);

commentArea.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

imageUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

//Sliders
const sliderElement = document.querySelector('.effect-level__slider');
const sliderWrapper = document.querySelector('.img-upload__effect-level');
const effectValue = document.querySelector('.effect-level__value');
const originalEffect = document.getElementById('effect-none');
const chromeEffect = document.getElementById('effect-chrome');
const sepiaEffect = document.getElementById('effect-sepia');
const marvinEffect = document.getElementById('effect-marvin');
const phobosEffect = document.getElementById('effect-phobos');
const heatEffect = document.getElementById('effect-heat');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

if (originalEffect.checked) {
  sliderElement.classList.add('hidden');
  sliderWrapper.classList.add('hidden');
}

originalEffect.addEventListener('click', () => {
  sliderElement.classList.add('hidden');
  sliderWrapper.classList.add('hidden');
  effectStyle.style.filter = null;
});

chromeEffect.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  sliderWrapper.classList.remove('hidden');
  effectStyle.style.filter = 'grayscale(1)';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
  sliderElement.noUiSlider.set(1);

  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    const grayIntensity = `grayscale(${effectValue.value})`;
    effectStyle.style.filter = grayIntensity;
  });
});

sepiaEffect.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  sliderWrapper.classList.remove('hidden');
  effectStyle.style.filter = 'sepia(1)';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 1,
    step: 0.1,
  });
  sliderElement.noUiSlider.set(1);

  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    const sepiaIntensity = `sepia(${effectValue.value})`;
    effectStyle.style.filter = sepiaIntensity;
  });
});

marvinEffect.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  sliderWrapper.classList.remove('hidden');
  effectStyle.style.filter = 'invert(100%)';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
  });
  sliderElement.noUiSlider.set(100);

  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    const marvinIntensity = `invert(${effectValue.value}%)`;
    effectStyle.style.filter = marvinIntensity;
  });
});

phobosEffect.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  sliderWrapper.classList.remove('hidden');
  effectStyle.style.filter = 'blur(3px)';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
  sliderElement.noUiSlider.set(3);

  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    const phobosIntensity = `blur(${effectValue.value}px)`;
    effectStyle.style.filter = phobosIntensity;
  });
});

heatEffect.addEventListener('click', () => {
  sliderElement.classList.remove('hidden');
  sliderWrapper.classList.remove('hidden');
  effectStyle.style.filter = 'brightness(3)';

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 3,
    step: 0.1,
  });
  sliderElement.noUiSlider.set(3);

  sliderElement.noUiSlider.on('update', () => {
    effectValue.value = sliderElement.noUiSlider.get();
    const heatIntensity = `brightness(${effectValue.value})`;
    effectStyle.style.filter = heatIntensity;
  });
});
