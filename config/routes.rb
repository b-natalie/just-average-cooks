# config/routes.rb
Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end

  namespace :api do
    namespace :v1 do
      resources :rec_ings, except: [:show]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :ingredients, only: [:create]
    end
  end

  namespace :api do
    namespace :v1 do
      resources :recipes
    end
  end

  namespace :api do
    namespace :v1 do
      resources :users
    end
  end
  
  get "/hello", to: "application#hello_world"

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
