module Refinery
  module SignUps
    class Mailer < ActionMailer::Base

      def confirmation(sign_up, request)
        @sign_up = sign_up
        mail :subject  => Refinery::SignUps::Setting.confirmation_subject,
             :to       => sign_up.email,
             :from     => "\"#{Refinery::Core.site_name}\" <no-reply@#{request.domain}>",
             :reply_to => Refinery::SignUps::Setting.notification_recipients.split(',').first
      end

      def notification(sign_up, request)
        @sign_up = sign_up
        mail :subject  => Refinery::SignUps::Setting.notification_subject,
             :to       => Refinery::SignUps::Setting.notification_recipients,
             :from     => "\"#{Refinery::Core.site_name}\" <no-reply@#{request.domain}>"
      end

    end
  end
end
