gsap.registerPlugin(ScrollTrigger);

const slideInLeftItems = document.querySelectorAll('.animated__slideIn--left');
slideInLeftItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

const slideInRightItems = document.querySelectorAll('.animated__slideIn--right');
slideInRightItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});
