$('#contactForm').on('submit', function (event) {
    event.preventDefault(); // prevent the default form submission

    $.ajax({
        url: '/api/submit-form',
        method: 'POST',
        data: $('#contactForm').serialize(), // serialize the form data
        success: function (response) {
            // handle success response
            console.log(response);
            // show success message to user
            $('#success-modal').modal('show');
            $('#success-modal .close').on('click', function () {
                $('#success-modal').modal('hide');
            });

            $('#contactForm')[0].reset();
        },
        error: function (response) {
            // handle error response
            console.log(response);
            // show error message to user
            $('#fail-modal').modal('show');
            $('#fail-modal .close').on('click', function () {
                $('#fail-modal').modal('hide');
            });
        }
    });
});

$('#scheduleForm').on('submit', function (event) {
    event.preventDefault(); // prevent the default form submission

    $.ajax({
        url: '/api/schedule',
        method: 'POST',
        data: $('#scheduleForm').serialize(), // serialize the form data
        success: function (response) {
            // handle success response
            console.log(response);
            // show success message to user
            $('#success-modal-schedule').modal('show');
            $('#success-modal-schedule .close').on('click', function () {
                $('#success-modal-schedule').modal('hide');
            });

            $('#scheduleForm')[0].reset();
        },
        error: function (response) {
            // handle error response
            console.log(response);
            // show error message to user
            $('#fail-modal-schedule').modal('show');
            $('#fail-modal-schedule .close').on('click', function () {
                $('#fail-modal-schedule').modal('hide');
            });
        }
    });
});