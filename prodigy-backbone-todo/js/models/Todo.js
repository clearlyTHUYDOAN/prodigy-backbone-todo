// The model is the place where we keep our data.

let Todo = Backbone.Model.extend({
    defaults: {
        title: '',
        completed: false
    }
})