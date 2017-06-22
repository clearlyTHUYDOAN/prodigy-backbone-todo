App.Collections.TodoList = Backbone.Collection.extend({
    model: App.Models.Todo,
    initialize: function() {
        this.filter = 'all';
    },
    clearCompleted: function() {
        let myStuff = [];
        this.forEach(function (o) {
            console.log(o);
            if (o.get('completed')) {
                myStuff.push(o);
            }
        }.bind(this));
        this.remove(myStuff);
        // this.remove(this.findWhere({ completed: false }));
        window.test = this;
        // console.log(this.where({ completed: true }));
        // let result = this.where({completed: true}); // error with attrs parameter with the function, need this
        // console.log(result);
        // this.remove(result); // this only removes the first result. passing an object fucks it up though without 'this'.
    },
    filtered: function() {
        console.log('filtered is firing')
        // if (this.filter === 'incomplete') return this.where({'completed': false}); 
        // if (this.filter === 'incomplete') {

        // }
        // if (this.filter === 'complete') return this.where({'completed': true}); 
        return this;
    },
    updateFilter: function(type) {
        this.filter = type;
        this.trigger('updateFilter');
    }
})
