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
    console.log(todoList);
    const todoListView = new TodoListView({collection: todoList});
    // $('#todo-list').append(todoListView.render().el);
    todoListView.render();

    // Render form to add Todos
    const formView = new FormView();
    formView.render();

})