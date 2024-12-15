// Bubble sort algorithm to sort an array by iterating over the array until the condition becomes false or swapping cannot
// be done anymore.

function bubbleSort(arr) {
  let isSwap;
  let n = arr.length - 1;
  do {
    isSwap = false;
    for (let i = 0; i < n; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
    n--;    // This will reduce comparisons and improve performance (Optional)
  } while (isSwap);
  {
    return arr;
  }
}

console.log(bubbleSort([4, 2, 3, 1]));

// Time complexity will be O(n^2) and space complexity will be O(1).
