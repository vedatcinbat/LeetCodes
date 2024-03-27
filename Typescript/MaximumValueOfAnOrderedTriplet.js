function maximumTripletValue(nums) {
    var max = 0;
    for (var i = 0; i < nums.length - 2; i++)
        for (var j = i + 1; j < nums.length - 1; j++)
            for (var k = j + 1; k < nums.length; k++) {
                var temp = (nums[i] - nums[j]) * nums[k];
                if (temp > max)
                    max = temp;
            }
    return max;
}
// Test cases
console.log(maximumTripletValue([1, 2, 3, 4, 5])); // Expected 20
console.log(maximumTripletValue([3, 2, 1])); // Expected 0
console.log(maximumTripletValue([1, 2, 3])); // Expected 0
