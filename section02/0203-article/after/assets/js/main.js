document.addEventListener('DOMContentLoaded', function () {
  // .article__contents内のすべてのh4要素を取得
  const headings = document.querySelectorAll('.article__contents h4');

  headings.forEach(function (heading) {
    // h4の現在の内容を取得
    const content = heading.innerHTML;
    // 新しいspan要素を作成
    const span = document.createElement('span');
    // spanに元の内容を設定
    span.innerHTML = content;
    // h4の内容をspanで置き換え
    heading.innerHTML = '';
    heading.appendChild(span);
  });
});

// ========================================
//  目次
// ========================================

// 目次の生成
const TOC_INSERT_SELECTOR = '#toc'; // [セレクター指定] 目次を挿入する要素 querySelector用
const HEADING_SELECTOR = 'h2, h3'; // [セレクター指定] 収集する見出し要素 querySelectorAll用
const LINK_CLASS_NAME = 'tocLink'; // [クラス名] 目次用aタグに追加するクラス名 .無し
const ID_NAME = 'heading'; // [ID名] 目次に追加するID名のプレフィックス #無し
const tocInsertElement = document.querySelector(TOC_INSERT_SELECTOR);
const headingElements = document.querySelectorAll(HEADING_SELECTOR);
const layer = [];
let id = 0;
const uid = () => `${ID_NAME}${id++}`;
let oldRank = -1;

try {
  const createLink = (el) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    el.id = el.id || uid();
    a.href = `#${el.id}`;
    a.innerText = el.innerText;
    a.className = LINK_CLASS_NAME;
    li.appendChild(a);
    return li;
  };

  const findParentElement = (layer, rank, diff) => {
    do {
      rank += diff;
      if (layer[rank]) return layer[rank];
    } while (0 < rank && rank < 7);
    return false;
  };

  const appendToc = (el, toc) => {
    el.appendChild(toc.cloneNode(true));
  };

  headingElements.forEach((el) => {
    let rank = Number(el.tagName.substring(1));
    let parent = findParentElement(layer, rank, -1);
    if (oldRank > rank) layer.length = rank + 1;
    if (!layer[rank]) {
      layer[rank] = document.createElement('ol');
      layer[rank].className = `list_${rank}`; // 階層ごとにクラスを追加
      if (parent && parent.lastChild) parent.lastChild.appendChild(layer[rank]);
    }

    layer[rank].appendChild(createLink(el));
    oldRank = rank;
  });

  if (layer.length) appendToc(tocInsertElement, findParentElement(layer, 0, 1));
} catch (e) {
  console.error(e);
}

// ====================================
// リンクをクリックしたときの処理
// (スムーススクロール)
// ====================================
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - 50;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth',
    });
  }
}

const links = document.querySelectorAll('#toc a');
links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // リンクのデフォルト動作をキャンセル
    const target = link.hash;
    smoothScroll(target);
  });
});

// ============================================
//  スクロール位置を監視し、表示要素に対応する
//  目次の見出しにクラスを当てる
// ============================================

// Intersection Observer の設定
const observerOptions = {
  root: null,
  rootMargin: '-15% 0px -85% 0px', // 上部15%の位置を設定
  threshold: 0,
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const tocLink = document.querySelector(`#toc a[href="#${id}"]`);
    if (entry.isIntersecting) {
      // すべてのリンクから .js-active を削除
      document.querySelectorAll('#toc li').forEach((li) => li.classList.remove('js-active'));
      // 現在のリンクに .js-active を追加
      tocLink.parentElement.classList.add('js-active');
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
headingElements.forEach((heading) => {
  observer.observe(heading);
});
