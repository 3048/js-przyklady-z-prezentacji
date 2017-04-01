'use strict';

//function multiply(parametr1, parametr2, parametr3) {
//	var result;
//	
//	result = parametr1 * parametr2 * parametr3;
//	
//	return result;
//
//}
//
//console.log("wynik: " + multiply(3, 9, 10));
//
//var funkcja = function() {
//	return "wynik :)" 
//};
//
//console.log(funkcja);
//console.log(funkcja());


function poleKola(promien) {
	
	var poleKola;
	var obwodKola;
	
	poleKola = Math.PI * Math.pow(promien, 2);
	obwodKola = Math.PI * 2 * promien;
	
	return "dla kola o promieniu " + promien + ", pole wynosi: " + poleKola + " oraz obwod wynosi: " + obwodKola;
}

console.log(poleKola(3));
console.log(poleKola(6));
console.log(poleKola(9));
console.log(poleKola(32));



