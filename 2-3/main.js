let box = document.getElementById('box');
let btn = document.getElementById('btn');
//ボタンが押されたら、背景色を赤にする
btn.addEventListener('click', function() {
    box.style.backgroundColor = 'red';
}, false);
//ボタンが押されたら、アラートを出す
btn.addEventListener('click', function() {
    alert('ボタンが押されました');
}, false);