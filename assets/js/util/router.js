define([
    'backbone'
], function(Backbone){
	var Router = Backbone.Router.extend({
		currentView: null,
		routes: {
			'': 'init',
			'help': 'help'
		},
  
		init: function(){
			var _this = this;
			require(['mvc/view/formSettings'], function(view){
				_this.switchView(view);
			});
		},
		
		switchView: function(view){
			if(this.currentView){
				this.currentView.remove();
			}
			this.currentView = view;
		},

		help: function(){
			//_this.switchView(view);
		}
	});
	
	return new Router();
});