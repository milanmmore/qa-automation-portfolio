/**
 * Injects an external HTML template into the given element.
 * @param {string} id - The element ID to inject into.
 * @param {string} file - The template file path.
 * @param {string} [pageTitle] - Optional page <h1> title (default = document.title).
 * @param {Array} [buttons] - Optional CTA buttons 
 *   [{ text, link, class, target }]
 */
async function loadTemplate(id, file, pageTitle = document.title, buttons = []) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}: ${response.status}`);
    
    const html = await response.text();
    const container = document.getElementById(id);
    if (!container) throw new Error(`Element #${id} not found`);
    container.innerHTML = html;

    // If header, update title & buttons
    if (id === "header") {
      const titleElement = container.querySelector(".banner-text h1");
      if (titleElement) titleElement.textContent = pageTitle;

      const buttonContainer = container.querySelector(".cta-buttons");
      if (buttonContainer && buttons.length > 0) {
        buttonContainer.innerHTML = buttons.map(btn => `
          <a href="${btn.link}" 
             class="${btn.class || 'btn-primary'}" 
             ${btn.target ? `target="${btn.target}"` : ""}>
             ${btn.text}
          </a>
        `).join("");
      }

      // Attach dark mode toggle
      const toggleBtn = document.getElementById("darkModeToggle");
      if (toggleBtn) {
        toggleBtn.addEventListener("click", () => {
          document.body.classList.toggle("dark-mode");
          toggleBtn.textContent = document.body.classList.contains("dark-mode")
            ? "☀️ Light Mode"
            : "🌙 Dark Mode";
        });
      }
    }

    // Footer: inject current year
    if (id === "footer") {
      const yearEl = document.getElementById("year");
      if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

  } catch (err) {
    console.error(`Error loading template:`, err);
  }
}

// Smooth scroll for anchor links (only if element exists)
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const headerOffset = document.querySelector(".banner-container")?.offsetHeight || 0;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });
});


