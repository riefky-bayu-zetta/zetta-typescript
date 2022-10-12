/**
 * @param {String} text input of source text that need to be sliced
 * @param {Number} firstIndex first index for param slicing start
 * @param {Number} secondIndex second index for param slicing end
 */
function textSlicer(text, firstIndex, secondIndex) {
    return text.slice(firstIndex, secondIndex);
}
var text = 'Learning Typescript is different than Javascript';
var firstIndex = 9;
var secondIndex = 19;
console.log(textSlicer(text, firstIndex, secondIndex));
