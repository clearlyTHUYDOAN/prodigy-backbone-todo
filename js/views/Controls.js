App.Views.Controls = Backbone.View.extend({
    el: '#controls',
    render: function() {
        this.$el.html(
            '<div>' + 
                '<select>' + 
                    '<option value="all">all</option>' + 
                    '<option value="active">active</option>' + 
                    '<option value="complete">complete</option>' + 
                '</select>' +
                '<button class="pull-right btn btn-default">Clear</button>' + 
            '</div>'
            );
    }
})