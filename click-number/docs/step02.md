# 演習2. JavaScript から HTML を制御しよう

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
var num = 1; 
var elm = document.createElement("button");
elm.innerHTML = num;
elm.setAttribute("id", num); 
elm.setAttribute("class", "circle"); 
elm.setAttribute("onclick", "remove()");
document.getElementById("main").appendChild(elm);

document.remove = function() {
	document.getElementById("main").removeChild(document.getElementById("1"));
}
```

Next: [step03.md](./step03.md)