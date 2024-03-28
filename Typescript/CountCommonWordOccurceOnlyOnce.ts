function countWords(words1: string[], words2: string[]): number {
    // @ts-ignore
    const words1Map = new Map();
    // @ts-ignore
    const words2Map = new Map();

    let count = 0;

    for(let word of words1) {
        if(words1Map.has(word)) {
            words1Map.set(word, (words1Map.get(word) || 0) + 1);
        }else {
            words1Map.set(word, 1);
        }
    }

    for(let word of words2) {
        if(words2Map.has(word)) {
            words2Map.set(word, (words2Map.get(word) || 0) + 1);
        }else {
            words2Map.set(word, 1);
        }
    }

    words1Map.forEach((countScore: number, word: string) => {
        if(countScore === 1 && words2Map.has(word) && words2Map.get(word) === 1) {
            count++;
        }
    })

    return count;

}

const words1= ["leetcode","is","amazing","as","is"];
const words2 = ["amazing","leetcode","is"]

console.log(countWords(words1, words2)); // 2
