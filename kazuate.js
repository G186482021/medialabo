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
  
  
    if(kaisu < 4) {
          if(kotae == yoso){
                  x.textContent = "正解";
          } else if(kotae < yoso) {
                  x.textContent = "間違い大きい";
          } else {
                  x.textContent = "間違い小さい";
          }
   } else {
       x.textContent = "回数制限";
   }	
}



  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソ
