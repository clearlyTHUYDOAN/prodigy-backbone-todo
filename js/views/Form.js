App.Views.Form = Backbone.View.extend({
    el: '#form',
    template: _.template($('#todo-input').html()),
    events: {
        submit: 'addTodo',
    },
    addTodo: function(e) {
        e.preventDefault();
        const input = this.$('#new-todo')[0]; // why 0
        const newTodo = new App.Models.Todo({title: input.value, completed: false});
        console.log(newTodo.toJSON());
        // newTodo.save(); // <- do we need this
        this.collection.add(newTodo);
        console.log(this.collection);
        input.value = '';
    },
    render: function() {
        this.$el.html(this.template()); // finds template by an identifier and inserts into el
    }
})