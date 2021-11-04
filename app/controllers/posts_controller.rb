class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        render json: Post.all
    end

    def show
        post = find_post
        render json: post
    end

    def create
        post_user = { user_id: @current_user.id }
        post = Post.create!(post_user.merge(post_params))
        render json: post, status: :created
    end

    def update
        post = find_post
        post.update!(post_params)
        render json: post
    end

    def destroy
        post = find_post
        post.destroy!
        head :no_content
    end

    private

    def find_post
        Post.find(params[:id])
    end

    def post_params
        params.permit(:recipe_id, :simplicity, :taste, :comment)
    end

    def render_not_found_response
        render json: { error: "Post not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
