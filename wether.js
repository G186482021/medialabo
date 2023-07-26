

////////// 課題3-2 ここからプログラムを書こう

let x = document.querySelector('button#btn');
x.addEventListener('click', showSelectResult);

function showSelectResult() {
  var list = document.querySelectorAll('div#result >*'); 
  for(var a of list) {
    a.remove();
    }
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
  let dataa = resp.dataa;
  if (typeof data === 'string') {
    data = JSON.parse(dataa);
}
console.log(dataa);
console.log(dataa.name);
console.log('天気'+ dataa.weather.description);
console.log('緯度'+ dataa.coord.lon);
console.log('経度'+ dataa.coord.lat);
console.log('最高気温'+ dataa.main.temp_min);
console.log('最低気温'+ dataa.main.temp_max);
console.log('湿度'+ dataa.main.humidity);
console.log('風速'+ dataa.wind.speed);
console.log('風向き'+ dataa.wind.deg);
}
function showError(err) {
  console.log(err);
}
function finish() {
  console.log('Ajax 通信が終わりました');
}

function showResult(respo) {
  let data = respo.data;
  if (typeof data === 'string') {
    data = JSON.parse(data);
}

  let div = document.querySelector('div#result');

  let a1 = document.createElement('h1');

  a1.textContent = (data.name);  
  div.insertAdjacentElement('beforeend', a1);





  let a2 = document.createElement('h2');
  a2.textContent = '-天気-';  
  div.insertAdjacentElement('beforeend', a2);

  let b1 = document.createElement('p');
  b1.textContent = data.weather[0].description ;  
  div.insertAdjacentElement('beforeend', b1);



  let a3 = document.createElement('h2');
  a3.textContent = '-気温-';  
  div.insertAdjacentElement('beforeend', a3);


  let a4 = document.createElement('h3');
  a4.textContent = '最高';  
  div.insertAdjacentElement('beforeend', a4);

  let b2 = document.createElement('p');
  b2.textContent = data.main.temp_min;  
  div.insertAdjacentElement('beforeend', b2);


  let a5 = document.createElement('h3');
  a5.textContent = '最低';  
  div.insertAdjacentElement('beforeend', a5);

  let b3 = document.createElement('p');
  b3.textContent = data.main.temp_max;  
  div.insertAdjacentElement('beforeend', b3);



  let a6 = document.createElement('h2');
  a6.textContent = '-湿度-';  
  div.insertAdjacentElement('beforeend', a6);

  let b4 = document.createElement('p');
  b4.textContent = data.main.humidity;  
  div.insertAdjacentElement('beforeend', b4);



  let a7 = document.createElement('h2');
  a7.textContent = '-風速・風向き-';  
  div.insertAdjacentElement('beforeend', a7);

  let b5 = document.createElement('p');
  b5.textContent = data.wind.speed +'/'+  data.wind.deg;  
  div.insertAdjacentElement('beforeend', b5);



  let a8 = document.createElement('h2');
  a8.textContent = '-緯度・経度-';  
  div.insertAdjacentElement('beforeend', a8);

  let b6 = document.createElement('p');
  b6.textContent = data.coord.lon +'/'+ data.coord.lat;  
  div.insertAdjacentElement('beforeend', b6);


}
  

