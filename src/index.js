import validator from './validator.js';
//boton de suscripcion que despliega ventana modal en bloque 
document.getElementById('openModal').addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'block';
});
// click que al cerrar hace invisible el bloque de la ventana modal 
document.getElementsByClassName('close')[0].addEventListener('click', function() {
  document.getElementById('myModal').style.display = 'none';
});

document.getElementById('validaTC').addEventListener('click', function() {
  const creditCardNumber = document.getElementById('inputNumero').value;
  // Aplica la máscara al número de tarjeta utilizando validator.maskify()
  const isValidCard = validator.isValid(creditCardNumber);
  if(isValidCard)
  {
    const maskedNumber =  validator.maskify(creditCardNumber);
    const formattedNumber = formatCardNumber(maskedNumber);
    document.getElementById('inputNumero').value = formattedNumber;
    alert("subcripcion realizada con exito ");

  }
  else{
    alert("Tarjeta invalida");
  }

});

document.getElementById('inputNumero').addEventListener('input', function(event) {
  // Obtiene el valor del campo inputNumero
  const cardNumber = event.target.value;

  // Formatea el número de tarjeta utilizando la función formatCardNumber
  const formattedNumber = formatCardNumber(cardNumber);
  //4137894711755904
  const isValidCard = validator.isValid(formattedNumber);
  document.getElementById('isvalid').textContent = isValidCard ? "valida" :  "invalida";
  // Asigna el valor formateado de nuevo al campo inputNumero
  event.target.value = formattedNumber;
});

function formatCardNumber(cardNumber) {
  // Elimina todos los espacios en blanco del número de tarjeta
  cardNumber = cardNumber.replace(/\s/g, '');

  // Divide el número de tarjeta en grupos de 4 dígitos
  const groups = cardNumber.match(/.{1,4}/g);

  // Si no hay grupos válidos, devuelve el número de tarjeta original sin cambios
  if (!groups) {
    return cardNumber;
  }

  // Une los grupos con espacios en blanco para formatear el número de tarjeta
  const formattedNumber = groups.join(' ');

  return formattedNumber;
}