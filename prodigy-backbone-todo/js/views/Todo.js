// There is a 1-1 relationship between models and views.

let TodoView = Backbone.View.extend({
    tagName: 'li',
    initialize: function() {
        console.log('View initialize has fired.');
        // this.render();
    },
    render: function() {
        console.log('View render has fired.');
    }
});

// let todoView = new TodoView();
