function stringMatching(words) {
    var subArray = [];
    var _loop_1 = function (i) {
        // @ts-ignore
        if (words.some(function (w) { return w.includes(words[i]) && w !== words[i]; })) {
            subArray.push(words[i]);
        }
    };
    for (var i = 0; i < words.length; i++) {
        _loop_1(i);
    }
    return subArray;
}
var result = stringMatching(["mass", "as", "hero", "superhero"]);
console.log(result); // ["as","hero"]
