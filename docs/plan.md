
representing a graph database using javascript..

cool info here:  
http://tinkerpop.apache.org/docs/3.1.1-incubating/tutorials/getting-started/

graph database is many vertices (or nodes), connected with edges..
(VERTEX)--->(EDGE)--->(VERTEX)
nodes and vertices should be able to have properties

maybe look at implementing gremlin-like language..

// What are the names of Gremlin's friends' friends?
graph.V().
  has("name","gremlin").
  out("knows").
  out("knows").
  values("name");

