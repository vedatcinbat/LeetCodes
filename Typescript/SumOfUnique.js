function sumOfUnique(nums) {
    var sum = 0;
    // @ts-ignore
    var numberMap = new Map();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (numberMap.has(num)) {
            numberMap.set(num, numberMap.get(num) + 1);
        }
        else {
            numberMap.set(num, 1);
        }
    }
    console.log(numberMap);
    numberMap.forEach(function (seenCount, num) {
        if (seenCount === 1) {
            sum += num;
        }
    });
    return sum;
}
var numbers = [1, 2, 3, 2];
console.log(sumOfUnique(numbers)); // 4
