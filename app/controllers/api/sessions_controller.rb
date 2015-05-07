class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(user_params)
    if user
      log_in_user(user)
      render json: user
    else
      render json: user.errors.full_messages
    end
  end

  def destroy
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
end
