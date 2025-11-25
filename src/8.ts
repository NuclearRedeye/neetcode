function isValidSudoku(board: string[][]): boolean {
  //rows
  for (let y = 0; y < board.length; y++) {
    const unique = new Set();
    for (let x = 0; x < board[y].length; x++) {
      if (parseInt(board[y][x])) {
        if (unique.has(board[y][x])) {
          return false;
        }
        unique.add(board[y][x]);
      }
    }
  }
  //Columns
  for (let x = 0; x < board[0].length; x++) {
    let unique = new Set();
    for (let y = 0; y < board[x].length; y++) {
      if (parseInt(board[y][x])) {
        if (unique.has(board[y][x])) {
          return false;
        }
        unique.add(board[y][x]);
      }
    }
  }
  //tiles
  for (let ty = 0; ty < 3; ty++) {
    for (let tx = 0; tx < 3; tx++) {
      let unique = new Set();
      for (let y = (ty * 3); y < ((ty * 3) + 3); y++) {
        for (let x = (tx * 3); x < ((tx * 3) + 3); x++) {
          if (parseInt(board[y][x])) {
            if (unique.has(board[y][x])) {
              return false;
            }
            unique.add(board[y][x]);
          }
        }
      }
    }
  }
  return true;
}

const test1: string[][] = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

const test2: string[][] = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]];

console.assert(isValidSudoku(test1) === true);
console.assert(isValidSudoku(test2) === false);
