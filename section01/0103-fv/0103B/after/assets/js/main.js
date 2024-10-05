document.addEventListener('DOMContentLoaded', function () {
  const slideUpText = document.querySelectorAll('.animation__text');
  new SplitType(slideUpText);

  slideUpText.forEach((element) => {
    const chars = element.querySelectorAll('.char');
    gsap.to(chars, {
      opacity: 1, //最終の状態
      stagger: 0.1, //次のアニメーションまでの時間
      delay: 1, //遅延
    });
  });

  const slideUpText2 = document.querySelectorAll('.animation__text2');
  new SplitType(slideUpText2);

  slideUpText2.forEach((element) => {
    const chars = element.querySelectorAll('.char');
    gsap.to(chars, {
      y: 0, //最終の状態
      stagger: 0.1, //次のアニメーションまでの時間
      delay: 1, //遅延
    });
  });
});
