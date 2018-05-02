
var ClinicView = Backbone.View.extend({
    initialize: function (options) {
        // Verify if there is a model.
        if (!(options && options.model))
            throw new Error("model is not specified.");
    },

    events: {
        // Event trigger.
        "click #clinicItem": "onClickClinic",
    },

    // Function triggered by the event.
    onClickClinic: function () {
        // Changes the url to match a router condition and triggers the corresponding callback function.
        router.navigate(("clinic-details/" + this.model.id), { trigger: true });
    },

    render: function () {
        //Gets te attribute of the element.
        this.$el.attr("id", this.model.id);
        // Gets the html template's content.
        var template = $("#clinicCollectionTemplate").html();
        // Wraps it using mustache and converts the model to a JSON object.
        var html = Mustache.render(template, this.model.toJSON());
        // Gets element's html.
        this.$el.html(html);

        return this;
    }
});