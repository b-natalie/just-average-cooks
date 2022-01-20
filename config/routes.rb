# config/routes.rb


Rails.application.routes.draw do
  mount ActionCable.server => "/cable"
  
  namespace :api do
    namespace :v1 do
      resources :direct_messages
    end
  end
  namespace :api do
    namespace :v1 do
      resources :conversations
    end
  end
  namespace :api do
    namespace :v1 do
      resources :follows, only: [:index, :create, :destroy]
    end
  end
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
      resources :ingredients, only: [:index, :create]
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

  get "/me", to: "sessions#me"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  patch "/edit_password", to: "api/v1/users#update_password"
end
