App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        this.listenTo(this.collection, 'add', this.renderTodo);
        this.listenTo(this.collection, 'update', this.render);
        this.listenTo(this.collection, 'updateFilter', this.render);
    },
    render: function() {
        this.$el.html(''); // clears node first to prevent weird appends
        this.collection.filtered().forEach(this.renderTodo, this); // this here is the model because each thing in the collection is the model and we're passing it with this.renderTodo
        return this;
    },
    renderTodo: function (todoItem) {
        let todoView = new App.Views.Todo({ model: todoItem });
        this.$el.append(todoView.render().el); // <- you can do .el at the end because you're returning this in the render. .el is now the rendered content that comes out of the render function (string representation)
    }
})