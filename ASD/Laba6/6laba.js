function insertionSort(arr) {
    // Длина массива
    const n = arr.length;
  
    // Внешний цикл для итерации по всем элементам, кроме первого
    for (let i = 1; i < n; i++) {
      // Сохранить текущий элемент
      let key = arr[i];
  
      // Внутренний цикл для сравнения текущего элемента с предыдущими
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        // Сдвинуть предыдущие элементы вправо
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Вставить текущий элемент на правильное место
      arr[j + 1] = key;
    }
  
    // Вернуть отсортированный массив
    return arr;
  }
  
  // Пример использования
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = insertionSort(numbers);
  console.log(sortedNumbers); // Вывод: [1, 2, 5, 5, 6, 9]