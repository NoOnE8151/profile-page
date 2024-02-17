//defining username element
const username = document.querySelector('#username');

//user name toggle
//usernames array
const usernames = ['no_one8151', 'Pro OnE', 'No OnE', 'Lomash', 'Gaming Alert', 'codeConquests'];
//random username function
let previousUsername = '';
const nameToggle = () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * usernames.length);
  } while (usernames[randomIndex] === previousUsername);

  previousUsername = usernames[randomIndex];
  return previousUsername;
};

//add event listener to name
username.addEventListener('click', () => {
  username.innerHTML = nameToggle(); 
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
