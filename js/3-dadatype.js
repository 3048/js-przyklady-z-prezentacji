'use strict'

/*

typ liczbowy 

*/



var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


/*

typ lancuh znakow

*/

var wyplataStr = "Ala ma kota, a kot ma Ale";
var premiaStr = "";

var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);



var nowyString = calkowitaWyplataStr.split(",");

console.log(nowyString);

/*
Typ logiczny
*/


var czyJestSmog;
czyJestSmog = false;

if (czyJestSmog) {
	console.log("jest smog");
	
} else {
	console.log("niema");
}

var niezdefinowanaZmienna;
var nullZmienna = null;

console.log(niezdefinowanaZmienna);

console.log(nullZmienna);

