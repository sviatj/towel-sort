

module.exports = function towelSort (matrix) {
    if (matrix === undefined || matrix.length === 0) {
    return []
  }

  else 
  for (i = 0; i < matrix.length; i++) {
    if (i % 2 !== 0) {
    matrix[i].reverse();
    }
  }
  return matrix.flat();
}
