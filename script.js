const doNotPushBtn = document.getElementById('do-not-push');
const scaryOverlay = document.getElementById('scary-overlay');
const scarySound = document.getElementById('scary-sound');

doNotPushBtn.addEventListener('click', () => {
  // Show scary overlay
  scaryOverlay.classList.remove('hidden');

  // Play sound from start
  scarySound.currentTime = 0;
  scarySound.play();

  // Hide scary overlay after 5 seconds but DO NOT stop the sound
  setTimeout(() => {
    scaryOverlay.classList.add('hidden');
  }, 5000);
});
