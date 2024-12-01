const animation = () => {
  gsap.registerPlugin(ScrollTrigger)

  gsap.to('.header__product-img', {
    rotation: 15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  })
  gsap.to('.header__product-img--second', {
    rotation: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  })

  gsap.to('.section__cards-img', {
    rotation: 15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  })

  gsap.to('.section__cards-img--second', {
    rotation: -15,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'power2.inOut',
  })

  const items = document.querySelectorAll('.header__product-item')

  const animateItem = (item, index) => {
    let initialY = window.innerWidth <= 644 ? 0 : -100;

    gsap.fromTo(
      initialY,
      {
        start: 'bottom bottom',
        markers: true,
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        delay: index * 0.15,
        duration: 1,
      },
    )
  
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: -100,
      },
      {
        opacity: 1,
        y: 0,
        delay: index * 0.15,
        duration: 1,
      },
    )
  }

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          animateItem(entry.target, index)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
    },
  )

  items.forEach((item) => {
    observer.observe(item)
  })

  gsap.fromTo('.header__body-info h1', {
    opacity: 0,
    x: -100,
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
  })

  gsap.fromTo('.header__body-info p', {
    opacity: 0,
    x: -100,
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
  })

  gsap.fromTo('.header__body-btns', {
    opacity: 0,

    x: 100,
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
  })

  gsap.fromTo('.header__body-images', {
    opacity: 0,
    y: -100,
    start: 'bottom bottom',
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
  })
}

export default animation
