var limit = 150,
	totalPages = Math.ceil(displayedUsers.length / limit),
	pageNumber = 1;

function goToPage() {
	var startDate2 = performance.now(),
		endDate2;

	var recordsOffset = (pageNumber - 1) * limit;
	var recordsNumber = recordsOffset + limit;

	$userList.text('');

	for (var i = recordsOffset; i < recordsNumber && i < displayedUsers.length; i++) {
		var thisUser = displayedUsers[i];

		$userList.append(thisUser.get$row());
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

	endDate2 = performance.now();
	alert('Go to page time: ' + (endDate2 - startDate2));
}

function populatePagination() {
	$pagination.text('');

	$pagination.append('<a href="#" class="prev"><</a> ');

	for (var i = 1; i <= totalPages; i++) {
		$pagination.append('<a href="#" class="page-number">' + i + '</a>');
		if (i !== totalPages) {
			$pagination.append(' - ');
		}
	}

	$pagination.append(' <a href="#" class="next">></a>');
}

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

populatePagination();
goToPage();

globalEndDate = new Date().getMilliseconds();
alert('Initialization time: ' + (globalEndDate - globalStartDate));