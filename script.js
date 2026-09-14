// ---------- typewriter tagline ----------
// Runs once on load: the one deliberate motion moment for the page.
(function typewriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  const line = "building systems that make ordinary days feel like progress.";
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion) {
    el.textContent = line;
    return;
  }

  let i = 0;
  const speed = 28; // ms per character

  function tick() {
    if (i <= line.length) {
      el.textContent = line.slice(0, i);
      i++;
      setTimeout(tick, speed);
    }
  }

  // start after the header/intro reveal has mostly settled
  setTimeout(tick, 550);
})();

// ---------- "coming soon" toast for unfinished links ----------
(function todoLinks() {
  const links = document.querySelectorAll(".todo-link");
  if (!links.length) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  document.body.appendChild(toast);

  let hideTimer;

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const label = link.dataset.label || "this";
      toast.textContent = `${label} link isn't wired up yet`;
      toast.classList.add("show");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => toast.classList.remove("show"), 1800);
    });
  });
})();

// ---------- smooth active-state nudge on nav click ----------
(function navSmoothScroll() {
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const targetEl = document.querySelector(targetId);
      if (!targetEl) return;
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();