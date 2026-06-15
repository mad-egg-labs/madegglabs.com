/* Copyright (c) 2026 Mad Egg Labs, Inc */

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

// dynamically create FAQs using the data embedded on the page
function initFAQs() {
  if (Array.isArray(window.faqs)) {
    const data = window.faqs;
    const container = document.getElementById('faqs');
    if (container) {
      buildFAQs(container, data);
      enableFiltering(container, data);
    }
  }
}

function buildFAQs(container, data) {
  let html = '';
  if (data.length > 0) {
    data.forEach(faq => {
      const {question, answer} = faq;
      html += `
        <details>
          <summary>${question}</summary>
          <p>${answer}</p>
        </details>
      `;
    });
  }
  else {
    html = '<p><strong>No results. 🤔</strong></p>';
  }
  container.innerHTML = html;
}

function createSearchFilter(input) {
  const query = input.toLowerCase();
  return faq => {
    const matchQuestion = faq.question.toLowerCase().includes(query);
    const matchAnswer = faq.answer.toLowerCase().includes(query);
    return matchQuestion || matchAnswer;
  };
}

function enableFiltering(container, data) {
  // prevent the page from reloading if the user hits `return`
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', evt => {
      evt.preventDefault();
    });
  }
  // enable filtering by partial string matches of either questions or answers
  const search = document.querySelector('input[type=search]');
  if (search) {
    search.addEventListener('input', debounce(evt => {
      const filter = createSearchFilter(search.value);
      const results = data.filter(filter);
      buildFAQs(container, results);
    }));
  }
}

function debounce(callback, delay = 250) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => callback(...args), delay);
  };
};

function init() {
  insertEmailLinks();
  initFAQs();
}

document.addEventListener('DOMContentLoaded', init);
