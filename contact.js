const form = document.getElementById('contact-form');
  const popup = document.getElementById('thank-you-popup');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        popup.style.display = 'flex';
        form.reset();
      } else {
        alert("Something went wrong. Try again!");
      }
    })
    .catch(error => {
      alert("There was a problem submitting the form.");
    });
  });

  function closePopup() {
    document.getElementById('thank-you-popup').style.display = 'none';
  }