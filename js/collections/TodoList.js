App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.filter = 'all';
    },
    clearCompleted: function() {
        let result = this.where({'completed': true});
        this.remove(result);
    },
    filtered: function() {
        console.log(this);
        if (this.filter === 'incomplete') return this.where({'completed': false});
        if (this.filter === 'complete') return this.where({'completed': true});
        return this;
    },
    updateFilter: function(type) {
        this.filter = type;
        this.trigger('updateFilter');
    }
})
