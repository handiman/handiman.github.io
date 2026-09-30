(function () {
  "use strict";

  // Turns [data-email="user|domain"] links into mailto: links. The address
  // only exists in the page as separate parts, which keeps most scrapers out.
  document.querySelectorAll("[data-email]").forEach(function (link) {
    var parts = link.dataset.email.split("|");
    if (!parts[0] || !parts[1]) return;
    var address = parts[0] + "@" + parts[1];
    link.href = "mailto:" + address;
    if (link.hasAttribute("data-email-text")) link.textContent = address;
  });

  // "Ask my CV" (hero): [data-ask] puts the cursor in the header chat;
  // [data-ask="question"] asks that question straight away.
  document.querySelectorAll("[data-ask]").forEach(function (button) {
    button.addEventListener("click", function () {
      var chat = document.querySelector("cv-chat");
      if (!chat || !window.customElements) return;
      customElements.whenDefined("cv-chat").then(function () {
        chat.scrollIntoView({ behavior: "smooth", block: "center" });
        var question = button.getAttribute("data-ask");
        if (question) chat.ask(question);
        else chat.focusInput();
      });
    });
  });

  // Close the mobile menu after picking a link.
  var menu = document.querySelector(".nav-mobile");
  if (menu) {
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) menu.removeAttribute("open");
    });
  }

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
        
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            body: form.body.value
          })
        });

        if (!res.ok) {
          throw new Error(await res.text());
        }

        status.textContent = "Message sent!";
        form.reset();
      } catch (err) {
        status.textContent = "Couldn't send message :(";
        console.error(err);
      }
    });
  });
})();
