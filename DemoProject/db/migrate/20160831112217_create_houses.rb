class CreateHouses < ActiveRecord::Migration
  def change
    create_table :houses do |table|
      table.timestamps null: false
      table.integer :person_id null: false
      table.string :address
    end
  end
end
