function removeDuplicates(array) {
  const uniqueArr = [];

  for (let i = 0; i < array.length; i++) {
    if (uniqueArr.indexOf(array[i]) === -1) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}

const array = [1, 2, 3, 2, 4, 1, 5, 4];
const result = removeDuplicates(array);
console.log(result);
