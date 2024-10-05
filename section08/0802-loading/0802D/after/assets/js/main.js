const isFirstVisit = sessionStorage.getItem('firstVisit');
const loadingScreen = document.querySelector('#loading');
const loadingEndTime = 2000; //読み込み完了した後の発火までの時間

if (!isFirstVisit) {
  // 初回訪問時に発火させるもの
  window.addEventListener('load', function () {
    //ロード完了時に処理が実行される
    setTimeout(() => {
      loadingScreen.classList.add('js-loading-end');
      //実行完了したら完全にloading画面を非表示にさせます
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 1000);
    }, loadingEndTime);
  });

  // 初回訪問の場合、セッションストレージにフラグをセット
  sessionStorage.setItem('firstVisit', 'true');
} else {
  //2回目以降の訪問時に発火させるもの
  loadingScreen.style.display = 'none';
}
