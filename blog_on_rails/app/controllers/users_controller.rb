class UsersController < ApplicationController
  before_action :find_user, only: [:edit, :update, :edit_password, :update_password]

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Logged In!"
    else
      render :new
    end
  end

  def edit
  end

  def update
    if @user.update params.require(:user).permit(:name, :email)
        redirect_to posts_path, notice: 'Your Name and Email Updated!'
    else
        render :edit, alert: 'Please Try Again!'
    end

    user_password = params.require(:user).permit(:password_digest)
    if @user.password = params[:user][:new_password]
        @user.update user_password
    else 
        flash[:alert] = "Please Try Again!"
    end
  end

  def edit_password
  end

  private

  def find_user
    @user = User.find_by(id: current_user.id)
  end

  def user_params
    params.require(:user).permit(
      :name,
      :email,
      :password,
      :password_confirmation
    )
  end
end