'use strict'
//multi-line string
/*
if your browser not support ES6, 
there will be a SyntaxError,
use \n instead ''
*/ 
/*
alert('this 
is 
a 
multi-line 
string'
);
*/
alert('this \nis \na \nmulti-line \nstring');

//some string oprations
var s="Hello, world!";
s.length;   //13

s[0];   //H
s[-1];   //!

var s="Hello";
s.toUpperCase();  //HELLO
s.toLowerCase();  //hello
s.indexOf("H");  //return 0
s.indexOf("h");   //return -1
s.substring(0,2);  //Hel
s.substring(3);    //llo
