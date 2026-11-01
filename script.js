
document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector, parent = document) =>
    parent.querySelector(selector);

  const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  // Add animation styles only when the browser supports them.
  if ("IntersectionObserver" in window) {
    document.documentElement.classList.add("js");
  }

  // 1. Mobile navigation
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");

  function closeMenu() {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  $$("#navLinks a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });

  // 2. Header style and scroll progress
  const header = $("#header");
  const scrollProgress = $("#scrollProgress");

  function updateScroll() {
    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollableHeight > 0
      ? (window.scrollY / scrollableHeight) * 100
      : 0;

    scrollProgress.style.width = `${progress}%`;
    header.classList.toggle("scrolled", window.scrollY > 20);
  }

  window.addEventListener("scroll", updateScroll, {
    passive: true
  });

  updateScroll();

  // 3. Typing animation
  const typingText = $("#typingText");
  const roles = [
    "Java Developer",
    "Backend Developer",
    "Web Developer"
  ];

  if (reduceMotion) {
    typingText.textContent = "Java Developer";
  } else {
    let roleIndex = 0;
    let charIndex = roles[0].length;
    let deleting = true;

    function typeRole() {
      const currentRole = roles[roleIndex];

      if (deleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      typingText.textContent = currentRole.slice(0, charIndex);

      let delay = deleting ? 45 : 85;

      if (!deleting && charIndex === currentRole.length) {
        deleting = true;
        delay = 1500;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        delay = 300;
      }

      setTimeout(typeRole, delay);
    }

    setTimeout(typeRole, 1500);
  }

  // 4. Project category filters
  const filterButtons = $$(".filter-btn");
  const projectCards = $$(".project-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;

        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute(
          "aria-pressed",
          String(isActive)
        );
      });

      projectCards.forEach((card) => {
        const shouldShow =
          selectedCategory === "all" ||
          card.dataset.category === selectedCategory;

        card.hidden = !shouldShow;
      });
    });
  });

  // 5. Reveal sections as they enter the viewport
  if ("IntersectionObserver" in window) {
    const revealElements = $$(
      ".section-heading, .about-card, .mini-card, " +
      ".skill-card, .project-card, .timeline-card, .fact"
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -25px 0px"
      }
    );

    revealElements.forEach((element, index) => {
      element.style.transitionDelay =
        `${(index % 3) * 70}ms`;

      revealObserver.observe(element);
    });
  }

  // 6. Contact form validation and email draft
  const contactForm = $("#contactForm");
  const formNote = $("#formNote");

  // IMPORTANT: Replace this with your actual email address.
  const EMAIL_TO = "priyatambe2004@gmail.com";

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    const name = $("#contactName").value.trim();
    const email = $("#contactEmail").value.trim();
    const message = $("#contactMessage").value.trim();

    if (name.length < 2 || message.length < 10) {
      formNote.textContent =
        "Please enter a valid name and a message of at least 10 characters.";
      return;
    }

    if (
      EMAIL_TO === "priyatambe2004@gmail.com" ||
      !EMAIL_TO.includes("@")
    ) {
      formNote.textContent =
        "Please update EMAIL_TO in script.js with your email address first.";
      return;
    }

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${name}`
    );

    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n\n` +
      `Message:\n${message}`
    );

    const mailtoLink =
      `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;

    formNote.textContent =
      "Opening your email application. Please review and send your message.";

    window.location.href = mailtoLink;
  });

  // 7. Automatically update the footer year
  $("#year").textContent = new Date().getFullYear();
});
