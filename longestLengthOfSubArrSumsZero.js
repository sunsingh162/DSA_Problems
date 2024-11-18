function longestSubArr(nums) {
    let map = new Map();
    let maxLength = 0;
    let commulativeSum = 0;

    for(let i=0;i<nums.length;i++){
      commulativeSum += nums[i]

      if(commulativeSum === 0){
        maxLength = i+1
      }

      if(map.has(commulativeSum)){
        let index = map.get(commulativeSum)
        maxLength = Math.max(maxLength,i-index)
      } else {
        map.set(commulativeSum,i)
      }
    }
    return maxLength
  }
  console.log(longestSubArr([1, -1, 3, -2, -1, 2]))