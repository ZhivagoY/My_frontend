function shellSort(arr) {
    const n = arr.length;
  
    // Начальный интервал
    let gap = Math.floor(n / 2);
  
    // Пока интервал больше 0
    while (gap > 0) {
      // Пройти по массиву с текущим интервалом
      for (let i = gap; i < n; i++) {
        // Сохранить текущий элемент
        let key = arr[i];
  
        // Сравнить текущий элемент с предыдущими элементами с интервалом
        let j = i;
        while (j >= gap && arr[j - gap] > key) {
          // Сдвинуть предыдущие элементы вправо
          arr[j] = arr[j - gap];
          j -= gap;
        }
  
        // Вставить текущий элемент на правильное место
        arr[j] = key;
      }
  
      // Уменьшить интервал
      gap = Math.floor(gap / 2);
    }
  
    // Вернуть отсортированный массив
    return arr;
  }
  
  // Пример использования
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = shellSort(numbers);
  console.log(sortedNumbers); // Вывод: [1, 2, 5, 5, 6, 9]