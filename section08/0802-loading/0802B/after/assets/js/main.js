let bar = new ProgressBar.Line(loading_counter, {
  //id名を指定
  strokeWidth: 0, //進捗ゲージの太さ
  duration: 1000, //時間指定(1000＝1秒)
  trailWidth: 0, //線の太さ
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '0',
      transform: 'translate(-50%,-50%)',
      'font-size': '100px',
      color: '#fff',
    },
    autoStyleContainer: false, //自動付与のスタイルを切る
  },
  step: function (state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  },
});

//アニメーションスタート
bar.animate(1.0, function () {
  //バーを描画する割合を指定します 1.0 なら100%まで描画します
  loadingAnimationFinish();
});

function loadingAnimationFinish() {
  //ロード完了後の処理
  const loadingScreen = document.querySelector('#loading');
  const loadingEndTime = 500; //読み込み完了した後の発火までの時間

  setTimeout(() => {
    loadingScreen.classList.add('js-loading-end');
    //実行完了したら完全にloading画面を非表示に
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1000);
  }, loadingEndTime);
}
