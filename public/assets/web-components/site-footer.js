class SiteFooter extends HTMLElement {
  connectedCallback() {
    const year = new Date().getFullYear();

    this.innerHTML = `
      <footer>
        <p>
          &copy; ${year} Mad Egg Labs, LLC. All rights reserved.
          <a href="/privacy/">Privacy</a>
        </p>
        <p class="footnotes">
          Mad Egg logo created from vector art from <a href="https://www.vecteezy.com/">Vecteezy</a>.
        </p>
      </footer>
    `;
  }
}

customElements.define('site-footer', SiteFooter);
