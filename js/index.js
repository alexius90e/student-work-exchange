const headerEl = document.querySelector('.header');

if (headerEl) {
  headerEl.addEventListener('click', (event) => {
    const isBurgerButton = event.target.classList.contains('header__burger-button');
    const isCloseButton = event.target.classList.contains('header__close-button');
    const headerNavEl = event.currentTarget.querySelector('.header__nav');

    if (headerEl) {
      if (isBurgerButton) {
        headerNavEl.classList.add('active');
      }

      if (isCloseButton) {
        headerNavEl.classList.remove('active');
      }
    }
  });
}

const pricesMainEl = document.querySelector('.prices__main');

if (pricesMainEl) {
  pricesMainEl.addEventListener('click', (event) => {
    const isMoreButton = event.target.classList.contains('prices__main-more-button');

    if (isMoreButton) {
      event.currentTarget.classList.add('active');

      const pricesMainHiddenEl = document.querySelector('.prices__main-hidden');

      if (pricesMainHiddenEl) {
        pricesMainHiddenEl.style.maxHeight = pricesMainHiddenEl.scrollHeight + 'px';
      }
    }
  });
}
