function numIdenticalPairs(nums) {
    var pairCount = 0;
    var pairsMap = {};
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
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
var nums = [1, 2, 3, 1, 1, 3];
console.log(numIdenticalPairs(nums)); // 4
