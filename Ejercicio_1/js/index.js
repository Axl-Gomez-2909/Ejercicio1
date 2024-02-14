document.getElementById('rectForm').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateArea();
  });
  
  function calculateArea() {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
  
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
      document.getElementById('result').innerHTML = '<div class="alert alert-danger" role="alert">Por favor, ingresa valores válidos para la longitud y el ancho.</div>';
      return;
    }
  
    const area = length * width;
    document.getElementById('result').innerHTML = `<div class="alert alert-success" role="alert">El área del rectángulo es: ${area}</div>`;
  }
  
  function clearFields() {
    document.getElementById('rectForm').reset();
    document.getElementById('result').innerHTML = '';
  }