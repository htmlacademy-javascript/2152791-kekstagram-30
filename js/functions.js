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

//Check length
const isLength = function (string, quantitySymbols) {
  if (string.length <= quantitySymbols) {
    return true;
  } else {
    return false;
  }
};

//Palindrome
const isPalindrome = function (palindrome) {
  palindrome = palindrome.toString().toLowerCase().replaceAll(' ', '');
  let newWord = '';
  for (let i = palindrome.length - 1; i >= 0; i--) {
    newWord += palindrome[i];
  }
  if (palindrome === newWord) {
    return true;
  } return false;
};

//Create number
const createNumber = function (string) {

  let newString = '';

  for (let i = 0; i <= string.length - 1; i++) {
    if (!Number.isNaN(parseInt(string[i], 10))) {
      newString += string[i];
      newString = newString.replace(/^0+/, '');
    }
  }
  return (newString === '') ? NaN : Number(newString);
};

//Time
let isMeet = (start, end, meet, duration) => {

  const starting = start.split(':');
  const startHours = parseInt(starting[0], 10) * 60;
  const startMinutes = startHours + parseInt(starting[1], 10);

  const ending = end.split(':');
  const endHours = parseInt(ending[0], 10) * 60;
  const endMinutes = endHours + parseInt(ending[1], 10);

  const meeting = meet.split(':');
  const meetHours = parseInt(meeting[0], 10) * 60;
  const meetMinutes = meetHours + parseInt(meeting[1], 10);

  if (meetMinutes >= startMinutes && meetMinutes <= endMinutes && (meetMinutes + duration) <= endMinutes) {
    return true;
  } return false;

};

isMeet('08:00', '17:30', '14:00', 90);

export { createUser };
export { isLength };
export { isPalindrome };
export { createNumber };
