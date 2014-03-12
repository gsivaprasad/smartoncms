class AddSourceFromToSignUps < ActiveRecord::Migration
  def change
    add_column :refinery_sign_ups , :source_from, :string    
  end
end
