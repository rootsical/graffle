## project plan ##

representing a graph database using javascript..

cool info here:  
http://tinkerpop.apache.org/docs/3.1.1-incubating/tutorials/getting-started/

graph database is many vertices (or nodes), connected with edges..  
`(VERTEX)--->(EDGE)--->(VERTEX)`  
nodes and vertices should be able to have properties  

maybe look at implementing gremlin-like language..  

```js
// What are the names of Gremlin's friends' friends?
graph.V().
  has("name","gremlin").
  out("knows").
  out("knows").
  values("name");
```

graphson
https://github.com/tinkerpop/blueprints/wiki/GraphSON-Reader-and-Writer-Library

```
vertex  
  _id  
  _type = vertex  
  label  
  ..   
  properties (other properties)  

edge  
  _id  
  _type = edge  
  _outV  
  _inV  
  _label (ie. knows, loves, created)  
  ..  
  properties (other properties)  
```

```
derossi   ---> PLAYS_FOR      ---> italy
derossi   ---> PLAYS_FOR      ---> roma
derossi   ---> LIKES: alittle ---> 

pjanic    ---> PLAYS_FOR      ---> bosnia
pjanic    ---> PLAYS_FOR      ---> roma
pjanic    ---> LIKES: alittle ---> grapes

strootman ---> PLAYS_FOR      ---> roma
strootman ---> PLAYS_FOR      ---> netherlands
strootman ---> LIKES: alot    ---> nutella

ozil      ---> PLAYS_FOR      ---> arsenal
ozil      ---> PLAYS_FOR      ---> germany
ozil      ---> LIKES: alot    ---> nutella

marchisio ---> PLAYS_FOR      ---> juventus
marchisio ---> PLAYS_FOR      ---> italy
marchisio ---> LIKES: alot    ---> nutella

insigne   ---> PLAYS_FOR      ---> napoli
insigne   ---> PLAYS_FOR      ---> italy
insigne   ---> LIKES: alittle ---> nutella

castan    ---> PLAYS_FOR      ---> roma
castan    ---> LIKES: alot    ---> nutella
```

find all players that play with derossi and like nutella a lot..  
best to store the relationships in the node rather than the edge..  
easier to retrieve a node than an edge if you name it in a way that is easy to find  

find all teams that derossi plays for  
find all players that play for those teams  
of those players find if they like nutella  
and whether they like it a lot  

nodes stored with key structured as /label/title  
the title is lowercase and underscores for spaces  
ie. player/de_rossi  
returns a javascript object with outV property  
outV property is an object representing an outgoing relationship  
look for a label property of: PLAYS_FOR  
return all the nodes for PLAYS_FOR relationships  
ie.   team/roma  
      team/italy  

now look at the /team/roma node for inV property  
inV property is an object representing an incoming relationship  
return all the nodes for PLAYS_FOR relationships  
ie. for /team/roma  
      player/derossi  
      player/pjanic  
      player/strootman  
      player/castan  
    for /team/italy  
      player/derossi  
      player/marchisio  
      player/insigne  
now filter out the original node player/derossi and any duplicates  
you now have a list of nodes which represent players that play with derossi  
      player/pjanic  
      player/strootman  
      player/castan  
      player/marchisio  
      player/insigne  

for each of these players, check the outV property for the LIKES label..  
```
outV: [
  {
    label: PLAYS_FOR
    node: roma
  },
  {
    label: LIKES,
    node: /food/nutella,
    how_much: alot
  },
];
```

if the LIKES label exists, points to /food/nutella and has the how_much property=alot, then return..  
ie.     
      player/strootman  
      player/castan  
      player/marchisio  
   
you are done.. i think that makes sense..  
 