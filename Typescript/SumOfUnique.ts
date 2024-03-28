function sumOfUnique(nums: number[]): number {
    let sum = 0;
    // @ts-ignore
    const numberMap = new Map<number, number>();

    for(const num of nums) {
        if(numberMap.has(num)) {
            numberMap.set(num, numberMap.get(num) + 1);
        } else {
            numberMap.set(num, 1);
        }
    }

    numberMap.forEach((seenCount: number, num: number) => {
        if(seenCount === 1) {
            sum += num;
        }
    })

    return sum;
}

const numbers = [1, 2, 3, 2];

console.log(sumOfUnique(numbers)); // 4