'use strict'

//loops

//for ( var i=10; i>0; i--) {
//	console.log(i);
//}
//
//var it;
//while ( it != 6  ) {
//	console.log(it);
//	it = Math.floor(Math.random() * 10);
//}

//var i;
//
//do {
//	i = Math.floor((Math.random() * 10) + 1);
//	console.log(i);
//
//} while (i != 6);


//var a = 0;
//while (a < 10) {
//	console.log(++a);
//	if (a == 5) {
//		break;
//	}
//}

for ( var b = 0; b<10; ++b) {
	if ( b ==5 ) {
		continue;
		
	} else {
		console.log(b);
	}
	console.log("--");
}

