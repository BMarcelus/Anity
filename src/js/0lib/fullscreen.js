var FullScreenHandler = {
  /* Get the documentElement (<html>) to display the page in fullscreen */
  elem: document.documentElement,
  inFullScreen: false,
  /* View in fullscreen */
  openFullScreen: function openFullscreen() {
    var elem = FullScreenHandler.elem;
    FullScreenHandler.inFullScreen = true;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  },

  /* Close fullscreen */
  closeFullscreen: function closeFullscreen() {
    FullScreenHandler.inFullScreen = false;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  },
};

window.addEventListener('load', function(e) {
  document.querySelectorAll('.b-js-fullscreen-btn').forEach(function(e) {
    e.onclick = FullScreenHandler.openFullScreen;
  });
})
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 27) {
    if(FullScreenHandler.inFullScreen)
    FullScreenHandler.closeFullscreen();
  }
})