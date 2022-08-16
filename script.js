let importantWords = confirm(`Tell me three most important words 💚`);
let transformation;
let fullSentence = ``;
let anyWord;
if (importantWords) {
    let countOfWords = 1;
    for (; countOfWords <= 3; countOfWords++) {
        do {
            anyWord = prompt(`Enter word #${countOfWords}`);
            for (let i = 0; i < anyWord.length;) {
                if (!isNaN(anyWord.charAt[i])) {
                    anyWord = false
                } else (i++);
            }
        } while (!anyWord );
        console.log(`Word #${countOfWords}: ${anyWord}`);
        do {
            transformation = prompt(`Choose type of transformation for "${anyWord}": uppercase|lowercase|capitalize`, `uppercase`);
            if (transformation === `uppercase`) {
                anyWord = anyWord.toUpperCase();
                console.log(`Transform type for word #${countOfWords}: ${transformation}`);
                console.log(`Transformed word #${countOfWords}: ${anyWord}`);
                fullSentence+= `${anyWord} `;
                console.log(`Sentence: ${fullSentence}`);
                break;
            }
            if (transformation === `lowercase`) {
                anyWord = anyWord.toLowerCase();
                console.log(`Transform type for word #${countOfWords}: ${transformation}`);
                console.log(`Transformed word #${countOfWords}: ${anyWord}`);
                fullSentence+= `${anyWord} `;
                console.log(`Sentence: ${fullSentence}`);
                break;
            }
            if (transformation === `capitalize`) {
                anyWord = anyWord[0].toUpperCase() + anyWord.slice(1);
                console.log(`Transform type for word #${countOfWords}: ${transformation}`);
                console.log(`Transformed word #${countOfWords}: ${anyWord}`);
                fullSentence+= `${anyWord} `;
                console.log(`Sentence: ${fullSentence}`);
                break;
            }
        } while (!transformation || (transformation !== `uppercase` && transformation !== `lowercase` && transformation !== `capitalize`))
    }
    fullSentence = `${fullSentence.trim()}!`;
    console.log(`*****`);
    console.log(fullSentence);
}