// Rotate an array with 1 step to right

function rotateArray(nums, k){
   k = k % nums.length;
   reverse(nums, 0, nums.length-1);
   reverse(nums, 0, k-1);
   reverse(nums, k, nums.length-1);
   return nums
}

function reverse(nums,start,end){
    while(start<end){
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
}

console.log(rotateArray([1,2,3,4,5,6,7], 3));
