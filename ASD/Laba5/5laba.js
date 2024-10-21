function selectionSort(arr) {
    // Длина массива
    const n = arr.length;
  
    // Внешний цикл для итерации по всем элементам
    for (let i = 0; i < n - 1; i++) {
      // Найти индекс минимального элемента в несортированной части массива
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      // Поменять местами минимальный элемент с текущим элементом
      if (minIndex !== i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  
    // Вернуть отсортированный массив
    return arr;
  }
  
  // Пример использования
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = selectionSort(numbers);
  console.log(sortedNumbers); // Вывод: [1, 2, 5, 5, 6, 9]