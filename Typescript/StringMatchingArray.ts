function stringMatching(words: string[]): string[] {
    const subArray: string[] = [];

    for (let i = 0; i < words.length; i++) {
        // @ts-ignore
        if (words.some((w) => w.includes(words[i]) && w !== words[i])) {
            subArray.push(words[i]);
        }
    }

    return subArray;
}

const result = stringMatching(["mass","as","hero","superhero"]);

console.log(result); // ["as","hero"]