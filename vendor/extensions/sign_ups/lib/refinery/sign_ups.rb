require 'refinerycms-settings'
require 'refinerycms-core'

module Refinery
  module SignUps
    require 'refinery/sign_ups/engine'

    class << self
      def root
        @root ||= Pathname.new(File.expand_path('../../../', __FILE__))
      end

      def factory_paths
        @factory_paths ||= [ root.join("spec/factories").to_s ]
      end
    end
  end
end
