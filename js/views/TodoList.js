const TodoListView = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function () { 
        // Event listeners
        console.log('TodoListView initialized.')
    },
    render: function() {
        // Render each item in collection
        console.log(this.collection);
        this.collection.forEach(this.renderTodo, this);
        console.log(this);
        return this;
    },
    renderTodo: function (todoItem) {
        console.log('renderTodo fired.')
        let todoView = new TodoView({model: Todo});
        todoView.render();
        this.$el.append(todoView.el);
    }
})