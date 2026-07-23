class SiteHeader extends HTMLElement {
  connectedCallback() {
    const section = location.pathname.split('/')[1];

    // Usage: active.about, active.articles, etc.
    const active = {
      [section]: true
    };

    const h1 = section ? '<h1><a href="/">Mad Egg Labs</a></h1>' : '<h1>Mad Egg Labs</h1>';

    const nav = section ? '' : `
      <nav>
        <p>
          <a href="#about">About</a> •
          <a href="#services">Services</a> •
          <a href="#contact">Contact</a>
        </p>
      </nav>
    `;

    const logo = 'apps' === section ? 'hat-egg.png' : 'mad-egg.png';

    this.innerHTML = `
      <header>
        <figure aria-hidden="true">
          <img src="/assets/img/${logo}" alt="">
        </figure>
        ${h1}
        ${nav}
      </header>
    `;

    if (section) {
      // matches <a href="#about">, <a href="/about">, <a href="/about/">, etc.
      const activeLink = this.querySelector(`nav a[href*="${section}"]`);
      if (activeLink) {
        activeLink.setAttribute('aria-current', 'page');
        activeLink.classList.add('active');
      }
    }
  }
}

customElements.define('site-header', SiteHeader);
