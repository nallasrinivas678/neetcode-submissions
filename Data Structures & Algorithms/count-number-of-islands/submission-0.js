class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let visited = new Set();
        let count = 0;

        for(let r=0; r< grid.length; r++){
            for(let c=0; c<grid[0].length; c++){
                if(explore(grid,r,c, visited) === true){
                    count++;
                };
            }
        }

        return count;
    }
}


const explore = (grid,r,c, visited) => {
    const rowBounds = 0 <= r && r< grid.length;
    const colBounds = 0 <= c && c< grid[0].length;

    if(!rowBounds || !colBounds) return false;

    if(grid[r][c] === '0') return false; //if water return false;

    let pos = r + ","+c;
    if(visited.has(pos)) return false; //return false if already visited

    visited.add(pos);

    explore(grid, r-1, c, visited);
    explore(grid, r+1, c, visited);
    explore(grid,r,c-1, visited);
    explore(grid,r,c+1, visited);

    return true;
}