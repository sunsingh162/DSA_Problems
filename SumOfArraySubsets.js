function SumOfArraySubsets(nums){
   let N = nums.length;
   let result = new Set();   //Instead of Set we can do with array also, but this bcoz of unique subset
   let totalSubsets = 1 << N;   //2^n

   for(let i=0;i<totalSubsets;i++){
    let subsetsum = 0;
    for(let j=0;j<N;j++){
        if(i & (1 << j)){   // Check if j-th bit is set in i
            subsetsum += nums[j]
        }
    }
    result.add(subsetsum);
   }
   return Array.from(result);
}

console.log(SumOfArraySubsets([5,2,1]))