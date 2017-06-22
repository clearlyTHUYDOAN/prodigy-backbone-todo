App.Views.Header = Backbone.View.extend({
    el: '#header', 
    template: _.template($('#app').html()),
    render: function() {
        this.$el.html(this.template()); // find template by an identifier and stick into el
    }
});