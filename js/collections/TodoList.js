App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.filter = 'all';
    },
    clearCompleted: function() {
        let result = this.where({'completed': true}); // returns an array of models
        this.remove(result);
    },
    filtered: function() {
        console.log('filtered is firing')
        console.log(this);
        if (this.filter === 'incomplete') return this.where({'completed': false}); // returns an array of models
        if (this.filter === 'complete') return this.where({'completed': true}); // returns an array of models
        return this;
    },
    updateFilter: function(type) {
        this.filter = type;
        this.trigger('updateFilter');
    }
})
