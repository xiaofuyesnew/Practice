'use strict';
//round and round
//calculate 1*2*3*...*10
var x006=1;
for (var i=1;i<=10;i++){
	x006*=i;
}

//make a test to verify
if (x006 === 3628800) {
    alert('1 x 2 x 3 x ... x 10 = ' + x006);
}
else {
    alert('There must be a mistake. Find it!');
}