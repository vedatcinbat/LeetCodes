function reverseWords(s) {
    return s.split(' ').map(function (word) { return word.split('').reverse().join(''); }).join(' ');
}
;
var input = "Let's take LeetCode contest";
console.log(reverseWords(input));
