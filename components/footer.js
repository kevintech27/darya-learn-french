class SiteFooter extends HTMLElement {
  connectedCallback() {
    const base = this.getAttribute('data-base') || './';
    const currentYear = new Date().getFullYear();

    this.innerHTML = `
      <style>
        /* ── CSS ENCAPSULÉ DU FOOTER ── */
        .site-footer-wrapper {
          background: #101e30;
          padding: 64px 0 32px;
          text-align: left;
          color: rgba(255, 255, 255, 0.6);
          width: 100%;
          font-family: 'Source Sans 3', sans-serif;
        }
        
        .site-footer-inner {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px 40px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .site-footer-brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }
        
        .site-footer-brand-name span { color: #C9A96E; }

        .site-footer-tagline { font-size: 0.9rem; line-height: 1.6; max-width: 260px; margin-bottom: 20px; }

        .site-footer-col-title { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #dbbe93; margin-bottom: 16px; }

        .site-footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; padding: 0; margin: 0; }

        .site-footer-links a { color: rgba(255,255,255,0.7); text-decoration: none; transition: color 0.2s; font-size: 0.9rem; }

        .site-footer-links a:hover { color: #dbbe93; }

        .site-footer-bottom { max-width: 1160px; margin: 0 auto; padding: 24px 24px 0; display: flex; justify-content: space-between; align-items: center; font-size: 0.85rem; }

        /* ── STYLES DES BOUTONS DE LANGUES DU FOOTER ── */
        .footer-lang-btn {
          padding: 4px 12px; 
          border-radius: 100px; 
          border: none; 
          font-weight: 700; 
          font-size: 0.75rem; 
          cursor: pointer; 
          transition: all 0.2s;
        }
        
        /* Quand le site est en Français (par défaut) */
        body:not(.en) #btn-fr-footer { background: #fff; color: #1B2E4B; }
        body:not(.en) #btn-en-footer { background: transparent; color: rgba(255,255,255,0.6); }
        body:not(.en) #btn-en-footer:hover { color: #dbbe93; }
        
        /* Quand le site est en Anglais */
        body.en #btn-en-footer { background: #fff; color: #1B2E4B; }
        body.en #btn-fr-footer { background: transparent; color: rgba(255,255,255,0.6); }
        body.en #btn-fr-footer:hover { color: #dbbe93; }
        
        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .site-footer-inner { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 600px) {
          .site-footer-inner { grid-template-columns: 1fr; }
          .site-footer-bottom { flex-direction: column; text-align: center; gap: 16px; }
        }
      </style>

      <div class="site-footer-wrapper">
        <div class="site-footer-inner">
          <div class="site-footer-col">
            <div class="site-footer-brand-name">Darya<span>.</span></div>
            <p class="site-footer-tagline lang-fr">Cours de français individuels en visio, pour adultes motivés dans le monde entier.</p>
            <p class="site-footer-tagline lang-en">Individual online French lessons for motivated adults worldwide.</p>
            <div class="site-footer-links" style="flex-direction: row; gap: 16px;">
              <a href="https://instagram.com/daryalearnfrench" target="_blank" rel="noopener">Instagram ↗</a>
              <a href="https://linkedin.com/in/darya-feral-french-teacher-fle" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
          
          <div class="site-footer-col">
            <div class="site-footer-col-title lang-fr">Programmes</div>
            <div class="site-footer-col-title lang-en">Programs</div>
            <ul class="site-footer-links">
              <li><a href="${base}programmes.html" class="lang-fr">Présentation des programmes</a><a href="${base}programmes.html" class="lang-en">Programs overview</a></li>
              <li><a href="${base}programme-complet.html" class="lang-fr">Programme Complet</a><a href="${base}programme-complet.html" class="lang-en">Complete Program</a></li>
              <li><a href="${base}delf-dalf.html" class="lang-fr">Préparation DELF-DALF</a><a href="${base}delf-dalf.html" class="lang-en">DELF-DALF Prep</a></li>
              <li><a href="${base}conversation.html" class="lang-fr">Cours de Conversation</a><a href="${base}conversation.html" class="lang-en">Conversation Classes</a></li>
              <li><a href="${base}cours-groupe.html" class="lang-fr">Cours en Groupe</a><a href="${base}cours-groupe.html" class="lang-en">Group Classes</a></li>
            </ul>
          </div>

          <div class="site-footer-col">
            <div class="site-footer-col-title lang-fr">Informations</div>
            <div class="site-footer-col-title lang-en">Information</div>
            <ul class="site-footer-links">
              <li><a href="${base}a-propos.html" class="lang-fr">À propos de moi</a><a href="${base}a-propos.html" class="lang-en">About me</a></li>
              <li><a href="${base}faq.html">FAQ</a></li>
              <!-- <li><a href="${base}blog.html">Blog</a></li> -->
              <li><a href="${base}contact.html">Contact</a></li>
              <li><a href="${base}tarifs.html" class="lang-fr">Tarifs</a><a href="${base}tarifs.html" class="lang-en">Pricing</a></li>
            </ul>
          </div>

          <div class="site-footer-col">
            <div class="site-footer-col-title lang-fr">Légal</div>
            <div class="site-footer-col-title lang-en">Legal</div>
            <ul class="site-footer-links">
              <li><a href="${base}mentions-legales.html" class="lang-fr">Mentions légales</a><a href="${base}mentions-legales.html" class="lang-en">Legal notice</a></li>
            </ul>
          </div>
        </div>
        
        <div class="site-footer-bottom">
          <div class="lang-fr">© ${currentYear} Darya Learn French — Tous droits réservés</div>
          <div class="lang-en">© ${currentYear} Darya Learn French — All rights reserved</div>
          
          <div class="lang-switcher" style="background: rgba(255,255,255,0.05); padding: 4px; border-radius: 100px; display: inline-flex; gap: 4px;">
            <button class="footer-lang-btn" id="btn-fr-footer">FR</button>
            <button class="footer-lang-btn" id="btn-en-footer">EN</button>
          </div>
        </div>
      </div>
    `;

    // Le script transmet simplement les clics du footer vers le header
    const btnFr = this.querySelector('#btn-fr-footer');
    const btnEn = this.querySelector('#btn-en-footer');

    btnFr.addEventListener('click', () => {
      const headerBtnFr = document.getElementById('btn-fr');
      if (headerBtnFr) headerBtnFr.click();
    });

    btnEn.addEventListener('click', () => {
      const headerBtnEn = document.getElementById('btn-en');
      if (headerBtnEn) headerBtnEn.click();
    });

    /* ── Sticky CTA : hide on scroll down, show on scroll up ── */
    (function initStickyCtaScroll() {
      const cta = document.querySelector('.sticky-cta');
      if (!cta) return;

      let lastScrollY = window.scrollY;
      let ticking = false;

      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            const currentScrollY = window.scrollY;
            const scrollingDown = currentScrollY > lastScrollY;

            // Only apply on mobile (CTA is hidden on desktop anyway)
            if (window.innerWidth <= 768) {
              if (scrollingDown && currentScrollY > 80) {
                // Hide: add class → CSS transition plays
                cta.classList.add('is-hidden');
              } else {
                // Show: remove class → CSS transition plays
                cta.classList.remove('is-hidden');
              }
            }

            lastScrollY = currentScrollY;
            ticking = false;
          });
          ticking = true;
        }
      }

      window.addEventListener('scroll', onScroll, { passive: true });
    })();
  }
}

customElements.define('site-footer', SiteFooter);