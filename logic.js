/**
 * @param {String | Number []} texts input of source text that need to be sliced
 */
function textJoiner(texts) {
    var result = '';
    texts.map(function (text, index) {
        result += (index ? ' ' : '') + text;
    });
    return result;
}
var text1 = [1, 'data', '3', 'result'];
var text2 = ['Bejo', 'has', 4, 'sport', 'car'];
console.log(textJoiner(text1));
console.log(textJoiner(text2));
