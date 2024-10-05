// GSAPの設定
gsap.registerPlugin(ScrollTrigger);

gsap.to('.pc__img', {
  width: '100%', // 画像の最終サイズ
  scrollTrigger: {
    trigger: '.pc', // アニメーションを発火させるトリガー要素
    start: 'top 90%', // トリガーが開始する位置
    end: 'top 10%',
    scrub: true, // スクロールに応じてアニメーションが動く
  },
});
