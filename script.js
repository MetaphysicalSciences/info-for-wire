const doNotPushBtn = document.getElementById('do-not-push');
const scaryOverlay = document.getElementById('scary-overlay');
const scarySound = document.getElementById('scary-sound');

doNotPushBtn.addEventListener('click', () => {
  // Show scary overlay
  scaryOverlay.classList.remove('hidden');

  // Play sound
  scarySound.currentTime = 0;
  scarySound.play();

  // After 5 seconds, hide overlay and pause sound
  setTimeout(() => {
    scaryOverlay.classList.add('hidden');
    scarySound.pause();
  }, 5000);
});
