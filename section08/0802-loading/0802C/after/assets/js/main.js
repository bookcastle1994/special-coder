let bar = new ProgressBar.Line(loading_container, {
  //id名を指定
  strokeWidth: 8,
  easing: 'easeInOut',
  duration: 1800,
  color: '#02239B',
  trailColor: '#fff',
  trailWidth: 8,
  svgStyle: { width: '100%', height: '100%' },
  text: {
    style: {
      position: 'absolute',
      right: '0',
      top: 'calc(100% + 10px)',
      padding: '0',
      margin: '0',
      'font-size': '20px',
      'font-weight': '500',
      'line-height': '1.5',
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
  const loadingEndTime = 0; //読み込み完了した後の発火までの時間

  setTimeout(() => {
    loadingScreen.classList.add('js-loading-end');
    //実行完了したら完全にloading画面を非表示に
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 1500);
  }, loadingEndTime);
}
