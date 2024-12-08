//Given an array nums of size n, return the majority element that appears more than ⌊n / 2⌋ times

function majorityElement(nums){
    let obj = {};
    let n = nums.length;
    let output;
    for(const num of nums){
        obj[num] = (obj[num] || 0) + 1;

        if(obj[num] > n/2){
            output = num;
        }
    }
    return output;
}

console.log(majorityElement([3,2,3]));
