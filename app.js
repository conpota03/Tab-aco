// Accordionの実装
class Accordion {
  constructor(obj) {
    console.log(obj.tagName);
    const $elm = document.querySelector(obj.hookName);
    const $trigger = $elm.getElementsByTagName(obj.tagName);

    const triggerLen = $trigger.length;
    let index = 0;
    while (index < triggerLen) {
      $trigger[index].addEventListener(`click`, (e) => this.clickhandler(e));
      index++;
    }
  }

  clickhandler(e) {
    e.preventDefault();

    const $target = e.currentTarget;
    const $content = $target.nextElementSibling;

    if ($content.style.display == `block`) {
      $content.style.display = `none`;
    } else {
      $content.style.display = "block";
    }
  }
}

// アコーディオンの初期化
const initAccordion = () => {
  const accordion1 = new Accordion({
    hookName: `#js-acdion`,
    tagName: `p`,
  });

  const accordion2 = new Accordion({
    hookName: `#js-ac`,
    tagName: `p`,
  });
};

// タブの実装
(() => {
  const $doc = document;
  const $tab = $doc.getElementById("js-tab");
  const $nav = $tab.querySelectorAll(`[data-nav]`);
  const $cont = $tab.querySelectorAll(`[data-cont]`);
  const ACTIVECLASS = `is-active`;
  const navlength = $nav.length;

  // 初期化
  const initTab = () => {
    $cont[0].style.display = `block`;
  };
  initTab();

  // クリックイベント
  const handleClick = (e) => {
    e.preventDefault();

    // クリックされたNavとそのdataを取得
    const $this = e.target;
    const targetVal = $this.dataset.nav;
    // 対象外のnav.contを全て一旦リセットする
    let index = 0;
    while (index < navlength) {
      $cont[index].style.display = `none`;
      $nav[index].classList.remove(ACTIVECLASS);
      index++;
    }

    // 対象コンテンツをアクティブ化
    $tab.querySelectorAll(
      `[data-cont="` + targetVal + `"]`
    )[0].style.display = `block`;
    $nav[targetVal].classList.add(ACTIVECLASS);
  };

  // 全てのnav要素にクリックイベントを適用
  const addClickEventToNav = () => {
    let index = 0;
    while (index < navlength) {
      $nav[index].addEventListener(`click`, (e) => handleClick(e));
      index++;
    }
  };
  addClickEventToNav();
})();

// 初期化
const init = () => {
  initAccordion();
};
init();
