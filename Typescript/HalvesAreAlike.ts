enum Vowels {
    a = 'a',
    e = 'e',
    i = 'i',
    o = 'o',
    u = 'u'
}

function halvesAreAlike(s: string): boolean {
    let firstHalf = s.slice(0, s.length / 2);
    let secondHalf = s.slice(s.length / 2);
    let firstHalfVowels = 0;
    let secondHalfVowels = 0;
    for(let i = 0; i < firstHalf.length; i++) {
        if(Vowels[firstHalf[i].toLowerCase()]) firstHalfVowels++;
        if(Vowels[secondHalf[i].toLowerCase()]) secondHalfVowels++;
    }

    return firstHalfVowels === secondHalfVowels;
}


// Split the string into two halves
// If each halve have the same NUMBER of vowels, return true
const s = "book";

console.log(halvesAreAlike(s));