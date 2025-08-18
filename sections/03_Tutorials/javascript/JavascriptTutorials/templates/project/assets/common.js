// common.js

function loadSolution(sectionId, contentUrl) {
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) {
    console.error(`Section with ID '${sectionId}' not found.`);
    return;
  }

  // Make sure the textarea is visible
  targetSection.style.display = 'block';

  fetch(contentUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load content from ${contentUrl}`);
      }
      return response.text();
    })
    .then(text => {
      // Use value for textarea, innerHTML for other elements
      if (targetSection.tagName.toLowerCase() === 'textarea') {
        targetSection.value = text;
      } else {
        targetSection.innerHTML = text;
      }
    })
    .catch(error => {
      console.error('Error loading solution:', error);
      if (targetSection.tagName.toLowerCase() === 'textarea') {
        targetSection.value = 'Error loading content.';
      } else {
        targetSection.innerHTML = `<p style="color:red;">Error loading content.</p>`;
      }
    });
}

    function resetView() {
      document.getElementById('solutionBox').style.display = 'none';
      document.getElementById('solutionBox').value = '';
      document.getElementById('runInstructions').style.display = 'none';
      document.getElementById('hintBox').style.display = 'none';
    }

    function toggleHints() {
      const hint = document.getElementById('hintBox');
      hint.style.display = hint.style.display === 'none' ? 'block' : 'none';
    }

