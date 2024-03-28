function numIdenticalPairs(nums: number[]): number {
   let pairCount = 0;
   let pairsMap = {};

   for(let num of nums) {
       pairsMap[num] = (pairsMap[num] || 0) + 1;
       pairCount += pairsMap[num] - 1;
   }

   return pairCount;
    /*let count = 0;

    // @ts-ignore
    const countMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(countMap.has(nums[i])) {
            count += countMap.get(nums[i]);
            countMap.set(nums[i], countMap.get(nums[i]) + 1);
        } else {
            countMap.set(nums[i], 1);
        }
    }

    return count;*/

}


const nums = [1,2,3,1,1,3];

console.log(numIdenticalPairs(nums)); // 4
