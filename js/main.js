define(['styleselect'], function (styleSelect) {
    var customSelects = document.querySelectorAll('.custom-select');

    if (customSelects) {
        var template = '';

        var i = 1;
        for (; i <= 50; i++) {
            template += '<option value="' + i + '">' + i + '</option>';
        }

        customSelects.forEach(function (customSelect) {
            customSelect.innerHTML = template;
        });
    }

    styleSelect('.custom-select');
});