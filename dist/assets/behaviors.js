// Copyright (c) Mad Egg Labs, Inc 2026

function insertEmailLinks() {
  document.querySelectorAll('.email-link').forEach(el => {
    const user = el.dataset.user || 'hello';
    const domain = 'madegglabs.com';
    const email = `${user}@${domain}`;
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.textContent = email;
    el.replaceWith(link);
  });
}

function init() {
  insertEmailLinks();
}

document.addEventListener('DOMContentLoaded', init);
