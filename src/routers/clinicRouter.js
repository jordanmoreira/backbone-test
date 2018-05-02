
(function () {
    // Router constructor.
    ClinicRouter = Backbone.Router.extend({
        // Defines the URLs that will trigger the callback functions.
        routes: {
            "clinic-details/:id": "viewClinicById",
            "": "index"
        },
        initialize: function () {
            // Stores clinics collection reference in router.
            this.clinicsCollection = new Clinics();
            // Fetch the clinics collection.
            this.clinicsCollection.fetch();
        },
        viewClinicById: function (id) {
            //Gets the object by it's id attribute.
            var model = this.clinicsCollection.get(id);
            // Creates a new ClinicDetailsView() passing the container element and
            // the above retrieved object as a model.
            var view = new ClinicDetailsView({
                el: "#container",
                model: model
            });
            // Renders the view.
            view.render();
        },
        index: function () {
            // Creates a new ClinicsView() passing the container element and 
            // the clinics collection to it as a model.
            var view = new ClinicsView({
                el: "#container",
                model: this.clinicsCollection
            });
            // Appends the element of the the renderized objects to the page's body.
            $("body").append(view.render().$el);
        }
    });
}());