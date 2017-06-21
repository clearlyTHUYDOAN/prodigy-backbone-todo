const FormView = Backbone.View.extend({
    tagName: 'form',
    initialize: function() {
        console.log('View initialize has fired.');
    },
    render: function() {
        console.log('View render has fired.');
    }
})