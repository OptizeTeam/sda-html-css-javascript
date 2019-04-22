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
		id: 11,
		name: 'Małgorzata',
		surname: 'Kowalska'
	},
	{
		id: 12,
		name: 'Michał',
		surname: 'Szewski'
	},
	{
		id: 13,
		name: 'Anita',
		surname: 'Jakaśtam'
	},
	{
		id: 14,
		name: 'Łukasz',
		surname: 'Tańczynalodzie'
	},
	{
		id: 15,
		name: 'Jacek',
		surname: 'Lisowski'
	},
	{
		id: 16,
		name: 'Artur',
		surname: 'Nowak'
	},
	{
		id: 17,
		name: 'Krystian',
		surname: 'Małysz'
	},
	{
		id: 18,
		name: 'Martyna',
		surname: 'Woźniak'
	},
	{
		id: 19,
		name: 'Kordian',
		surname: 'Kolaska'
	}
];

var $sortSelect = $('#sort-select'),
	$tableHeaders = $('th');
$userList = $('#user-list');

function displayList() {
	$.each(users, function () {
		var thisUser = this;

		$userList.append(
			'<tr>' +
			'<td>' +
			thisUser.id +
			'</td>' +
			'<td>' +
			thisUser.name +
			'</td>' +
			'<td>' +
			thisUser.surname +
			'</td>' +
			'</tr>'
		);
	});
}

// TODO: check if last was sorted, if not, eliminate from sorting
// TODO: Distinct?!
function sortList(sortedField, isAscending) {
	var tmpObject,
		wasSorted;

	do {
		wasSorted = false;

		for (var i = 0; i < users.length - 1; i++) {
			if (
				(
					isAscending &&
					users[i][sortedField] > users[i + 1][sortedField]
				) ||
				(
					!isAscending &&
					users[i][sortedField] < users[i + 1][sortedField]
				)
			) {
				wasSorted = true;

				tmpObject = users[i + 1];
				users[i + 1] = users[i];
				users[i] = tmpObject;
			}
		}
	} while (wasSorted);
}

function clearList() {
	$userList.text('');
}

$sortSelect.on('change', function (e) {
	var $thisSelect = $(this),
		selectValue = $thisSelect.val(),
		selectDirection = $thisSelect.find('option:checked').data('direction'),
		isAscending = 'ascending' === selectDirection;

	sortList(selectValue, isAscending);
	clearList();
	displayList();
});

$tableHeaders.on('click', function (e) {
	var $thisHeader = $(this),
		headerValue = $thisHeader.data('value'),
		isAscending = $thisHeader.data('direction');

	$thisHeader.removeClass('sorted-ascending sorted-descending');

	if ('undefined' === typeof isAscending || !isAscending) {
		isAscending = true;
		$thisHeader.addClass('sorted-ascending');
	}
	else {
		isAscending = false;
		$thisHeader.addClass('sorted-descending');
	}

	$thisHeader.data('direction', isAscending);

	$('.last-sorted').removeClass('last-sorted');
	$thisHeader.addClass('last-sorted');

	sortList(headerValue, isAscending);
	clearList();
	displayList();
});

displayList();
