# 演習3. HTML / CSS / JavaScript の順に開発する

index.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Omikuji App</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body>
  <div class="container"> 
    <h1>おみくじアプリ</h1>
    <p id="result">結果がここに表示されます</p> 
    <button id="draw">おみくじを引く</button>
  </div>
  <script src="js/scripts.js"></script>
</body>
</html>
```

css/styles.css

```css
body {
    text-align: center; 
    padding: 50px; 
    background-color: #f0f8ff;
}

h1 {
    margin: 0;
}

.container {
    background: white;
    padding: 30px; 
    border-radius: 10px; 
    box-shadow: 0 0 10px #aaa;
    display: inline-block; 
}

button {
    padding: 10px 20px; 
    font-size: 18px; 
    background: #ffcc00; 
    border: none; 
    border-radius: 5px; 
    cursor: pointer;
}
```

js/scripts.js

```js
document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大吉', '中吉', '小吉', '末吉', '凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)]; 
    document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;
});
```

Next: [演習4. 発展させよう](./step03.md)