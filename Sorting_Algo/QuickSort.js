/* What algorithm says:-
1) initialize an initial pointer (0th index) and last pointer (length-1) also known as pivot index
2) let pointer i is (0th index-1), j is 0th index
3) Compare j with pivot, if j is more than pivot just increase the j pointer
4) If j is less than pivot, then first increase the i pointer and then swap j with i.
5) When j pointer reaches the pivot,then increase the i pointer by 1 and replace i with pivot.
6) Now i becomes breaking point, do same operations for left array and right array elements of breaking point.
*/

function quickSort(arr,low=0,high=arr.length-1){
    if(low<high){
        let pivotIndex = partition(arr,low,high);

        quickSort(arr,low,pivotIndex-1)
        quickSort(arr,pivotIndex+1,high)
    }
}

function partition(arr,low,high){
    let i = low-1;
    let pivot = arr[high];
    for(let j=low;j<high;j++){
        if(arr[j]<pivot){
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]]   //swap
        }
    }
    [arr[i+1],arr[high]] = [arr[high],arr[i+1]]  //swap
    return i+1 
}

/*
Best/Average Case: O(nlogn) when the pivot divides the array into approximately equal halves
⁡Worst Case: O(n^2) when the array is already sorted or reverse-sorted, and the pivot is always the smallest or largest element.

Space: 𝑂(log 𝑛) due to recursion stack depth.
*/