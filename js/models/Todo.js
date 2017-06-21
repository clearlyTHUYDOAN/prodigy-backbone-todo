App.Models.Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    },
    toggleComplete: function() { // how does it know which instance we're clicking on?
        console.log(!this.get('completed')) // fires twice...
        // this.set({ 'completed': !this.get('completed') });
        // this.save();
    }
})