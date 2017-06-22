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
        console.log('clearTodos') // fires for all models...
        console.log(this.collection)
        this.collection.reset(); // empties entire collection without any models as arguments
        console.log(this.collection);
    }
})