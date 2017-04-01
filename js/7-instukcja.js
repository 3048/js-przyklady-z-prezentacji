'use strict'

var wzrostMateusz = 170;
var WzrostKasia = 170;

//if ( WzrostKasia < wzrostMateusz ) {
//	console.log("kaja jest nizsza ;) ");


//if ( WzrostKasia > wzrostMateusz ) {
//	console.log( "kaja wyzsza");
//} else {
//	console.log("kaja nizsza");
//}

if (WzrostKasia > wzrostMateusz) {
	console.log("kasia jest wyzsza ");

} else if (WzrostKasia == wzrostMateusz) {
	console.log("kasia jest tak wysoka jak mateusz");

} else {
	console.log("Kasia jest nizsza");
}

//=========

var kolor = "bialy";

switch (kolor) {
case 'czerwony':
	console.log('kolor czerwony')
	break
case 'zielony':
	console.log('kolor zielony')
case 'niebieski':
	console.log('kolor niebieski')
	break
default:
	console.log('inny')
}