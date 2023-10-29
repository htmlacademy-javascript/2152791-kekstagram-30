import { generateRandomNumber } from './util.js';
import { createUser } from './data.js';

let numbersId = [];
let numbersPhoto = [];
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const DESCRIPTION = [
  'Я и батя',
  'На отдыхе',
  'Банька парилка',
  'Волк слабее льва и тигра, но в цирке не выступает',
  'Это я на даче, картошку копаю',
];

//Generate ID
for (let i = 1; i <= 25; i++) {
  numbersId.push(i);
  numbersId = numbersId.sort(() => Math.random() - 0.5);
  numbersPhoto.push(i);
  numbersPhoto = numbersPhoto.sort(() => Math.random() - 0.5);
}

//Create specification
const createRandomSpecification = () => {
  const getRandomLikes = generateRandomNumber(MIN_LIKES, MAX_LIKES);
  const getRandomDescription = generateRandomNumber(0, DESCRIPTION.length - 1);
  const someComments = Array.from({ length: generateRandomNumber(0, 30) }, createUser);

  return {
    id: numbersId.pop(),
    url: 'photos/' + numbersPhoto.pop() + '.jpg',
    description: DESCRIPTION[getRandomDescription],
    likes: getRandomLikes,
    comments: someComments,
  };
};
const randomSpecification = Array.from({ length: 25 }, createRandomSpecification);

export { randomSpecification };
