$(document).ready(() => {

    // Render app
    const appView = new AppView();
    appView.render();

    // Instantiate collection
    const todoList = new TodoList([
        {
            title: "Learn Backbone",
            completed: false
        }, {
            title: "Eat Lunch",
            completed: true
        }
    ])

    // Render initial state of todos
    const todoListView = new TodoListView({collection: todoList});
    todoListView.render();

    // Render form to add Todos
    const formView = new FormView();
    formView.render();

    // Render controls to manipiulate todolist
    const controlsView = new ControlsView();
    controlsView.render();

})