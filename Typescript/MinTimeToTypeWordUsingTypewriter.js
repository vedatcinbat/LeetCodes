var chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function minTimeToType(word) {
    var initialPosition = chars[0];
    var time = 0;
    var durationForEachProcess = 1;
    var charsArrThatWeNeedToType = word.split('');
    for (var _i = 0, charsArrThatWeNeedToType_1 = charsArrThatWeNeedToType; _i < charsArrThatWeNeedToType_1.length; _i++) {
        var endChar = charsArrThatWeNeedToType_1[_i];
        // Calculate the distance between the initial position and the char
        var endCharPosition = chars.indexOf(endChar);
        // Find the min-distance
        var distance = Math.min(Math.abs(chars.indexOf(initialPosition) - endCharPosition), Math.abs(chars.length - Math.abs(chars.indexOf(initialPosition) - endCharPosition)));
        // Update the time
        time += distance * durationForEachProcess;
        // Add click duration
        time += durationForEachProcess;
        console.log("Initial Position: ".concat(initialPosition, ", Char: ").concat(endChar, ", Distance: ").concat(distance, ", Time: ").concat(time));
        // Update the initial position
        initialPosition = chars[endCharPosition];
    }
    return time;
}
var word = "zabc";
console.log(minTimeToType(word)); // 5
