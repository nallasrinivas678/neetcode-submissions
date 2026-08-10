class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let count = 0;
        let visited = new Set();

        for(let r=0; r < grid.length; r++){
            for(let c=0; c < grid[0].length; c++){
                if(explore(grid, r, c, visited)){
                    count++;
                }
            }
        }

        return count;
    }
}

const explore = (grid, r,c, visited) => {
        //validations for outbound
        const rowInbounds = 0 <=r && r < grid.length;
        const colInbounds = 0 <=c && c < grid[0].length;
        if(!rowInbounds || !colInbounds) return false;
        const pos = r+','+c;

        if(grid[r][c] === '0') return false;

        if(visited.has(pos)) return false;
        visited.add(pos);

        //explore all neighbors
        explore(grid, r-1,c, visited);
        explore(grid, r+1,c, visited);
        explore(grid, r,c-1, visited);
        explore(grid, r,c+1, visited);

        return true;
    }
