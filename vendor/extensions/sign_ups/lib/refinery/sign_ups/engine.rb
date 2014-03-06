module Refinery
  module SignUps
    class Engine < Rails::Engine
      extend Refinery::Engine
      isolate_namespace Refinery::SignUps

      engine_name :refinery_sign_ups

      initializer "register refinerycms_sign_ups plugin" do
        Refinery::Plugin.register do |plugin|
          plugin.name = "sign_ups"
          plugin.url = proc { Refinery::Core::Engine.routes.url_helpers.sign_ups_admin_sign_ups_path }
          plugin.pathname = root
          plugin.activity = {
            :class_name => :'refinery/sign_ups/sign_up',
            :title => 'name'
          }
          
        end
      end

      config.after_initialize do
        Refinery.register_extension(Refinery::SignUps)
      end
    end
  end
end
