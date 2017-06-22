App.Models.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggleComplete: function() {
        this.set('completed', !this.get('completed')); // if you're doing one key, you don't have to pass an object.
    }
})