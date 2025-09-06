function resolveAssetPath(relativePath) {
  const depth = window.location.pathname.split("/").length - 2;
  const prefix = "../".repeat(depth);
  return `${prefix}${relativePath}`;
}

function getBasePath() {
  let path = window.location.pathname;
  if (!path.endsWith('/')) {
    path = path.substring(0, path.lastIndexOf('/') + 1);
  }
  return path;
}


function resolveTemplatePath(relativePath) {
  const depth = window.location.pathname.split("/").length - 2;
  const prefix = "../".repeat(depth);
  return `${prefix}${relativePath}`;
}


document.addEventListener("DOMContentLoaded", async () => {
  //const currentPage = window.location.pathname.split("/").pop();
  const currentPage = window.location.pathname.endsWith("/")
  ? "index.html"
  : window.location.pathname.split("/").pop();
  console.log(`Current page: ${currentPage}`);
  const config = pageConfigs?.[currentPage] || {
    title: document.title,
    buttons: []
  };

  try {
    const basePath = getBasePath();
    console.log(`Loading templates from: ${basePath}`);
    console.log(basePath);

    const headerPath = resolveTemplatePath("assets/templates/header.html?v=1.0");
    await loadTemplate("header", headerPath, config.title, config.buttons);


    const footerPath = resolveTemplatePath("assets/templates/footer.html?v=1.0");
    await loadTemplate("footer", footerPath);

    setupNavigation();
  } catch (e) {
    console.error("Template loading failed", e);
  }
});



function setupNavigation() {
  // Anchor click behavior
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        document.querySelectorAll('a[href^="#"]').forEach(a => a.classList.remove("active"));
        this.classList.add("active");

        const collapsibleContent = target.closest('.content');
        if (collapsibleContent && collapsibleContent.style.display === 'none') {
          collapsibleContent.style.display = 'block';
          const toggleBtn = collapsibleContent.previousElementSibling;
          if (toggleBtn && toggleBtn.classList.contains('toggle')) {
            toggleBtn.textContent = '▼ ' + toggleBtn.textContent.replace(/^▶|▼/, '');
          }
        }

        const headerOffset = document.querySelector(".banner-container")?.offsetHeight || 0;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    });
  });

  // Toggle collapsible sections
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const isVisible = content.style.display === 'block';
      content.style.display = isVisible ? 'none' : 'block';
      toggle.textContent = (isVisible ? '▶ ' : '▼ ') + toggle.textContent.replace(/^▶|▼/, '');
    });

    // Accessibility: allow keyboard toggle
    toggle.setAttribute("tabindex", "0");
    toggle.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        toggle.click();
      }
    });
  });

  // Initially hide all collapsible sections
  document.querySelectorAll('.content').forEach(content => {
    content.style.display = 'none';
  });
}
