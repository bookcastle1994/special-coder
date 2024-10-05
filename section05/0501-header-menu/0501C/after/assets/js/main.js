document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
      // 上方向へスクロール
      //headerを見せる
      header.classList.remove('js-slide-up');
    } else {
      // 下方向へスクロール
      //headerを隠す
      header.classList.add('js-slide-up');
    }
    lastScrollY = window.scrollY;
  });
});
