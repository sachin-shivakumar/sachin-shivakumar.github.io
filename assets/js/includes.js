
(function () {
  async function includePartials() {
    const nodes = document.querySelectorAll('[data-include]');
    await Promise.all(Array.prototype.slice.call(nodes).map(async function(el){
      const url = el.getAttribute('data-include');
      const res = await fetch(url + '?v=1');
      el.innerHTML = await res.text();
    }));
    const path = location.pathname.replace(/index\.html$/, '');
    document.querySelectorAll('nav a').forEach(function(a){
      const href = a.getAttribute('href');
      if (href === path || href + '/' === path) {
        a.setAttribute('aria-current', 'page');
        a.classList.add('active');
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', includePartials);
  } else {
    includePartials();
  }
})();
