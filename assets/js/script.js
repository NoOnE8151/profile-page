//defining username element
const username = document.querySelector('#username');

//user name toggle
//usernames array
const usernames = ['no_one8151', 'Pro OnE', 'No OnE'];
//random username funct
const nameToggle = () => {
  const random = Math.floor(Math.random() * usernames.length);
  username.innerText = usernames[random];
}
//add event listener to name
username.addEventListener('click', () => {
  nameToggle();
});

//discord copy button
const discordBtn = document.querySelector('.discordCont');
const copyDiscordUsername = () => {
  const username = document.querySelector('#discordUsername');
navigator.clipboard.writeText(username.innerText);
  alert('copied username');
}

//add event listener to discord container
discordBtn.addEventListener('click', copyDiscordUsername);


//music player
const preEnter = document.querySelector('#preEnter');

const playMusic = () => {
  const song = '../music/california love.mp3';
  const music = new Audio(song);
  music.play();
  music.loop = true;
  preEnter.classList.add('hide');
}

preEnter.addEventListener('click', playMusic);