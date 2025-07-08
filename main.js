// Fade-in animation for elements with class "fade-in"
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('opacity-100', 'translate-y-0');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    fader.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000');
    appearOnScroll.observe(fader);
  });
});
