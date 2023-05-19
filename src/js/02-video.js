import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const currentTime = localStorage.getItem(LOCALSTORAGE_KEY);

if (currentTime) {
  player.setCurrentTime(currentTime);
}


function onTimeUpdate({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}


player.on('timeupdate', throttle(onTimeUpdate, 1000));