function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    // 投稿ボタンがクリックされることをトリガーにして、非同期通信でメモが投稿されるように設定
    const form = document.getElementById("form");
    // getElementByIdメソッドで取得したフォームの要素を変数formに格納
    const formData = new FormData(form);
    // フォームの値を取得、新たに生成したFormDataオブジェクトを変数formDataに格納
    const XHR = new XMLHttpRequest();
    // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成
    XHR.open("POST", "/posts", true);
    // リクエストの内容を指定。非同期で投稿したメモをデータベースに保存したいので、HTTPメソッドにはPOSTを指定
    XHR.responseType = "json";
    // 受け取るレスポンスのデータフォーマットを指定。
    XHR.send(formData);
    // フォームに入力された内容をサーバー側に送信
  });
};

window.addEventListener('load', post);
