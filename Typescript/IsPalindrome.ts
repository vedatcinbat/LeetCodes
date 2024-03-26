/*
* function isPalindrome(x: number): boolean {
    if(x < 0) return false;
    const numReversed = x.toString().split("").reverse().join("");
    const str = x.toString();
    if(str === numReversed) {
        return true;
    }
    return false;
};*/

function isPalindrome(x: number): boolean {
    const num = x;
    if (num < 0) return false;

    let ans = 0;

    while(x > 0) {
        const last_digit = x % 10;
        ans = ans * 10 + last_digit;
        x = Math.floor(x / 10);
    }

    return ans === num;
}




const x: number = 121;
const result: boolean = isPalindrome(x);

if(result) {
    console.log("The number is a palindrome" + " " + x);
}else {
    console.log("The number is not a palindrome" + " " + x);
}