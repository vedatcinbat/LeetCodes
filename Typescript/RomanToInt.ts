enum Roman {
    I = 1,
    V = 5,
    X = 10,
    L = 50,
    C = 100,
    D = 500,
    M = 1000
}


function romanToInt(s: string): number {
    const romanArray = s.split("");
    let totalNumber = 0;

    for(let i = 0; i < romanArray.length; i++) {
        const current = Roman[romanArray[i]];
        const next = Roman[romanArray[i + 1]];
        if(current < next) {
            totalNumber += next - current;
            i++;
        }else {
            totalNumber += current;
        }
    }

    return totalNumber;
}

const s: string = "IV";
const result: number = romanToInt(s);

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
