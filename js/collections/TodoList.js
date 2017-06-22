App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.filter = 'all';
    },
    clearCompleted: function() {
        console.log(this);
        let result = this.where('completed', true); // supposed to return an array of models but currently returning one model. passing an object fucks it up
        console.log(result);
        this.remove(result);
        // console.log(this)
    },
    filtered: function() {
        console.log('filtered is firing')
        if (this.filter === 'incomplete') return this.where({'completed': false}); // returns an array of models
        if (this.filter === 'complete') return this.where({'completed': true}); // returns an array of models
        return this;
    },
    updateFilter: function(type) {
        this.filter = type;
        this.trigger('updateFilter');
    }
})
