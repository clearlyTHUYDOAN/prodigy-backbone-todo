App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        // this.collection.on('add', this.renderTodo(), this);
        this.listenTo(this.collection, 'add', this.renderTodo()); // doesn't detect change
    },
    render: function() {
        console.log('todolist render firing')
        this.collection.forEach(this.renderTodo, this); // what's with the this?
        return this; // what's with the this?
    },
    renderTodo: function (todoItem) {
        console.log('stuff');
        // console.log(todoItem) // <- where is this coming from
        let todoView = new App.Views.Todo({model: todoItem});
        // todoView.render(); 
        this.$el.append('<li class="list-group-item">' + // does this for the second model in the collection...
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Poop</label>' + // Needs to be dynamic
            '</li>')
        // this.$el.append(todoView.el);
    }
})