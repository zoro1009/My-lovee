// PAGE SWITCHING
function goToPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });

  document.getElementById(pageId).classList.remove('hidden');

  // stop all songs when switching
  document.querySelectorAll('audio').forEach(song => {
    song.pause();
    song.currentTime = 0;
  });
}

// SONG 1 + 3 PHOTOS
const song1 = document.getElementById('song1');
const photo1 = document.getElementById('photo1');

function playSong1() {
  song1.play();
}

song1.addEventListener('timeupdate', () => {
  const t = song1.currentTime;

  if (t < 8) {
    photo1.src = 'assets/images/p1.jpg';
  } else if (t < 16) {
    photo1.src = 'assets/images/p2.jpg';
  } else {
    photo1.src = 'assets/images/p3.jpg';
  }
});

// SONG 2 + 2 PHOTOS
const song2 = document.getElementById('song2');
const photo2 = document.getElementById('photo2');

function playSong2() {
  song2.play();
}

song2.addEventListener('timeupdate', () => {
  const t = song2.currentTime;

  if (t < 12) {
    photo2.src = 'assets/images/p4.jpg';
  } else {
    photo2.src = 'assets/images/p5.jpg';
  }
});