class CreateTables < ActiveRecord::Migration
  def change
    create_table :players do |t|
      t.string :name, :unique => true
    end
    create_table :games do |t|
      t.integer :winner
    end
    create_table :games_players do |t|
      t.belongs_to :player
      t.belongs_to :game
    end
  end
end
