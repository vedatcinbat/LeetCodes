function sumOddLengthSubarrays(arr: number[]): number {
    let len: number = arr.length
    let total: number = 0;

    for (let i = 0; i < len; i++) {
        total += arr[i] * (
            Math.floor((i + 1) / 2) * Math.floor((len - i) / 2) +
            Math.ceil((i + 1) / 2) * Math.ceil((len - i) / 2)
        );
    }
    return total;
}


const arr = [1,4,2,5,3];

console.log(sumOddLengthSubarrays(arr)); // 58

// Time Complexity: O(n^2)
// Space Complexity: O(1)
// where n is the length of the array arr.
// return total sums for all odd length sub-arrays;