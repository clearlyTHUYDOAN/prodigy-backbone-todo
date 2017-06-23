// Global object
const App = {
    Models: {},
    Views: {},
    Collections: {},
}

$(document).ready(function() {

    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index', // root route
            'show/:id': 'show', // hash route with dynamic params
            '*backup': 'backup', // in case nothing is specified - need the star
        },
        index: function() {
            $(document.body).append("Index route has been called...");
        },
        show: function(id) {
            $(document.body).html("Show route has been called with id equal to " + id + ".");
        },
        backup: function(backup) {
            $(document.body).html("This route is not handled. You tried to access " + backup + ".");
        }
    });

    new App.Router;
    Backbone.history.start(); // monitors hash changes in url

    // Render app
    const appView = new App.Views.Header();
    appView.render();

    // Instantiate collection
    const todoList = new App.Collections.TodoList([ 
        {title: "Learn Backbone", completed: false}, 
        {title: "Eat Lunch", completed: true},
        {title: "Bug Danny", completed: true},
        {title: "Go-Karting w/ Prodigy", completed: false}
    ])

    // Render initial state of todos 
    const todoListView = new App.Views.TodoList({collection: todoList});
    todoListView.render();

    // Render form to add Todos
    const formView = new App.Views.Form({collection: todoList});
    formView.render();

    // Render controls to manipiulate todolist
    const controlsView = new App.Views.Controls({collection: todoList});
    controlsView.render();

})