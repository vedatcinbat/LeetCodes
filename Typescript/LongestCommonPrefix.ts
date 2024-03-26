function longestCommonPrefix(strs: string[]): string {
    const indexedArray = strs.map((str) => str.split(""));
    let prefix = "";

    const wordLength = indexedArray[0].length;

    for(let i = 0; i < wordLength; i++) {
        const char = indexedArray[0][i];
        for(let j = 1; j < indexedArray.length; j++) {
            if(char !== indexedArray[j][i]) {
                return prefix;
            }
        }
        prefix += char;
    }
    return prefix;
}

/*
* function longestCommonPrefix(strings: string[]): string {
  if (strings.length === 0) { return "" }
  if (strings.length === 1) { return strings[0] }
  let possiblePrefix = ""

  while (strings.every((str) => str.startsWith(possiblePrefix))) {
    const newPossiblePrefix = strings[0].substr(0, possiblePrefix.length + 1)

    if (newPossiblePrefix.length > possiblePrefix.length) {
      possiblePrefix = newPossiblePrefix
    } else if (newPossiblePrefix.length === possiblePrefix.length) {
      return possiblePrefix
    } else { break }
  }

  return possiblePrefix.slice(0, -1)
}*/

const strs: string[] = ["flower", "flow", "flight"];
const result: string = longestCommonPrefix(strs);


if(result === "") {
    console.log("No common prefix found");
}
console.log(result); // fl