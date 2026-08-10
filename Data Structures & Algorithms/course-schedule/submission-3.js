class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean} 
     */
    canFinish(numCourses, prerequisites) {
        const visiting = new Set();
        const visited = new Set()
        const graph = this.buildAdjacencyList(numCourses, prerequisites);

        for(let node in graph){
            if(this.hasCycle(graph, node, visiting, visited)){
                return false;
            }
        }
        return true;
    }

    hasCycle(graph, node, visiting, visited) {
        if(visiting.has(node)) return true;
        visiting.add(node);

        for(let neighbor of graph[node]){
            if(this.hasCycle(graph, neighbor, visiting, visited)){
                return true;
            }
        }
        visiting.delete(node);
        visited.add(node);
        return false;
    }


buildAdjacencyList(numCourses, prerequisites) {
        let graph = {};
        for(let i=0; i < numCourses; i++){
            graph[i] = [];
        }
        for(let [courseA, courseB] of prerequisites){
            graph[courseA].push(String(courseB));
        }
        return graph;
    }
}
