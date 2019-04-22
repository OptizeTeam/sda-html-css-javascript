var filterMap = {
	id: 'numeric',
	name: 'alphabetical',
	surname: 'alphabetical'
};

function filterTable() {
	var startDate = new Date().getMilliseconds(),
		endDate;

	var tmpUsers = [],
		filterField = $filterField.val(),
		filterType = $filterType.val(),
		filterValue = $filterValue.val(),
		isFilterTypeContrary = 'contrary' === $filterType.find('option:selected').data('subtype');

	if ('id' === filterField) {
		filterValue = Number(filterValue);
	}

	switch(filterType) {
		case 'equal':
			globalUsers.forEach(function (user) {
				if (
					!isFilterTypeContrary && user.isEqual(filterField, filterValue) ||
					isFilterTypeContrary && !user.isEqual(filterField, filterValue)
				) {
					tmpUsers.push(user);
				}
			});
			break;
		case 'higher-than':
			globalUsers.forEach(function (user) {
				if (user.isHigherThan(filterField, filterValue)) {
					tmpUsers.push(user);
				}
			});
			break;
		case 'lower-than':
			globalUsers.forEach(function (user) {
				if (user.isLowerThan(filterField, filterValue)) {
					tmpUsers.push(user);
				}
			});
			break;
		case 'contains':
			globalUsers.forEach(function (user) {
				if (
					!isFilterTypeContrary && user.containsValue(filterField, filterValue) ||
					isFilterTypeContrary && !user.containsValue(filterField, filterValue)
				) {
					tmpUsers.push(user);
				}
			});
			break;
		default:
			tmpUsers = globalUsers;
	}

	displayedUsers = tmpUsers;
	totalPages = Math.ceil(displayedUsers.length / limit);
	populatePagination();

	endDate = new Date().getMilliseconds();
	alert('Filtration time without pagination: ' + (endDate - startDate));

	goToPage();

	endDate = new Date().getMilliseconds();
	alert('Filtration time with pagination: ' + (endDate - startDate));
}

function setAvailableFilters() {
	$filterType.find('option').hide();
	$filterType.find('.' + filterMap[$filterField.val()]).show();
	$filterType.find('option:visible').first().prop('selected', true);
}

$filterAccept.on('click', function (e) {
	e.preventDefault();

	filterTable();
});

$filterField.on('change', setAvailableFilters);

setAvailableFilters();