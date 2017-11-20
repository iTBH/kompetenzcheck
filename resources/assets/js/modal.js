window.modal = {
    open: function (data, saveFunction) {
        if (data !== "") {
            $('.ui.modal > .header').html(data.header);
            $('.ui.modal > .content').html(data.content);
            $('.ui.modal > .actions').html(data.actions);

            if ($('.modal-abort-btn').length > 0) {
                $('.modal-abort-btn').on('click', function () {
                    $('.ui.modal').modal('hide');
                });
            }

            if ($('.modal-save-btn').length > 0) {
                $('.modal-save-btn').on('click', function () {
                    $(this).addClass('loading');
                    $('.ui.modal').find('form').each(function (index, element) {
                        if (typeof saveFunction === "function") {
                            saveFunction($(element).serializeArray());
                        }
                    });
                });

                $('.ui.modal').find('form').on('submit', function() {
                    $('.modal-save-btn').trigger('click');
                    return false;
                });
            }

            if ($('.modal-submit-btn').length > 0) {
                $('.modal-submit-btn').on('click', function () {
                    $(this).addClass('loading');
                    $('.ui.modal form').submit();
                });
                $('.ui.modal > .content').find('form').on('submit', function(e) {
                    e.stopPropagation();
                });
            }

            /** Enable Dropdown */
            $('.ui.dropdown').dropdown({allowAdditions: true});

            /** Enable Checkbox */
            $('.ui.radio.checkbox').checkbox();
        }

        $('.ui.modal').modal('show');
    }
};