class Api::V1::UsersController < ApplicationController
    skip_before_action :confirm_authentication
    User = Api::V1::User

    def index
        render json: User.all
    end

    def show
        if current_user
            render json: @current_user, status: :ok
        else
            render json: { error: "You are not logged in" }, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors, status: :unprocessable_entity
        end
    end

    def update
        if current_user
            if current_user.update(user_params)
                render json: @current_user, status: :ok
            else
                render json: current_user.errors, status: :unprocessable_entity
            end
        else
            render json: { error: "Must be logged in to update your profile" }
        end
    end

    def destroy
        if current_user
            current_user.destroy
            head :no_content
        else
            render json: { error: "Must be logged in to delete your profile" }
        end
    end

    private
    
    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end
    
end
