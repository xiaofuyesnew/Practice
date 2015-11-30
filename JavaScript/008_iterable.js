'use strict';
/*
iterable 
array  -- subscript
Map and Set ---   for ... of(ES6)

*/
var a=[1,2,3];
for (var x008 of a){
	alert(x008);
}
alert('your browser can support  for...of');
//for..in include some other properties
//better method 'forEach' method
var ex=['a','b','c'];
ex.forEach(
	function(element,index,array) {
		alert(element);
	}
);

/*
	Set has no index
	var s=new Set(['a','b','c']);
	s.forEach(
		function(element,sameElement,set){
		
		}
	);
	
	for Map
	var m=new Map([[1,'x'],[2,'y'],[3,'z']]);
	m.forEach(
		function(value,key,map){
			
		}
	);
	
*/ 

