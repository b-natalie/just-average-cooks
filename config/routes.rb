# config/routes.rb
Rails.application.routes.draw do
  resources :posts
  resources :rec_ings, except: [:show]
  resources :ingredients, only: [:create]
  resources :recipes
  resources :users
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
