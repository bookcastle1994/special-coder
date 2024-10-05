window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  //スクロール位置を取得
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;
  //少しスクロールしたらクラスをつける
  if (scrollTop > 0) {
    header.classList.add('js-scroll');
  } else {
    header.classList.remove('js-scroll');
  }
});
