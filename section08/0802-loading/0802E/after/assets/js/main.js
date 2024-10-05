const isFirstVisit = sessionStorage.getItem('firstVisit');
const loadingScreen = document.querySelector('#loading');

if (!isFirstVisit) {
  //初回訪問時に発火させるもの
  jQuery(function ($) {
    $('#loading').addClass('js-show');
    $('.loading__btn.--yes').on('click', function () {
      $('#loading').fadeOut();
      // 初回訪問の場合、セッションストレージにフラグをセット
      sessionStorage.setItem('firstVisit', 'true');
      return false;
    });
  });
} else {
  //2回目以降の訪問時に発火させるもの
  loadingScreen.style.display = 'none';
}
