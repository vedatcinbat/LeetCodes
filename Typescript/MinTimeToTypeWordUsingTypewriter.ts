const map = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25
}

function minTimeToType(word: string): number {
    let curr = 0;
    let sum = 0;

    for(let i = 0; i < word.length; i++) {
        const count: number = Math.abs(map[word[i]] - curr);
        sum += count < 26 - count ? count + 1 : 26 - count + 1;
        curr = map[word[i]];
    }

    return sum;
}


/* MySolution
* const chars: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x', 'y', 'z'];

function minTimeToType(word: string): number {
    let initialPosition = chars[0];
    let time = 0;

    const durationForEachProcess = 1;
    const charsArrThatWeNeedToType = word.split('');

    for(const endChar of charsArrThatWeNeedToType) {
        const endCharPosition = chars.indexOf(endChar);
        const distance =
            Math.min(Math.abs(chars.indexOf(initialPosition) - endCharPosition), Math.abs(chars.length - Math.abs(chars.indexOf(initialPosition) - endCharPosition)));

        time += distance * durationForEachProcess;
        time += durationForEachProcess;

        console.log(`Initial Position: ${initialPosition}, Char: ${endChar}, Distance: ${distance}, Time: ${time}`);
        initialPosition = chars[endCharPosition];

    }
    return time;
}


const word = "zabc";

console.log(minTimeToType(word)); // 5*/