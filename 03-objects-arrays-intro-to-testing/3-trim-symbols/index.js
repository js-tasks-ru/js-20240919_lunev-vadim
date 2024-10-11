/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export const trimSymbols = (string, size) => {
  return string.split("").map((item, index, array) => {
    if (item !== array[index + 1]) {
      return item + ".";
    } else {
      return item;
    }
  }).join("").split(".").map((item) => {
    return item.slice(0, size);
  }).join("");
}


