
var ClinicsView = Backbone.View.extend({
    tagName: "ul",

    initialize: function (options) {
        if (!(options && options.model))
            throw new Error("model is not specified.");
    },

    initialize: function () {
        // Listens to events on the model
        this.listenTo(this.model, "sync", this.render);
    },

    render: function () {
        var self = this;

        this.model.each(function (clinic) {
            var view = new ClinicView({ model: clinic });
            self.$el.append(view.render().$el);
        });

        return this;
    }
});
