const animation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Универсальная функция для бесконечных анимаций
  const createInfiniteAnimation = (selector, rotation) => {
    gsap.to(selector, {
      rotation,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });
  };

  // Запуск бесконечных анимаций
  createInfiniteAnimation('.header__product-img', 15);
  createInfiniteAnimation('.header__product-img--second', -15);
  createInfiniteAnimation('.section__cards-img', 15);
  createInfiniteAnimation('.section__cards-img--second', -15);
  createInfiniteAnimation('.advertising__item-img > img', 0); // Увеличение масштаба

  // Универсальная функция для анимаций появления
  const animateAppearance = (selector, fromProps, toProps) => {
    gsap.fromTo(selector, fromProps, toProps);
  };

  // Анимации появления элементов
  animateAppearance('.header__body-info h1', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
  animateAppearance('.header__body-info p', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
  animateAppearance('.header__body-btns', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 });
  animateAppearance('.header__body-images', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 });

  // Универсальная функция для анимации с IntersectionObserver
  const setupObserver = (items, fromProps, toProps) => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          gsap.fromTo(entry.target, fromProps, {
            ...toProps,
            delay: index * 0.15,
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
    });

    items.forEach((item) => observer.observe(item));
  };

  // Применение анимаций через Observer
  const productItems = document.querySelectorAll('.header__product-item');
  setupObserver(productItems, { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1 });

  const imgItems = document.querySelectorAll('.ready__img-box');
  setupObserver(imgItems, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
};

export default animation;