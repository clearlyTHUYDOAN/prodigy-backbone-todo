const FormView = Backbone.View.extend({
    el: '#form',
    initialize: function() {
        // Event listeners

    },
    render: function() {
        this.$el.html('<input id="new-todo" placeholder="Get some shit done."><button id="add-todo" type="button">Add</button>');
    }
})