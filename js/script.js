// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Contact form (static demo — no backend wired up yet)
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formStatus.textContent = 'Thanks! Your message has been noted — a troop leader will follow up soon.';
    contactForm.reset();
  });
}

// Volunteer questionnaire (static demo — no backend wired up yet)
const volunteerForm = document.getElementById('volunteerForm');
const volunteerStatus = document.getElementById('volunteerStatus');
const volunteerSummary = document.getElementById('volunteerSummary');
const volunteerSummaryBody = document.getElementById('volunteerSummaryBody');

if (volunteerForm) {
  volunteerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(volunteerForm);

    const answers = [
      ['Event', data.get('vevent')],
      ['Volunteer role', data.get('vrole')],
      ['Date', data.get('vdate')],
      ['Time', data.get('vtime')],
      ['Address', data.get('vaddress')],
      ['Contact name', data.get('vname')],
      ['Contact email', data.get('vemail')],
      ['Contact phone', data.get('vphone')],
      ['Preferred contact method', data.get('contactMethod')],
    ];

    volunteerSummaryBody.innerHTML = '';
    answers.forEach(([label, value]) => {
      const dt = document.createElement('dt');
      dt.textContent = label;
      const dd = document.createElement('dd');
      dd.textContent = value;
      volunteerSummaryBody.appendChild(dt);
      volunteerSummaryBody.appendChild(dd);
    });

    volunteerStatus.textContent = 'Thank you! Your volunteer request has been submitted. We\'ll reach out soon.';
    volunteerSummary.hidden = false;
    volunteerForm.reset();
    volunteerSummary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });
}
