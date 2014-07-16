JournalApp.Views.PostForm = Backbone.View.extend({
  template: JST["posts/new"],
  
  events: {
    "submit form": "submit"
  },
  
  render: function(){
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  },
  
  submit: function(event){
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    
    if(this.model.isNew()){      
      this.collection.create(params["post"], {
        success: function () {
          Backbone.history.navigate('/', {trigger: true});
        }
      });
    } else {
      this.model.save(params["post"], {
        success: function() {
          Backbone.history.navigate('/', {trigger: true});
        }
      })
    }
    
  }
});

