/**
 * @param {String} text input of source text that need to be sliced
 * @param {Number} firstIndex first index for param slicing start
 * @param {Number} secondIndex second index for param slicing end
 */
function textSlicer(text: string, firstIndex: number, secondIndex: number): string {
  return text.slice(firstIndex, secondIndex);
}


const text = 'Learning Typescript is different than Javascript'
const firstIndex = 9;
const secondIndex = 19;

console.log(textSlicer(text, firstIndex, secondIndex));