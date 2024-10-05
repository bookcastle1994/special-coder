document.addEventListener('DOMContentLoaded', function () {
  const slideUpText = document.querySelectorAll('.fv__title');
  new SplitType(slideUpText);
  slideUpText.forEach((element) => {
    const chars = element.querySelectorAll('.char');
    gsap.to(chars, {
      opacity: 1, //最終の状態
      stagger: 0.06, //次のアニメーションまでの時間
      delay: 0.8, //遅延
    });
  });
});
