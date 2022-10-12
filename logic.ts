
type Combinable = (number | string)[] 

/**
 * @param {String | Number []} texts input of source text that need to be sliced
 */
function textJoiner(texts: Combinable): string {
    let result: string = '';
    texts.map((text, index) => {
        result += (index ? ' ' : '') + text;
    });
    return result;
}

const text1 = [1, 'data', '3', 'result'];
const text2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(textJoiner(text1));
console.log(textJoiner(text2));