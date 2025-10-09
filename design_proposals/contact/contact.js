(() => {
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');

  if (!form) return;

  function setError(id, message) {
    const p = document.getElementById(`error-${id}`);
    if (p) p.textContent = message || '';
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').toLowerCase());
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    result.textContent = '';
    result.className = 'form__result';

    const data = Object.fromEntries(new FormData(form).entries());

    // Basic validation
    let ok = true;
    setError('firstName');
    setError('lastName');
    setError('email');
    setError('message');
    setError('topic');

    if (!data.firstName) { setError('firstName', 'Bitte ausfüllen.'); ok = false; }
    if (!data.lastName) { setError('lastName', 'Bitte ausfüllen.'); ok = false; }
    if (!data.email || !validateEmail(data.email)) { setError('email', 'Bitte gültige E‑Mail angeben.'); ok = false; }
    if (!data.topic) { setError('topic', 'Bitte Thema wählen.'); ok = false; }
    if (!data.message || String(data.message).trim().length < 10) { setError('message', 'Bitte mindestens 10 Zeichen.'); ok = false; }
    if (!form.privacy.checked) { result.textContent = 'Bitte stimmen Sie der Datenschutzerklärung zu.'; result.classList.add('form__result--err'); ok = false; }

    if (!ok) return;

    // Simulate submission. Replace with your API call.
    try {
      // Example: await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      await new Promise(r => setTimeout(r, 600));
      form.reset();
      result.textContent = 'Vielen Dank! Wir melden uns zeitnah.';
      result.classList.add('form__result--ok');
    } catch (err) {
      result.textContent = 'Senden fehlgeschlagen. Bitte später erneut versuchen.';
      result.classList.add('form__result--err');
    }
  });
})();

