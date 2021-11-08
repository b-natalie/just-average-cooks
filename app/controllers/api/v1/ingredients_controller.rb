class Api::V1::IngredientsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    Ingredient = Api::V1::Ingredient

    def index
        render json: Ingredient.all
    end

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
