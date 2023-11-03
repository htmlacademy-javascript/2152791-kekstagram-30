
//Fullscreen
const fullScreen = document.querySelector('.big-picture');

const mainPictures = document.querySelectorAll('a');
const commentsCounter = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');

//Open function
const openPicture = () => {
  for (const mainPicture of mainPictures) {
    mainPicture.addEventListener('click', () => {
      fullScreen.classList.remove('hidden');
      commentsCounter.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      body.classList.add('modal-open');
    });
  }
};
openPicture();

//Close function
const closeButton = document.querySelector('.big-picture__cancel');

const closePicture = () => {
  closeButton.addEventListener('click', () => {
    fullScreen.classList.add('hidden');
    body.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      fullScreen.classList.add('hidden');
      body.classList.remove('modal-open');
    }
  });
};
closePicture();
