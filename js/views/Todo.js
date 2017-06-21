App.Views.Todo = Backbone.View.extend({ // currently doing shit all
    el: '#todo-list',
    template: _.template($('#todo-item').html()),
    initialize: function() {
        // Event listeners
        this.listenTo(this.model, 'change', this.render());
    },
    render: function() {
        console.log('todo rendering')
        console.log(this.model);
        // console.log(this.model.attributes);
        // this.$el.html(this.template(this.model.attributes));
        // return this;
        this.$el.html(
            '<li class="list-group-item">' + 
                '<input type="checkbox" value="on"></input>' +
                '<label class="">Test</label>' + // Needs to be dynamic
            '</li>'
        );
    }
});