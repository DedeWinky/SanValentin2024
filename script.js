function checkPassword() {
    var enteredDate = document.getElementById('dateInput').value;
    var correctDate = '2022-11-07'; // Nueva fecha deseada en el formato YYYY-MM-DD
  
    if (enteredDate === correctDate) {
      document.getElementById('message').innerHTML = 'Fecha correcta. Redireccionando...';
      // Redirecciona a la página deseada después de ingresar la fecha
      window.location.href = './Flores/index.html'; // Cambia 'otra_pagina.html' por la URL de la página a la que deseas redirigir
    } else {
      document.getElementById('message').innerHTML = 'Fecha incorrecta. Por favor, intenta de nuevo.';
    }
  }