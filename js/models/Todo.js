App.Models.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggleComplete: function() { // fires add, remove, and change
        this.set('completed', !this.get('completed')); // if you're doing one key, you don't have to pass an object.
    }
})