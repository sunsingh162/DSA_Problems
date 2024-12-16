/* Merge Sort
1) Divide the array into half and then compare the elements of left and right. 
2) Push the smaller element between left and right side array list.
3) Shift the smaller element index to right until it reaches out of bound index for left or right array.
4) When left or right array is complete, there will be some element left in left and right array.
5) Add the remaining elements in result.
*/

function mergeSort(arr){
    if(arr.length === 1){
        return arr
    }
    let middle = Math.floor(arr.length/2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right){
    let result = [];
    let leftBox = 0;
    let rightBox = 0;

    while(leftBox < left.length && rightBox < right.length){
        if(left[leftBox] < right[rightBox]){
            result.push(left[leftBox]);
            leftBox++;
        } else {
            result.push(right[rightBox]);
            rightBox++;
        }
    }

    // Add any remaining elements from the left array
    while (leftBox < left.length) {
        result.push(left[leftBox]);
        leftBox++;
    }

    // Add any remaining elements from the right array
    while (rightBox < right.length) {
        result.push(right[rightBox]);
        rightBox++;
    }
    return result
}

console.log(mergeSort([6,3,1,5,4,2]));

/* Time complexity - 
1) Divide Step: Happens log n times.
2) Merge Step: At each level of recursion, all 𝑛 elements are processed (merging two halves).
Total Time Complexity = O(n⋅logn).
*/
