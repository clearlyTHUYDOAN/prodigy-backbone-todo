App.Views.TodoList = Backbone.View.extend({
    el: '#todo-list', 
    render: function() {
        // console.log(this.collection.models[1].attributes);
        this.collection.forEach(this.renderTodo, this); // what's with the this?
        return this; // what's with the this?
    },
    renderTodo: function (todoItem) {
        let todoView = new App.Views.Todo({model: App.Models.Todo});
        // todoView.render(); // does this for the first model in the collection if both render and append...
        console.log(this.el)
        console.log(todoView.$el.html());
        this.$el.append('<li class="list-group-item">' + // does this for the second model in the collection...
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Poop</label>' + // Needs to be dynamic
            '</li>')
    }
})