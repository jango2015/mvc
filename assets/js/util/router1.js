define([
    'backbone'
], function(Backbone){
	var Router = Backbone.Router.extend({
		  routes: {
			  '': 'init',
			  'help': 'help'
		  },
		  
		  init: function(){
			  require(['mvc/view/formSettings'], function(){});
		  },

		  help: function(){
			  
		  }
	});
	
	return new Router();
});