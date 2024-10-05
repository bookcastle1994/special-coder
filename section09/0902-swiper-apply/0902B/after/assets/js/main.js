const cardSwiper = new Swiper('.card__swiper', {
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
  centeredSlides: false, //中央寄せにする
  slidesPerView: 'auto',
  spaceBetween: 30,

  //ナビゲーション
  navigation: {
    prevEl: '.swiper-button-prev', //戻るボタンのclass
    nextEl: '.swiper-button-next', //進むボタンのclass
  },
});

// swiperのスライド変更時に実行されるイベントリスナー
cardSwiper.on('slideChange', function () {
  const activeIndex = cardSwiper.realIndex + 1; // 現在のスライドのインデックス+1を取得
  const items = document.querySelectorAll('.card__list-item');

  items.forEach((item) => {
    // すべてのアイテムからアクティブクラスを削除
    item.classList.remove('current');
  });

  // 現在のスライドに対応するアイテムにアクティブクラスを追加
  const currentItem = document.querySelector(`.card__list-item[data-slide="${activeIndex}"]`);
  if (currentItem) {
    currentItem.classList.add('current');
  }
});

// card__list-item をクリックしたときに対応するスライドに切り替え
const items = document.querySelectorAll('.card__list-item');
items.forEach((item) => {
  item.addEventListener('click', function () {
    const slideIndex = parseInt(item.getAttribute('data-slide'), 10) - 1; // data-slideは1始まりなので、0始まりに合わせる
    cardSwiper.slideToLoop(slideIndex, 1000); // 該当スライドに切り替える
  });
});
