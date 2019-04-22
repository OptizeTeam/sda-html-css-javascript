/*
	Pracę z jQuery możemy podzielić sobie na dwie kategorie:
	1. Operowanie na drzewie DOM
	2. Metody ułatwiające pracę z JSem

	jQuery możemy wywołać na dwa sposoby, jego pełną nazwą (jQuery), lub
	skróconą ($). Z pierwszej metody korzysta się tylko w przypadku, jeśli
	zmienna '$' jest już wcześniej zadeklarowana i mogą wystąpić konflikty.
 */

// OPEROWANIE NA DRZEWIE DOM

/*
	Aby wyciągnąć z drzewa dom należy do jQuery przekazać selektor analogiczny
	do stosowanego w CSSie.
	jQuery w przeciwieństwie do gołego JSa niezależnie od tego czy wyciągamy jeden
	czy kilka elementów, zawsze zwraca nam to w takiej samej tablicy, na której
	działają te same metody.
 */
var $headers = $('h2'),
	$content = $('.content'),
	$description = $('#description');

console.log($headers);
console.log($content);
console.log($description);

/*
	W jQuery te same metody, które są getterami, po przekazaniu większej ilości
	parametrów są setterami.
 */
console.log($headers.text());
console.log($content.text());
console.log($description.val()); // Input nie posiada tekstu, posiada za to wartość.

$headers.text('To jest nowy header!');
$content.text('Każdy tekst będzie zamieniony na mnie! Buahahahaha!');
$description.val('A tak ustawiamy wartość.');

/*
	Co więcej, settery w jQuery w większości przypadków zwracają ten sam obiekt,
	pozwalając na układanie metod w łańcuchy.
 */

$content
	.eq(0)
	.html('<strong>Jestem taki silny, że aż czerwony!</strong>')
	.css('background-color', 'red')
	.hide(10000);

/*
	Dodawanie elementów drzewa DOM też jest uproszczone.
 */
var $body = $('body'),
	$newElement = $('<p>');

$newElement.text('Mój nowy tekst.').css('color', 'gray');

$body.append($newElement);

/*
	Callback wykonujący się po zdarzeniu zawsze posiada zmienną 'this', będącą
	wskaźnikiem na element, którego dotyczy zdarzenie. Dzięki temu możemy podpiąć
	zdarzenie do wielu elementów, ale przy jego wywołaniu odwoływać się
	do konkretnego elementu.
 */
$content.on('mouseover', function (e) {
	console.log('Zawartość klikniętego elementu:');
	console.log($(this).text());
});

/*
	Można również podpiąć wiele zdarzeń za jednym razem, np. dla realizacji full
	text search.
 */
$description.on('change keyup paste click', function (e) {
	$('h1').text($(this).val());
});

// METODY UŁATWIAJĄCE PRACĘ Z JSEM

/*
	Metody w jQuery zaczynają się od wywołania jQuery i metody na nim.

	W jQuery jest jeden z najlepszych sposobów wykonywania zapytań AJAXowych.
 */

$.get('https://dev.api.tickerence.com/api/1.3/event/list').done(function (r) {
	console.log('Wydarzenia dostępne w Tickerence:');
	console.log(r);
});

$.post('https://dev.api.tickerence.com/api/1.3/user/login', {
	email: 'hello@optize.pl',
	password: 'qwerty123'
}).done(function (r) {
	console.log(r);
}).fail(function (err) {
	console.log(JSON.parse(err.responseText));
});

/*
	Jest też bardzo fajne iterowanie po tablicach i obiektach.
 */

var myArray = [
		'lorem',
		'ipsum',
		'dolor',
		'sit'
	],
	myObject = {
		foo: 'lorem',
		bar: 'ipsum',
		baz: 'dolor',
		aux: 'sit'
	};

$.each(myArray, function (key, value) {
	console.log(this);
	console.log(key);
	console.log(value);
});

$.each(myObject, function (key, value) {
	console.log(this);
	console.log(key);
	console.log(value);
});