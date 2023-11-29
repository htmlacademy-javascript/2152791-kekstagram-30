const picturesList = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const body = document.querySelector('body');

//Lodad error
const ERROR_TIME = 5000;
const errorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const errorElement = errorTemplate.cloneNode(true);

const loadError = () => {
  body.appendChild(errorElement);

  setTimeout(() => {
    body.removeChild(errorElement);
  }, ERROR_TIME);
};
loadError();

//Rendering
const renderPhoto = (randomPictures) => {
  errorElement.classList.add('hidden');
  const picturesListFragment = document.createDocumentFragment();

  randomPictures.forEach(({ url, likes, description, comments }) => {
    const picturesElement = picturesTemplate.cloneNode(true);
    picturesElement.querySelector('.picture__img').src = url;
    picturesElement.querySelector('.picture__img').alt = description;
    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments.length;
    picturesListFragment.appendChild(picturesElement);
  });

  picturesList.appendChild(picturesListFragment);
};

export { renderPhoto };
