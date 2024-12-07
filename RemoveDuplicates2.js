// Keep atmost 2 unique number in array and then return the length of array

function removeDuplicates(nums){
  let count = 0;
  let obj ={};

  for(const num of nums){
    obj[num] = (obj[num] || 0) + 1;
    
    if(obj[num] <= 2){
        nums[count] = num;
        count++
    }
  }
  return count;
}

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));
