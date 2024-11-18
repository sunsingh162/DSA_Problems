/* Given 2 arrays where we need to check all the elements of array1 and check it in
array2 if next greater is there the return that number else -1 */

function nextGreaterElement(nums1,nums2){
    let stack = []
    let nextGreaterElement = new Map()

    for(const num of nums2){
        while(stack.length > 0 && num > stack[stack.length-1]){
            nextGreaterElement.set(stack.pop(),num)
        }
        stack.push(num)
    }
     while(stack.length>0){
        nextGreaterElement.set(stack.pop(),-1)
     }

     return nums1.map(num => nextGreaterElement.get(num))

}

console.log(nextGreaterElement([4,1,2],[1,3,4,2]))