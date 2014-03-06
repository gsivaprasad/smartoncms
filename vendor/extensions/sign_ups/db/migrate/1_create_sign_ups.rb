class CreateSignUps < ActiveRecord::Migration

  def up
    create_table :refinery_sign_ups do |t|
      t.string :name
      t.string :email
      t.string :country
      t.string :city
      t.string :occupation
      t.text :message

      t.timestamps
    end

    add_index :refinery_sign_ups, :id
  end

  def down
    if defined?(::Refinery::UserPlugin)
      ::Refinery::UserPlugin.destroy_all({:name => "sign_ups"})
    end

    if defined?(::Refinery::Page)
      ::Refinery::Page.delete_all({:link_url => "/sign_ups"})
    end

    drop_table :refinery_sign_ups
  end

end
