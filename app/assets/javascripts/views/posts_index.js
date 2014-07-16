JournalApp.Views.PostIndex = Backbone.View.extend({
  template: JST["posts/index"],
  initialize: function () {
    this.listenTo(this.collection, 'remove add reset change:title', this.render);
  },
  render: function(){
    var renderedContent = $("<ul>")
    this.collection.each(function(post){
      var $li = $('<li>');
      $li.html(post.get('title'));
      var $button = $('<button>');
      $button.html('Delete');
      $button.attr('id', post.get('id'));
      $button.addClass('delete');
      $li.append($button);
      renderedContent.append($li);
      
    });
    
    this.$el.html(renderedContent);
    
    return this;
  },
  
  events: {'click button.delete': "removePost"},
  
  removePost: function(event){
    event.preventDefault();
    var $button = $(event.target)
    var id = $button.attr("id")
    this.collection.get(id).destroy();
  }
  
});