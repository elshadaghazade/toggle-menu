$(document).on('click', '#menu li a', function (e) {
    e.preventDefault();

    if (!$(this).next('ul:eq(0)').is(':visible')) {
        $(this).next('ul:eq(0)').show();
        $('#form').show();
    } else {
        $(this).next('ul:eq(0)').hide();

        $('input#name').val('');
        $('input#surname').val('');
        $('input#salary').val('');
        $('input#birthday').val('');
        $('#form').hide();
    }
});

$(document).on('click', 'li.staff', function () {
    var name = $(this).data('name');
    var surname = $(this).data('surname');
    var salary = $(this).data('salary');
    var birthday = $(this).data('birthday');

    $('input#name').val(name);
    $('input#surname').val(surname);
    $('input#salary').val(salary);
    $('input#birthday').val(birthday);
});

function createMenu () {
    var ul = $('<ul>');
    for(let department of data) {
        var li = $('<li>');
        var a = $('<a href="">');
        a.html(department.depName);
        li.append(a);
        ul.append(li);

        var ulPosition = $('<ul>');
        for (let position of department.positions) {
            let li = $('<li>');
            let a = $('<a href="">');
            a.html(position.title);
            li.append(a);
            ulPosition.append(li);

            var ulStaff = $('<ul>');
            for(let staff of position.staff) {
                let li = $('<li>');
                li.addClass('staff');
                let a = $('<a href="">');
                a.html(`${staff.name} ${staff.surname}`);
                li.append(a);
                ulStaff.append(li);

                li.data({
                    name: staff.name,
                    surname: staff.surname,
                    salary: staff.salary,
                    birthday: staff.birthday
                });
            }

            li.append(ulStaff);
        }

        li.append(ulPosition);
    }

    $('#menu').empty();
    $('#menu').append(ul);
}

createMenu();