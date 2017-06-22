App.Views.Controls = Backbone.View.extend({
    el: '#controls',
    template: _.template($('#filter').html()),
    events: {
        'click button': 'clearTodos',
        'change select': 'test',
    },
    // ALL EVENTS FIRE TWICE?
    clearTodos: function() {
        // this.model.clearTodos();
    },
    test: function(e) { // test select menu 
        console.log(e.target.value);
    },
    render: function() {
        this.$el.html(this.template()); // find template by an identifier and stick into el
    }
})