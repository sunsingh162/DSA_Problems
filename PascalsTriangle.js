function pascalTriangle(numRows) {
  let triangle = [[1]];
  for (let i = 1; i < numRows; i++) {
    const prevRow = triangle[i - 1];
    const row = [1];

    for (let j = 1; j < prevRow.length; j++) {
      row.push(prevRow[j-1]+ prevRow[j])
    }
    row.push(1);
    triangle.push(row)
  }
  return triangle;
}

//Output:-   [ [ 1 ], [ 1, 1 ], [ 1, 2, 1 ], [ 1, 3, 3, 1 ], [ 1, 4, 6, 4, 1 ] ]

console.log(pascalTriangle(5));
