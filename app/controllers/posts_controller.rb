class PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render json: @post
    else
      render json: @post.errors, :status => :unprocessable_entity
    end
  end
  
  def index
    @posts = Post.all
    render json: @posts
  end
  
  def new
    @post = Post.new
    render json: @post
  end
  
  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
  def destroy
    @post = Post.find(params[:id])
    @post.destroy!
    render json: @post
  end
  
  private
  
  def post_params
    params.require(:post).permit(:body, :title)
  end
end
