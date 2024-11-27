function isPrime(num) {
    // Números menores ou iguais a 1 não são primos
    if (num <= 1) {
      return false;
    }
  
    // Verifica se o número é divisível por qualquer número entre 2 e a raiz quadrada de 'num'
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; // O número não é primo
      }
    }
  
    return true; // O número é primo
  }
  
  // Testando a função com diferentes números
  console.log(isPrime(7));  // true
  console.log(isPrime(10)); // false
  console.log(isPrime(1));  // false
  console.log(isPrime(2));  // true
  