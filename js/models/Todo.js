App.Models.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggleComplete: function() { // how does it know which instance we're clicking on?
        console.log(this.get('title')) // fires for all models...
        // this.set({ 'completed': !this.get('completed') });
        // this.save();
    },
    clearTodos: function() {
        // where we actually deal with removing the data
        console.log('clearTodos') // fires for all models...
    }
})