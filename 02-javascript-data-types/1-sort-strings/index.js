/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

export function sortStrings(arr, param = "asc") {

  const locales = ["ru", "en"];
  const options = {caseFirst: "upper"};

  if (param === "asc") {
    return arr.toSorted((a, b) => {
      return (a).localeCompare(b, locales, options);
    });
  } else if (param === "desc") {
    {
      return arr.toSorted((a, b) => {
        return (b).localeCompare(a, locales, options);
      });
    }
  }
};
