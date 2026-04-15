
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    document.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const filter = tab.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
          const show = filter === 'tous' || card.dataset.category === filter;
          card.style.display = show ? 'block' : 'none';
        });
      });
    });

    document.querySelectorAll('.accordion-trigger').forEach(trigger => {
      trigger.addEventListener('click', () => {
        const item = trigger.closest('.accordion-item');
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.accordion-item').forEach(i => {
          i.classList.remove('active');
          i.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        });
        if (!isActive) { item.classList.add('active'); trigger.setAttribute('aria-expanded', 'true'); }
      });
    });

    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    document.querySelectorAll('.lien li a').forEach(link => {
      link.addEventListener('click', () => { menuBtn.classList.remove('active'); navLinks.classList.remove('active'); });
    });

    document.getElementById('contact-form').addEventListener('submit', function() {
      document.getElementById('submit-btn').textContent = 'Envoi en cours...';
    });
