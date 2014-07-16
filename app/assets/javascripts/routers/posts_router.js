JournalApp.Routers.PostsRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postNew",
    "posts/:id": "postShow"
  },
  postsIndex: function(){
    JournalApp.Collections.posts.fetch();
    
    var indexView = new JournalApp.Views.PostIndex({ 
      collection: JournalApp.Collections.posts
    });
    this._swapView(indexView);
  },
  
  postShow: function(id){
    
    var newView = new JournalApp.Views.PostShow({
      model: JournalApp.Collections.posts.getOrFetch(id)
    });
    this._swapView(newView);
  },
  
  postNew: function(){
    var newPost = new JournalApp.Models.Post();
    var newView = new JournalApp.Views.PostForm({
      model: newPost, 
      collection: JournalApp.Collections.posts
    });
    this._swapView(newView);
  },
  //
  // editPost: function(id) {
  //   var post = JournalApp.Collections.posts.getOrFetch(id);
  //
  //
  // },
  
  _swapView: function (newView){
    if (this.currentView) {
      this.currentView.remove();
    }
    
    $(".sidebar").append(newView.render().$el);
    this.currentView = newView;
  }
})