var Vowels;
(function (Vowels) {
    Vowels["a"] = "a";
    Vowels["e"] = "e";
    Vowels["i"] = "i";
    Vowels["o"] = "o";
    Vowels["u"] = "u";
})(Vowels || (Vowels = {}));
function halvesAreAlike(s) {
    var firstHalf = s.slice(0, s.length / 2);
    var secondHalf = s.slice(s.length / 2);
    var firstHalfVowels = 0;
    var secondHalfVowels = 0;
    for (var i = 0; i < firstHalf.length; i++) {
        if (Vowels[firstHalf[i].toLowerCase()])
            firstHalfVowels++;
        if (Vowels[secondHalf[i].toLowerCase()])
            secondHalfVowels++;
    }
    return firstHalfVowels === secondHalfVowels;
}
// Split the string into two halves
// If each halve have the same NUMBER of vowels, return true
var s = "book";
console.log(halvesAreAlike(s));
