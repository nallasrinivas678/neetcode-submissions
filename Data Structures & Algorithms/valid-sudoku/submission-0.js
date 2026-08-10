class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        const cols = new Map(); //key: row number, values: set which should have values in each cell
        const rows = new Map();//key: col number, values: set which should have values in each cell
        const squares = new Map();//key: row number/, col number/3, values: set which should have values in each cell

        for(let r=0; r < 9; r++){
            for(let c=0; c < 9; c++){
                if(board[r][c] === '.') continue;
                const squareKey = `${Math.floor(r/3)},${Math.floor(c/3)}`;
                const cellValue = board[r][c];
                if( 
                    (rows.get(r) && rows.get(r).has(cellValue)) ||
                    (cols.get(c) && cols.get(c).has(cellValue)) ||
                    (squares.get(squareKey) && squares.get(squareKey).has(cellValue))
                  )
                  {
                    return false;
                  }

                  if(!rows.has(r)) rows.set(r, new Set());
                  if(!cols.has(c)) cols.set(c, new Set());
                  if(!squares.has(squareKey)) squares.set(squareKey, new Set());

                  rows.get(r).add(cellValue);
                  cols.get(c).add(cellValue);
                  squares.get(squareKey).add(cellValue);
            }
        }
        return true;
    }
}
