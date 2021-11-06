class Api::V1::RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    Recipe = Api::V1::Recipe

    def index
        render json: Recipe.all
    end

    def show
        recipe = find_recipe
        render json: recipe
    end

    def create
        recipe = Recipe.new(recipe_params)
        recipe.creator_id = @current_user.id
        recipe.save!
        # add logic for post, would we want to render post instead
        post = Post.create!(
            user_id: @current_user.id,
            recipe_id: recipe.id
        )
        render json: recipe, status: :created
    end

    def update
        recipe = find_recipe
        if @current_user.id == recipe.creator_id
            recipe.update!(recipe_params)
            render json: recipe
        else
            render json: { error: "You cannot update if you are not the creator" }, status: :unauthorized
        end
    end

    def destroy
        recipe = find_recipe
        if @current_user.id == recipe.creator_id
            recipe.destroy!
            head :no_content
        else
            render json: { error: "You cannot delete if you are not the creator" }, status: :unauthorized
        end
    end

    private

    def find_recipe
        Recipe.find(params[:id])
    end

    def recipe_params
        params.permit(:name, :link, :image, :cuisine, :prep_time, :cook_time, :servings, :instructions)
    end

    def render_not_found_response
        render json: { error: "Recipe not found" }, status: :not_found 
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
