(function () {
  "use strict";

  // Sticky nav that detaches from header after scrolling
  var header = document.querySelector("body>header");
  var nav = document.querySelector("header nav");

  var observer = new IntersectionObserver(
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

  document.querySelectorAll('.flippable').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });

  document.querySelectorAll('.contact-form').forEach(contactForm => {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const form = e.target;
      const status = form.querySelector('.status');
      try {
        status.textContent = "Sending...";
        
        const res = await fetch(form.action, {
          method: form.action,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            body: form.body.value
          })
        });

        if (!res.ok) throw new Error("Something went wrong :/");

        status.textContent = "Message sent!";
        form.reset();
      } catch (err) {
        status.textContent = "Couldn't send message :(";
        console.error(err);
      }
    });
  });
})();
