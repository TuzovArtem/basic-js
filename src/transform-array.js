const CustomError = require("../extensions/custom-error");

module.exports = function transform(array1) {
  if (typeof array1 !== "object") throw Error;
  let array2 = [];
  for (let i = 0; i < array1.length; i++) {
    if (array1[i + 1] === "--discard-prev" || array1[i] === "--discard-prev") {
    } else if (array1[i] === "--discard-next") i++;
    else if (array1[i] === "--double-next") {
      if (array1[i + 1] !== undefined) array2.push(array1[i + 1]);
    } else if (array1[i] === "--double-prev") {
      if (array1[i - 2] === "--discard-next") {
      } else if (array1[i - 1] !== undefined) array2.push(array1[i - 1]);
    } else array2.push(array1[i]);
  }
  return array2;
};
