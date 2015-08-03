define([
    'backbone',
    'util/router1',
    'util/router2'
], function(Backbone){
	return {
		init: function(){
			Backbone.history.start();
		}
	};
});