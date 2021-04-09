let video = document.getElementById('video');
let button = document.getElementById('img');
let player = new YT.player('video');
const handleClick = () => {
  console.log('click');
  console.log(Object.keys(video));
  video.playVideo();
};
button.addEventListener('click', handleClick);
video.addEventListener('onPlay', () => console.log('videoclicked'));
