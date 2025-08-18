// Auto-expand matching <details> and highlight
document.getElementById('search').addEventListener('input', function () {
  const query = this.value.toLowerCase();

  document.querySelectorAll('#challenges details').forEach(detail => {
    const items = detail.querySelectorAll('li');
    let match = false;

    items.forEach(li => {
      const text = li.textContent.toLowerCase();
      if (query === '') {
        li.innerHTML = li.textContent;
        li.style.display = ''; // Reset
        match = true;
      } else if (text.includes(query)) {
        match = true;
        li.innerHTML = li.textContent.replace(
          new RegExp(query, 'gi'),
          str => `<mark>${str}</mark>`
        );
        li.style.display = '';
      } else {
        li.style.display = 'none';
      }
    });
    detail.open = match;
  });
});



// Fade-in animation on load
document.querySelectorAll('#challenges li').forEach((li, i) => {
  li.style.animation = `fadeIn 0.3s ease forwards`;
  li.style.animationDelay = `${i * 0.05}s`;
});

// Progress tracking
/*
document.querySelectorAll('#challenges a').forEach(a => {
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('tracker');
  checkbox.checked = localStorage.getItem(a.href);
  checkbox.addEventListener('change', () =>
    localStorage.setItem(a.href, checkbox.checked)
  );
  a.parentNode.insertBefore(checkbox, a);
});
*/
// Bookmark favorites
document.querySelectorAll('#challenges a').forEach(a => {
  const star = document.createElement('span');
  star.textContent = '⭐';
  star.style.cursor = 'pointer';
  star.style.marginLeft = '6px';
  const key = `fav-${a.href}`;
  star.style.opacity = localStorage.getItem(key) ? '1' : '0.3';
  star.onclick = () => {
    const fav = localStorage.getItem(key);
    if (fav) localStorage.removeItem(key);
    else localStorage.setItem(key, true);
    star.style.opacity = fav ? '0.3' : '1';
  };
  a.parentNode.appendChild(star);
});

document.querySelectorAll('.challenge-category').forEach(category => {
  const quizBtn = document.createElement('button');
  quizBtn.textContent = '🧠 Take a quiz';
  quizBtn.style.marginTop = '10px';
  quizBtn.style.display = 'block';

  // 👇 Gentle entrance
  quizBtn.style.opacity = '0';
  quizBtn.style.animation = 'fadeIn 0.4s ease forwards';
  quizBtn.style.animationDelay = '0.2s';

  quizBtn.onclick = () => {
    const heading = category.querySelector('h3').textContent;
    alert(`Quiz coming soon for ${heading}!`);
  };

  category.appendChild(quizBtn);
});

// Inject quiz buttons (placeholder)
document.querySelectorAll('#challenges details').forEach(detail => {
  const quizBtn = document.createElement('button');
  quizBtn.textContent = '🧠 Take a quiz';
  quizBtn.style.marginTop = '10px';
  quizBtn.onclick = () => alert(`Quiz coming soon for ${detail.querySelector('summary').textContent}!`);
  detail.appendChild(quizBtn);
});

document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.sidebar').classList.toggle('active');
});

document.querySelectorAll('.sidebar a[data-target]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target');
    const section = document.getElementById(targetId);

    // Close all details
    document.querySelectorAll('main details').forEach(d => d.open = false);

    if (section) {
      const details = section.querySelector('details');
      if (details) {
        details.open = true;
      }
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

