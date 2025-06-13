document.addEventListener("DOMContentLoaded", function() {
  const tocSidebar = document.querySelector('.md-sidebar--secondary');
  if (!tocSidebar) return;

  const toggleIcon = document.createElement('button');
  toggleIcon.className = 'toc-toggle-button';
  toggleIcon.setAttribute('aria-label', 'Toggle Table of Contents');
  toggleIcon.innerHTML = '&#xe8de;'; // Иконка TOC из Material Icons

  document.body.appendChild(toggleIcon);

  toggleIcon.addEventListener('click', () => {
    const isHidden = tocSidebar.style.display === 'none';
    tocSidebar.style.display = isHidden ? 'block' : 'none';
  });
});

