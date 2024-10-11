/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
  return (obj) => {
    if (Object.keys(obj).length) {
      const pathArray = path.split('.');
      return pathArray.reduce((acc, key) => acc[key], obj);
    }
  };
}

const product = {
  category: {
    title: "Goods"
  }
};

const getter = createGetter('category.title');

console.log(getter(product)); // Goods
