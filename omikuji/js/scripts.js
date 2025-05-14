document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        '大吉', '中吉', '小吉', '末吉', '凶'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)]; 
    document.getElementById('result').textContent = `あなたの運勢は... ${result}!`;
});