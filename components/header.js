class SiteHeader extends HTMLElement {
  connectedCallback() {
    const active = this.getAttribute('data-active') || '';
    const base = this.getAttribute('data-base') || './';

    const isActive = (key) => active === key ? 'class="active"' : '';

    this.innerHTML = `
    <style>
    /* ══ NAVBAR CSS EMBARQUÉ ══ */
    .navbar { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255,255,255,0.97); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); border-bottom: 1px solid var(--border, #dde3ec); transition: box-shadow var(--transition, 0.25s ease); font-family: var(--font-body, 'Source Sans 3', sans-serif); }
    .navbar.scrolled { box-shadow: 0 2px 24px var(--shadow, rgba(27,46,75,0.10)); }
    .navbar__inner { display: flex; align-items: center; justify-content: space-between; height: 68px; max-width: var(--container, 1160px); margin: 0 auto; padding: 0 24px; gap: 32px; }
    .navbar__logo { font-family: var(--font-display, 'Playfair Display', serif); font-size: 1.3rem; font-weight: 700; color: var(--navy, #1B2E4B); letter-spacing: -0.02em; text-decoration: none; flex-shrink: 0; line-height: 1; }
    .navbar__logo span { color: var(--gold, #C9A96E); }
    .navbar__links { display: flex; align-items: center; gap: 0; list-style: none; flex: 1; margin: 0; padding: 0; }
    .navbar__links > li { position: relative; }
    .navbar__links > li > a { display: block; padding: 8px 14px; font-size: 0.865rem; font-weight: 500; color: var(--text-mid, #3d4f6b); text-decoration: none; transition: color var(--transition, 0.25s ease); position: relative; white-space: nowrap; }
    .navbar__links > li > a::after { content: ''; position: absolute; bottom: 2px; left: 14px; right: 14px; height: 2px; background: var(--gold, #C9A96E); transform: scaleX(0); transition: transform var(--transition, 0.25s ease); border-radius: 2px; }
    .navbar__links > li > a:hover, .navbar__links > li > a.active { color: var(--navy, #1B2E4B); }
    .navbar__links > li > a:hover::after, .navbar__links > li > a.active::after { transform: scaleX(1); }
    .navbar__links > li > a.active { font-weight: 600; }
    .navbar__links > li.has-dropdown > a { padding-right: 22px; }
    .navbar__links > li.has-dropdown > a::before { content: ''; position: absolute; right: 8px; top: 50%; transform: translateY(-60%) rotate(45deg); width: 5px; height: 5px; border-right: 1.5px solid currentColor; border-bottom: 1.5px solid currentColor; transition: transform var(--transition, 0.25s ease); }
    .navbar__links > li.has-dropdown:hover > a::before, .navbar__links > li.has-dropdown.open > a::before { transform: translateY(-30%) rotate(-135deg); }
    .navbar__dropdown { position: absolute; top: calc(100% + 6px); left: 0; min-width: 240px; background: var(--white, #FFFFFF); border: 1px solid var(--border, #dde3ec); border-radius: 10px; box-shadow: 0 12px 40px rgba(27,46,75,0.14); padding: 8px 0; opacity: 0; visibility: hidden; transform: translateY(-6px); transition: opacity 0.18s ease, transform 0.18s ease, visibility 0.18s; list-style: none; margin: 0; }
    .navbar__links > li.has-dropdown:hover .navbar__dropdown, .navbar__links > li.has-dropdown.open .navbar__dropdown { opacity: 1; visibility: visible; transform: translateY(0); }
    .navbar__dropdown li a { display: flex; align-items: center; gap: 10px; padding: 10px 18px; font-size: 0.85rem; font-weight: 500; color: var(--text-mid, #3d4f6b); text-decoration: none; transition: background var(--transition, 0.25s ease), color var(--transition, 0.25s ease); }
    .navbar__dropdown li a:hover { background: rgba(201,169,110,0.08); color: var(--navy, #1B2E4B); }
    .navbar__dropdown li a.active { color: var(--navy, #1B2E4B); font-weight: 600; background: rgba(201,169,110,0.10); }
    .navbar__dropdown li a .dd-icon { width: 28px; height: 28px; border-radius: 6px; background: rgba(201,169,110,0.12); display: flex; align-items: center; justify-content: center; font-size: 0.8rem; flex-shrink: 0; }
    .navbar__dropdown li + li { border-top: 1px solid var(--border, #dde3ec); }
    .navbar__right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
    .lang-switcher { display: flex; align-items: center; background: rgba(27,46,75,0.06); border-radius: 100px; padding: 3px; gap: 2px; }
    .lang-btn { padding: 4px 12px; border-radius: 100px; border: none; background: transparent; font-family: var(--font-body, sans-serif); font-size: 0.78rem; font-weight: 600; color: var(--text-mid, #3d4f6b); cursor: pointer; transition: background var(--transition, 0.25s ease), color var(--transition, 0.25s ease); letter-spacing: 0.03em; }
    .lang-btn.active { background: var(--navy, #1B2E4B); color: var(--white, #FFFFFF); box-shadow: 0 1px 4px var(--shadow, rgba(27,46,75,0.10)); }
    .navbar__cta { display: inline-flex; align-items: center; gap: 6px; padding: 9px 20px; border-radius: 100px; background: var(--gold, #C9A96E); color: var(--navy, #1B2E4B); font-family: var(--font-body, sans-serif); font-size: 0.83rem; font-weight: 700; text-decoration: none; box-shadow: 0 4px 14px rgba(201,169,110,0.35); transition: background var(--transition, 0.25s ease), transform var(--transition, 0.25s ease), box-shadow var(--transition, 0.25s ease); white-space: nowrap; letter-spacing: 0.01em; }
    .navbar__cta:hover { background: var(--gold-light, #dbbe93); transform: translateY(-1px); box-shadow: 0 6px 20px rgba(201,169,110,0.45); }
    .navbar__cta .cta-arrow { font-size: 0.9em; transition: transform var(--transition, 0.25s ease); }
    .navbar__cta:hover .cta-arrow { transform: translateX(2px); }
    .nav-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; padding: 6px; background: none; border: none; margin-left: 4px; }
    .nav-toggle span { width: 24px; height: 2px; background: var(--navy, #1B2E4B); border-radius: 2px; transition: all 0.22s ease; display: block; }
    @media (max-width: 900px) {
      .navbar__links { display: none; flex-direction: column; align-items: stretch; gap: 0; position: absolute; top: 68px; left: 0; right: 0; background: var(--white, #FFFFFF); border-bottom: 1px solid var(--border, #dde3ec); box-shadow: 0 12px 32px var(--shadow, rgba(27,46,75,0.10)); padding: 12px 0 16px; z-index: 999; margin: 0; }
      .navbar__links.mobile-open { display: flex; }
      .navbar__links > li > a { padding: 12px 24px; font-size: 0.95rem; }
      .navbar__links > li > a::after { display: none; }
      .navbar__links > li.has-dropdown > a::before { right: 20px; }
      .navbar__dropdown { position: static; opacity: 1; visibility: visible; transform: none; box-shadow: none; border: none; border-radius: 0; background: rgba(27,46,75,0.03); padding: 0; display: none; }
      .navbar__links > li.has-dropdown.open .navbar__dropdown { display: block; }
      .navbar__dropdown li a { padding-left: 40px; font-size: 0.875rem; }
      .navbar__dropdown li + li { border-top: none; }
      .nav-toggle { display: flex; }
      .navbar__cta { display: none; }
      .navbar__right { gap: 10px; }
      .navbar__cta-mobile { display: block; margin: 12px 20px 0; text-align: center; }
      .navbar__cta-mobile a { display: block; padding: 12px 20px; border-radius: 100px; background: var(--gold, #C9A96E); color: var(--navy, #1B2E4B); font-weight: 700; font-size: 0.9rem; text-decoration: none; box-shadow: 0 4px 14px rgba(201,169,110,0.35); }
    }
    @media (min-width: 901px) { .navbar__cta-mobile { display: none; } }
    </style>

    <header class="navbar" id="navbar" role="banner">
      <div class="navbar__inner">
        <a href="${base}index.html" class="navbar__logo" aria-label="Darya Learn French — Accueil">Darya<span>.</span></a>

        <ul class="navbar__links" id="nav-links" role="list">
          <li class="has-dropdown">
            <a href="${base}programmes.html" aria-haspopup="true" aria-expanded="false" id="dd-trigger" ${isActive('programmes')}>
              <span class="lang-fr" lang="fr">Programmes</span><span class="lang-en" lang="en">Programs</span>
            </a>
            <ul class="navbar__dropdown" role="menu">
              <li role="none"><a href="${base}programmes.html" role="menuitem"><span class="dd-icon">🗂️</span><span><span class="lang-fr" lang="fr">Présentation des programmes</span><span class="lang-en" lang="en">Programs overview</span></span></a></li>
              <li role="none"><a href="${base}programme-complet.html" role="menuitem"><span class="dd-icon">📘</span><span><span class="lang-fr" lang="fr">Programme Complet</span><span class="lang-en" lang="en">Complete Program</span></span></a></li>
              <li role="none"><a href="${base}delf-dalf.html" role="menuitem"><span class="dd-icon">🎯</span><span><span class="lang-fr" lang="fr">Préparation DELF-DALF</span><span class="lang-en" lang="en">DELF-DALF Preparation</span></span></a></li>
              <li role="none"><a href="${base}cours-conversation.html" role="menuitem"><span class="dd-icon">💬</span><span><span class="lang-fr" lang="fr">Cours de conversation</span><span class="lang-en" lang="en">Conversation Classes</span></span></a></li>
              <li role="none"><a href="${base}cours-groupe.html" role="menuitem"><span class="dd-icon">👥</span><span><span class="lang-fr" lang="fr">Cours en Groupe</span><span class="lang-en" lang="en">Group Classes</span></span></a></li>
            </ul>
          </li>
          <li><a href="${base}tarifs.html" ${isActive('tarifs')}><span class="lang-fr" lang="fr">Tarifs</span><span class="lang-en" lang="en">Pricing</span></a></li>
          <li><a href="${base}a-propos.html" ${isActive('a-propos')}><span class="lang-fr" lang="fr">À propos</span><span class="lang-en" lang="en">About</span></a></li>
          <li><a href="${base}faq.html" ${isActive('faq')}>FAQ</a></li>
          <li><a href="${base}blog.html" ${isActive('blog')}>Blog</a></li>
          <li><a href="${base}contact.html" ${isActive('contact')}><span class="lang-fr" lang="fr">Contact</span><span class="lang-en" lang="en">Contact</span></a></li>
          <li class="navbar__cta-mobile"><a href="${base}contact.html"><span class="lang-fr" lang="fr">Cours d'essai gratuit →</span><span class="lang-en" lang="en">Free trial class →</span></a></li>
        </ul>

        <div class="navbar__right">
          <div class="lang-switcher" role="group" aria-label="Changer la langue / Switch language">
            <button class="lang-btn active" id="btn-fr" aria-label="Français">FR</button>
            <button class="lang-btn" id="btn-en" aria-label="English">EN</button>
          </div>
          <a href="${base}contact.html" class="navbar__cta lang-fr" aria-label="Réserver un cours d'essai gratuit">Cours d'essai gratuit <span class="cta-arrow">→</span></a>
          <a href="${base}contact.html" class="navbar__cta lang-en" aria-label="Book a free trial class">Free trial class <span class="cta-arrow">→</span></a>
          <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-links" aria-label="Menu"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;

    // === LOGIQUE JAVASCRIPT DU HEADER ===

    // 1. Gestion des langues (FR / EN)
    const updateLangUI = (lang) => {
      document.body.className = lang;
      document.documentElement.lang = lang;
      localStorage.setItem('dlf-lang', lang);

      // Met à jour les boutons de langue
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.id.includes(lang));
      });
    };

    // On écoute les clics sur FR et EN
    this.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.id.replace('btn-', '');
        updateLangUI(lang);
      });
    });

    // Au chargement, on remet la langue choisie précédemment
    const savedLang = localStorage.getItem('dlf-lang') || 'fr';
    updateLangUI(savedLang);

    // 2. Gestion du Scroll (Ombre du header)
    const navbar = this.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (navbar) {
        if (window.scrollY > 20) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    });

    // 3. Menu Mobile (Hamburger)
    const toggle = this.querySelector('.nav-toggle');
    const navList = this.querySelector('.navbar__links');

    if (toggle && navList) {
      toggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('mobile-open');
        toggle.setAttribute('aria-expanded', isOpen);

        // Animation des 3 barres pour faire une croix
        const spans = toggle.querySelectorAll('span');
        if (isOpen) {
          spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
          spans[1].style.opacity = '0';
          spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
          spans[0].style.transform = '';
          spans[1].style.opacity = '1';
          spans[2].style.transform = '';
        }
      });
    }

    // 4. Sous-menu "Programmes" (Dropdown sur mobile)
    const ddParent = this.querySelector('.has-dropdown');
    const ddTrigger = this.querySelector('#dd-trigger');

    if (ddParent && ddTrigger) {
      ddTrigger.addEventListener('click', (e) => {
        if (window.innerWidth <= 900) {
          e.preventDefault(); // Empêche le clic direct sur mobile pour ouvrir le sous-menu
          const isOpen = ddParent.classList.toggle('open');
          ddTrigger.setAttribute('aria-expanded', isOpen);
        }
      });
    }
  }
}

customElements.define('site-header', SiteHeader);