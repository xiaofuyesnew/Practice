'use strict';
//define and invoking function
/**
 *     function name(x){
 *     		some sentences;
 *          return ?;
 *     }
 *      
 *     var name=function(x){
 * 			soem centences;
 * 			return ?;
 *     };
 * 
 * check parameter
 * if(typeof X!=='number'){
 * 		throw 'not a number';
 * }
 * 
 * arguments.length is used to judge the number of parameters 
 * 
 * ES6:   ...rest parameter
 */
function sum(...rest) {
    var cont=0;
    if (rest===[]){
        return 0;
    }else{
        for (var x of rest){
            cont=cont+x;
        }
        return cont;
    }
}

//test
var i009, args = [];
for (i009=1; i009<=100; i009++) {
    args.push(i009);   //add i009 to args
}
if (sum() !== 0) {
    alert('filure: sum() = ' + sum());
} else if (sum(1) !== 1) {
    alert('filure: sum(1) = ' + sum(1));
} else if (sum(2, 3) !== 5) {
    alert('filure: sum(2, 3) = ' + sum(2, 3));
} else if (sum.apply(null, args) !== 5050) {
    alert('filure: sum(1, 2, 3, ..., 100) = ' + sum.apply(null, args));
} else {
    alert('Pass!');
}

//area of circle
function area_of_circle(r, pi) {

    if (arguments.length<2){
        return r*r*3.14;
}else{
    return r*r*pi;
}

}
//test:
if (area_of_circle(2) === 12.56 && area_of_circle(2, 3.1416) === 12.5664) {
    alert('pass');
} else {
    alert('fail');
}


function max(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}

//global scope = window
//use a name space
//local scope use 'let' replace 'var' -- ES6
//constant   use const -- ES6