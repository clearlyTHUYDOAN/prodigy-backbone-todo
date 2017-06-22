App.Models.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggleComplete: function() { 
        this.set('completed', !this.get('completed')); 
    }
})