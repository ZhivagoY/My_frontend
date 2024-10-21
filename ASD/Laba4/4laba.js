function combSort(arr) {
    let gap = arr.length;
    let shrinkFactor = 1.3;
    let swapped = true;
  
    while (gap > 1 || swapped) {
      gap = Math.floor(gap / shrinkFactor);
      if (gap < 1) {
        gap = 1;
      }
      swapped = false;
      for (let i = 0; i < arr.length - gap; i++) {
        if (arr[i] > arr[i + gap]) {
          [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]]; // Обмен элементов
          swapped = true;
        }
      }
    }
    return arr;
  }
  
  // Пример использования
  const numbers = [5, 1, 4, 2, 8];
  const sortedNumbers = combSort(numbers);
  console.log("Отсортированная последовательность:", sortedNumbers); // [1, 2, 4, 5, 8]