class ChangeBodyFormatInPagePartsTable < ActiveRecord::Migration
  def up
    change_column :refinery_page_parts, :body, :text, :limit => 4294967295
    change_column :refinery_page_part_translations, :body, :text, :limit => 4294967295
  end

  def down
    change_column :refinery_page_parts, :body, :text
    change_column :refinery_page_part_translations, :body, :text
  end
end
