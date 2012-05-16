# This migration comes from gnarus_exercise (originally 20120408064126)
class CreateGnarusExerciseExecutions < ActiveRecord::Migration
  def change
    create_table :gnarus_exercise_executions do |t|
      t.references :attempt
      t.text :solution
      t.boolean :suceeded

      t.timestamps
    end
    add_index :gnarus_exercise_executions, :attempt_id
  end
end
