// Because we have more than one task, we will organize into a collection.

let TodoList = Backbone.Collection.extend({
    model: Todo,
})

// instantiate collection after model instances exist
