class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = new Map();
        const state = new Array(numCourses).fill(0);
        let result = []; //schedule
        let hasCycle = false;

        for(let i=0; i < numCourses; i++){
            adj.set(i, []);
        }

        for(let [course, pre] of prerequisites){
            adj.get(pre).push(course);
        }

        const dfs = (u) => {
            if(hasCycle) return;

            state[u] = 1; //mark as visiting

            for(let v of adj.get(u)){
                if(state[v] ===1){
                    hasCycle = true;
                    return;
                }
                if(state[v] ===0){
                    dfs(v); 
                }
            }

            state[u] = 2;
            result.push(u);
        }

        //DFS for every course
        for(let i=0; i < numCourses; i++){
            if(state[i] === 0) dfs(i);
        }

        if(hasCycle) return [];
        return result.reverse();
    }
}
