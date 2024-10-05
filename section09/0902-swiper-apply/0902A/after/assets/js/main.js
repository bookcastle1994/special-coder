const cardSwiper = (selector, pagination, buttonPrev, buttonNext) => {
  return new Swiper(selector, {
    //swiperの名前
    //切り替えのモーション
    speed: 1000, //表示切り替えのスピード
    effect: 'slide', //切り替えのmotion (※1)
    allowTouchMove: true, // スワイプで表示の切り替えを有効に

    //最後→最初に戻るループ再生を有効に
    loop: true,
    //自動スライドについて
    autoplay: {
      delay: 3000, //何秒ごとにスライドを動かすか
      stopOnLastSlide: false, //最後のスライドで自動再生を終了させるか
      disableOnInteraction: true, //ユーザーの操作時に止める
      reverseDirection: false, //自動再生を逆向きにする
    },

    //表示について
    centeredSlides: true, //中央寄せにする
    slidesPerView: 'auto',
    spaceBetween: 30,

    //ページネーション
    pagination: {
      el: pagination, //paginationのclass
      clickable: true, //クリックでの切り替えを有効に
      type: 'bullets', //paginationのタイプ (※2)
    },
    //ナビゲーション
    navigation: {
      prevEl: buttonPrev, //戻るボタンのclass
      nextEl: buttonNext, //進むボタンのclass
    },
  });
};

//swiperを生成
const cardSwiper1 = cardSwiper('.card__swiper.--swiper1', '.swiper-pagination.--swiper1', '.swiper-button-prev.--swiper1', '.swiper-button-next.--swiper1');
const cardSwiper2 = cardSwiper('.card__swiper.--swiper2', '.swiper-pagination.--swiper2', '.swiper-button-prev.--swiper2', '.swiper-button-next.--swiper2');
