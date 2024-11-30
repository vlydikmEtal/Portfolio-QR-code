const burgerMenu = () => {
  const burger = document.querySelectorAll('.burger');
  const header = document.querySelectorAll('.header__top-menu');

  const closeMenu = () => {
    header.forEach((menu) => {
      if (menu.classList.contains('header__top--open')) {
        menu.classList.add('header__top--closing');
        setTimeout(() => {
          menu.classList.remove('header__top--open', 'header__top--closing');
        }, 580); 
      }
    });

    burger.forEach((item) => item.classList.remove('burger__active'));
  };

  burger.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = item.classList.toggle('burger__active');
      header.forEach((menu) => {
        if (isActive) {
          menu.classList.add('header__top--open');
        } else {
          closeMenu();
        }
      });
    });
  });

  header.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  document.addEventListener('click', () => {
    closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 840) {
      closeMenu();
    }
  });
};

export default burgerMenu
