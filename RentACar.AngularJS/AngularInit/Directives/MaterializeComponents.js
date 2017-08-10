app.directive("materializeNavbar", function ($parse) {
    return {
        link: function (scope, element, attrs) {
            element.sideNav();
        }
    };
});

app.directive("modalInit", function ($parse) {
    return {
        link: function (scope, element, attrs) {
            element.leanModal();
        }
    };
});

app.directive("materialSelect", function ($parse) {
    return {
		restrict: 'A',
        link: function (scope, element) {
            $(element).material_select();
        }
    };
});

app.directive("inputDatePicker", function ($parse) {
    return {
        link: function (scope, element, attrs) {
            element.pickadate({
				selectMonths: true, // Creates a dropdown to control month
				selectYears: 80, // Creates a dropdown of 15 years to control year,
				today: 'Today',
				clear: 'Clear',
				close: 'Ok',
				format: 'dd-mm-yyyy',
				closeOnSelect: true // Close upon selecting a date,
			  });
        }
    };
});