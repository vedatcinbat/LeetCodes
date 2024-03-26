function soupServings(n) {
    var probability = 0.25;
    var memory = new Map();
    var operations = [
        { a: 100, b: 0 },
        { a: 75, b: 25 },
        { a: 50, b: 50 },
        { a: 25, b: 75 }
    ];
    if (n > 4800)
        return 1;
    function serve(a, b) {
        var key = "".concat(a, "_").concat(b);
        if (memory.has(key)) {
            return memory.get(key);
        }
        var resOperation = 0;
        operations.forEach(function (operation) {
            var cloneA = a;
            var cloneB = b;
            var tempRes = 0;
            cloneA -= operation.a;
            cloneB -= operation.b;
            if (cloneA <= 0) {
                tempRes = 1;
                if (cloneB <= 0) {
                    tempRes = 0.5;
                }
            }
            else if (cloneB <= 0) {
                tempRes = 0;
            }
            else {
                tempRes = serve(cloneA, cloneB);
            }
            resOperation += tempRes;
        });
        memory.set(key, resOperation * probability);
        return resOperation * probability;
    }
    return serve(n, n);
}
;
var n = 100;
console.log(soupServings(n));
// Two type of soup : Type A and Type B
// Initially : we have 'n' ml of each type of soup
// Four kind of operations are allowed :
// A --> n ml and B --> n ml
// 1. Serve 100 ml of soup A and '0' ml of Soup B
// 2. Serve 75 ml of soup A and 25 ml of soup B
// 3. Serve 50 ml of soup A and 50 ml of soup B
// 4. Serve 25 ml of soup A and 75 ml of soup B
// Return the probability  the soup A will bne empty first, plus half the probability that A and B become empty at the same time
