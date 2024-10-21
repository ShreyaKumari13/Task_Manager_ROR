Rails.application.routes.draw do
  # Define health status route for uptime monitoring
  get "up" => "rails/health#show", as: :rails_health_check

  # Define routes for Task Management
  resources :tasks, only: [:index, :create, :update, :destroy]

  # Defines the root path route ("/")
  # You can change this to any controller action you want to use as the homepage
  # root "tasks#index"  # Uncomment this if you want tasks#index as the root path
end
