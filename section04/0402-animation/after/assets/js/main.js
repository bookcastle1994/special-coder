//フェードイン
gsap.registerPlugin(ScrollTrigger);

const fadeInItems = document.querySelectorAll('.animated__fadeIn');
fadeInItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//画像拡大 -> 縮小
const scaleImgItems = document.querySelectorAll('.animated__scaleImg');
scaleImgItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//片側から出現
const clipViewItems = document.querySelectorAll('.animated__clipView');
clipViewItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//下から出現
const underTextItems = document.querySelectorAll('.animated__underText');
underTextItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//1文字ずつ表示
document.addEventListener('DOMContentLoaded', function () {
  const slideUpText = document.querySelectorAll('.animated__slideUp');
  new SplitType(slideUpText);
  slideUpText.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 70%', // 要素が上部から70%の位置で発火
      onEnter: () => {
        const chars = item.querySelectorAll('.char');
        gsap.to(chars, {
          y: 0,
          stagger: 0.04, //次のアニメーションまでの時間
        });
      },
    });
  });
});

//色塗りの状態から出現
const colorBoxItems = document.querySelectorAll('.animated__colorBox');
colorBoxItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});
