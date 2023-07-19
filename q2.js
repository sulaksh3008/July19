function deleteDuplicatesMoreThanThree(array) {
  const countMap = {};

  // Count the occurrences of each element
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    countMap[element] = (countMap[element] || 0) + 1;
  }

  // Remove duplicates occurring more than three times
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (countMap[element] > 3) {
      array.splice(i, 1);
      i--; // Decrement the index as the array length has changed
    }
  }

  return array;
}

const array = [1, 2, 2, 2, 2, 3, 3];
const result = deleteDuplicatesMoreThanThree(array);
console.log(result);
