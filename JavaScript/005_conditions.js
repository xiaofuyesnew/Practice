'use strict';
//how to use if...else statement
/*
	Jack height 1.75m weight 80.5kg figure out his bmi index
	bmi=weight/height^2
	<18.5  too light
	18.5-25    normal
    25-28    over weight
    28-32   fat
     >32    severely obese
*/
var height = parseFloat(prompt('input height(m):'));
var weight = parseFloat(prompt('input weight(kg):'));
var bmi=weight/(height*height);
if (bmi<18.5){
	alert(bmi.toFixed(2)+"too light");
}else if(bmi<25){
	alert(bmi.toFixed(2)+"normal");
}else if(bmi<28){
	alert(bmi.toFixed(2)+"over weight");
}else if(bmi<=32){
	alert(bmi.toFixed(2)+"fat");
}else{
	alert(bmi.toFixed(2)+"severely obese");
}