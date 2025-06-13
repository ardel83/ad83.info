document.addEventListener("DOMContentLoaded", function() {
  const tocSidebar = document.querySelector('.md-sidebar--secondary');
  if (!tocSidebar) return;

  // Создаём иконку (используем встроенную иконку Material "table-of-contents")
  const toggleIcon = document.createElement('i');
  toggleIcon.className = 'md-icon toc-icon';
  toggleIcon.innerHTML = '&#xe8de;'; // Код иконки TOC из Material Icons
  toggleIcon.style.cssText = `
    position: fixed;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 1000;
    background: var(--md-default-bg-color);
    padding: 0.5rem;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  `;

  document.body.appendChild(toggleIcon);

  // Обработчик клика
  toggleIcon.addEventListener('click', () => {
    const isHidden = tocSidebar.style.transform === 'translateX(100%)';
    tocSidebar.style.transform = isHidden ? 'translateX(0)' : 'translateX(100%)';
    toggleIcon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0)';
  });
});

