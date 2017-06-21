App.Views.Form = Backbone.View.extend({
    el: '#form',
    events: {
        submit: 'addTodo',
    },
    addTodo: function(e) {
        e.preventDefault();
        const input = this.$('#new-todo')[0]; // why 0
        const newTodo = new App.Models.Todo({title: input.value, completed: false});
        console.log(newTodo.toJSON());
        // newTodo.save();
        this.collection.add(newTodo);
        console.log(this.collection);
        input.value = '';
    },
    render: function() {
        this.$el.html(
            '<div class="input-group">' + 
                '<span class="input-group-btn">' + 
                    '<button class="btn btn-primary" id="add-todo">Add</button></span>' +
                '<input class="form-control" id="new-todo" placeholder="add a todo">' + 
            '</div>'
            );
    }
})