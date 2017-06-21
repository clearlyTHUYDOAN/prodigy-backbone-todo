const AppView = Backbone.View.extend({
    el: '#header', 
    render: function() {
        this.$el.html('<h1 class="text-center">' + 'Backbone Todo App' + '</h1>');
    }
});