define([
    'jquery',
    'backbone',
    'utils'
], function($, Backbone, utils){
	var FormModel = Backbone.Model.extend({
		idAttribute: 'id',
		
		initialize: function(){
			
		}
	});
	
	return new FormModel;
});