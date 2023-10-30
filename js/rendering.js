import { randomSpecification } from './specification.js';

const picturesList = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesListFragment = document.createDocumentFragment();
const randomPictures = randomSpecification;

randomPictures.forEach(({ url, likes, description, comments }) => {
  const picturesElement = picturesTemplate.cloneNode(true);
  picturesElement.querySelector('.picture__img').src = url;
  picturesElement.querySelector('.picture__img').alt = description;
  picturesElement.querySelector('.picture__likes').textContent = likes;
  picturesElement.querySelector('.picture__comments').textContent = comments.length;
  picturesListFragment.appendChild(picturesElement);
});

picturesList.appendChild(picturesListFragment);
