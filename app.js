let myName = 'Ibeh Miracle';
let height = '6.3"';
let country = 'Nigeria';

//This functions prints on screen webpage
function details(name, height, country) {
	document.write(
		`<h1>
			NAME: ${name} <br/>HEIGHT: ${height} <br/>COUNTRY: ${country}
		</h1>,
	`,
	);
}
details(myName, height, country);

//This function print on the screen as alert
alert(`NAME: ${myName} \nHEIGHT: ${height} \nCOUNTRY: ${country}`);



//This code prints in the terminal
console.log(`NAME: ${myName} \nHEIGHT: ${height} \nCOUNTRY: ${country}`);
