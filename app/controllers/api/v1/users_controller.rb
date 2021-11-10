class Api::V1::UsersController < ApplicationController
    skip_before_action :confirm_authentication
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    User = Api::V1::User

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user
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
            render json: { error: "Must be logged in to update your profile" }, status: :unauthorized
        end
    end

    def update_password
        if current_user&.authenticate(password_params[:password])
            if current_user.update(password: password_params[:new_password])
                render json: @current_user, status: :ok
            else
                render json: current_user.errors, status: :unprocessable_entity
            end
        else
            render json: { error: "We could not verify you" }, status: :unauthorized
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
        params.permit(:first_name, :last_name, :email)
    end

    def password_params
        params.permit(:password, :new_password)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end
    
end
