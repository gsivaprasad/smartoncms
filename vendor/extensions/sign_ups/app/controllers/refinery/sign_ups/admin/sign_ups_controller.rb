module Refinery
  module SignUps
    module Admin
      class SignUpsController < Refinery::AdminController

        crudify :'refinery/sign_ups/sign_up', 
                :title_attribute => "name", 
                :order => "created_at DESC"

        def index
          unless searching?
            find_all_sign_ups
          else
            search_all_sign_ups
          end

          @grouped_sign_ups = group_by_date(@sign_ups)
        end

      end
    end
  end
end
