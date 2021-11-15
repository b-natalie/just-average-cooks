class Api::V1::FollowsController < ApplicationController
    
    def create
        # new_follow = Api::V1::Follow.new(
        #     fan_id: current_user.id,
        #     followed_id: follow_params[:followed_id]
        # )

        new_follow = Api::V1::Follow.new(follow_params)
        if new_follow.save
            render json: new_follow
        else
            render json: { error: "Could not find user" }, status: :not_found
        end
    end

    def destroy

    end

    private

    def follow_params
        params.permit(:followed_id, :fan_id)
    end
end
