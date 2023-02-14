import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (number) => {
    if (number < 2) {
      return false;
    }
  
    let divider = 2;
  
    while (divider <= number / 2) {
      if (number % divider === 0) {
        return false;
      }
  
      divider += 1;
    }
    return true;
  };
  const startGame = () => {
    const number = getRandomNumber(1, 100);
    const answer = isPrime(number) ? 'yes' : 'no';
    return [number, answer]
  };

  export default () => {
    getGame(taskGame, startGame);
  };