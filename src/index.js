const onClickAdd = () => {
  //テキストボックス値を取得
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  //liタグを生成
  const li = document.createElement("li");
  li.className = "incomplete_item list_item";

  //pタグを生成
  const p = document.createElement("p");
  p.className = "incomplete_item_name list_item_name";
  p.innerText = inputText;

  //divタグを生成
  const div = document.createElement("div");
  div.className = "incomplete_btn_group";

  //button（完了）タグ生成
  const complete_btn = document.createElement("button");
  complete_btn.className = "button";
  complete_btn.addEventListener("click", () => {
    deleteFromIncompleteList(delete_btn.closest(".incomplete_item"));

    //完了リストに追加する要素
    const addTarget = complete_btn.closest(".incomplete_item");
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerHTML;
    //li以下を初期化
    addTarget.textContent = null;
    addTarget.className = "complete_item list_item";

    //pタグを生成
    const p = document.createElement("p");
    p.className = "complete_item_name list_item_name";
    p.innerText = text;
    console.log(p);

    //divタグを生成
    const div = document.createElement("div");
    div.className = "complete_btn_group";

    //button（戻す）タグを生成
    const return_btn = document.createElement("button");
    return_btn.className = "button";

    //imgタグの生成
    const return_img = document.createElement("img");
    return_img.src = "src/images/return_img.png";

    //button（戻す）タグの子要素にimgタグ
    return_btn.appendChild(return_img);
    console.log(return_btn);

    //divタグの子要素にbuttonタグを追加
    div.appendChild(return_btn);

    //liタグ以下に各要素を追加
    addTarget.appendChild(p);
    addTarget.appendChild(div);

    //完了リストに追加
    document.getElementById("complete_list").appendChild(addTarget);
  });

  //imgタグ（完了）生成
  const complete_img = document.createElement("img");
  complete_img.src = "src/images/done_img.png";
  //button（完了）タグの子要素にimgタグ
  complete_btn.appendChild(complete_img);

  //button（削除）タグ生成
  const delete_btn = document.createElement("button");
  delete_btn.className = "button";
  delete_btn.addEventListener("click", () => {
    //押された削除ボタンの親タグ(li)を未完了リストから削除
    deleteFromIncompleteList(delete_btn.closest(".incomplete_item"));
  });

  //imgタグ（削除）生成
  const delete_img = document.createElement("img");
  delete_img.src = "src/images/delete_img.png";
  //button（削除）」タグの子要素にimgタグ
  delete_btn.appendChild(delete_img);

  //divタグの子要素にbuttonタグ
  div.appendChild(complete_btn);
  div.appendChild(delete_btn);

  //liタグの子要素に各要素を追加
  li.appendChild(p);
  li.appendChild(div);

  //未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);

  //未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete_list").removeChild(target);
  };
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
