window.JournalApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $sidebar = $('<div>');
    var $content = $('<div>');
    $content.addClass('content');
    $sidebar.addClass('sidebar');
    $('body').append($sidebar);
    $('body').append($content);
    new JournalApp.Routers.PostsRouter();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  JournalApp.initialize();
});
