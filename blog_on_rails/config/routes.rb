Rails.application.routes.draw do
  root "posts#index"

  resources :posts do
    resources :comments
  end

  resources :users, only: [:new, :create]
  
  resource :session, only: [:new, :create, :destroy]
end
