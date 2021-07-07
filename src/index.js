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
    alert("完了");
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
    const deleteTarget = delete_btn.closest(".incomplete_item");
    document.getElementById("incomplete_list").removeChild(deleteTarget);
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
};

document
  .getElementById("add_btn")
  .addEventListener("click", () => onClickAdd());
