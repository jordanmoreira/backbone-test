
var ClinicsView = Backbone.View.extend({
    initialize: function (options) {
        // Verify if there is a model.
        if (!(options && options.model))
            throw new Error("model is not specified.");

        // Listens to events on the model when a model/collection 
        // has been successfully synced with the server.
        this.listenTo(this.model, "sync", this.render);
    },

    render: function () {
        var self = this;
        // Creates a new ClinicView() for each element of the collection with the model
        // and appends it to the render()'s result element.
        this.model.each(function (clinic) {
            var view = new ClinicView({ model: clinic });
            self.$el.append(view.render().$el);
        });

        return this;
    }
});
