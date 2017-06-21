App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    initialize: function() {
        console.log('todolist initialization:')
        console.log(this.collection);
        this.listenTo(this.collection, 'add', console.log('collection changed')); // doesn't detect change
    },
    render: function() {
        console.log('todolist render firing')
        this.collection.forEach(this.renderTodo, this); // what's with the this?
        return this; // what's with the this?
    },
    renderTodo: function (todoItem) {
        let todoView = new App.Views.Todo({model: App.Models.Todo});
        // todoView.render(); 
        this.$el.append('<li class="list-group-item">' + // does this for the second model in the collection...
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Poop</label>' + // Needs to be dynamic
            '</li>')
    }
})