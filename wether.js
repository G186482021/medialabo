

////////// 課題3-2 ここからプログラムを書こう

let x = document.querySelector('button#btn');
x.addEventListener('click', showSelectResult);

function showSelectResult() {
    let s = document.querySelector('select#toshi');
    let idx = s.selectedIndex;  // idx 番目の option が選択された

    let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
    let o = os.item(idx);       // os の idx 番目の要素
    let aaa = o.getAttribute('value');

    console.log('選択された ' + idx + ' 番目の都市の情報:');
    console.log(o.textContent)
    console.log(' id : ' + aaa);  // id 属性を表示





  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + aaa + '.json';
  axios.get(url).then(showResult).catch(showError).then(finish);



}
function showResult(resp) {
  let data = resp.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
}
console.log(data);
console.log(data.id);
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}



  let div = document.querySelector('div#result');

  let a1 = document.createElement('h1');
  a1.textContent = (object.name);  
  div.insertAdjacentElement('beforeend', a1);





  let a2 = document.createElement('h2');
  a2.textContent = '-天気-';  
  div.insertAdjacentElement('beforeend', a2);

  let b1 = document.createElement('p');
  b1.textContent = '曇りがち';  
  div.insertAdjacentElement('beforeend', b1);



  let a3 = document.createElement('h2');
  a3.textContent = '-気温-';  
  div.insertAdjacentElement('beforeend', a3);


  let a4 = document.createElement('h3');
  a4.textContent = '最高';  
  div.insertAdjacentElement('beforeend', a4);

  let b2 = document.createElement('p');
  b2.textContent = '9.94';  
  div.insertAdjacentElement('beforeend', b2);


  let a5 = document.createElement('h3');
  a5.textContent = '最低';  
  div.insertAdjacentElement('beforeend', a5);

  let b3 = document.createElement('p');
  b3.textContent = '9.94';  
  div.insertAdjacentElement('beforeend', b3);



  let a6 = document.createElement('h2');
  a6.textContent = '-湿度-';  
  div.insertAdjacentElement('beforeend', a6);

  let b4 = document.createElement('p');
  b4.textContent = '14';  
  div.insertAdjacentElement('beforeend', b4);



  let a7 = document.createElement('h2');
  a7.textContent = '-風速・風向き-';  
  div.insertAdjacentElement('beforeend', a7);

  let b5 = document.createElement('p');
  b5.textContent = '2.65・197';  
  div.insertAdjacentElement('beforeend', b5);



  let a8 = document.createElement('h2');
  a8.textContent = '-緯度・経度-';  
  div.insertAdjacentElement('beforeend', a8);

  let b6 = document.createElement('p');
  b6.textContent = '39.9075・116.3972';  
  div.insertAdjacentElement('beforeend', b6);



  






//https://www.nishita-lab.org/web-contents/jsons/openweather/{360630}.json ... Cairo カイロ （エジプト）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{524901}.json ... Moscow モスクワ （ロシア）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{993800}.json ... Johannesburg ヨハネスブルク （南アフリカ）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{1816670}.json ... Beijing 北京 （中華人民共和国）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{1850147}.json... Tokyo 東京 （日本）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{1880252}.json ... Singapore シンガポール
//https://www.nishita-lab.org/web-contents/jsons/openweather/{2147714}.json ... Sydney シドニー （オーストラリア）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{2643743}.json ... London ロンドン （イギリス
//https://www.nishita-lab.org/web-contents/jsons/openweather/{2968815}.json ... Paris パリ （フランス）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{3451189}.json ... Rio de Janeiro リオデジャネイロ （ブラジル）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{5128581}.json ... New York ニューヨーク （アメリカ合衆国）
//https://www.nishita-lab.org/web-contents/jsons/openweather/{5368361}.json ... Los Angeles ロサンゼルス （アメリカ合衆国）

//coord.lon	緯度
//coord.lat	経度
//weather.description	天気
//main.temp_min	最低気温
//main.temp_max	最高気温
//main.humidity	湿度
//wind.speed	風速
//wind.deg	風向
//name	都市名
