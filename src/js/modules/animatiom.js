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
}

export default animation
