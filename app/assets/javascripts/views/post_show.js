JournalApp.Views.PostShow = Backbone.View.extend({
  template: JST['posts/show'],
  initialize: function(){
    this.listenTo(this.model, 'sync', this.render);
  },
  render: function(){
    this.$el.html('');
    var renderedContent = this.template({post: this.model});
    this.$el.append(renderedContent);
    return this;
  }
});