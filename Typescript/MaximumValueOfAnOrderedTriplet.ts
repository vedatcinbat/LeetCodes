function maximumTripletValue(nums: number[]): number {
    let max: number = 0

    for (let i: number = 0; i < nums.length - 2; i++)
        for (let j: number = i + 1; j < nums.length - 1; j++)
            for (let k: number = j + 1; k < nums.length; k++) {
                let temp: number = (nums[i] - nums[j]) * nums[k]
                if (temp > max) max = temp
            }

    return max
}

// Test cases
console.log(maximumTripletValue([1, 2, 3, 4, 5])) // Expected 20

console.log(maximumTripletValue([3, 2, 1])) // Expected 0

console.log(maximumTripletValue([1, 2, 3])) // Expected 0