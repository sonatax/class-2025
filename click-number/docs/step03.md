# 演習３ .ボタンをランダムに配置させてたくさん表示させてみよう

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
	<div id="main"></div>

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
for (var num=1;num<10;num++) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.setAttribute("id", num); 
	elm.setAttribute("class", "circle"); 
	elm.setAttribute("onclick", "remove()");
	document.getElementById("main").appendChild(elm);

	var left_pos = 10;
	var top_pos = 100;

	left_pos = left_pos + Math.floor(Math.random() * 400);
	top_pos = top_pos + Math.floor(Math.random() * 600);

	document.getElementById(num).style.left = "" + left_pos + "px" ;
	document.getElementById(num).style.top = "" + top_pos + "px" ;
}

document.remove = function() {
	document.getElementById("main").removeChild(document.getElementById("1"));
}
```

Next: [step04.md](./step04.md)