const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.textContent = isOpen ? 'Menu' : 'Close';
  siteNav?.classList.toggle('is-open', !isOpen);
});

siteNav?.addEventListener('click', (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) return;

  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = 'Menu';
  siteNav.classList.remove('is-open');
});
