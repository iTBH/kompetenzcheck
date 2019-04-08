require('./bootstrap');
require('../lib/semantic/dist/semantic.min.js');

require('./translate');
require('./helper');
require('./check');
require('./modal');

$.ajaxSetup({
    headers: {
        'X-CSRF-TOKEN': window.Laravel
    }
});

Number.prototype.padLeft = function (n, str) {
    return (this < 0 ? '-' : '') +
        Array(n - String(Math.abs(this)).length + 1)
            .join(str || '0') +
        (Math.abs(this));
};

$(function () {
    $('.ui.dropdown').not('.no-addition').dropdown({allowAdditions: true});
    $('.ui.dropdown.no-addition').dropdown({allowAdditions: false});

    $('.message .close').on('click', function () {
        $(this).closest('.message').transition('fade');
    });

    $('.ui.label').popup({
        hoverable: true,
        position: 'top left',
    });

    $('.menu .item').tab();

    $('body')
        .on('click', '.check-import-btn', function () {
            var _this = this;
            $(_this).addClass('loading');
            $.ajax({
                method: 'GET',
                url: '/check/import',
                success: function (data) {
                    console.log(2);
                    $(_this).removeClass('loading');
                    modal.open(data.modal, window.check.import.save);
                }
            });
        })
        .on('click', '.add-phrase-btn', function () {
            var _this = this;
            $(_this).addClass('loading');

            $.ajax({
                method: 'GET',
                url: '/phrase',
                data: {tab: $(_this).parent().attr('data-tab')},
                success: function (data) {
                    $(_this).removeClass('loading');
                    modal.open(data.modal, window.check.phrase.save);
                }
            });
        })
        .on('click', '.assessment-rating-btn', function () {
            var _this = this;
            $(_this).addClass('loading');
            $.ajax({
                method: 'GET',
                url: '/check/' + $(_this).attr('data-check') + '/assessment/create',
                data: {
                    phrase: $(_this).attr('data-phrase'),
                    check: $(_this).attr('data-check'),
                    run: $(_this).attr('data-run'),
                    runphrase: $(_this).attr('data-runphrase')
                },
                success: function (data) {
                    $(_this).removeClass('loading');
                    modal.open(data.modal, window.check.assessment.save);
                    $('.form.assessment.dialog .ui.rating')
                        .rating({maxRating: 4, clearable: true})
                        .on('mouseover', '.icon', function () {
                            $('.rating-text').css('display', 'none');
                            $('.rating-' + ( 1 + $(this).siblings('.selected').length )).css('display', 'inline-block');
                        })
                        .on('mouseout', '.icon', function () {
                            if ($(this).siblings('.active').length === 0 && !$(this).hasClass('active')) {
                                $('.rating-text').css('display', 'none');
                                $('.rating-no').css('display', 'inline-block');
                            }
                        });
                }
            });
        })
        .on('click', '.assessment-rating-foreign-btn', function () {
            var _this = this;
            $(_this).addClass('loading');
            $.ajax({
                method: 'GET',
                url: '/foreign_assessment/create',
                data: {
                    phrase: $(_this).attr('data-phrase'),
                    check: $(_this).attr('data-check'),
                    run: $(_this).attr('data-run'),
                    runphrase: $(_this).attr('data-runphrase')
                },
                success: function (data) {
                    $(_this).removeClass('loading');
                    modal.open(data.modal, window.check.foreign_assessment.save);
                    $('.form.assessment.dialog .ui.rating')
                        .rating({maxRating: 4, clearable: true})
                        .on('mouseover', '.icon', function () {
                            $('.rating-text').css('display', 'none');
                            $('.rating-' + ( 1 + $(this).siblings('.selected').length )).css('display', 'inline-block');
                        })
                        .on('mouseout', '.icon', function () {
                            if ($(this).siblings('.active').length === 0 && !$(this).hasClass('active')) {
                                $('.rating-text').css('display', 'none');
                                $('.rating-no').css('display', 'inline-block');
                            }
                        });
                }
            });
        })
        .on('click', '.assessment-delete-btn', function() {
            $(this).parent().parent().remove();
        })
        .on('click', '.assessment-edit-btn', function() {
            var _this = $(this);
                unique = _this.data('unique');
            $(_this).addClass('loading');

            var tab = $("input[name^='phrase[" + unique + "][tab]']").val();
            var statement = $("input[name^='phrase[" + unique + "][statement]']").val();
            var category = $("input[name^='phrase[" + unique + "][category]']").val();
            
            $.ajax({
                method: 'GET',
                url: '/phrase/edit',
                data: {
                    tab: tab, 
                    statement: statement,
                    category: category,
                    unique: unique
                },
                success: function (data) {
                    $(_this).removeClass('loading');
                    modal.open(data.modal, window.check.phrase.update);
                }
            });

        });

    $('.row.check').on('click', '.check-assign-btn', function () {
        var _this = this;
        var url = $(_this).data('url');

        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.assign.save);
                $('.tabular.menu .item').tab();
            }
        });
    });

    $('.row.check').on('click', '.check-foreign-assessment-btn', function () {
        var _this = this;
        var url = $(_this).data('url');

        $(_this).addClass('loading');
        $.ajax({
            method: 'GET',
            url: url,
            success: function (data) {
                $(_this).removeClass('loading');
                modal.open(data.modal, window.check.invite.save);
                $('.tabular.menu .item').tab();
            }
        });
    });

    // Semantic UI - Accordion
    if ($('.ui.accordion').length > 0) {
        $('.ui.accordion').accordion();
    }

    // Semantic UI - Rating
    if ($('.ui.rating.disabled').length > 0) {
        $('.ui.rating.disabled')
            .rating({maxRating: 4})
            .rating('disable', true);
    }

    // Help - Button
    $('.help-button').click(function (e) {
        e.preventDefault();
        $('.right.sidebar')
            .sidebar('setting', 'transition', 'overlay')
            .sidebar('toggle');

        if ($('.right.sidebar .loading').length > 0) {
            return;
        }

        var url = $(this).attr('href');
        $('.right.sidebar').load('/help?url=' + url);
    });

    // Semantic UI - Popup
    $('[data-content]').popup({position: 'top center'});

    // Mobile Navigation
    $('.navigation .ui.list .mobile').on('click', function () {
        if (!$(this).hasClass('opened')) {
            $(this).addClass('opened');
            $(this).find('i').removeClass('sidebar').addClass('angle double left');
            $(this).siblings('div').css('display', 'block');
            $(this).parents('.navigation').css('width', 220);
        } else {
            $(this).removeClass('opened');
            $(this).find('i').removeClass('angle double left').addClass('sidebar');
            $(this).siblings('div').css('display', 'none');
            $(this).parents('.navigation').css('width', '');
        }
    });

    $(window).on('resize', function () {
        var _ele = $('.navigation .ui.list .mobile');
        if ($(this).width() > 1200) {
            if (_ele.hasClass('opened')) {
                _ele.removeClass('opened');
            }
            _ele.siblings('div').css('display', 'block');
            _ele.find('i').removeClass('angle double left').addClass('sidebar');
            _ele.parents('.navigation').css('width', '');
        } else if (!_ele.hasClass('opened')) {
            _ele.siblings('div').css('display', 'none');
        }
    });


    /** color selector - Iro */
    if ($('.color_select_element').length > 0) {

        // each input element
        $('.color_select_element').each(function () {
            // sibling div for iro initialization
            var _input = $('.' + $(this).attr('id'));

            // get the default color if available
            var defaultColor = _input.val();

            // id of the iro element
            var id = '#' + $(this).attr('id');

            // initialize the iro colorpicker
            var ciColorpicker = new iro.ColorPicker(id, {
                color: defaultColor
            });

            ciColorpicker.on('color:change', function (color, changes) {
                var input = $('.' + $(ciColorpicker.el).attr('id'));
                if (input.val() !== color.hexString) {
                    input.val(color.hexString);
                }
            });
        });
    }
});