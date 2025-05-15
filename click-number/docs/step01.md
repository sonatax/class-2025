# 演習1. ボタンを表示させたり消したりできるようにしよう

index.html

```html
<!DOCTYPE html>
<html>

<head>
	<title>Click Number</title>
	<meta charset="UTF-8" />
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>
	<div id="main">
		<button class="circle" id="1" onclick="remove()">1</button>
	</div>

	<script src="js/scripts.js" ></script>
</body>

</html>
```

css/styles.css

```css
body {
	font-family: sans-serif;
}

.circle {
	background-color: skyblue;
	border-radius: 30px;
	height: 60px;
	width: 60px;
	font-size: 24px;
	position: absolute;
}
```

js/scripts.js

```js
document.remove = function() {
	document.getElementById("main").removeChild(document.getElementById("1"));
}
```

Next: [step02.md](./step02.md)