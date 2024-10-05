window.addEventListener('load', function () {
  //ロード完了時に処理が実行される
  const loadingScreen = document.querySelector('#loading');
  const loadingEndTime = 2000; //読み込み完了した後の発火までの時間

  setTimeout(() => {
    loadingScreen.classList.add('js-loading-end');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000);
  }, loadingEndTime);
});
