(() => {
  'use strict';

  const navLinks = [...document.querySelectorAll('.nav-link[href^="#"]')];
  const sections = [...document.querySelectorAll('main section[id]')];

  const setActiveLink = (id) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('active', isActive);
      if (isActive) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  if ('IntersectionObserver' in window) {
    const visibleSections = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSections.set(entry.target.id, entry.intersectionRatio);
          else visibleSections.delete(entry.target.id);
        });

        const current = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
        if (current) setActiveLink(current[0]);
      },
      { rootMargin: '-18% 0px -60% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const compactNumber = new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 });

  const fetchJson = async (url) => {
    const response = await fetch(url, { headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error(`Request failed: ${response.status}`);
    return response.json();
  };

  document.querySelectorAll('a[data-github]').forEach(async (link) => {
    const badge = link.querySelector('.gh-stars');
    if (!badge) return;
    try {
      const data = await fetchJson(`https://api.github.com/repos/${link.dataset.github}`);
      if (Number.isFinite(data.stargazers_count)) badge.textContent = `★ ${compactNumber.format(data.stargazers_count)}`;
    } catch (_) {}
  });

  document.querySelectorAll('a[data-hf]').forEach(async (link) => {
    const badge = link.querySelector('.hf-likes');
    if (!badge) return;
    try {
      const data = await fetchJson(`https://huggingface.co/api/models/${link.dataset.hf}`);
      const likes = data.likes ?? data.likeCount;
      if (Number.isFinite(likes)) badge.textContent = `♥ ${compactNumber.format(likes)}`;
    } catch (_) {}
  });

  document.querySelectorAll('a[data-hf-paper]').forEach(async (link) => {
    const badge = link.querySelector('.hf-paper-upvotes');
    if (!badge) return;
    try {
      const data = await fetchJson(`https://huggingface.co/api/papers/${link.dataset.hfPaper}`);
      if (Number.isFinite(data.upvotes)) badge.textContent = `↑ ${compactNumber.format(data.upvotes)}`;
    } catch (_) {}
  });
})();
