//Remove duplicates from sorted array

function removeDuplicates(nums){
    let uniqueArr = [... new Set(nums)]
    uniqueArr.forEach((el,index) => nums[index] = el)
    return uniqueArr.length
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
