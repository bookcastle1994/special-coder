gsap.registerPlugin(ScrollTrigger);

const items = document.querySelectorAll('.trigger-img'); //対象となる要素

items.forEach((item) => {
  ScrollTrigger.create({
    trigger: item, //発火させるタイミングを測る要素
    start: 'top center', //発火させるタイミング1
    //triggerの "top"(上部)が"center"(画面の中央)に入ったら発火
    end: '+=300', //発火させるタイミング2
    markers: true, //マーカーを表示させる
    onEnter: () => {
      //スクロール位置が「start」を超えて前方にスクロールしたときに発火
      gsap.to(item, { x: 800 });
    },
    onLeaveBack: () => {
      //スクロール位置が「start」を超えて後方にスクロールされたときに発火
      gsap.to(item, { x: 0 });
    },
    onLeave: () => {
      //スクロール位置が「end」を超えて前方にスクロールしたときに発火
    },
    onEnterBack: () => {
      //スクロール位置が「end」を超えて後方にスクロールしたときに発火
    },
  });
});
