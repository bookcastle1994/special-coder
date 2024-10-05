//マウスストーカーのID
const mouseStalker = document.querySelector('#js-mouse');
//アクションを加える対象の要素
const stalkerArea = document.querySelectorAll('.mouse-large');

document.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  mouseStalker.style.transform = 'translate(' + x + 'px,' + y + 'px)';
});
stalkerArea.forEach((link) => {
  link.addEventListener('mouseenter', function () {
    mouseStalker.classList.add('js-hover');
  });
  link.addEventListener('mouseleave', function () {
    mouseStalker.classList.remove('js-hover');
  });
});
