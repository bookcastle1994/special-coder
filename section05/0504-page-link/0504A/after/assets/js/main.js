document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = item.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = document.querySelector('.header').offsetHeight; // headerの高さを取得
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});
