
  // タグ  

(()  =>{
  
const $doc = document
const $tab = $doc.getElementById("js-tab")
const $nav = $tab.querySelectorAll(`[data-nav]`)
const $cont = $tab.querySelectorAll(`[data-cont]`)
const ACTIVECLASS =`is-active`
const navlength=$nav.length

//初期化
const init =()  =>{
  $cont[0].style.display =`block`;
}
init();

// クリックイベント
const hc =(e) => {
  e.preventDefault();

  // クリックされたNavとそのdataを取得
  const $this = e.target;
  const targetVal = $this.dataset.nav;
  // 対象外のnav.contを全て一旦リセットする
  let index = 0;
while(index < navlength){
  $cont[index].style.display = `none` ;
  $nav[index].classList.remove(ACTIVECLASS)
  index++;
}

  // 対象コンテンツをアクティブ化
$tab.querySelectorAll(`[data-cont="` + targetVal + `"]`)[0].style.display =`block`;
$nav[targetVal].classList.add(ACTIVECLASS);

  console.log($nav[targetVal].classList);
};



// ALLnav要素に適応・発火
let index = 0;
while(index < navlength){
  $nav[index].addEventListener(`click`,(e) => hc(e));
  index++;
}
 })();