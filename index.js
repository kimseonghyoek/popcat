function onClick() {
  document.getElementById('cat').src = './img/popcat.png';
  var audio = new Audio('./pop-cat-original-meme_3ObdYkj.mp3');
  audio.play(); 
};

function onUp() {
  document.getElementById('cat').src = './img/closecat.png';
}
