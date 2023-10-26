import { generateRandomNumber } from './util.js';

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадр В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAMES = [
  'Tim',
  'Maya',
  'Sam',
  'Van',
  'Ilya',
];

//Create comment
const createUser = () => {
  const getRandomId = generateRandomNumber(1, 1000000);
  const getRandomAvatar = 'img/avatar-' + generateRandomNumber(1, 6) + '.svg';
  const getRandomMessage = generateRandomNumber(0, MESSAGES.length - 1);
  const getRandomName = generateRandomNumber(0, NAMES.length - 1);

  return {
    id: getRandomId,
    avatar: getRandomAvatar,
    message: MESSAGES[getRandomMessage],
    name: NAMES[getRandomName],
  };
};

export { createUser };
