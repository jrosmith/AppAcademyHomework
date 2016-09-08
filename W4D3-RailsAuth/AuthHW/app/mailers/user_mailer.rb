class UserMailer < ApplicationMailer
  default from: 'donotreply@pyongyang.gov'

  def welcome_email(user)
    @user = user
    @url = 'http://www.northkorea.gov/gross'
    mail(to: user.email, subject: 'Congratulations! You are now an enemy of the state!')
  end
end
