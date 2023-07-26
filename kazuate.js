// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu=0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

let b1 = document.querySelector('#print');
b1.addEventListener('click', hantei); 

// ボタンを押した後の処理をする関数 hantei() の定義

function hantei() {
        let i = document.querySelector('input[name="yoso"]');
    let yoso = i.value;
    kaisu=kaisu+1;      // ユーザが記入した文字列;
    let p1 = document.querySelector('span#kaisu');			
    p1.textContent = kaisu;
    let p2 = document.querySelector('span#yoso');			
    p2.textContent = yoso;

    let x = document.querySelector('p#result');
    let y = document.querySelector('span#yoso');
    let z = document.querySelector('span#kaisu');
  
  
    if( kaisu < 3) {
          if(kotae == yoso){
                  x.textContent = "正解です。おめでとう！";
          } else if(kotae < yoso) {
                  x.textContent = "まちがい、答えはもっと小さいですよ。";
          } else {
                  x.textContent = "まちがい、答えはもっと大きいですよ。";
          }
    if(kaisu == 3 && kotae != yoso) {
        x.textContent = "まちがい。残念でした答えは "+ kotae +" です。";
}
        }
    if(kaisu >= 4) {
        x.textContent = "答えは"+ kotae + "でした。すでにゲームは終わっています。";
   }
    if(kaisu == 3) {
        x.textContent = "まちがい。残念でした答えは "+ kotae +" です。";
    }
}