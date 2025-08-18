document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to section when nav link is clicked
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Highlight current section in console (you can expand this to update UI)
  window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("main section");

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        console.log(`You're viewing the "${section.id}" section`);
      }
    });
  });
});
