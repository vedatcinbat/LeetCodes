var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function smallerNumbersThanCurrent(nums) {
    var sorted = __spreadArray([], nums, true).sort(function (a, b) { return a - b; });
    // @ts-ignore
    var countMap = new Map();
    for (var i = 0; i < sorted.length; i++) {
        if (!countMap.has(sorted[i])) {
            countMap.set(sorted[i], i);
        }
    }
    var result = [];
    for (var i = 0; i < nums.length; i++) {
        result.push(countMap.get(nums[i]));
    }
    return result;
    /*
    * const resultArray: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        let count = 0;
        nums.forEach((num, index) => {
            if(num < nums[i] && index !== i) {
                count++;
            }
        })
        resultArray.push(count);
    }

    return resultArray;*/
}
var nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums)); // [4,0,1,1,3]
