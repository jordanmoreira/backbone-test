
var ClinicDetailsView = Backbone.View.extend({
    initialize: function (options) {
        if (!(options && options.model))
            throw new Error("model is not specified.");
    },
    events: {
        "click #goBack": "backToClinics"
    },

    backToClinics: function () {
        router.navigate("#", { trigger: true });
    },

    render: function () {
        this.$el.attr("id", this.model.id);

        var template = $("#clinicTemplate").html();
        var html = Mustache.render(template, this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});