document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
  
    menuToggle.addEventListener('click', function (event) {
      event.stopPropagation();
  
      menu.classList.toggle('active');
      menuToggle.classList.toggle('active');
    });
  
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && event.target !== menuToggle) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });
  