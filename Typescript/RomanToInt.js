var Roman;
(function (Roman) {
    Roman[Roman["I"] = 1] = "I";
    Roman[Roman["V"] = 5] = "V";
    Roman[Roman["X"] = 10] = "X";
    Roman[Roman["L"] = 50] = "L";
    Roman[Roman["C"] = 100] = "C";
    Roman[Roman["D"] = 500] = "D";
    Roman[Roman["M"] = 1000] = "M";
})(Roman || (Roman = {}));
function romanToInt(s) {
    var romanArray = s.split("");
    var totalNumber = 0;
    for (var i = 0; i < romanArray.length; i++) {
        var current = Roman[romanArray[i]];
        var next = Roman[romanArray[i + 1]];
        if (current < next) {
            totalNumber += next - current;
            i++;
        }
        else {
            totalNumber += current;
        }
    }
    return totalNumber;
}
var s = "IV";
var result = romanToInt(s);
console.log(result); // 3
/*
*
    Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
    Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
*/
