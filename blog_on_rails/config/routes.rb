Rails.application.routes.draw do

get("/", {to:"posts#index", as: "root"}) 

  resources :posts do
    resources :comments
  end
end
