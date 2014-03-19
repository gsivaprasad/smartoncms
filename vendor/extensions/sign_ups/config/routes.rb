Refinery::Core::Engine.routes.draw do
  # Frontend routes
#  namespace :sign_ups do
#    resources :sign_ups, :path => '', :only => [:new, :create] do
#      collection do
#        get :thank_you
#      end
#    end
#  end

  # Admin routes
  namespace :sign_ups, :path => '' do
    namespace :admin, :path => "#{Refinery::Core.backend_route}/sign_ups" do
      resources :sign_ups, :path => '' 
      resources :settings, :only => [:edit, :update]
    end
  end
end

