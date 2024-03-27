// incoming s => "0 or 1"
// duplicate 00 or 11 will be 01 or 10 etc

function minOperations(s: string): number {
    let opsForZeroStart = 0,
        opsForOneStart = 0;

    for (let i = 0; i < s.length; i += 1)
        if ((s[i] === '1') === (i % 2 === 0)) opsForZeroStart += 1;
        else opsForOneStart += 1;

    return Math.min(opsForZeroStart, opsForOneStart);

    /*
    * let operation = 0;
    let bits = s.split("");
    for (let i = 1; i < bits.length; i++) {
        if (bits[i - 1] === bits[i]) {
            bits[i] = bits[i] === '0' ? '1' : '0';
            ++operation;
        }
    }
    return Math.min(operation, bits.length - operation);*/
}
// 1 - 1 - 1 - 0 - 0 - 1
// 1 - 0 - 1 - 0 - 1 - 0
// 10010100 ->

const s = "10010100";

console.log(minOperations(s));
