
const scriptURL action= 'https://script.google.com/macros/s/AKfycbwHJwKwvQt2BvOOhnQWwol-mFWcxO0ozxMhEg8qt7ii5G2pY1VihNAO2qgxH-YmuGQs/exec';
const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault();
  
  fetch(scriptURL, { method: 'post', body: new FormData(form)})
    .then(response => {
      showAlert('¡Pedido enviado exitosamente!', 'success');
      form.reset();
      const charCount = document.getElementById('char-count');
      charCount.textContent = '0';
    })
    .catch(error => {
      console.error('Error!', error.message);
      showAlert('Hubo un error al enviar el formulario.', 'error');
      setButtonColor('error');
    });
});

function showAlert(message, type) {
  const alertBox = document.getElementById('alert');
  alertBox.style.display = 'block';
  alertBox.textContent = message;
  alertBox.className = `alert ${type}`;

  setTimeout(() => {
    alertBox.style.display = 'none';
  }, 3000); // Oculta la alerta después de 3 segundos
}

function setButtonColor(type) {
  const submitButton = document.querySelector('.btn');
  if (type === 'error') {
    submitButton.style.backgroundColor = '#f44336'; // Cambia el color del botón a rojo en caso de error
  } else {
    submitButton.style.backgroundColor = '#4CAF50'; // Restaura el color original del botón
  }
}
