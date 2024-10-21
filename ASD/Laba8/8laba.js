function radixSort(arr) {
    const max = Math.max(...arr);
    let exp = 1;
  
    while (max / exp >= 1) {
      const buckets = Array.from({ length: 10 }, () => []);
  
      // Распределить элементы по корзинам
      for (let i = 0; i < arr.length; i++) {
        const digit = Math.floor((arr[i] / exp) % 10);
        buckets[digit].push(arr[i]);
      }
  
      // Объединить корзины
      let k = 0;
      for (let i = 0; i < buckets.length; i++) {
        for (let j = 0; j < buckets[i].length; j++) {
          arr[k++] = buckets[i][j];
        }
      }
  
      exp *= 10;
    }
  
    return arr;
  }
  
  // Пример использования
  const numbers = [5, 2, 9, 1, 5, 6];
  const sortedNumbers = radixSort(numbers);
  console.log(sortedNumbers); // Вывод: [1, 2, 5, 5, 6, 9]