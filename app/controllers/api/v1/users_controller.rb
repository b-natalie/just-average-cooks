class Api::V1::UsersController < ApplicationController
    skip_before_action :confirm_authentication
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    User = Api::V1::User

    def index
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        render json: user, serializer: Api::V1::OtherUserSerializer
    end

    def create
        @user = User.new(
            first_name: user_params[:first_name],
            last_name: user_params[:last_name],
            email: user_params[:email],
            password: password_params[:password],
            password_confirmation: password_params[:password_confirmation]
        )
        @user.save!
        session[:user_id] = @user.id
        # NewUserEmailMailer.with(user: @user, from: ENV["gmail_username"]).welcome_email.deliver 
        render json: @user, status: :created
    end

    def update
        # byebug
        if current_user
            current_user.update!(
                first_name: user_params[:first_name],
                last_name: user_params[:last_name],
                email: user_params[:email],
                image: user_params[:image],
                # password: @current_user.password,
                # password_confirmation: @current_user.password_confirmation
            )
            render json: @current_user, status: :ok
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

    # def destroy
    #     if current_user
    #         current_user.destroy
    #         head :no_content
    #     else
    #         render json: { error: "Must be logged in to delete your profile" }
    #     end
    # end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private
    
    def user_params
        params.permit(:first_name, :last_name, :email, :image)
    end

    def password_params
        params.permit(:password, :password_confirmation, :new_password)
    end

    def render_not_found_response
        render json: { error: "User not found" }, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end
    
end
