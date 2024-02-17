//get button
const dropdownBtn = document.querySelector('.dropdownBtn');
const dropdownCont = document.querySelector('.dropdownCont');

//button transition (rotate the button)
const dropdownTransition = () => {
dropdownBtn.classList.toggle('dropdownBtnActive');

dropdownCont.classList.toggle('dropdownContActive');

  if (!dropdownCont.classList.contains('dropdownContActive')) {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, 300);
  } else {
    setTimeout(() => {
    window.scrollTo({
      top: 150,
      behavior: 'smooth'
    })
  }, 300);
  }
  
}

//add event listener to button
dropdownBtn.addEventListener('click', dropdownTransition);