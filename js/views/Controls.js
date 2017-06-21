const ControlsView = Backbone.View.extend({
    el: '#controls',
    initialize: function() {
        // Event listeners

    },
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