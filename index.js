var time = document.getElementById('time');
var count = document.getElementById("count");
var name = document.getElementById('name');
var cat = document.getElementById("contents");
var num = 0;
var second = 10;

function onClick() {
  document.getElementById('cat').src = './img/popcat.png';
  var audio = new Audio('./pop-cat-original-meme_3ObdYkj.mp3');
  audio.play(); 
  num = parseInt(count.innerText, 10);
  count.innerText = num + 1;
};

function onUp() {
  document.getElementById('cat').src = './img/closecat.png';
};

window.onload = function() {
  alert("Ready?")
  setInterval(() => {
    second--;
    time.innerText = second;
    if (second == 0) {
      alert("그만!")
      alert(num+1);
      location.reload(true);
    };
  }, 1000);
}