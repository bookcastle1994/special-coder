gsap.registerPlugin(ScrollTrigger);

const timeDelay = 250; // 時間差のタイミング(ミリ秒)
const maxItemNumber = 6; // 時間差で発火させる最大要素数

// fade in
for (let i = 0; i < maxItemNumber; i++) {
  const fadeInItems = document.querySelectorAll(`.animated__fadeIn.--delay${i}`);
  fadeInFunction(fadeInItems, i * timeDelay);
}

function fadeInFunction(fadeInItems, timeout) {
  fadeInItems.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 70%', // 要素が上部から90%の位置で発火
      markers: true,
      onEnter: () => {
        // 要素内に入ったら、js-showクラスをつける
        setTimeout(() => {
          item.classList.add('js-show');
        }, timeout);
      },
    });
  });
}
