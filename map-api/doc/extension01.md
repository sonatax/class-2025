# 追加拡張 ファイルを読み込んでデータを表示させる

index.html

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>地図を表示する - API Tutorial</title>
<meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
<!-- ここに Mapbox の JavascriptAPI と css を読み込むコードを書きます -->
<script src="https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.js"></script>
<link href="https://api.mapbox.com/mapbox-gl-js/v3.12.0/mapbox-gl.css" rel="stylesheet" />
<link rel="stylesheet" href="css/styles.css">
</head>

<body>
<!-- ここにhtmlとjavascript書いていきます -->
<div id="search-widget">
    <input type="text" id="search-term" placeholder="Enter a location">
    <button id="search-button">Search Hotels</button>
</div>
<div id="map"></div>
<!-- ここで新しくボタンを追加 -->
<button id="bottom-right-button">Display Data</button>
<script src="js/scripts.js"></script>
<script src="https://maps.googleapis.com/maps/api/js?key=Google_API_KEY&libraries=places&callback=initMap"></script>
</body>
</html>
```

css/styles.css

```css
body, html {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

#map {
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
}

#search-widget {
    position: absolute;
    z-index: 1; /* 上に表示 */
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 10px;
    border-radius: 3px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
}

#search-term {
    width: 300px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right: 10px;
}

#search-button {
    padding: 10px 20px;
    background: #1e90ff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

#search-button:hover {
    background: #007bff;
}

#bottom-right-button {
    position: absolute;
    bottom: 20px;
    right: 20px;
    z-index: 2;
    padding: 10px 20px;
    background-color: #1e90ff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
    font-size: 14px;
}

#bottom-right-button:hover {
    background-color: #007bff;
}

```

js/scripts.js

```javascript
mapboxgl.accessToken = '取得したaccessTokenを書いてね';
var allMarkers = [];

// 地図を初期化する
var mapbox = new mapboxgl.Map({
    container: 'map', // 地図を表示するコンテナID
    style: 'mapbox://styles/mapbox/streets-v11', // 表示する地図のスタイル
    center: [139.6917, 35.6895], // 東京の経度と緯度
    zoom: 15 // 地図のズームレベル
});

// map の初期化
function initMap() {
  // Googleマップインスタンスを作成
  // ここではマップを表示せず、Places Libraryの機能のみを使用します
  const map = new google.maps.Map(document.createElement('div'));

  // Placesサービスを作成
  const placesService = new google.maps.places.PlacesService(map);

  // Mapboxでの検索ボタンクリックイベント
  document.getElementById('search-button').addEventListener('click', function() {
    let searchTerm = document.getElementById('search-term').value;
    if (searchTerm) {
      fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(searchTerm) + '.json?access_token=' + mapboxgl.accessToken)
          .then(response => response.json())
          .then(data => {
              if (data.features.length > 0) {
                  const location = data.features[0].center;
                  searchHotels(location[1], location[0], placesService);
                  mapbox.flyTo({
                      center: location,
                      zoom: 14
                  });
              } else {
                  alert('Location not found');
              }
          }).catch(error => {
              console.error('Error:', error);
              alert('Failed to retrieve location data');
          });
    } else {
      alert('Please enter a location');
    }
  });
}

// 位置（緯度、経度）を基に周辺のホテル情報を検索する関数
function searchHotels(lat, lng, placesService) {
  const location = new google.maps.LatLng(lat, lng);
  if (typeof location.lat() !== 'number' || typeof location.lng() !== 'number') {
    console.error("Invalid location data provided to nearbySearch");
    return; // Or handle the error appropriately
  }
  const request = {
    location,
    radius: 3000, // 検索半径（メートル）
    type: 'lodging' // 宿泊施設を検索
  };

  // Google Places APIの周辺検索を実行
  placesService.nearbySearch(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      // 現在の地図上のマーカーをクリアする
      clearMarkers();

      // 検索結果を地図にマーカーとして表示
      results.forEach(place => {
        var popup = new mapboxgl.Popup({ offset: 25 })
            .setText(place.name);
        var marker = new mapboxgl.Marker()
            .setLngLat([place.geometry.location.lng(), place.geometry.location.lat()])
            .setPopup(popup)
            .addTo(mapbox);

        allMarkers.push(marker);
      });
    } else {
      alert('No hotels found');
    }
  });
}

// delete all markers
function clearMarkers() {
    // 保存されているすべてのマーカーをループし削除
    for (var i = 0; i < allMarkers.length; i++) {
        allMarkers[i].remove(); // Mapbox GL JSのremove() メソッドを使用
    }
    // 配列をリセット
    allMarkers = [];
}

// 右下ボタンがクリックされたときにCSVを読み込んでマーカーを立てる
document.getElementById('bottom-right-button').addEventListener('click', function() {
  fetch('https://raw.githubusercontent.com/sonatax/class-2025/refs/heads/main/map-api/data/toilet.csv')
    .then(response => {
      if (!response.ok) {
        throw new Error('CSV の読み込みに失敗しました: ' + response.status);
      }
      return response.text();
    })
    .then(text => {
      const lines = text.trim().split('\n');
      lines.forEach(line => {
        // CSVの各行を「番号,公園名,緯度,経度」で想定
        const cols = line.split(',');
        if (cols.length >= 4) {
          const name = cols[1];
          const lat = parseFloat(cols[2]);
          const lng = parseFloat(cols[3]);
          if (!isNaN(lat) && !isNaN(lng)) {
            // ポップアップ付きマーカーを作成
            const popup = new mapboxgl.Popup({ offset: 25 }).setText(name);
            const marker = new mapboxgl.Marker({ color: '#FF0000' })
              .setLngLat([lng, lat])
              .setPopup(popup)
              .addTo(mapbox);
            allMarkers.push(marker);
          }
        }
      });
    })
    .catch(error => {
      console.error('Error loading CSV:', error);
      alert('トイレデータの読み込みに失敗しました');
    });
});

```

おつかれさまでした！

