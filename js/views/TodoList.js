App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        this.listenTo(this.collection, 'add update', this.render);
        // this.listenTo(this.collection, 'remove', this.render); // update fired also on add so we were getting more renders than needed
        // this.listenTo(this.collection, 'updateFilter', this.render);
        this.render = _.debounce(this.render, 50);
    },
    render: function() { // doesn't fire on add to collection, fires when you remove, update filter, and when initialized
        console.log('todo list rendering');
        this.$el.html(''); // clears node first to prevent weird appends
        this.collection.filtered().forEach(this.renderTodo, this); // this here is the model because each thing in the collection is the model and we're passing it with this.renderTodo
        return this;
    },
    renderTodo: function (todoItem) {
        let todoView = new App.Views.Todo({ model: todoItem });
        this.$el.append(todoView.render().el); // <- you can do .el at the end because you're returning this in the render. .el is now the rendered content that comes out of the render function (string representation)
    }
})

// always return this in renders for views