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
        console.log(this.collection)
        this.collection.reset();
        console.log(this.collection);
    }
})