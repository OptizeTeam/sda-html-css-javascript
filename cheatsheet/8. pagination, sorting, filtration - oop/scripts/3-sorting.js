// TODO: check if last was sorted, if not, eliminate from sorting
// TODO: Distinct?!
function sortList(sortedField, isAscending) {
	var startDate = new Date().getMilliseconds(),
		endDate;

	var tmpObject,
		wasSorted;

	do {
		wasSorted = false;

		for (var i = 0; i < globalUsers.length - 1; i++) {
			if (
				(
					isAscending &&
					globalUsers[i].isHigherThan(sortedField, globalUsers[i + 1][sortedField])
				) ||
				(
					!isAscending &&
					globalUsers[i].isLowerThan(sortedField, globalUsers[i + 1][sortedField])
				)
			) {
				wasSorted = true;

				tmpObject = globalUsers[i + 1];
				globalUsers[i + 1] = globalUsers[i];
				globalUsers[i] = tmpObject;
			}
		}
	} while (wasSorted);

	endDate = new Date().getMilliseconds();
	alert('Sorting time: ' + (endDate - startDate));
}

$sortSelect.on('change', function (e) {
	var startDate = new Date().getMilliseconds(),
		endDate;

	var $thisSelect = $(this),
		selectValue = $thisSelect.val(),
		selectDirection = $thisSelect.find('option:checked').data('direction'),
		isAscending = 'ascending' === selectDirection;

	sortList(selectValue, isAscending);
	filterTable();

	endDate = new Date().getMilliseconds();
	alert('Sorting from select: ' + (endDate - startDate));
});

$tableHeaders.on('click', function (e) {
	var startDate = new Date().getMilliseconds(),
		endDate;

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
	filterTable();

	endDate = new Date().getMilliseconds();
	alert('Sorting from header: ' + (endDate - startDate));
});