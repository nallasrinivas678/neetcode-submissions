class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const visiting = new Set();
        const visited = new Set();
        const graph = buildGraph(numCourses, prerequisites);
        for(let node in graph){
            if(hasCycle(graph, node, visiting, visited)){
                return false;
            }
        }
        return true;
    }
}

const buildGraph = (numCourses, prerequisites) => {
        const graph = {};

        for(let i=0; i < numCourses; i++){
            graph[i] = []; //initialize empty array
        }

        for(let preReq of prerequisites){
            console.log(preReq);
            const [a, b] = preReq;
            graph[b].push(String(a));
        }
        return graph;
}

const hasCycle = (graph, node, visiting, visited) => {
    if(visited.has(node)) return false; //already visited no need to traverse
    if(visiting.has(node)) return true; //cycle detection happened

    visiting.add(node); //mark as visiting initially

    //traverse to see if neighbor has a cycle. 
    //logic: if neighbor has cycle detected then actual node will be having cycle
    for(let neighbor of graph[node]){
        if(hasCycle(graph, neighbor, visiting, visited)){
            return true;
        }
    }

    visiting.delete(node); //remove visiting and mark as visited
    visited.add(node);

    return false;
}
