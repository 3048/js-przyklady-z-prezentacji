'use strict';

var kaja = {
	imie: "Kaja",
	wzrost: 152,
	przedstawOsobe: function() {
		console.log(this.imie)
	}
}

var krystian ={
	imie: "krystian",
	wzrost: 180,
	przedstawOsobe: function() {
		console.log(this.imie)
	}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();

console.log(kaja.wzrost);

kaja.wiek = 15;
console.log(kaja.wiek);
console.log(kaja);


function Osoba(imie, nazwisko) {
	this.imie = imie;
	this.nazwisko = nazwisko;
	this.wzrost;
	this.oczy;
	this.wyswietlInfo = function() {
		console.log( " Imie: " + this.imie + "\n" + "Nazwisko: " + this.nazwisko + "\n" +
				   "wzrost: " + this.wzrost + "\n" + " Oczy: " + this.oczy);
	}
}

var kristian = new Osoba('Krystian', 'Dziopa');

krystian.wzrost = 180;
krystian.oczy = "niebieskie";

kaja.wyswietlInfo();