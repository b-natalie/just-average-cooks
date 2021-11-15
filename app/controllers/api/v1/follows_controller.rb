class Api::V1::FollowsController < ApplicationController
    Follow = Api::V1::Follow

    def index
        render json: Follow.all
    end
    
    def create
        new_follow = Follow.new(follow_params)
        if new_follow.save
            render json: new_follow
        else
            render json: { error: "Could not find user" }, status: :not_found
        end
    end

    def destroy
        follow = Follow.find(params[:id])
        follow.destroy!
        head :no_content
    end

    private

    def follow_params
        params.permit(:followed_id, :fan_id)
    end
end
