/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  return false;
}
function categorizeAcidity(ph) {
  if (ph === 7) {
    return 'ph is neutral';
  } else if (ph < 7) {
    return 'ph is acidic';
  } else if (ph > 7 && ph < 14) {
    return 'ph is base';
  } else {
    return 'invalid ph level';
  }
}
function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm Cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
