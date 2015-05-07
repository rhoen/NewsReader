class ApplicationController < ActionController::Base
  protect_from_forgery


  private
    def log_in_user(user)
      session_token = user.reset_session_token!
      session[:session_token] = session_token
      user
    end

end
