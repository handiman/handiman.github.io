(function () {
  "use strict";

  // Sticky nav that detaches from header after scrolling
  const header = document.querySelector("body>header");
  const nav = document.querySelector("header nav");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        nav.classList.remove("sticky");
      } else {
        nav.classList.add("sticky");
      }
    },
    { threshold: 0 },
  );

  observer.observe(header);

  document.querySelector(".theme-toggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

})();
