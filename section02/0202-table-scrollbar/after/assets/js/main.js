//デフォルト
// window.addEventListener('DOMContentLoaded', function () {
//     new ScrollHint('.js-scrollable');
// });
//カスタマイズ ver
window.addEventListener('DOMContentLoaded', function () {
    new ScrollHint('.js-scrollable', {
        scrollHintIconAppendClass: 'scroll-hint-icon-white', 
        i18n: {
            scrollable: "スクロールできます"
        }
    });
});