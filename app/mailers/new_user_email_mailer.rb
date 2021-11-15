class NewUserEmailMailer < ApplicationMailer
    default from: ENV["gmail_username"]

    def welcome_email
        @user = params[:user]
        mail(to: @user.email, subject: "Welcome to Just Average Cooks")
    end

end
