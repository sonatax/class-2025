# Step 1. ボタンを設置する

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
<style>
/* ここにCSSを書きます */
body { margin: 0; padding: 0;}
#map { position: absolute; top: 0; bottom: 0; width: 100%; }
</style>
</head>

<body>
<!-- ここにhtmlとjavascript書いていきます -->
<div id="search-widget">
    <input type="text" id="search-term" placeholder="Enter a location">
    <button id="search-button">Search Hotels</button>
</div>
<div id="map"></div>
<script>
// mapbox の accessToken を設定
mapboxgl.accessToken = '取得したaccessTokenを書いてね';
// 紀尾井町周辺の地図を表示させる
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v11',
    center: [139.736897, 35.679584],
    zoom: 15
});
</script>
</body>
</html>
```

Next: [api02.md](./api02.md)
