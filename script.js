// Toggle hamburger menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// Optional: Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Close menu on mobile after clicking
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
    }
  });
});

// Play video when user scrolls to the video section
const promoVideo = document.getElementById('promoVideo');
const videoSection = document.getElementById('video');

function checkVideoInView() {
  const rect = videoSection.getBoundingClientRect();
  if (rect.top <= window.innerHeight && rect.bottom >= 0) {
    if (promoVideo.paused) {
      promoVideo.play();
    }
  } else {
    if (!promoVideo.paused) {
      promoVideo.pause();
    }
  }
}

window.addEventListener('scroll', checkVideoInView);
window.addEventListener('load', checkVideoInView);
