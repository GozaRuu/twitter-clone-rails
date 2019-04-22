class TweetsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        render json: Tweet.includes(:user).all
    end

    def create
        tweet = Tweet.create(body: params[:tweet], user_id: current_user.id)
        render json: tweet
    end
end
