window.addEventListener('scroll', function () {
  var header = document.querySelector('.header--fixed');
  //スクロール位置を取得
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  //少しスクロールしたらクラスをつける
  if (scrollTop > 120) {
    header.classList.add('js-scroll');
  } else {
    header.classList.remove('js-scroll');
  }
});
