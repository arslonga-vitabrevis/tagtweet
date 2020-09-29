if (location.pathname.match("tweets/new")){
  window.addEventListener("load", (e) => {
    const inputElement = document.getElementById("tweets_tag_name");
      inputElement.addEventListener("keyup", (e) => {
        const input = document.getElementById("tweets_tag_name").value;
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `search/?input=${input}`, true);                   //openメソッドでsearchアクションのルーティングとアクション設定をすること
        xhr.responseType = "json";
        xhr.send();
        xhr.onload = () => {
          const tagName = xhr.response.keyword;
          const searchResult = document.getElementById('search-result')
          searchResult.innerHTML = ''
          tagName.forEach(function (tag) {

            const parentsElement = document.createElement('div')           //サーチ結果を表示するためdiv要素を作る
            const childElement = document.createElement('div')

            parentsElement.setAttribute('id', 'parents')                   //作ったdiv要素にid,classを与える
            childElement.setAttribute('id', tag.id )
            childElement.setAttribute('class', 'child')

            parentsElement.appendChild(childElement)                       //作った要素同士を入子構造にする
            childElement.innerHTML = tag.name
            searchResult.appendChild(parentsElement)                       //24行目で作った入れ子の要素もnewページのフォーム下の要素に格納する

            const clickElement = document.getElementById(tag.id)           //候補として表示させたタグがクリックされると選択されたタグが値として入力フォームにセットされる
            clickElement.addEventListener("click", () => {
              document.getElementById("tweets_tag_name").value = clickElement.textContent;
              clickElement.remove();                                       //選択されたタグは表示の一覧から削除
            })
          })
        }
      });
  })
};