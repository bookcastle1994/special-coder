document.addEventListener('DOMContentLoaded', function () {
  let toTopButton = document.querySelector('.to-top');

  // スクロールイベントを監視してTo Topボタンを制御
  window.addEventListener('scroll', function () {
    // 現在のスクロール位置を取得
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // スクロール位置が一定値よりも大きい場合にTo Topボタンを表示、それ以外は非表示にする
    if (scrollPosition > 300) {
      toTopButton.classList.add('js-show');
    } else {
      toTopButton.classList.remove('js-show');
    }
  });

  // To Topボタンがクリックされたときにページの先頭にスクロールする
  toTopButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
});
