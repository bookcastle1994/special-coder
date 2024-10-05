//ページ内リンク
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

//CTAの出現
gsap.registerPlugin(ScrollTrigger);
const startTrigger = document.querySelector('.fv'); //表示させるトリガー
const endTrigger = document.querySelector('.contact'); //表示を消すトリガー
const cta = document.querySelector('.cta');

ScrollTrigger.create({
  trigger: startTrigger,
  start: 'bottom top', //startTriggerの実行位置
  endTrigger: endTrigger, // 使用するトリガーの最初の要素を指定
  end: 'top 100%', //endTriggerの実行位置
  onEnter: () => {
    cta.classList.add('js-show');
  },
  onLeave: () => {
    cta.classList.remove('js-show');
  },
  onEnterBack: () => {
    cta.classList.add('js-show');
  },
  onLeaveBack: () => {
    cta.classList.remove('js-show');
  },
});
