function sumOddLengthSubarrays(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        var tempSum = 0;
        for (var j = i; j < arr.length; j++) {
            tempSum += arr[j];
            if ((j - i + 1) % 2 === 1) {
                sum += tempSum;
            }
        }
    }
    return sum;
}
var arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr)); // 58
// Time Complexity: O(n^2)
// Space Complexity: O(1)
// where n is the length of the array arr.
// return total sums for all odd length sub-arrays;
