// Global object
const App = {
    Models: {},
    Views: {},
    Collections: {},
}

$(document).ready(function() {

    // Render app
    const appView = new App.Views.Main();
    appView.render();

    // Instantiate collection
    const todoList = new App.Collections.TodoList([
        {title: "Learn Backbone", completed: false}, 
        {title: "Eat Lunch", completed: true}
    ])

    // Render initial state of todos - currently renders but not dynamic
    const todoListView = new App.Views.TodoList({collection: todoList});
    todoListView.render();

    // Render form to add Todos
    const formView = new App.Views.Form({collection: todoList});
    formView.render();

    // Render controls to manipiulate todolist
    const controlsView = new App.Views.Controls();
    controlsView.render();

})