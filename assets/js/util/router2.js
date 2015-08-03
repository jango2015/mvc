define([
    'jquery',
    'backbone'
], function($, Backbone){
	var Router = Backbone.Router.extend({
		  routes: {
			  'search/:query': 'search',
			  'search/:query/p:page': 'search'
		  },
		  
		  search: function(query, page){
			  console.log(query)
		  }
	});
	
	return new Router();
});