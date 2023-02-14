import getGame from '../index.js';

import getRandomNumber from '../getRandom.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const getCalc = (number1, number2) => (!number2 ? number1 : getCalc(number2, number1 % number2));

const startGame = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = getCalc(number1, number2);
  return [question, answer];
};
export default () => {
  getGame(taskGame, startGame);
};
