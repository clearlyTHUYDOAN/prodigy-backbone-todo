const TodoListView = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function () { 
        // Event listeners

    },
    render: function() {
        // Render each item in collection
        console.log(this.collection);
        this.collection.forEach(this.renderTodo, this); // what's with the this
        return this; // what's with the this
    },
    renderTodo: function (todoItem) {
        console.log('renderTodo is firing');
        let todoView = new TodoView({model: Todo});
        todoView.render();
        this.$el.append(todoView.el);
    }
})