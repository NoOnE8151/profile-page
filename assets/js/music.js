//music control buttons
const playBtn = document.querySelector('#musicPlayBtn');
const pauseBtn = document.querySelector('#musicPauseBtn');
const nextBtn = document.querySelector('#musicNextBtn');
const prevBtn = document.querySelector('#musicPrevBtn');

//HTML element where the music name will be displayed
const playing = document.querySelector('#playing');

//capitalizer function
function capitalize(str) {
  str.charAt(0).toUpperCase() + str.slice(1);
}

//click to enter page (this will trigger the music play function when someone enters the page)
const enterBtn = document.querySelector('.preEnter');

//necessary variables
let music;
let musicList;
let musicName;
let musicIdx;

//fetch music list
const fetchMusicList = async () => {
  const res = await fetch('/api/music');
  const data = await res.json();
  return data;
}

//get random music for iniatial page load
const getRandomMusic = async () => {
  musicList = await fetchMusicList();
  musicIdx = Math.floor(Math.random() * musicList.length);
  music = musicList[musicIdx];
  musicName = music.name;
  music = new Audio(music.url);
}
getRandomMusic();

//play music
const playMusic = async () => {
  music.play();
  playBtn.classList.add('musicIconHide')
  pauseBtn.classList.remove('musicIconHide')
  playing.innerText = musicName;
}

//add event listener to enter button
enterBtn.addEventListener('click', () => {
  playMusic();
  enterBtn.classList.add('hide');
});

//other music buttons functions
const pauseMusic = () => {
  music.pause()
pauseBtn.classList.add('musicIconHide');
playBtn.classList.remove('musicIconHide');
}
  pauseBtn.addEventListener('click', pauseMusic);
playBtn.addEventListener('click', playMusic);

//next music function
const nextMusic = () => {
  if (!music.paused) {
    pauseMusic();
  }
  if (musicIdx === musicList.length - 1) {
    musicIdx = 0;
  }else {
    musicIdx++;
  }
  music = new Audio(musicList[musicIdx].url);
  musicName = musicList[musicIdx].name;
  
  playMusic();
}
nextBtn.addEventListener('click', nextMusic);

//previous music function
const prevMusic = () => {
  if (!music.paused) {
    pauseMusic();
  }
 
  if (musicIdx === 0) {
    musicIdx = musicList.length - 1;
  } else {
    musicIdx--;
  }
  music = new Audio(musicList[musicIdx].url);
  musicName = musicList[musicIdx].name; 
  playMusic();
}

prevBtn.addEventListener('click', prevMusic);