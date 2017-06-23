App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.filterBy = 'all';
    },
    clearCompleted: function() {
        let completedTodos = this.where({completed: true})
        this.remove(completedTodos);
        
    },
    filtered: function() {
        if (this.filterBy === 'incomplete') return this.where({completed: false});
        if (this.filterBy === 'complete') return this.where({completed: true});
        return this;
    },
    updateFilter: function(type) {
        this.filterBy = type;
        this.trigger('updateFilter');
    }
})
