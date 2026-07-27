// Copyright (c) 2026 Mad Egg Labs, Inc

function insertEmailLinks() {
  document.querySelectorAll('.email-link').forEach(el => {
    const user = el.dataset.user || 'hello';
    const domain = 'madegglabs.com';
    const email = `${user}@${domain}`;
    const content = el.innerText;
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.textContent = content || email;
    el.replaceWith(link);
  });
}

// enable dynamic filtering of FAQs
function initFAQs() {
  const container = document.getElementById('faqs');
  const data = [];

  // build up filtering data from the FAQs on the page
  const qs = container.querySelectorAll('details summary');
  const as = container.querySelectorAll('details p');

  for (let i = 0; i < qs.length; i += 1) {
    const question = qs[i].innerText;
    const answer   = as[i].innerText;
    data.push({ question, answer });
  }

  if (container) {
    enableFiltering(container, data);
  }
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

// we load this file as a module, so need to be defensive about when it loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
}
else {
  init();
}
