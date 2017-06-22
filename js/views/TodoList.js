App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        this.listenTo(this.collection, 'add', this.renderTodo);
        this.listenTo(this.collection, 'reset', this.renderTodo); // for clearing todos - maybe use separate function?
    },
    render: function() {
        this.collection.forEach(this.renderTodo, this);
        // return this;
    },
    renderTodo: function (todoItem) {
        console.log(todoItem) // <- where is this coming from
        let todoView = new App.Views.Todo({ model: todoItem });
        todoView.render();
        // hacky
        const controlsView = new App.Views.Controls({ model: todoItem }); // here just so i can pass model to controls view
        controlsView.render();
    }
})