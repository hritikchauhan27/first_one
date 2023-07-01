//********************* Bubble sort using reduce function *************//



const bubbleSort = arr => arr.reduce((acc, cur, i) => {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    return arr;
  }, arr.slice());

console.log(bubbleSort([44,7,3,41,76]));
