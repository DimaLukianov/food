class CreateMeals < ActiveRecord::Migration[5.0]
  def change
    create_table :meals do |t|
      t.string :title
      t.text :description
      t.integer :kind
      t.decimal :price

      t.timestamps
    end
  end
end
