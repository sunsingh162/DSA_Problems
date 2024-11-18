/*Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array. */

function missingNumber(nums){
   let n = nums.length;
   let expectedSum = n*(n+1)/2;
   let actualSum = nums.reduce((acc,curr)=> acc+curr,0)
   return expectedSum - actualSum;
}

console.log(missingNumber([2,3,5,0,1]))