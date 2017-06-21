const TodoView = Backbone.View.extend({
    tagName: 'li',
    initialize: function() {
        console.log('View initialize has fired.');
    },
    render: function() {
        console.log('View render has fired.');
    }
});