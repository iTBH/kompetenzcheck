window.check = {
    import: {
        save: function (form) {
            $.ajax({
                method: 'POST',
                url: '/check/import',
                data: helper.prepareForm(form),
                success: function (response) {
                    if (response.error) {
                        // ToDo: Anzeige der Fehlermeldung im Modal
                        alert(response.message);
                    }

                    else {
                        $('.ui.modal').modal('hide');
                        window.location = response.route;
                    }
                }
            });
        }
    },

    assign: {
        save: function (form) {
            $.ajax({
                method: 'POST',
                url: '/check/assign',
                data: helper.prepareForm(form),
                success: function (response) {
                    $('.ui.modal').modal('hide');
                    window.location.reload();
                }
            });
        }
    },

    phrase: {
        save: function (form) {
            $.ajax({
                method: 'POST',
                url: '/phrase',
                data: helper.prepareForm(form),
                success: function (response) {
                    $('.ui.bottom.attached.active').append(response.view);
                    $('.ui.modal').modal('hide');
                },
                error: function (data) {
                    // var errors =
                    var errors = data.responseJSON;
                    var errorsHtml = '<div class="ui negative message">';

                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
                    });
                    errorsHtml += '</ul></di>';

                    $('#form-errors').html(errorsHtml);

                    $('.modal-save-btn').removeClass('loading');
                }
            });
        },
        update: function (form) {
            $.ajax({
                method: 'POST',
                url: '/phrase/update',
                data: helper.prepareForm(form),
                success: function (response) {
                    var uniqueClassSelector = ".unique-" + response.unique,
                        element = $(uniqueClassSelector);
                    if(element.length > 0) {
                        element.replaceWith(response.view);
                    }

                    $('.ui.modal').modal('hide');
                },
                error: function (data) {
                    // var errors =
                    var errors = data.responseJSON;
                    var errorsHtml = '<div class="ui negative message">';

                    $.each(errors, function (key, value) {
                        errorsHtml += '<li>' + value[0] + '</li>'; //showing only the first error.
                    });
                    errorsHtml += '</ul></di>';

                    $('#form-errors').html(errorsHtml);

                    $('.modal-save-btn').removeClass('loading');
                }
            });
        }
    },

    assessment: {
        save: function (form) {
            var data = helper.prepareForm(form);
            data['rating'] = $('.ui.colossal.bullseye.rating').rating('get rating');

            $.ajax({
                method: 'POST',
                url: '/check/' + data['check'] + '/assessment',
                data: data,
                success: function (response) {
                    $('.ui.modal').modal('hide');

                    var button = $('a[data-phrase="' + data['phrase'] + '"][data-check="' + data['check'] + '"][data-run="' + data['run'] + '"]');

                    button.attr('data-runphrase', response.runphrase);
                    $(button.prev())
                        .rating('disable', true)
                        .rating('set rating', data['rating']);
                }
            });
        }
    },


    foreign_assessment: {
        save: function (form) {
            var data = helper.prepareForm(form);
            data['rating'] = $('.ui.colossal.bullseye.rating').rating('get rating');

            $.ajax({
                method: 'POST',
                url: '/foreign_assessment',
                data: data,
                success: function (response) {
                    $('.ui.modal').modal('hide');

                    var button = $('a[data-phrase="' + data['phrase'] + '"][data-check="' + data['check'] + '"][data-run="' + data['run'] + '"]');

                    button.attr('data-runphrase', response.runphrase);
                    $(button.prev())
                        .rating('disable', true)
                        .rating('set rating', data['rating']);
                }
            });
        }
    },

    invite: {
        save: function (form) {
            var data = helper.prepareForm(form);
            $.ajax({
                method: 'POST',
                url: 'check/' + data['check'] + '/foreign_assessment/invite',
                data: data,
                success: function (response) {
                    $('.ui.bottom.attached.active').append(response.view);
                    $('.ui.modal').modal('hide');
                },
                error: function (response) {
                    // Check if there already is a msg and remove it
                    var _modalContent = $('.ui.modal > .content');
                    _modalContent.find('.ui.error.message').remove();

                    // Remove the Loading from button
                    $('.modal-save-btn.loading').removeClass('loading');

                    var _errors = [];
                    $.each(response.responseJSON, function (index, value) {
                        _errors.push(value);
                    });

                    _modalContent.prepend($('<div>').addClass('ui error message').append(_errors.join("<br />")));
                }
            });
        }
    }
};