export const initScrollBtn = () => {
  const windowHeight = document.documentElement.clientHeight;
  const scrollBtn = document.querySelector('[data-btn="scroll-top"]');

  if (scrollBtn) {
    window.onscroll = function () {
      if (window.pageYOffset > windowHeight) {
        scrollBtn.classList.add('is-shown');
        scrollBtn.addEventListener('click', () => {
          window.scrollTo(0, 0);
        });
      } else {
        scrollBtn.classList.remove('is-shown');
      }
    };
  }
};
