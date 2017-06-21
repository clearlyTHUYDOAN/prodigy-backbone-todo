const TodoListView = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function () { 
        // Event listeners

    },
    render: function() {
        // Render each item in collection
        // console.log(this.collection.models[1].attributes);
        this.collection.forEach(this.renderTodo, this); // what's with the this?
        return this; // what's with the this?
    },
    renderTodo: function (todoItem) {
        let todoView = new TodoView({model: Todo});
        console.log(this.el)
        console.log(todoView.$el.html());
        // this.$el.append('<li class="list-group-item">Poop</li>')
        // this.$el.append(todoView.$el.html());
        this.$el.append('<li class="list-group-item">' + 
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Poop</label>' + // Needs to be dynamic
            '</li>')
    }
})