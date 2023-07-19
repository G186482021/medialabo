let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう


  console.log(data);


  let div = document.querySelector('div#result');




  let a1 = document.createElement('h1');
  a1.textContent = '北京市';  
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
