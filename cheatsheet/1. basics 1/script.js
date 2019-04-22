var message; // Zmiennej nie musimy od razu przypisywać wartości, możemy to zrobić później.

/*
	Konkatenacja (łączenie tekstów) w JSie odbywa się za pomocą operatora sumy '+'.

	Warto pamiętać o spacjach na końcach łączonych ze sobą stringów, aby tekst nam
	się nie zlewał.

	W tym przykładzie widzimy również, że wszystkie zmienne zadeklarowane w JSie
	(z wyjątkiem zadeklarowanych w środku jakiejś funkcji) są globalne, dzięki temu
	możemy odwołać się w tym pliku do zmiennej zadeklarowanej w pliku HTML.

	Dla zwiększenia czytelności możemy sobie rozbić operację (tu przypisanie
	i konkatenację) na wiele linii.
 */
message =
	'Answer to the Ultimate Question of Life, the Universe, and Everything: ' +
	importantVariableFromBackend;

/*
	'alert' jest podstawową funkcją do wyświetlania komunikatów. Funkcja
	ta przyjmuje jeden parametr - tekst do wyświetlenia. Nie powinniśmy
	wykorzystywać jej na produkcji, ze względu na jego wygląd (nie da się
	go ostylować) oraz zachowanie (pozwala na zablokowanie wyświetlania kolejnych
	alertów. Można go za to wykorzystać do testowania i debugowania kodu.
 */
alert(message);

/*
	Kolejność deklaracji plików JS ma wpływ na dostęp do zmiennych. Tu dla przykładu
	odwołujemy się do zmiennej, która dopiero zostanie zadelarowana w kolejnym pliku
	'bad-sample.js'. Aby zobaczyć błąd należy odkomentować poniższą linię
	i sprawdzić konsolę w przeglądarce: F12 (błąd spowoduje przerwanie wykonywania
	skryptu).

	Tu możemy też zobaczyć jak sobie poradzić z ciapkiem w stringu ubranym w ciapki.
	Stosujemy ciapki do ubierania stringów, ponieważ w JSie zdecydowanie częściej
	spotkamy stringi zawierające cudzysłowia.
 */
// alert('...it\'s number is ' + badValue); // :(

// OPERATORY
/*
	Poza wspomnianą powyżej konkatenacją stringów w JSie są następujące operatory:
 */

var a = 17; // Przypisanie: '='
var b = a + 10; // Suma/konkatenacja: '+'
var c = b - 2; // Różnica: '-'
var d = c * 6; // Iloczyn: '*'
var e = d / 3; // Iloraz: '/'
var f = e % 7; // Modulo (reszta z dzielenia): '%'
++f; // Preinkrementacja (zwiększenie wartości a następnie zwrócenie wartości): '++x'
f++; // Postinkrementacja (zwiększenie wartości po uprzednim zwróceniu wartości): 'x++'
--f; // Predekrementacja (zmniejszenie wartości a następnie zwrócenie wartości): '--x'
f--; // Postderementacja (zmniejszenie wartości po uprzednim zwróceniu wartości): 'x--'
var g = a == b; // Przyrównanie bez sprawdzania typu: '=='
var h = a === b; // Przyrównanie ze sprawdzaniem typu (zalecane): '=='
var i = a != b; // Przyrównanie z negacją (sprawdzenie czy jest różne) bez sprawdzania typu: '!='
var j = a !== b; // Przyrównanie z negacją (sprawdzenie czy jest różne) ze sprawdzaniem typu (zalecane): '!=='
var k = a > b; // Większe niż (tylko liczby): '>'
var l = a < b; // Mniejsze niż (tylko liczby): '<'
var m = a >= b; // Większe niż lub równe (tylko liczby): '>='
var n = a <= b; // Mniejsze niż lub równe (tylko liczby): '<='
var o = !g; // Negacja: '!'
var p = h || i; // Lub: '||'
var q = j && k; // I: '&&'

// TYPY ZMIENNYCH
/*
	Typ zmiennej możemy sprawdzić za pomocą słowa kluczowego 'typeof'. Dzięki
	takiemu sprawdzeniu możemy stwierdzić, czy nasza zmienna jest już zadeklarowana,
	lub czy nie musimy jej zmapować na inny typ przed wykorzystaniem.
	Jak widać na poniższych przykładach, zalecane jest stosowanie camelCase
	do nadawania nazw zmiennych.
 */

var myUndefinedVariable;
alert('Typ zmiennej "myUndefinedVariable" to: ' + typeof myUndefinedVariable);
var myNumber = 21;
alert('Typ zmiennej "myNumber" to: ' + typeof myNumber);
var myFloat = 21.666;
alert('Typ zmiennej "myFloat" to: ' + typeof myFloat);
var myStringNumber = '21';
alert('Typ zmiennej "myStringNumber" to: ' + typeof myStringNumber);
var myBool = true;
alert('Typ zmiennej "myBool" to: ' + typeof myBool);
var myNull = null;
alert('Typ zmiennej "myNull" to: ' + typeof myNull);
var myArray = [
	1,
	2,
	3,
	4
];
alert('Typ zmiennej "myArray" to: ' + typeof myArray);
var myEmptyArray = [];
alert('Typ zmiennej "myEmptyArray" to: ' + typeof myEmptyArray);
var myObject = {
	foo: 'bar',
	baz: 'aux'
};
alert('Typ zmiennej "myObject" to: ' + typeof myObject);
var myEmptyObject = {};
alert('Typ zmiennej "myEmptyObject" to: ' + typeof myEmptyObject);

/*
	Jak widzimy, większość zmiennych zwraca typ 'object'. Są jednak inne sposoby,
	pozwalające na odróżnienie zawartości.
 */

/*
	W poniższym przykładzie można zaobserwować cztery rzeczy:
	1. Operatorem dokładnego porównania jest '==='.
	2. Kolejność operacji ma znaczenie i możemy ją wymusić za pomocą nawiasów
	   (w przeciwnym razie najpierw wykonałaby się suma, a następnie porównanie).
	3. Zmienną posiadającą nulla możemy porównać z nullem.
	4. Jako dobrą praktykę stosujemy wartość, do której nie da się nic przypisać
	   z lewej strony przyrównania, aby przy popełnieniu literówki nie przypisać
	   wartości, co jako działanie zwraca 'true'.
 */
alert(
	'Czy "myNull" jest nullem? ' +
	(null === myNull)
);
// Odkomentuj poniższy kod aby zobaczyć jak duże znaczenie ma kolejność działań.
/*
alert(
	'Czy myNull jest nullem? ' +
	null === myNull
);
 */

/*
	Dla tablic możemy sprawdzić ich rozmiar za pomocą metody 'length',
	na klasycznych obiektach to nie zadziała. Chyba, że obiekt będzie posiadał
	metodę length, ale to już inna kwestia.
 */
alert('Rozmiar tablicy "myArray" to: ' + myArray.length);
alert('Rozmiar tablicy "myEmptyArray" to: ' + myEmptyArray.length);
alert('Rozmiar obiektu "myObject" to: ' + myObject.length);
alert('Rozmiar obiektu "myEmptyObject" to: ' + myEmptyObject.length);

// WARUNKI
/*
	Do warunków w JSie wykorzystujemy 'if', dla przeciwnych przypadków 'else'.
	Jeśli nie rozpatrujemy przeciwnego wypadku, to nie musimy wywoływać 'else'.
	W przypadku kiedy liczba operacji jaka ma się wykonać w if'ie czy else'ie jest
	równa jeden, moglibyśmy nie używać klamer. Nie zalecam takiego podejścia,
	ze względu na duże prawdopodobieństwo, że if nam się rozrośnie, oraz aby
	przyzwyczaić się do klamer.
 */
if (myFloat > myNumber) {
	alert('Już 0.666 stanowi różnicę przy porównaniach!');

	/*
		Można dowolnie zagnieżdżać warunki, jednak praktyczne są 1-2 poziomy. Przy
		wielokrotnych przyrównaniach zdecydowanie lepiej skorzystać z opisanego niżej
		'switch'.
	 */
	if (myNumber === 21) {
		alert('Wow! Miałem taki numer w dzienniku w podstawówce i gimnazjum!');
	}
}
else {
	alert('Co by było gdyby powyższe nie było prawdą...');
}

/*
	'switch' służy do przyrównań wielu wartości. Jest szybszy i bardziej czytelny
	niż zastosowanie wielu if'ów.
	'break' służy do przerwania switcha, w celu uniknięcia nieprzewidzianych
	zachowań.
	'default' pozwala na przechwycenie wszystkich nieprzewidzianych  przypadków,
	jest swego rodzaju odpowiednikiem else'a.
 */
switch (myNumber) {
	case 20:
		alert('To wyświetli się tylko dla 20.');
		break;
	case 21:
		alert('To wyświetli się tylko dla 21.');
		break;
	case 22:
		alert('To wyświetli się tylko dla 21.');
		break;
	default:
		alert('To wyświetli się tylko dla każdego innego przypadku.');
}

/*
	Specyficzną metodą szybkiego porównania ze zwróceniem od razu wartości jest
	operator ternarny (potrójny). Składa się on z wyrażenia logicznego podlegającego
	analizie, znaku '?', wartości zwracanej w przypadku prawdy, znaku ':' i wartości
	zwracanej w przypadku fałszu.
 */
var outputVariable = myFloat > myNumber ? 'Zmiennoprzecinkowa większa' : 'Całkowita większa';

alert('Która jest większa? ' + outputVariable);

// PĘTLE
/*
	W JSie mamy kilka typów pętli, stosujemy je w zależności od sytuacji.

	'for' jest najczęściej stosowaną pętlą. Jej parametry to:
	- operacja wykonywana przed pętlą,
	- warunek pozostania w pętli wykonywany przed iteracją,
	- operacja wykonywana po iteracji.
 */
for (var iterator = 1; iterator <= 5; iterator++) {
	alert('Kolejny szczęśliwy numerek to: ' + iterator);
}

/*
	W pętli for możemy zastosować 'break' w celu całkowitego przerwania pętli, oraz
	'continue' w celu przerwania aktualnej iteracji.
 */
for (var iterator2 = 1; iterator2 <= 5; ++iterator2) {
	if (2 === iterator2) {
		alert('Tej liczby nie lubimy!');
		continue;
	}
	else {
		if (4 === iterator2) {
			alert('Co Ty, dalej nie jadę.');
			break;
		}
	}

	alert('Kolejny szczęśliwy numerek to: ' + iterator2);
}

/*
	Kolejną pętlą jest 'for...in', która iteruje po indeksach tablicy lub kluczach
	obiektu. W niej również możemy skorzystać z 'break' i 'continue'.
 */
for (var index in myArray) {
	alert(myArray[index]);
}
for (var key in myObject) {
	alert(myObject[key]);
}

/*
	Przydatna do iterowania po tablicach jest metoda 'forEach', do której
	przekazujemy funkcję anonimową, która zwraca nam kolejny element iteracji,
	aktualny indeks i tablicę. Niestety, w tym sposobie nie możemy skorzystać ani
	z 'break' ani z 'continue', w związku z czym ta metoda nadaje się tylko do
	iterowaniu po tablicach, które i tak musimy w całości przeiterować.
 */
myArray.forEach(function (currentElement, currentIndex, currentArray) {
	alert(currentElement);
	alert(currentIndex);
	alert(currentArray);
});

/*
	Rzadziej stosowanymi pętlami są 'while' i 'do...while'. Obie przyjmują po jednym
	parametrze: warunek pozostania w pętli. Różnią się tylko od momentu sprawdzenia
	warunku: 'while' sprawdza przed iteracją, a 'do...while' po iteracji (w związku
	z czym zawsze wykona się przynajmniej jeden raz).
	Możemy w nich korzystać z 'break' i 'continue'.
 */

var iterator3 = 0;

while (6 > iterator3) {
	alert('Jestem mniejszy niż 6!');

	iterator3++;
}

var iterator4 = 0;

do {
	alert('Gdybym tylko miał więcej szans...');
} while (4 === iterator4);
