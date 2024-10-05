gsap.registerPlugin(ScrollTrigger);

const fadeInItems = document.querySelectorAll('.animated__fadeIn');

fadeInItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    markers: true,
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});
