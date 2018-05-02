
var ClinicDetailsView = Backbone.View.extend({
    initialize: function (options) {
        // Verify if there is a model.
        if (!(options && options.model))
            throw new Error("model is not specified.");
    },

    render: function () {
        //Gets te attribute of the element.
        this.$el.attr("id", this.model.id);
        // Gets the html template's content.
        var template = $("#clinicTemplate").html();
        // Wraps it using mustache and converts the model to a JSON object.
        var html = Mustache.render(template, this.model.toJSON());
        // Gets element's html.
        this.$el.html(html);
    }
});