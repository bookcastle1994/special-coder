const cardSwiper = new Swiper('.card__swiper.--swiper1', {
  //swiperの名前
  //切り替えのモーション
  speed: 6000, //表示切り替えのスピード
  effect: 'slide', //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  autoplay: {
    delay: 0, //何秒ごとにスライドを動かすか
    stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    disableOnInteraction: false, //ユーザーの操作時に止める
    reverseDirection: true, //自動再生を逆向きにする
  },

  //表示について
  centeredSlides: true, //中央寄せにする
  slidesPerView: 'auto',
  spaceBetween: 30,
});

const cardSwiper2 = new Swiper('.card__swiper.--swiper2', {
  //swiperの名前
  //切り替えのモーション
  speed: 6000, //表示切り替えのスピード
  effect: 'slide', //切り替えのmotion (※1)
  allowTouchMove: true, // スワイプで表示の切り替えを有効に

  //最後→最初に戻るループ再生を有効に
  loop: true,
  //自動スライドについて
  autoplay: {
    delay: 0, //何秒ごとにスライドを動かすか
    stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
    disableOnInteraction: false, //ユーザーの操作時に止める
    reverseDirection: false, //自動再生を逆向きにする
  },

  //表示について
  centeredSlides: true, //中央寄せにする
  slidesPerView: 'auto',
  spaceBetween: 30,
});
