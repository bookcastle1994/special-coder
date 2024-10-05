// ハンバーガーメニュー
document.addEventListener('DOMContentLoaded', () => {
  //定義
  const drawerIcon = document.querySelector('.drawer__icon');
  const drawer = document.querySelector('.drawer');
  const drawerNavItem = document.querySelectorAll('.drawer__body a[href^="#"]');
  // const headerHeight = document.querySelector('header').offsetHeight;
  const breakpoint = 768;
  let isMenuOpen = false;
  let isMenuOpenAtBreakpoint = false;

  //メニューを開くアニメーション
  const openMenu = () => {
    if (!drawer.classList.contains('js-show')) {
      drawer.classList.add('js-show');
      drawerIcon.classList.add('js-show');
    }
  };
  //メニューを閉じるアニメーション
  const closeMenu = () => {
    if (drawer.classList.contains('js-show')) {
      drawer.classList.remove('js-show');
      drawerIcon.classList.remove('js-show');
      isMenuOpen = false;
    }
  };
  //メニューの開閉動作
  const toggleMenu = () => {
    if (!drawer.classList.contains('js-show')) {
      openMenu();
    } else {
      closeMenu();
    }
  };
  //リサイズ処理
  const handleResize = () => {
    const bp = breakpoint;
    const windowWidth = window.innerWidth;
    if (windowWidth > bp && isMenuOpenAtBreakpoint) {
      closeMenu();
    } else if (windowWidth <= bp && drawer.classList.contains('js-show')) {
      isMenuOpenAtBreakpoint = true;
    }
  };
  //メニュー外クリック処理
  const clickOuter = (event) => {
    if (drawer.classList.contains('js-show') && !drawer.contains(event.target) && isMenuOpen) {
      closeMenu();
    } else if (drawer.classList.contains('js-show') && !drawer.contains(event.target)) {
      isMenuOpen = true;
    }
  };
  //該当箇所までスクロール
  const linkScroll = (target) => {
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = targetPosition;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  //アイコン クリック時
  drawerIcon.addEventListener('click', toggleMenu);
  //画面幅リサイズ時
  window.addEventListener('resize', handleResize);
  //メニュー外クリック時
  document.addEventListener('click', clickOuter);
  //ページ内リンクメニュー クリック時
  drawerNavItem.forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      closeMenu();
      const targetItem = document.querySelector(item.getAttribute('href'));
      linkScroll(targetItem);
    });
  });
});
