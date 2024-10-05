//Lenis ===========
let lenis = null;
let breakpoint = 768;

function initializeLenis() {
  if (window.innerWidth >= breakpoint && !lenis) {
    lenis = new Lenis({
      // Lenisの設定
    });
    function raf(time) {
      if (lenis) {
        lenis.raf(time);
      }
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }
}

function destroyLenis() {
  if (lenis) {
    lenis.destroy();
    lenis = null;
  }
}

// ウィンドウのリサイズ時にもLenisのインスタンスを再初期化
window.addEventListener('resize', function () {
  if (window.innerWidth >= breakpoint) {
    initializeLenis();
  } else {
    destroyLenis();
  }
});

// 初期化
initializeLenis();

document.addEventListener('DOMContentLoaded', function () {
  const dialogs = document.querySelectorAll('dialog');
  // ダイアログを開く
  const open = document.querySelectorAll('.modal__open-btn');
  open.forEach((button) => {
    button.addEventListener('click', () => {
      const dialogId = button.getAttribute('data-dialog');
      const dialog = document.getElementById(dialogId);
      dialog.showModal();
      dialog.classList.add('js-show');
      destroyLenis();
    });
  });
  // ダイアログを閉じる
  const close = document.querySelectorAll('.modal__close-btn');
  close.forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      dialog.classList.remove('js-show');
      dialog.close();
      initializeLenis();
    });
  });
  // オーバーレイクリックでダイアログを閉じる
  dialogs.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.closest('.modal__inner') === null) {
        const dialog = button.closest('dialog');
        dialog.classList.remove('js-show');
        dialog.close();
        initializeLenis();
      }
    });
  });
});

//フェードイン
gsap.registerPlugin(ScrollTrigger);

const fadeInItems = document.querySelectorAll('.animated__fadeIn');
fadeInItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//画像拡大 -> 縮小
const scaleImgItems = document.querySelectorAll('.animated__scaleImg');
scaleImgItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//片側から出現
const clipViewItems = document.querySelectorAll('.animated__clipView');
clipViewItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//下から出現
const underTextItems = document.querySelectorAll('.animated__underText');
underTextItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});

//1文字ずつ表示
document.addEventListener('DOMContentLoaded', function () {
  const slideUpText = document.querySelectorAll('.animated__slideUp');
  new SplitType(slideUpText);
  slideUpText.forEach((item) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top 70%', // 要素が上部から70%の位置で発火
      onEnter: () => {
        const chars = item.querySelectorAll('.char');
        gsap.to(chars, {
          y: 0,
          stagger: 0.04, //次のアニメーションまでの時間
        });
      },
    });
  });
});

//色塗りの状態から出現
const colorBoxItems = document.querySelectorAll('.animated__colorBox');
colorBoxItems.forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: 'top 70%', // 要素が上部から70%の位置で発火
    onEnter: () => {
      // 要素内に入ったら、js-showクラスをつける
      item.classList.add('js-show');
    },
  });
});
