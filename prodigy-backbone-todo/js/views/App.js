// The business logic is distributed between the views and the main application's file, App.js.
// This will contain the class that holds everything. 
    // Q: Similar to React's App.js?

// This is the top level of UI.
let AppView = Backbone.View.extend({
    // el stands for the element
        // every view has an element associated with it - where html is rendered.
        // unstead of generating a new element, bind to existing skeleton inside html
    el: '#todo-list', 
    // first function called when view is instantiated.
    initialize: function () { 
        console.log('Initialize has fired.')
        let todoList = new TodoList([
            {
            title: 'Learn Backbone',
            completed: false
        }, {
            title: 'Eat Lunch',
            completed: false
        }]);
    },
    render: function() {
        /* can also be written as:

        */
        this.$el.html('<li>' + 'Hello World' + '</li>'); // Inserts this into the el you defined above.
    }
})

// $(document).ready(() => {
//     $('#add-todo').on('click', () => {
//         let todo = new Todo({
//             title: $('#new-todo').val(),
//             completed: false
//         })
//         console.log(todo.toJSON());
//     })
// })