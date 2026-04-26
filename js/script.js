/* ==========================================================================
   DEEPIKA ENTERPRISE - JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* --- MOBILE HAMBURGER MENU --- */
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('active');
  });

  // Close menu when a link is clicked (mobile)
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('active');
    });
  });

  /* --- NAVBAR SHADOW ON SCROLL --- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* --- INQUIRE BUTTONS - prefill form --- */
  document.querySelectorAll('.inquire-btn').forEach(btn => {
    btn.addEventListener('click', function () {
      const product = this.getAttribute('data-product');
      const select = document.getElementById('product');
      if (select) {
        // Try matching option
        for (let opt of select.options) {
          if (opt.value === product) {
            select.value = product;
            break;
          }
        }
      }
      // Scroll to contact
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
      // Focus name field after scroll
      setTimeout(() => {
        document.getElementById('name').focus();
      }, 700);
    });
  });

  /* --- CONTACT FORM HANDLER --- */
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const product = document.getElementById('product').value;
      const message = document.getElementById('message').value.trim();

      if (!name || !phone) {
        alert('Please fill in your name and phone number.');
        return;
      }

      const summary = `Thank you ${name}!\n\nWe have received your inquiry${product ? ' for ' + product : ''}.\nWe will contact you at ${phone} within 24 hours.`;
      alert(summary);
      form.reset();
    });
  }

  /* --- SCROLL REVEAL ANIMATION --- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.product-card, .guide-card, .gallery-item, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
  });

  /* --- DYNAMIC YEAR IN FOOTER (future proof) --- */
  const year = new Date().getFullYear();
  document.querySelectorAll('.footer-bottom p').forEach(p => {
    if (p.textContent.includes('2025')) {
      p.textContent = p.textContent.replace('2025', year);
    }
  });

});
