/*
	Poza funkcją 'alert()' do stworzenia prostego interaktywnego interfejsu można
	wykorzystać funkcje 'prompt()' i 'confirm()'.
	Należy mieć jedynie na uwadze, że wartość zwracana przez prompt jest zawsze
	tekstem, więc jeśli będziemy chcieli ją traktować jako inny typ należy
	zastosować rzutowanie.
 */
var receivedText = prompt('Podaj liczbę:');
var decision = confirm('Ar ju szur?');

alert(
	'Przekazano ' +
	receivedText +
	', które jest typu ' +
	typeof receivedText
);
alert(
	'Podjąłeś/aś decyzję: ' +
	decision
);

var receivedNumber = parseInt(receivedText);

// FUNKCJE
/*
	Funkcje to części kodu, które możemy wielokrotnie wykorzystać. Poniżej
	są przykłady dwóch funkcji, jednej niezwracającej wartości, oraz drugiej
	zwracającej wartość przez słowo kluczowe 'return'. Do funkcji możemy przekazać
	parametry, które to funkcja może wykorzystać do swojego działania. W obu
	poniższych przypadkach funkcje przyjmują po jednym parametrze.
 */
function doubleIt(myValue) {
	alert('Podwojenie podanej liczby to: ' + (myValue * 2));
}

function tripleItAndReturn(myOtherValue) {
	return myOtherValue * 3;
}

/*
	Tak wygląda wywołanie poszczególnych funkcji:
 */
doubleIt(receivedNumber);

alert(
	'Potrojenie podanej liczby to: ' +
	tripleItAndReturn(receivedNumber)
);

// OBIEKTY
/*
	Poniżej znajduje się przykład prostego statycznego obiektu.
 */

var myPerson = {
	name: 'Emil',
	surname: 'Mickiewicz',
	age: 27,
	homeCoordinates: {
		latitude: 51.526380,
		longitude: 22.317699
	}
};

/*
	Do atrybutów obiektu możemy odwoływać się za pomocą separatora '.'.
 */
alert(
	myPerson.name +
	' ' +
	myPerson.surname +
	' ma na lat ' +
	myPerson.age +
	', a jego dom znajduje się tu: [' +
	myPerson.homeCoordinates.latitude +
	', ' +
	myPerson.homeCoordinates.longitude +
	']'
);

/*
	Do bardziej zaawansowanej pracy z obiektami możemy posłużyć się deklaracją
	prototypu (odpowiednik klasy w ECMAScript 5). Jest to funkcja anonimowa
	z przekazaniem parametrów, przypisana do zmiennej.
	Dobrą praktyką jest korzystanie z PascalCase do nazywania prototypów/klas.
	Obiekty danej klasy posiadają nie tylko jej atrybuty, ale również metody
	(funkcje tej klasy). Do nazywania atrybutów i metod należy stosować camelCase.
 */
var Person = function (givenName, givenSurname, givenAge) {
	this.name = givenName;
	this.surname = givenSurname;
	this.age = givenAge;

	this.fullName = function () {
		return this.name + ' ' + this.surname;
	};
};

/*
	W JSie jest też kilka stockowych klas, np. 'Date()'. Posiada ona wiele przydatnych
	metod do podstawowego operowania na czasie.

	Jak widzimy poniżej, do utworzenia obiektu danej klasy stosujemy słowo
	kluczowe 'new'.
 */
var currentDate = new Date(),
	currentYear = currentDate.getFullYear();

/*
	Metody możemy również dodać do klasy poza jej ciałem, np. w celu rozszerzenia
	wcześniejszej deklaracji.
 */
Person.prototype.yearOfBirth = function () {
	return currentYear - this.age;
};

var personEmil = new Person(
	'Emil',
	'Mickiewicz',
	27
);

var personGosia = new Person(
	'Małgorzata',
	'Nowak',
	28
);

/*
	Bardzo przydatnym do debugowania jest obiekt 'console'. Posiada on m.in. metodę
	'log()', pozwalającą na wyświetlanie wartości w konsoli JS. Będziemy korzystali
	z tej metody zamiast dotychczas stosowanej funkcji 'alert()'.
 */
console.log(personEmil);
console.log(personEmil.fullName() + ' ma lat ' + personEmil.age + '.');
console.log('Urodził się w ' + personEmil.yearOfBirth() + ' roku.');
console.log(personGosia);
console.log(personGosia.fullName() + ' ma lat ' + personGosia.age + '.');
console.log('Urodziła się w ' + personGosia.yearOfBirth() + ' roku.');

/*
	Inną przydatną klasą jest Math, z tym że nie jest ona tzw. konstruktorem, dzięki
	czemu nie musimy zadeklarować zmiennej przetrzymującej jej obiekt, aby z niej
	skorzystać.
 */
console.log('Losowa liczba z przedziału 31-45: ' + (Math.round(Math.random() * 14) + 31));

/*
	Easter Egg: jeśli potrzebujecie timestampa, możecie wykorzystać rzutowanie klasy
	'Date()' na liczbę:
 */
console.log(+new Date());

// TABLICE
/*
	Wspomniane na poprzednich zajęciach tablice występujące JSie są na dobrą sprawę
	obiektami klasy tablica (co potwierdza ich typeof). Dzięki temu możemy wykonywać
	na nich operacje za pomocą przydatnych atrybutów i metod.
 */
var myArray = [
	1,
	'Ipsum',
	false
];

/*
	'length' pozwala na sprawdzenie rozmiaru tablicy.
 */

console.log('Tablica ma rozmiar: ' + myArray.length);

/*
	'push()' pozwala dodać kolejny element do tablicy.

	Poniżej widać, że możemy się odwoływać do elementów tablicy za pomocą ich
	indeksu (numerowany od 0).
 */

myArray.push('Dolor...');

console.log(
	'Tablica ma teraz rozmiar: ' +
	myArray.length +
	'. Element, który doszedł to: "' +
	myArray[3] +
	'".'
);

/*
	Jeśli chcemy uzyskać odpowiednik tablicy asocjacyjnej, musimy skorzystać
	z deklaracji obiektu. Jak widzimy, możemy w analogiczny sposób jak przy
	tablicach odwoływać się do atrybutów obiektu, zwłaszcza, kiedy klucz nie pozwala
	na odwołanie za pomocą separatora '.'.
 */

var myFakeArray = {},
	nameOfKey = 'x-ticket';

myFakeArray[nameOfKey] = 'foo';


console.log(myFakeArray['x-ticket']);

// ELEMENTY DRZEWA DOM
/*
	Do pracy z drzewem DOM zawsze musimy korzystać z obiektu 'document'.
	Do wyciągania elementów drzewa DOM wykorzystujemy następujące metody:
 */
var headers = document.getElementsByTagName('h1'), // Zwraca tablicę elementów o danym tagu.
	texts = document.getElementsByClassName('text'), // Zwraca tablicę elementów o danej klasie.
	content = document.getElementById('content'); // Zwraca element o danym identyfikatorze.

/*
	Z elementu drzewa DOM możemy zarówno pozyskać zawartość, jak i ją ustawić.
 */

console.log(texts);
console.log(headers[0].innerText); // Odwołujemy się do pierwszego elementu tablicy.
console.log(content.innerHTML);

/*
	Ustawiając atrybut obiektu drzewa DOM możemy zmienić jego zawartość.
 */
headers[0].innerText = 'LoL, inny Header!';
content.innerHTML = 'I\'m <strong>back!</strong>';

console.log(headers[0].innerText);
console.log(content.innerHTML);

/*
	Możemy również utworzyć nowy element, zapełnić go tekstem, dodać tekst
	do elementu i na końcu umieścić go w drzewie DOM.
 */
var myElement = document.createElement('p'),
	myElementText = document.createTextNode('Mój nowy tekst.');

myElement.appendChild(myElementText);

content.appendChild(myElement);

// ZDARZENIA
/*
	Aby kontrolować działanie interfejsu za pomocą JSa należy skorzystać ze zdarzeń
	(eventów). Podstawowa metoda ich podpięcia jest pokazana w pliku index.html
	w linii 16. Poniżej znajduje się metoda, która się wykona po kliknięciu w
	element.
 */
function doSomeMagic() {
	console.log(
		'To się niby wykona, ale mamy mniejszy wpływ na działanie skryptu, ' +
		'np. nie możemy zrobić preventDefault().'
	);
}

/*
	Zdecydowanie lepszym sposobem jest podpięcie ich za pomocą metody
	'addEventListener()'. Dzięki niej możemy podpiąć wiele takich samych zdarzeń
	oraz w kulturalny sposób zablokować domyślne działanie.
 */
var clicker = document.getElementById('clicker');

clicker.addEventListener('click', function (e) {
 	e.preventDefault();

 	console.log('Ha! Nie przekierowało!');
});

clicker.addEventListener('click', function (e) {
	e.preventDefault();

	console.log('Ha! Zadziałały dwa wykrycia zdarzenia!');
});

/*
	Poniższy kod jest zakomentowany, ponieważ nadpisałby działanie sposobu z pliku
	index.html z linii 16. Odkomentuj go aby się przekonać.
 */
/*
clicker.onclick = function () {
	console.log('Alternatywna, słabsza metoda od powyższej...');
};
*/
