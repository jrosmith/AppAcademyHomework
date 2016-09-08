class UsersController < ApplicationController


  def create
    msg = UserMailer.welcome_email(@user)
    msg.deliver
  end
end
