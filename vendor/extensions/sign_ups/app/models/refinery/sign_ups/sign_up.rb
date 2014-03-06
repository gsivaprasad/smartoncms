module Refinery
  module SignUps
    class SignUp < Refinery::Core::BaseModel
      self.table_name = 'refinery_sign_ups'

      attr_accessible :name, :email, :country, :city, :occupation, :message, :position

      # Add some validation here if you want to validate the user's input
      # We have validated the first string field for you.
      validates :name, :presence => true
      OCCUPATION = ["MCA", "MTECH", "BTECH"]
    end
  end
end
