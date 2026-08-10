class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = new Map();
        const state = new Array(numCourses).fill(0);
        //0-unvisited, 1-visiting, 2- visited

        for(let i=0; i < numCourses; i++){
            adj.set(i, []);
        }

        for(let [course, pre] of prerequisites){
            adj.get(pre).push(course);
        }

        const hasCycle = (u) => {
            //if we are hit a node that currently being visited, we find cycle
            if(state[u] === 1 ) return true;

            //if already visited the node, no need to proceed
            if(state[u] === 2) return false;

            //make node as visiting
            state[u] = 1;
            for(let neighbor of adj.get(u)){
                if(hasCycle(neighbor)) return true;
            }

            //mark visisted, safe
            state[u] = 2;
            return false;
        }

        for(let i=0; i < numCourses; i++){
            if(state[i] === 0){
                if(hasCycle(i)) return false;
            }
        }

        return true;
    }
}
