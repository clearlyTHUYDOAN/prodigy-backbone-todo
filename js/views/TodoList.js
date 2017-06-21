App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        this.listenTo(this.collection, 'add', this.renderTodo); // don't pass the call
    },
    render: function() {
        this.collection.forEach(this.renderTodo, this); // what's with the this?
        return this; // what's with the this?
    },
    renderTodo: function (todoItem) {
        console.log(todoItem) // <- where is this coming from
        let todoView = new App.Views.Todo({ model: todoItem });
        todoView.render(); 
        this.$el.append(todoView.el);
    }
})