/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns new object or undefined if nothing did't pass
 */
export const invertObj = (obj) => {
  if (!obj) {
    return;
  } else if (Object.keys(obj).length === 0) {
    return obj;
  } else {
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
  }
};

