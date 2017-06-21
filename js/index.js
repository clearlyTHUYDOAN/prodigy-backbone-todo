$(document).ready(() => {

    // Render app
    const appView = new AppView();
    appView.render();

    // Instantiate initial state of collection
    const todoList = new TodoList(
        {
            title: "Learn Backbone",
            completed: false
        }, {
            title: "Eat Lunch",
            completed: true
        }
    )

    // Render initial state of todos
    // const todoView = new TodoView({collection: TodoList});
    // $('#todo-list').append(todoView.render().el);

    // Render form to add Todos


})