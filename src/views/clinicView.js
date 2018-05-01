
var ClinicView = Backbone.View.extend({
    initialize: function (options) {
        if (!(options && options.model))
            throw new Error("model is not specified.");
    },

    events: {
        "click #clinicItem": "onClickClinic",
    },
    
    onClickClinic: function () {
        router.navigate(("clinic-details/" + this.model.id), { trigger: true });
    },

    render: function () {
        this.$el.attr("id", this.model.id);

        //this.$el.append("<input type='text' class='form-control' placeholder='Find clinic...' id='searchClinic'>");
        var template = $("#clinicCollectionTemplate").html();
        var html = Mustache.render(template, this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});