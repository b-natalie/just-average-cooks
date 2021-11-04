class IngredientsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        ingredient = Ingredient.find_or_create_by!(ingredient_params)
        render json: ingredient
    end

    private
    
    def ingredient_params
        params.permit(:name)
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
end
