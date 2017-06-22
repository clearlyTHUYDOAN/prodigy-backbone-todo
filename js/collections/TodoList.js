/* forEach is used in this collection because this.where throws 
'Uncaught TypeError: this[(intermediate value)(intermediate value)(intermediate value)] is not a function'*/

App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.filter = 'all';
    },
    clearCompleted: function() {
        let completedTodos = [];
        this.forEach(function(model) { 
            if (model.get('completed')) {
                completedTodos.push(model);
            }
        }.bind(this));
        this.remove(completedTodos);
        
    },
    filtered: function() {
        if (this.filter === 'incomplete') {
            let incompleteTodos = [];
            this.forEach(function(model) {
                if(!model.get('completed')) incompleteTodos.push(model);
            }.bind(this));
            return incompleteTodos;
        }
        if (this.filter === 'complete') {
            let completedTodos = [];
            this.forEach(function(model) {
                if(model.get('completed')) completedTodos.push(model);
            }.bind(this));
            return completedTodos;
        }
        return this;
    },
    updateFilter: function(type) {
        this.filter = type;
        this.trigger('updateFilter');
    }
})
