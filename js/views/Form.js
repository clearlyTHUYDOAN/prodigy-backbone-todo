const FormView = Backbone.View.extend({
    tagName: 'form',
    initialize: () => {
        console.log('View initialize has fired.');
    },
    render: () => {
        console.log('View render has fired.');
    }
})