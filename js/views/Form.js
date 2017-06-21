const FormView = Backbone.View.extend({
    el: '#form',
    events: { // ... vs this.listenTo?
        submit: 'addTodo',
    },
    addTodo: function(e) {
     // fires when anything in the form is clicked...only want on button. might have to refactor
        e.preventDefault();
        let input = this.$('#new-todo')[0]; // why 0
        let newTodo = new Todo({title: input.value, completed: false});
        console.log(newTodo.toJSON());
        // do not have access to collection in here?
        // console.log(todoList)
        // newTodo.save();
        // TodoList.add(newTodo);
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