// Функция для проверки длины строки

const isLength = function (string, quantitySymbols) {
  if (string.length <= quantitySymbols) {
    return true;
  } else {
    return false;
  }
};

isLength('проверяемая строка', 20);

// Функция для проверки, является ли строка палиндромом

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

isPalindrome('шалаш');

// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа
// Без усложнения

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

createNumber('Agent007');
