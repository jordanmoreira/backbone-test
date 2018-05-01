
(function () {

    var $container = $("#container");

    // Router constructor.
    ClinicRouter = Backbone.Router.extend({
        routes: {
            "clinic-details/:id": "viewClinicById",
            "": "index"
        },
        initialize: function () {
            // Stores clinics collection reference in router.
            this.clinicsCollection = new Clinics();
            this.clinicsCollection.fetch();
        },
        changeView: function (view) {
            // Stores the current view and then remove it.
            if (this.currentView) {
                if (this.currentView == view) {
                    return;
                }
                this.currentView.remove();
            }
            //$container.html(view.render().el);
            $("body").append(view.render().$el);
            
            this.currentView = view;
        },
        viewClinicById: function (id) {
            //Create and Renders the selected clinic.
            var model = this.clinicsCollection.get(id);
            var view = new ClinicDetailsView({
                el: "#container",
                model: model
            });

            view.render();
        },
        index: function () {
            // Create and Renders the clinics list.
            var view = new ClinicsView({
                el: "#container",
                model: this.clinicsCollection
            });
            $("body").append(view.render().$el);

            this.changeView(view);
        }
    });
}());