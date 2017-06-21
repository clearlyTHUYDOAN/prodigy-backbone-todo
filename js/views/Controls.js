App.Views.Controls = Backbone.View.extend({
    el: '#controls',
    template: _.template($('#filter').html()),
    // clearTodos: function() {

    // },
    render: function() {
        this.$el.html(this.template()); // find template by an identifier and stick into el
    }
})