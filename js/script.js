document.addEventListener('DOMContentLoaded', () => {
  // Smooth interactive play preview button
  const previewBtn = document.getElementById('preview-btn');
  if (previewBtn) {
    let playing = false;
    const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    previewBtn.addEventListener('click', () => {
      if (!playing) {
        audio.play();
        playing = true;
        previewBtn.innerHTML = '❚❚ Pause Preview';
        previewBtn.classList.add('bg-purple-500');
      } else {
        audio.pause();
        playing = false;
        previewBtn.innerHTML = '▶ Listen Preview';
        previewBtn.classList.remove('bg-purple-500');
      }
    });
  }

  // Smooth mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
