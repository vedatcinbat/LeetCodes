function TwoSum(nums, target) {
    var indexes = [];
    if (nums.length == 0)
        return null;
    if (nums.length == 1) {
        if (nums[0] == target) {
            indexes.push(0);
            return indexes;
        }
        return null;
    }
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                indexes.push(i);
                indexes.push(j);
                return indexes;
            }
        }
    }
    return null;
}
var nums = [2, 7, 11, 15];
var target = 9;
var result = TwoSum(nums, target);
if (result === null) {
    console.log("No solution found");
}
else {
    console.log("The indexes are: ".concat(result));
}
