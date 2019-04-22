var users = [
	{
		id: 1,
		name: 'Emil',
		surname: 'Mickiewicz'
	},
	{
		id: 2,
		name: 'Małgorzata',
		surname: 'Nowak'
	},
	{
		id: 3,
		name: 'Michał',
		surname: 'Drętwy'
	},
	{
		id: 4,
		name: 'Anna',
		surname: 'Anastazja'
	},
	{
		id: 5,
		name: 'Maria',
		surname: 'Magdalena'
	},
	{
		id: 6,
		name: 'Szymon',
		surname: 'Lisowski'
	},
	{
		id: 7,
		name: 'Artur',
		surname: 'Lwieserce'
	},
	{
		id: 8,
		name: 'Krystian',
		surname: 'Lewandowski'
	},
	{
		id: 9,
		name: 'Martyna',
		surname: 'Kowalska'
	},
	{
		id: 10,
		name: 'Paweł',
		surname: 'Kolaska'
	},
	{
		id: 2,
		name: 'Małgorzata',
		surname: 'Nowak'
	},
	{
		id: 3,
		name: 'Michał',
		surname: 'Drętwy'
	},
	{
		id: 4,
		name: 'Anna',
		surname: 'Anastazja'
	},
	{
		id: 5,
		name: 'Maria',
		surname: 'Magdalena'
	},
	{
		id: 6,
		name: 'Szymon',
		surname: 'Lisowski'
	},
	{
		id: 7,
		name: 'Artur',
		surname: 'Lwieserce'
	},
	{
		id: 8,
		name: 'Krystian',
		surname: 'Lewandowski'
	},
	{
		id: 9,
		name: 'Martyna',
		surname: 'Kowalska'
	},
	{
		id: 10,
		name: 'Paweł',
		surname: 'Kolaska'
	}
];

var $userList = $('#user-list'),
	$pagination = $('#pagination');

var limit = 4;
var totalPages = Math.ceil(users.length / limit);
var pageNumber = 1;

function goToPage() {
	var recordsOffset = (pageNumber - 1) * limit;
	var recordsNumber = recordsOffset + limit;

	$userList.html('');

	for (var i = recordsOffset; i < recordsNumber && i < users.length; i++) {
		console.log(users[i]);
		$userList.append(
			'<p>' +
			users[i].id +
			'. ' +
			users[i].name +
			' ' +
			users[i].surname +
			'</p>'
		);
	}

	if (pageNumber === 1) {
		$pagination.find('.prev').hide();
	}
	else {
		$pagination.find('.prev').show();
	}

	if (pageNumber === totalPages) {
		$pagination.find('.next').hide();
	}
	else {
		$pagination.find('.next').show();
	}

	$pagination.find('.page-number').each(function () {
		if (Number($(this).text()) === pageNumber) {
			$(this).addClass('current-page');
		}
		else {
			$(this).removeClass('current-page');
		}
	});
}

$pagination.append('<a href="#" class="prev"><</a> ');

for (var i = 1; i <= totalPages; i++) {
	$pagination.append('<a href="#" class="page-number">' + i + '</a>');
	if (i !== totalPages) {
		$pagination.append(' - ');
	}
}
$pagination.append(' <a href="#" class="next">></a>');

$pagination.on('click', '.page-number', function (e) {
	e.preventDefault();

	if (!$(this).hasClass('current-page')) {
		pageNumber = Number($(this).text());

		goToPage();
	}
});
$pagination.on('click', '.prev', function (e) {
	e.preventDefault();

	if (pageNumber !== 1) {
		pageNumber--;
	}

	goToPage();
});
$pagination.on('click', '.next', function (e) {
	e.preventDefault();

	if (pageNumber !== totalPages) {
		pageNumber++;
	}

	goToPage();
});

goToPage();
