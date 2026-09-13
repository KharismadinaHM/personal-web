/**
 * Main JavaScript for Kharismadina Hijra M Personal Website
 * Lightweight, Vanilla ES6, Accessible & Fast
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageSwitcher();
  initMobileNav();
  initHeaderScroll();
  initSmoothScrollAndSpy();
  initScrollReveal();
  initCopyEmail();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen);
    toggleBtn.innerHTML = isOpen
      ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`
      : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
  });

  // Close when clicking nav links
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;
    }
  });
}

/**
 * Header shadow on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/**
 * Scroll Spy & Smooth Scrolling
 */
function initSmoothScrollAndSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (sections.length === 0 || navLinks.length === 0) return;

  const updateActiveLink = () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/**
 * Subtle Scroll Reveal Animation
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.fade-in-section');
  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Copy Email to Clipboard with Toast Feedback
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('btnCopyEmail');
  const toast = document.getElementById('toastNotice');

  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = copyBtn.getAttribute('data-email') || 'kharismadinahijram@gmail.com';

    navigator.clipboard.writeText(email).then(() => {
      const currentLang = localStorage.getItem('portfolio_lang') || 'id';
      const toastMsg = window.siteTranslations && window.siteTranslations[currentLang]
        ? window.siteTranslations[currentLang].toast_copied
        : 'Email berhasil disalin ke clipboard!';
      
      showToast(toastMsg);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = '✓';
      setTimeout(() => {
        const dict = window.siteTranslations && window.siteTranslations[currentLang];
        copyBtn.textContent = (dict && dict.contact_copy_btn) ? dict.contact_copy_btn : originalText;
      }, 2500);
    }).catch(() => {
      // Fallback
      prompt('Salin email:', email);
    });
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

/**
 * Language Switcher System (ID / EN)
 */
function initLanguageSwitcher() {
  const currentLang = localStorage.getItem('portfolio_lang') || 'id';
  applyLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetLang = e.currentTarget.getAttribute('data-lang');
      if (targetLang) {
        applyLanguage(targetLang);
      }
    });
  });
}

function applyLanguage(lang) {
  if (!window.siteTranslations || !window.siteTranslations[lang]) return;
  
  localStorage.setItem('portfolio_lang', lang);
  document.documentElement.lang = lang;

  // Update active status on all switcher buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  const dict = window.siteTranslations[lang];

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}
