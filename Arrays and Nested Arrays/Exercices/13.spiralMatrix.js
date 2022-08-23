function spiralMatrix(rowEnd, colEnd) {
  let counter = 1;
  let matrix = [];

  // create arrays
  for (let i = 0; i < rowEnd; i++) {
    matrix.push([]);
  }

  rowEnd--;
  colEnd--;

  // matrix
  for (let i = 0; i <= colEnd; i++) {
    // row ->
    for (let a = i; a < rowEnd; a++) {
      matrix[i][a] = counter;
      counter++;
    }
    
    // col ⬇
    for (let b = i; b <= colEnd; b++) {
      matrix[b][colEnd] = counter;
      counter++;
    }

    colEnd--;
    
    // col <- 
    for (let c = colEnd; c >= i; c--) {
      matrix[rowEnd][c] = counter;
      counter++
    }

    rowEnd--;

    // row ↑
    for (let d = rowEnd; d > i; d--) {
        matrix[d][i] = counter;
        counter++;
    }
  }

  for (let arr of matrix) {
    console.log(arr.join(' '));
  }
}
spiralMatrix(3, 3);

// ! Damn. That was a hard task!