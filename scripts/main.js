import Countdown from './modules/countdown.js';

const daysToChristmas = new Countdown('31 December 2020 23:59:59 GMT-0300');

setInterval(() => {
  console.log(daysToChristmas.totalTimeLeft);
}, 1000)