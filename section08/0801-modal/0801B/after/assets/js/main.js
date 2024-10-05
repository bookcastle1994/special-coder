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
    });
  });
  // ダイアログを閉じる
  const close = document.querySelectorAll('.modal__close-btn');
  close.forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = button.closest('dialog');
      dialog.classList.remove('js-show');
      dialog.close();
    });
  });
  // オーバーレイクリックでダイアログを閉じる
  dialogs.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.closest('.modal__inner') === null) {
        const dialog = button.closest('dialog');
        dialog.classList.remove('js-show');
        dialog.close();
      }
    });
  });
});
