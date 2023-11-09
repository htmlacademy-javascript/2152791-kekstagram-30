import { createUser } from './data.js';

//Fullscreen
const fullScreen = document.querySelector('.big-picture');
const mainPictures = document.querySelectorAll('a');
const body = document.querySelector('body');

//Open function
const openPicture = () => {
  for (const mainPicture of mainPictures) {
    mainPicture.addEventListener('click', (event) => {
      const smallPictureLikes = mainPicture.querySelector('.picture__likes');
      const bigPictureLikes = document.querySelector('.likes-count');
      const bigPictureImage = fullScreen.querySelector('img');
      const socialDescription = document.querySelector('.social__caption');
      const bigPictureComments = document.querySelector('.social__comment-total-count');
      const smallPictureComments = mainPicture.querySelector('.picture__comments');
      const shownComments = fullScreen.querySelector('.social__comment-shown-count');
      const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
      const userCommentList = fullScreen.querySelector('.social__comments');
      const smallPicture = event.target;

      const commentsArray = Array.from({ length: smallPictureComments.textContent }, createUser);
      commentsArray.forEach(({ avatar, message, name }) => {
        const commentClone = commentTemplate.cloneNode(true);
        commentClone.querySelector('.social__picture').src = avatar;
        commentClone.querySelector('.social__text').textContent = message;
        commentClone.querySelector('.social__picture').alt = name;
        userCommentList.appendChild(commentClone);
      });

      const allUserComments = document.querySelectorAll('.social__comment');
      allUserComments.forEach((comment) => {
        comment.classList.add('hidden');
      });
      const loaderButton = document.querySelector('.social__comments-loader');
      loaderButton.addEventListener('click', () => {
        for (let i = 0; i < allUserComments.length - 5; i++) {
          allUserComments[i].classList.remove('hidden');
        }
        let hiddenClass = 0;
        for (let i = 0; i < allUserComments.length; i++) {
          if (!allUserComments[i].classList.contains('hidden')) {
            hiddenClass += 1;
          }
        }
        shownComments.textContent = hiddenClass;
      });

      bigPictureLikes.textContent = smallPictureLikes.textContent;
      bigPictureImage.src = smallPicture.src;
      socialDescription.textContent = smallPicture.alt;
      bigPictureComments.textContent = smallPictureComments.textContent;
      fullScreen.classList.remove('hidden');
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
    const deleteComments = document.getElementById('comments');
    deleteComments.innerHTML = '';
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      fullScreen.classList.add('hidden');
      body.classList.remove('modal-open');
      const deleteComments = document.getElementById('comments');
      deleteComments.innerHTML = '';
    }
  });
};
closePicture();
