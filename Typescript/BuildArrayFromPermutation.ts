// nums = [0, 2, 1, 5, 3, 4]
// Output: [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]
function buildArray(nums: number[]): number[] {
    const newArr: number[] = [];

    for(let i = 0; i < nums.length ; i++) {
        newArr[i] = nums[nums[i]];
    }

    return newArr;
}


const nums = [0, 2, 1, 5, 3, 4];

console.log(buildArray(nums)); // [0, 1, 2, 4, 5, 3]
