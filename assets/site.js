(function () {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  if (button && nav) {
    button.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('open');
      button.setAttribute('aria-expanded', String(isOpen));
      button.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
      button.textContent = isOpen ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
        button.setAttribute('aria-label', '메뉴 열기');
        button.textContent = '☰';
      });
    });
  }
  document.querySelectorAll('[data-year]').forEach(function (item) {
    item.textContent = new Date().getFullYear();
  });
}());
