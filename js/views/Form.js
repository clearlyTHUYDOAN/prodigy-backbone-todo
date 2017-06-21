const FormView = Backbone.View.extend({
    el: '#form',
    initialize: function() {
        // Event listeners

    },
    render: function() {
        this.$el.html(
            '<div class="input-group">' + 
                '<span class="input-group-btn">' + 
                    '<button class="btn btn-primary" type="button" id="add-todo">Add</button></span>' +
                '<input class="form-control" id="new-todo" placeholder="add a todo">' + 
            '</div>'
            );
    }
})