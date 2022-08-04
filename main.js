document.addEventListener('DOMContentLoaded', () => {

  // navbar collapse
  document.querySelector('#burgernav').addEventListener('click', event => {
    const trigger = event.currentTarget;
    const navbar = document.querySelector('#topnav');

    trigger.classList.toggle('active');
    navbar.classList.toggle('active');
  });



});