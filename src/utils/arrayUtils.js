export default {

  /**
   * The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle
   * @param {*} array 
   * @returns 
   */
  shuffle(array) {

    let currentIndex = array.length
    let randomIndex

    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  },

  /**
   * Returns deep copy of array of objects with data only
   * @param {*} array 
   * @returns 
   */
  deepClone(array) {
    return JSON.parse(JSON.stringify(array));
  }
}