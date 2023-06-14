const validator = {
  isValid: function(cardNumber) {
    if (cardNumber.length < 10) {
      return false;
    }
    const digits = cardNumber.split('').map(Number);
      
    for (let i = digits.length - 2; i >= 0; i -= 2) {
      digits[i] *= 2;
  
      if (digits[i] >= 10) {
        digits[i] -= 9;
      }
    }
    const sum = digits.reduce((acc, curr) => acc + curr, 0);
    return sum % 10 === 0;
  },
  maskify: function(creditCardNumber) {
    const nonSpaceChars = creditCardNumber.replace(/ /g, ''); // Eliminar espacios en blanco
    const maskedNumber = nonSpaceChars.slice(0, -4).replace(/./g, '#') + nonSpaceChars.slice(-4);
    return maskedNumber;
  }
};

export default validator;  