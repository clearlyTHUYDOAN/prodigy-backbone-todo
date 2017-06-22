App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        this.listenTo(this.collection, 'add update updateFilter', this.render);
        this.render = _.debounce(this.render, 50); // to battle unnecessary multiple re-renders
    },
    render: function() {
        this.$el.html(''); // clears node first to prevent weird appends
        this.collection.filtered().forEach(this.renderTodo, this); // we're passing each model with this.renderTodo
        return this;
    },
    renderTodo: function (todoItem) {
        let todoView = new App.Views.Todo({ model: todoItem });
        this.$el.append(todoView.render().el); // <- you can do .el at the end because you're returning this in the render. .el is now the rendered content that comes out of the render function (string representation)
    }
})