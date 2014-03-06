module Refinery
  module SignUps
    class SignUpsController < ::ApplicationController

      before_filter :find_page, :only => [:create, :new]

      def index
        redirect_to :action => "new"
      end

      def thank_you
        @page = Refinery::Page.find_by_link_url("/sign_ups/thank_you", :include => [:parts])
      end

      def new
        @sign_up = SignUp.new
      end

      def create
        @sign_up = SignUp.new(params[:sign_up])

        if @sign_up.save
          begin
            Mailer.notification(@sign_up, request).deliver
          rescue => e
            logger.warn "There was an error delivering the sign_up notification.\n#{e.message}\n"
          end

          if SignUp.column_names.map(&:to_s).include?('email')
            begin
              Mailer.confirmation(@sign_up, request).deliver
            rescue => e
              logger.warn "There was an error delivering the sign_up confirmation:\n#{e.message}\n"
            end
          else
            logger.warn "Please add an 'email' field to SignUp if you wish to send confirmation emails when forms are submitted."
          end

          redirect_to refinery.thank_you_sign_ups_sign_ups_path
        else
          render :action => 'new'
        end
      end

    protected

      def find_page
        @page = Refinery::Page.find_by_link_url('/sign_ups/new', :include => [:parts])
      end

    end
  end
end
