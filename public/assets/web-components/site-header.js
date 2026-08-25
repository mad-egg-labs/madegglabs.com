class SiteHeader extends HTMLElement {
  connectedCallback() {
    const buildBreadcrumb = () => {
      // grab reference to element where we'll insert our HTML: <main><article>
      const article = document.querySelector('main > article');

      // grab reference to the page's title: <main><article><header><h2>
      const title = article.querySelector('header > h2').innerText;

      let lis = '';
      const html = `
        <nav aria-label="Breadcrumb">
          <ol class="breadcrumbs">
            <li><a href="/">Home</a></li>
            <li><a href="/articles/">Articles</a></li>
            <li><a href="/articles/${slug}/" aria-current="page">${title}</a></li>
          </ol>
        </nav>
      `;

      article.insertAdjacentHTML('afterbegin', html);
    };

    // parse pathname
    const parts   = location.pathname.split('/');
    const section = parts[1];
    const slug    = parts.length > 2 ? parts[2] : null;

    // are we on a 404 page?
    const is404 = this.dataset.status === '404' || section.includes('404');

    // Usage: active.about, active.articles, etc.
    const active = {
      [section]: true
    };

    // set which egg to show
    let logo = 'mad-egg';
    if (is404) {
      logo = 'construction-egg';
    }
    else if ('apps' === section) {
      logo = 'hat-egg';
    }

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

    // no breadcrumb on the /articles landing page
    if ('articles' === section && slug) {
      document.addEventListener('DOMContentLoaded', buildBreadcrumb);
    }

    this.innerHTML = `
      <header>
        <figure aria-hidden="true">
          <picture>
            <source srcset="/assets/img/${logo}.webp" type="image/webp">
            <img src="/assets/img/${logo}.png" fetchpriority="high" alt="">
          </picture>
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
