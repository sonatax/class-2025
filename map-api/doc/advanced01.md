# スタイルの種類を変更してみよう

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
<div id="map"></div>
<script>
// mapbox の accessToken を設定
mapboxgl.accessToken = '取得したaccessTokenを書いてね';
// 紀尾井町周辺の地図を表示させる
var map = new mapboxgl.Map({
    container: 'map',
    // 地図のスタイルを衛星写真に変える
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    center: [139.736897, 35.679584],
    zoom: 15
});
</script>
</body>
</html>
```

応用編
* [地図の中心点を変更してみよう](./advance02.md)
* [Zoomレベルを設定してみよう](./advance03.md)
