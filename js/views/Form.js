App.Views.Form = Backbone.View.extend({
    el: '#form',
    template: _.template($('#todo-input').html()),
    events: {
        submit: 'addTodo',
    },
    addTodo: function(e) {
        e.preventDefault();
        const input = this.$('#new-todo')[0]; // why retrieve this way
        const newTodo = new App.Models.Todo({ title: input.value, completed: false });
        this.collection.add(newTodo);
        input.value = '';
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    }
})