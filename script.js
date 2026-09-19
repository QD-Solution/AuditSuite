// KiToa — contact form
// Replaces the original page's proprietary sc-if / {{ }} templated
// component with a plain, dependency-free submit handler: hide the
// form, show the thank-you card. No network request is made here —
// wire this up to your own backend or a form service when ready.

(function () {
  var form = document.getElementById('contact-form');
  var thanks = document.getElementById('contact-thanks');

  if (!form || !thanks) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    form.hidden = true;
    thanks.hidden = false;
    thanks.setAttribute('tabindex', '-1');
    thanks.focus();
  });
})();
