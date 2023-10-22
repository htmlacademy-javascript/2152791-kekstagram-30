let numbersId = [];
let numbersPhoto = [];
const MIN_LIKES = 15;
const MAX_LIKES = 200;

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

export{randomSpecification};
