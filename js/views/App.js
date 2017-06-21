const AppView = Backbone.View.extend({
    el: '#header', 
    initialize: function () { 
        // Event listeners

    },
    render: function() {
        this.$el.html('<h1 class="text-center">' + 'Backbone Todo App' + '</h1>');
    }
});