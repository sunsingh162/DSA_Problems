/* Insertion sort 
1) Start from 1st index and then compare the current element (arr[1]) to its left elements
2) keep shifting it to right until no shift needed condition comes
3) Insert curr into its current position, Repeat
*/

function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let curr = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > curr){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = curr;
    }
    return arr;
}

console.log(insertionSort([1,6,7,4,2,9]));

//Time complexity is O(n^2) and space complexity is O(1)