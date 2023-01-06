let a=[2,4,5,6,8,10,11];
undefined
a.map((x)=>x*x)
(7) [4, 16, 25, 36, 64, 100, 121]
a
(7) [2, 4, 5, 6, 8, 10, 11]
a.map(x=> x>5)
(7) [false, false, false, true, true, true, true]
a.map(x=>{if (x>5) { return x}})
(7) [undefined, undefined, undefined, 6, 8, 10, 11]
a.filter(x=> x>5)
(4) [6, 8, 10, 11]
a.find(x=> x>5)
6
let a=[1,2,"3","4",5];
undefined
a.filter(x===Number);
VM778:1 Uncaught ReferenceError: x is not defined
    at <anonymous>:1:10
(anonymous) @ VM778:1
a.map(x=> Number(x))
(5) [1, 2, 3, 4, 5]
a.reduce((x,y)=>x+y)
'3345'
let y=[1,2,3,4,5];
undefined
y.reduce((x,y)=>x+y)
15
let persons=["rahul","kajal","naveen","venkatesh"];
undefined
persons.map(x=>x.length).sort().pop()
9
persons.sort((a,b)=>a.length-b.length))
VM1787:1 Uncaught SyntaxError: Unexpected token ')'
persons.sort((a,b)=>a.length-b.length)
(4) ['rahul', 'kajal', 'naveen', 'venkatesh']
persons.sort((a,b)=>b.length-a.length)
(4) ['venkatesh', 'naveen', 'rahul', 'kajal']
console.log(persons[persons.length-1])
VM2001:1 kajal
undefined
let b =[10,1000,0,-1,2000];
undefined
Math.min.apply(null,b)
-1
Math.min(...b)
-1
Math.max(...b)
2000
b.reduce((x,y)=>Math.min(x,y))
-1
let x="rahul"
undefined
x.reverse()
VM2720:1 Uncaught TypeError: x.reverse is not a function
    at <anonymous>:1:3
(anonymous) @ VM2720:1
let x=["rahul"];
undefined
x.reverse()
['rahul']
let x=[1,2];
undefined
x.reverse();
(2) [2, 1]
"rahul".split()
['rahul']
[..."rahul"]
(5) ['r', 'a', 'h', 'u', 'l']
"rahul".split(",")
['rahul']
"rahul".split("")
(5) ['r', 'a', 'h', 'u', 'l']
"rahul".split("").reverse()
(5) ['l', 'u', 'h', 'a', 'r']
"rahul".split("").reverse().join()
'l,u,h,a,r'
"rahul".split("").reverse().join("")
'luhar'