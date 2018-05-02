// Collection.
var Clinics = Backbone.Collection.extend({
	// Related Model.
	model: Clinic,
	// Resource endpoint.
	url: "http://localhost:3000/clinics"
});