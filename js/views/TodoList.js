const TodoListView = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function () { 
        // Event listeners
        // this.listenTo(Todo, 'add', this.renderTodo);
    },
    render: function() {
        // console.log(this.collection.models[1].attributes);
        this.collection.forEach(this.renderTodo, this); // what's with the this?
        // console.log(this)
        return this; // what's with the this?
    },
    renderTodo: function (todoItem) {
        let todoView = new TodoView({model: Todo});
        // todoView.render(); // does this for the first model in the collection if both render and append...
        console.log(this.el)
        console.log(todoView.$el.html());
        this.$el.append('<li class="list-group-item">' + // does this for the second model in the collection...
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Poop</label>' + // Needs to be dynamic
            '</li>')
    }
})