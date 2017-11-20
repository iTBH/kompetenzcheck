window.helper = {
    prepareForm: function (form) {
        var data = {};
        $.each(form, function (i, obj) {
            data[obj.name] = obj.value
        });
        return data;
    }
};