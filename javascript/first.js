es > Ecma Script 
es5
es6
esnext

var
let
const

////////////////////////////////////
DataType
---------------------
String = "333" 'fdgr' "regr54yh" "true"  
Number = 857869 89675876856786 8989.68958
Boolean = true/false

null
undefined

//////////////////////
var a = "Hi"
var b = 10
var c = true

typeof(a)
"string"
typeof(b)
"number"
typeof(c)
"boolean"

> var a = 10
undefined
> a
10
> var a = 11
undefined
> a
11
> a = 12
12
> a
12
>  

> let b = 10
undefined
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 11
11
> 

const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c =11
Uncaught TypeError: Assignment to constant variable.
>                                                      

var a = 10;
var a;    > declaration
a =10;    > assignment

var => we can redeclare and reassign
let => we cannot redeclare but can reassign
const => we cannot redeclare nor reassign


/////////////////////////////
//es5
function add(a,b){
    return a+b
}

add(1,2)

//es6
const add = (a,b) => {return a+b}

add(1,2)
3