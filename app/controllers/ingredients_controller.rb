class IngredientsController < ApplicationController

    def create
        ing = Ingredient.create_with(ingredient_params).find_or_create_by(name: ingredient_params.name)
    end

    private
    
    def ingredient_params
        params.permit(:name, :sub1_name, :sub2_name)
    end
end
