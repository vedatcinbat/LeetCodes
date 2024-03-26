function longestCommonPrefix(strs) {
    var indexedArray = strs.map(function (str) { return str.split(""); });
    var prefix = "";
    var wordLength = indexedArray[0].length;
    for (var i = 0; i < wordLength; i++) {
        var char = indexedArray[0][i];
        for (var j = 1; j < indexedArray.length; j++) {
            if (char !== indexedArray[j][i]) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}
var strs = ["flower", "flow", "flight"];
var result = longestCommonPrefix(strs);
if (result === "") {
    console.log("No common prefix found");
}
console.log(result); // fl
