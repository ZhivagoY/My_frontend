function findNumbers(x) {
  const result = [];
  for (let i = 1; i <= x; i++) {
    for (let k = 0; k <= 10; k++) { // Ограничение по степеням 3, 5, 7 (можно подстроить)
      for (let l = 0; l <= 10; l++) {
        for (let m = 0; m <= 10; m++) {
          if (3**k * 5**l * 7**m === i) {
            result.push(i);
            break; // Если число найдено, переходим к следующему
          }
        }
      }
    }
  }
  return result;
}

while (true) {
  const inputX = prompt('Введите число x: ');
  const x = parseInt(inputX);
  if (isNaN(x)) {
    alert("Некорректный ввод. Введите число.");
  } else {
    const numbers = findNumbers(x);
    if (numbers.length > 0) {
      alert(`Числа от 1 до ${x}, удовлетворяющие условию: ${numbers.join(', ')}`);
    } else {
      alert("Нет чисел, удовлетворяющих условию.");
    }
    break; // Выход из цикла после успешного ввода
  }
}
