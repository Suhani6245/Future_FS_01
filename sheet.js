// Future Interns - Form Submission Script
// This script handles form submissions and displays a thank you popup
const forms = document.querySelectorAll('form');
const popup = document.getElementById('thank-you-popup');

  forms.forEach(form => {
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
          alert("Oops! Something went wrong.");
        }
      })
      .catch(error => {
        alert("There was an error submitting the form.");
      });
    });
  });

  function closePopup() {
    popup.style.display = 'none';
  }


  