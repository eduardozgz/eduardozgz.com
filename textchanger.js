/**
 * 
 * @param {string} initialText 
 * @param {string} finalText
 * @param {array} targets - Iterator of DOM and its property
 * @param {number} speed - In milliseconds
 * @param {number} startAndEndWaitTime - Time to await before start with the transiction
 * @param {number} fadeLength
 */
const createTextChanger = (initialText, finalText, targets, speed, startAndEndWaitTime, fadeLength = 3) => {
    initialText = Array.from(initialText);
    finalText = Array.from(finalText);
    const fadeChars = "&!#$%?/=_";
    let fadePosition = 0;
    let currentText = Array.from(initialText);
    let startAndEndWaitTime_leftSteps = Math.round(startAndEndWaitTime / speed);

    setInterval(() => {
        if (startAndEndWaitTime_leftSteps > 0) {
            --startAndEndWaitTime_leftSteps;
        } else {
            for (let index = 0; index < fadeLength; index++) {
                currentText[fadePosition - index] = fadeChars[Math.floor(Math.random() * fadeChars.length)];
                if (fadeLength === index + 1) {
                    currentText[fadePosition - index - 1] = finalText[fadePosition - index - 1];
                }
            }
            //End?
            if (fadePosition === (finalText.length + fadeLength)) {
                [finalText, initialText] = [initialText, finalText];
                initialText;
                finalText;  
                currentText = Array.from(initialText);
                fadePosition = 0;
                startAndEndWaitTime_leftSteps = Math.round(startAndEndWaitTime / speed);
                currentText = Array.from(initialText);
            } else {
                ++fadePosition;
            }
        }

        //set text in targets
        targets.forEach((target) => {
            const stringCurrentText = currentText.slice(0, retrunLargest(initialText, finalText).length).join("");
            let DomObject = target[0];
            let property = target[1];
            DomObject[property] = stringCurrentText;
        });

    }, speed);

    const retrunLargest = (x, y) => {
        if (x.length < y.length) return y;
        else return x;
    }
}

createTextChanger("eduardozgz   ", "Eduardo Aznar", [ [document, "title"], [ document.getElementById("name"), "innerText" ] ], 120, 10000, 3);

