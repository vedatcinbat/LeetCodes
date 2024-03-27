// incoming s => "0 or 1"
// duplicate 00 or 11 will be 01 or 10 etc
function minOperations(s) {
    var operation = 0;
    var bits = s.split("");
    for (var i = 1; i < bits.length; i++) {
        if (bits[i - 1] === bits[i]) {
            bits[i] = bits[i] === '0' ? '1' : '0';
            ++operation;
        }
    }
    return Math.min(operation, bits.length - operation);
}
// 1 - 1 - 1 - 0 - 0 - 1 - 1 - 0 - 1
// 1 - 0 - 1 - 0 - 1 - 0
// 1 - 0 - 0 - 1 - 0 - 1 - 0 - 0
var s = "101010100";
console.log(minOperations(s));
