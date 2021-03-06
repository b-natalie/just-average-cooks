class Api::V1::RecIngsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    RecIng = Api::V1::RecIng
    
    def index
        render json: RecIng.all
    end

    # add an ingredient to a recipe
    def create
        ingredient = Api::V1::Ingredient.find_or_create_by!(name: params[:ingredient_name])
        rec_ing = RecIng.create!({
            recipe_id: params[:recipe_id],
            ingredient_id: ingredient.id,
            quantity: params[:quantity]
        })
        render json: rec_ing, status: :created
    end

    # update, mainly for quantity
    def update
        rec_ing = find_rec_ing
        rec_ing.update!(rec_ing_params)
        render json: rec_ing
    end

    # remove ingredient from recipe
    def destroy
        rec_ing = find_rec_ing
        rec_ing.destroy!
        head :no_content
    end

    private

    def find_rec_ing
        RecIng.find(params[:id])
    end

    def rec_ing_params
        params.permit(:quantity, :recipe_id, :ingredient_name)
    end

    def render_not_found_response
        render json: { error: "Ingredient not found for this recipe" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
