/* What algo says:-
1) Assign 0th index as the min index
2) Run inner loop from i+1 and compare the element,if j is smaller than i then replace min Index
3) Now check new minindex with ith element and replace
*/


function selectionSort(arr){
    let n = arr.length;
    for(let i=0;i<n-1;i++){
        let minIndex = i;

        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }

        if(minIndex !== i){
            [arr[i],arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

//Time complexit: Best Case and Worst case will be O(n^2)