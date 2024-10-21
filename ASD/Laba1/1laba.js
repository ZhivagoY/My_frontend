function checkBrackets(expression) {
  const stack = [];
  const bracketPairs = {
    ")": "(",
    "}": "{",
    "]": "["
  };

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    if (Object.values(bracketPairs).includes(char)) { // Открывающая скобка
      stack.push(char);
    } else if (char in bracketPairs) { // Закрывающая скобка
      if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
        return false; // Несоответствие открывающей и закрывающей скобки
      }
    }
  }

  return stack.length === 0; // Если стек пуст - все скобки соответствуют
}

while (true) {
  const expression = prompt("Введите строку:");
  if (checkBrackets(expression)) {
    alert("Строка существует.");
  } else {
    alert("Строка не существует.");
  }
}
