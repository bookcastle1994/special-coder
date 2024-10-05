gsap.registerPlugin(ScrollTrigger);

const header = document.querySelector('.header'); //対象となる要素
const nextContent = document.querySelectorAll('.service'); //対象となる要素

nextContent.forEach((item) => {
  ScrollTrigger.create({
    trigger: item, //発火させるタイミングを測る要素
    start: 'top top', //発火させるタイミング1
    onEnter: () => {
      //スクロール位置が「start」を超えて前方にスクロールしたときに発火
      header.classList.add('js-active');
    },
    onLeaveBack: () => {
      //スクロール位置が「start」を超えて後方にスクロールされたときに発火
      header.classList.remove('js-active');
    },
  });
});
