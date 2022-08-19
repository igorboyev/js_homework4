let importantWords = confirm(`Tell me three most important words 💚`);
let transformation;
let fullSentence = ``;
let anyWord;
if (importantWords) {
    let countOfWords = 1;
    for (; countOfWords <= 3; countOfWords++) {
        do {
            anyWord = prompt(`Enter word #${countOfWords}`);
            for (let i = 0; i < anyWord.length; i++) {
            }
        } while (!anyWord || anyWord.match(/\d/))
        console.log(`Word #${countOfWords}: ${anyWord}`);
        do {
            transformation = prompt(`Choose type of transformation for "${anyWord}": uppercase|lowercase|capitalize`, `uppercase`);
            if (transformation) transformation = transformation.replaceAll(` `, ``).toLowerCase();
        } while (!transformation || (transformation !== `uppercase` && transformation !== `lowercase` && transformation !== `capitalize`))

        switch (transformation) {
            case `uppercase`:
                anyWord = anyWord.toUpperCase();
                break;
            case `lowercase`:
                anyWord = anyWord.toLowerCase();
                break;
            case `capitalize`:
                anyWord = anyWord[0].toUpperCase() + anyWord.slice(1).toLowerCase();
                break;
        }

        console.log(`Transform type for word #${countOfWords}: ${transformation}`);
        console.log(`Transformed word #${countOfWords}: ${anyWord}`);
        fullSentence += `${anyWord} `;
        console.log(`Sentence: ${fullSentence}!`);
    }
}