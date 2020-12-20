import Countdown from './modules/countdown.js';

const daysToChristmas = new Countdown('24 December 2020 23:59:59 GMT-0300');

setInterval(() => {
  console.log(daysToChristmas.totalTimeLeft);
  document.querySelector('[data-day]').innerText = daysToChristmas.totalTimeLeft.days;
  document.querySelector('[data-hours]').innerText = daysToChristmas.totalTimeLeft.hours;
  document.querySelector('[data-minutes]').innerText = daysToChristmas.totalTimeLeft.minutes;
  document.querySelector('[data-seconds]').innerText = daysToChristmas.totalTimeLeft.seconds;
}, 1000)