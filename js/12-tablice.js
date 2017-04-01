'use strict';

var imiona = ['Monika', 'Krystian', 'Lukasz'];
//imiona[3] = 'Tania';
//imiona[2] = 'Ela';
//
//imiona.push('Gerald');
//
//
//imiona.pop();
//imiona.pop();

imiona.unshift('Robert', 'Krzysztof');

imiona.shift();

console.log(imiona);
console.log(imiona.length);

//for (var i = 0; i < imiona.length ; i++) {
//	console.log("Index: " + i + "wartosc" + imiona[i]);
//}

//imiona.forEach(function (element, index) {
//	console.log('Element nr. ' + index + ' = ' + element);
//})

//console.log(imiona.join(" = "));
//
//imiona.reverse();
//console.log(imiona);

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion.sort());

console.log(zbiorImion.indexOf("Mariusz"));

console.log(Array.isArray(zbiorImion));

//console.log(zbiorImion.slice(2, 5));

//console.log(zbiorImion.splice(2, 2));
console.log(zbiorImion);
zbiorImion.splice(2, 2, "Krzys");
console.log(zbiorImion);


console.log(zbiorImion.toString());

