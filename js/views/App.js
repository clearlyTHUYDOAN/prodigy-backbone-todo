const AppView = Backbone.View.extend({
    el: '#header', 
    initialize: function () { 
        // Event listeners
        console.log('Initialize has fired.')
    },
    render: function() {
        this.$el.html('<h1>' + 'Backbone Todo App' + '</h1>');
    }
})

// $(document).ready(() => {
//     $('#add-todo').on('click', () => {
//         const todo = new Todo({
//             title: $('#new-todo').val(),
//             completed: false
//         })
//         console.log(todo.toJSON());
//     })
// })