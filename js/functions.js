// Функция для проверки длины строки

const checkString = function (lengthString, quantitySymbols) {
  if (lengthString >= quantitySymbols) {
    return true;
  }
  return false;
};

checkString(20, 18);

// Функция для проверки, является ли строка палиндромом

const searchPalindrome = function (palindrome) {
  palindrome = palindrome.toString().toLowerCase().replaceAll(' ', '');
  let newWord = '';
  for (let i = palindrome.length - 1; i >= 0; i--) {
    newWord += palindrome[i];
  }
  if (palindrome === newWord) {
    return true;
  } return false;
};

searchPalindrome('шалаш');

