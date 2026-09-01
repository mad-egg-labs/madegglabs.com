class SiteHeader extends HTMLElement {
  connectedCallback() {
    // parse path to understand what page we're on
    const parts   = location.pathname.split('/').filter(Boolean);
    const section = parts[0] || '';
    const slug    = parts[1] || null;
    const is404   = this.dataset.status === '404' || section.includes('404');

    // build the parts
    const logo = this.buildLogo(section, is404);
    const h1   = this.buildH1(section);
    const nav  = this.buildNav(section);

    this.innerHTML = `
      <header>
        ${logo}
        ${h1}
        ${nav}
      </header>
    `;

    // no breadcrumb on the /articles landing page
    if ('articles' === section && slug) {
      window.requestAnimationFrame(() => {
        this.buildBreadcrumb(slug);
      });
    }
  }

  // figure out what logo to use
  buildLogo(section, is404) {
    // set which egg to show
    let logo = 'mad-egg';
    if (is404) {
      logo = 'construction-egg';
    }
    else if ('apps' === section) {
      logo = 'hat-egg';
    }
    return `
      <figure aria-hidden="true">
        <picture>
          <source srcset="/assets/img/${logo}.webp" type="image/webp">
          <img src="/assets/img/${logo}.png" fetchpriority="high" alt="">
        </picture>
      </figure>
    `;
  }

  // figure out whether to link the <h1>
  buildH1(section) {
    return section ? '<h1><a href="/">Mad Egg Labs</a></h1>' : '<h1>Mad Egg Labs</h1>';
  }

  // figure out whether there's an in-page nav
  buildNav(section) {
    return section ? '' : `
      <nav>
        <p>
          <a href="#about">About</a> •
          <a href="#services">Services</a> •
          <a href="#contact">Contact</a>
        </p>
      </nav>
    `;
  }

  // currently designed only for pages under /articles
  buildBreadcrumb(slug) {
    // grab reference to element where we'll insert our HTML: <main><article>
    const article = document.querySelector('main > article');

    if (!article) {
      console.warn('No <article> element defined');
      return;
    }

    // grab reference to the page's title: <main><article><header><h2>
    const h2 = article.querySelector('header > h2');

    if (!h2) {
      console.warn('No <h2> element defined');
      return;
    }

    const title = h2.innerText;

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
  }
}

customElements.define('site-header', SiteHeader);
