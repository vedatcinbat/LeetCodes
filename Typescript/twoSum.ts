function TwoSum(nums: number[], target: number): number[] {
    const indexes: number[] = [];
    if(nums.length == 0) return null;

    if(nums.length == 1) {
        if(nums[0] == target) {
            indexes.push(0);
            return indexes;
        }
        return null;
    }

    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                indexes.push(i);
                indexes.push(j);
                return indexes;
            }
        }
    }
    return null;
}




const nums: number[] = [2, 7, 11, 15];
const target: number = 9;

const result: number[] = TwoSum(nums, target);

if(result === null) {
console.log("No solution found");
}else {
console.log(`The indexes are: ${result}`);
}

// HashMap Approach
/*
* function TwoSumHashMap(nums: number[], target: number): number[] {
    const map = new Map();
    const indexes: number[] = [];
    for(let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if(map.has(diff)) {
            indexes.push(map.get(diff));
            indexes.push(i);
            return indexes;
        }
        map.set(nums[i], i);
    }
    return null;
}*/

// [2, 7, 11, 15], target = 9






