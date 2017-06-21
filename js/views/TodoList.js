const TodoListView = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function () { 
        // Event listeners

    },
    render: function() {
        // Render each item in collection
        this.collection.forEach(this.renderTodo, this);
        return this;
    },
    renderTodo: function (todoItem) {
        let todoView = new TodoView({model: Todo});
        todoView.render();
        this.$el.append(todoView.el);
    }
})