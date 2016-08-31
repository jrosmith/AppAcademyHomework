class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |table|
      table.string :name
      table.integer :house_id
      table.timestamps null: false
    end
  end
end
