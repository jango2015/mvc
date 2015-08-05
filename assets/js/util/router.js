define([
    'backbone'
], function(Backbone){
	var Router = Backbone.Router.extend({
		currentView: null,
		routes: {
			'': 'init',
			'form(/)': 'init',
			'user(/)': 'toUser',
			'*defAction': 'defAction'
		},
		
		switchView: function(view){
			if(this.currentView){
				this.currentView.unbindOuterEvent();
				this.currentView.remove();
			}
			this.currentView = view;
		},
  
		init: function(){
			var _this = this;
			require(['mvc/view/formSettings'], function(View){
				_this.switchView(new View);
			});
		},
		
		toUser: function(){
			var _this = this;
			require(['mvc/view/userManage'], function(View){
				_this.switchView(new View);
			});
		},
		
		defAction: function(){
			alert('页面未找到');
		}
	});
	
	return new Router();
});