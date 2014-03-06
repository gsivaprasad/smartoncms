module Refinery
  module SignUps
    class Setting < Refinery::Core::BaseModel

      class << self
        def confirmation_body
          Refinery::Setting.find_or_set(:sign_up_confirmation_body,
            "Thank you for your sign up %name%,\n\nThis email is a receipt to confirm we have received your sign up and we'll be in touch shortly.\n\nThanks."
          )
        end

        def confirmation_subject
          Refinery::Setting.find_or_set(:sign_up_confirmation_subject,
                                        "Thank you for your sign up")
        end

        def confirmation_subject=(value)
          Refinery::Setting.set(:sign_up_confirmation_subject, value)
        end

        def notification_recipients
          Refinery::Setting.find_or_set(:sign_up_notification_recipients,
                                        (Role[:refinery].users.first.try(:email) if defined?(Role)).to_s)
        end

        def notification_subject
          Refinery::Setting.find_or_set(:sign_up_notification_subject,
                                        "New sign up from your website")
        end
      end

    end
  end
end
