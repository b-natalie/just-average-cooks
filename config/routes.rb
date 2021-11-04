# config/routes.rb
Rails.application.routes.draw do
  resources :rec_ings
  resources :ingredients
  resources :recipes
  resources :users
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
