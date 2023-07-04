var slide1 = document.querySelector('.js-slide1');
var slide2 = document.querySelector('.js-slide2');
const muteButton = document.querySelector('.js-mute-button');

slide1.onended = function() {
  slide2.play();
  slide1.style.opacity = 0;
  slide2.style.opacity = 1;
}

slide2.onended = function() {
  slide1.play();
  slide2.style.opacity = 0;
  slide1.style.opacity = 1;
  muteButton.innerHTML = `Unmute`
}



muteButton.addEventListener("click", toggleMute)

function toggleMute() {
  if(!slide2.paused){
    slide2.muted = !slide2.muted;
    if(slide2.muted){
      muteButton.innerHTML = `Unmute`
    }
    else if(!slide2.muted){
      muteButton.innerHTML = `Mute`
    }
  }
  else if(!slide1.paused){
    slide1.muted = !slide1.muted;
    if(slide1.muted){
      muteButton.innerHTML = `Unmute`
    }
    else if(!slide1.muted){
      muteButton.innerHTML = `Mute`
    }
  }
  else {
    slide1.muted;
    slide2.muted;
  }
}