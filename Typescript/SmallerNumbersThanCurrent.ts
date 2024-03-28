function smallerNumbersThanCurrent(nums: number[]): number[] {
    const sorted: number[] = [...nums].sort((a, b) => a - b);
    // @ts-ignore
    const countMap = new Map();

    for(let i = 0; i < sorted.length; i++) {
        if(!countMap.has(sorted[i])) {
            countMap.set(sorted[i], i);
        }
    }

    const result : number[] = [];

    for(let i = 0; i < nums.length; i++) {
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

const nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums)); // [4,0,1,1,3]



