const burgerMenu = () => {
  const burger = document.querySelectorAll('.burger'),
    header = document.querySelectorAll('.header__top-menu'),
    listItem = document.querySelectorAll('.header__top-item'),
    buttons = document.querySelectorAll('.button--close')

  const closeMenu = () => {
    header.forEach((menu) => {
      if (menu.classList.contains('header__top--open')) {
        menu.classList.add('header__top--closing')
        setTimeout(() => {
          menu.classList.remove('header__top--open', 'header__top--closing')
        }, 450)
      }
    })

    burger.forEach((item) => item.classList.remove('burger__active'))
  }

  burger.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.stopPropagation()
      const isActive = item.classList.toggle('burger__active')
      header.forEach((menu) => {
        if (isActive) {
          menu.classList.add('header__top--open')
        } else {
          closeMenu()
        }
      })
    })
  })

  listItem.forEach((item) => {
    item.addEventListener('click', () => {
      closeMenu()
    })
  })

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      closeMenu()
    })
  })

  document.addEventListener('click', () => {
    closeMenu()
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth > 840) {
      closeMenu()
    }
  })

  header.forEach((menu) => {
    menu.addEventListener('click', (e) => {
      e.stopPropagation()
    })
  })
}

export default burgerMenu
