'use strict';

var student = {
	imie: "kaja",
	wzrost: 182,
	wyswitlDane: function () {
		console.log(this.imie)
	}
}

student.wyswitlDane();
console.log(student);