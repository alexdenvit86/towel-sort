
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const resultArr = [];
  if(!matrix) {
    return [];
  }
  
  matrix.map((arr1, k) => {
    if(k % 2) {
      resultArr.push(...arr1.reverse());
    } else {
      resultArr.push(...arr1);
    }
  });

  return resultArr;
}
