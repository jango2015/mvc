define([
    'jquery',
    'mvc/view/MainView',
    'mvc/model/formSettings',
    'utils',
    'datatable',
], function($, MainView, FormModel, utils, DataTable){
	var FormView = MainView.extend({
		url: '/assets/json/formview.html',
		model: FormModel,
		dt: null,
	    events: {
	    	'click #newFormBtn': 'addNewForm',
	    	'click .datatable td a.del-form': 'deleteForm'
	    },

	    initialize: function() {
	    	this.render({
	    		complete: function(){
	    			this.initTable();
	    		}
	    	});
	    },
	    
	    initTable: function(){
	    	this.dt = new DataTable($('#FormManageTable'), {
	    		url: '/assets/json/formlist.json',
				check: false,
				ajaxOptions: { type: 'get' },
				pullComplete: function(resp, dto){
					
				}
	    	});
	    },
	    
	    addNewForm: function(){
	    	utils.dialog($("#newFormDialog"));
	    },
	    
	    deleteForm: function(e){
	    	var $T = $(e.currentTarget);
	    	var id = $T.data('id');
	    	utils.popover({
	    		title: '确定删除吗？',
	    		context: $T,
	    		btns: [{
	    			text: '确定',
	    			clazz: 'btn-success',
	    			click: function(){
	    				utils.post('/assets/json/delform.json', {id: id}, $(this), {
	    		    		success: function(resp){
	    		    			
	    		    		}
	    		    	});
	    			}
	    		}]
	    	});
	    }
	});
	
	return new FormView;
});