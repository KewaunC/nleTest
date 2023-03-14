document.querySelectorAll('.imageContainer img').forEach( image => {
  image.onclick = () =>{
    document.querySelector('.popup').style.display = 'block'
    document.querySelector('.popup img').src = image.getAttribute('src')
  }
})

document.querySelector('.popup span').onclick = () =>{
  document.querySelector('.popup').style.display = 'none'

}

const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
	document.body.classList.toggle('dark');
});

const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});