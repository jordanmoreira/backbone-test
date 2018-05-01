
var Clinics = Backbone.Collection.extend({
	model: Clinic,
	url: "http://localhost:3000/clinics"
});