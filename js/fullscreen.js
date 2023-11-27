import { createUser } from './data.js';

//Fullscreen
const fullScreen = document.querySelector('.big-picture');
const mainPictures = document.querySelectorAll('a');
const body = document.querySelector('body');
const shownCommentsCounElement = document.querySelector('.social__comment-shown-count');
const bigPictureLikes = document.querySelector('.likes-count');
const socialDescription = document.querySelector('.social__caption');
const bigPictureComments = document.querySelector('.social__comment-total-count');
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
const loaderButton = document.querySelector('.social__comments-loader');
const closeButton = document.querySelector('.big-picture__cancel');
const shownComments = document.querySelector('.social__comment-shown-count');
const numberOfLoadedComments = 5;

//Open function
const openPicture = () => {
  for (const mainPicture of mainPictures) {
    mainPicture.addEventListener('click', (event) => {
      const smallPictureLikes = mainPicture.querySelector('.picture__likes');
      const bigPictureImage = fullScreen.querySelector('img');
      const smallPictureComments = mainPicture.querySelector('.picture__comments');
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
        if (allUserComments.length <= numberOfLoadedComments) {
          comment.classList.remove('hidden');
        } else {
          comment.classList.add('hidden');
          for (let i = 0; i < numberOfLoadedComments; i++) {
            allUserComments[i].classList.remove('hidden');
          }
        }

        let hiddenCounter = 0;
        for (let i = 0; i < allUserComments.length; i++) {
          if (!allUserComments[i].classList.contains('hidden')) {
            hiddenCounter += 1;
          }
        }
        shownComments.textContent = hiddenCounter;
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

//Loader button
loaderButton.addEventListener('click', (event) => {
  const commentsList = Array.from(event.target.previousElementSibling.children);
  const shownCommentsCount = commentsList.filter((element) => !element.classList.contains('hidden')).length;

  if (shownCommentsCount >= commentsList.length) {
    return;
  }

  for (let i = shownCommentsCount; i <= shownCommentsCount + (numberOfLoadedComments - 1); i++) {
    if (i <= commentsList.length) {
      commentsList[i].classList.remove('hidden');
    } else if (commentsList[i] >= shownCommentsCount) {
      return;
    }

    if (i + 1 === shownCommentsCount + numberOfLoadedComments || i + 1 === commentsList.length) {
      shownCommentsCounElement.textContent = i + 1;
    }
  }
});

//Close function
const closePicture = () => {
  closeButton.addEventListener('click', () => {
    fullScreen.classList.add('hidden');
    body.classList.remove('modal-open');
    const deleteComments = document.getElementById('comments');
    deleteComments.innerHTML = '';
    shownComments.textContent = 0;
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      fullScreen.classList.add('hidden');
      body.classList.remove('modal-open');
      const deleteComments = document.getElementById('comments');
      deleteComments.innerHTML = '';
      shownComments.textContent = 0;
    }
  });
};
closePicture();
