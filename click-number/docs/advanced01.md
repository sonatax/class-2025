# 丸の大きさをランダムにする

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
for (var num=9;num>0;num--) {
	var elm = document.createElement("button");
	elm.innerHTML = num;
	elm.setAttribute("id", num); 
	elm.setAttribute("class", "circle"); 
	var function_name = "remove(" + num + ")" 
	elm.setAttribute("onclick", function_name);
	document.getElementById("main").appendChild(elm);

	var left = 10;
	var top = 100;

	left = left + Math.floor(Math.random() * 400);
	top = top + Math.floor(Math.random() * 600);

	document.getElementById(num).style.left = "" + left + "px" ;
	document.getElementById(num).style.top = "" + top + "px" ;

	var radius = 30 + Math.floor(Math.random() * 100);
	document.getElementById(num).style.height = "" + radius + "px";
	document.getElementById(num).style.width = "" + radius + "px";
	document.getElementById(num).style.borderRadius = "" + radius + "px";
}

var next = 1;
document.remove = function (id) {
	if (id === next) {
		document.getElementById("main").removeChild(document.getElementById(id));
		next = next + 1;
	}
}
```

応用編
* [色をランダムにする](./advance02.md)
* [経過時間で数字を再配置する](./advance03.md)