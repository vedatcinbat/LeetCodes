function countWords(words1, words2) {
    // @ts-ignore
    var words1Map = new Map();
    // @ts-ignore
    var words2Map = new Map();
    var count = 0;
    for (var _i = 0, words1_1 = words1; _i < words1_1.length; _i++) {
        var word = words1_1[_i];
        if (words1Map.has(word)) {
            words1Map.set(word, (words1Map.get(word) || 0) + 1);
        }
        else {
            words1Map.set(word, 1);
        }
    }
    for (var _a = 0, words2_1 = words2; _a < words2_1.length; _a++) {
        var word = words2_1[_a];
        if (words2Map.has(word)) {
            words2Map.set(word, (words2Map.get(word) || 0) + 1);
        }
        else {
            words2Map.set(word, 1);
        }
    }
    words1Map.forEach(function (countScore, word) {
        if (countScore === 1 && words2Map.has(word) && words2Map.get(word) === 1) {
            count++;
        }
    });
    return count;
}
var words1 = ["leetcode", "is", "amazing", "as", "is"];
var words2 = ["amazing", "leetcode", "is"];
console.log(countWords(words1, words2)); // 2
